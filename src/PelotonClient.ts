import { AxiosError } from "axios";
import { HttpClient } from "./HttpClient";
import { RequestErrorInterpreter } from "./error/ErrorInterpreter";
import { WorkoutResponse } from "./models/Workout.model";

export class PelotonClientFactory {
  static create(username: string, password: string): PelotonClient {
    const httpClient = new HttpClient(username, password);

    return new PelotonClient(httpClient);
  }
}

export class PelotonClient {
  private userId: string;

  constructor(
    private httpClient: HttpClient,
    private requestErrorInterpreter = new RequestErrorInterpreter()
  ) {
    this.userId = "";
  }

  async getWorkouts(
    page: number = 0,
    limit: number = 100,
    joins: string = "ride,ride.instructor"
  ): Promise<WorkoutResponse> {
    await this.setUserId();

    const uri = `/api/user/${this.userId}/workouts`;
    console.log(uri);
    const params = { page, limit, joins };

    try {
      const response = await this.httpClient.makeRequest(uri, params);
      return response.data;
    } catch (err) {
      throw this.requestErrorInterpreter.interpretRequestError(
        err as AxiosError
      );
    }
  }

  private async setUserId(): Promise<void> {
    if (this.userId === "") {
      console.info("user id is not set, setting it now...");
      this.userId = await this.httpClient.getUserId();
    }
  }
}
