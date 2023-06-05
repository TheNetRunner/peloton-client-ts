import { ApiResponse } from "./ApiResponse";

export interface WorkoutResponse extends ApiResponse {
    data: Workout[];
    summary: WorkoutSummary;
    aggregate_stats: any[]; // TODO figure this interface out
    total_heart_rate_zone_durations: TotalHeartRateZoneDurations;
}

export interface Workout {
    created_at: number;
    device_type: string;
    end_time: number;
    fitness_discipline: string;
    has_pedaling_metrics: boolean;
    has_leaderboard_metrics: boolean;
    id: string;
    is_total_work_personal_record: boolean;
    is_outdoor: boolean;
    metrics_type: string | null;
    name: string;
    peloton_id: string | null;
    platform: string;
    start_time: number;
    status: string;
    timezone: string;
    title: string | null;
    total_work: number;
    user_id: string;
    workout_type: string;
    total_video_watch_time_seconds: number;
    total_video_buffering_seconds: number;
    v2_total_video_watch_time_seconds: number | null;
    v2_total_video_buffering_seconds: number | null;
    total_music_audio_play_seconds: number | null;
    total_music_audio_buffer_seconds: number | null;
    created: number;
    device_time_created_at: number;
    strava_id: string | null;
    fitbit_id: string | null;
    effort_zones: WorkoutEffortZones;
    service_id: string | null;
    ride?: WorkoutRide;
    is_splits_personal_record: boolean;
}

export interface WorkoutEffortZones {
    total_effort_points: number;
    heart_rate_zone_durations: any;
}

export interface WorkoutRide {
    id: string;
    is_archived: boolean;
    title: string;
    scheduled_start_time: number;
    duration: number;
    instructor_id: WorkoutRideInstructor;
}

export interface WorkoutRideInstructor {
    name: string;
    image_url: string;
}

export interface WorkoutSummary {
    [key: string]: number;
}

export interface TotalHeartRateZoneDurations {
    heart_rate_z1_duration: number;
    heart_rate_z2_duration: number;
    heart_rate_z3_duration: number;
    heart_rate_z4_duration: number;
    heart_rate_z5_duration: number;
    heart_rate_z6_duration: number;
    heart_rate_z7_duration: number;
}
