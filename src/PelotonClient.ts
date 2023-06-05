import { AxiosResponse } from "axios";
import { HttpClient } from "./HttpClient";
import { WorkoutResponse, Workout } from "./models/Workout.model";

export class PelotonClientFactory {
    static create(username: string, password: string): PelotonClient {
        const httpClient = new HttpClient(username, password);

        return new PelotonClient(httpClient);
    }
}

export class PelotonClient {
    private userId: string;

    constructor(private httpClient: HttpClient) {
        this.userId = "";
    }

    async getLastestWorkout(): Promise<Workout> {
        const response = await this.makeRequest(`/api/user/${this.userId}/workouts`, {});

        return response.data[0];
    }

    async getWorkoutsByDate(date: Date): Promise<Workout[]> {
        const workoutsForDate: Workout[] = [];

        const workouts = await this.getAllWorkouts();

        for (let workout of workouts) {
            const workoutDate = new Date(workout.start_time * 1000);

            if (workoutDate.toDateString() === date.toDateString()) {
                workoutsForDate.push(workout);
            }
        }

        return workoutsForDate;
    }

    async getWorkoutById(workoutId: string): Promise<Workout> {
        await this.setUserId();
        const response = await this.makeRequest(`/api/workout/${workoutId}`, {});

        return response.data;
    }

    async getAllWorkouts(): Promise<Workout[]> {
        const workouts: Workout[] = [];
        let page = 0;
        let limit = 100;
        let joins = "";

        let response = await this.getWorkouts(page, limit, joins);
        workouts.push(...response.data);

        while (response.page_count > page) {
            page++;
            response = await this.getWorkouts(page, limit, joins);
            workouts.push(...response.data);
        }

        return workouts;
    }

    async getWorkouts(page: number = 0, limit: number = 100, joins: string = ""): Promise<WorkoutResponse> {
        const uri = `/api/user/${this.userId}/workouts`;

        const params = { page, limit, joins };

        const response = await this.makeRequest(uri, params);
        return response.data;
    }

    private async makeRequest(uri: string, params: any): Promise<AxiosResponse> {
        await this.setUserId();
        return this.httpClient.makeRequest(uri, params);
    }

    private async setUserId(): Promise<void> {
        if (this.userId === "") {
            console.info("user id is not set, setting it now...");
            this.userId = await this.httpClient.getUserId();
        }
    }
}
