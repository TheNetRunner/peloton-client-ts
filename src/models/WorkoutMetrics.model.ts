import { WorkoutEffortZones } from "./Workout.model";

export interface WorkoutMetricsResponse {
    duration: number;
    is_class_plan_shown: boolean;
    segment_list: any[]; //TODO: Add SegmentList interface
    seconds_since_pedaling_start: number[];
    average_summaries: WorkoutMetricSummary[];
    summaries: WorkoutMetricSummary[];
    metrics: WorkoutMetrics[];
    has_apple_watch_metrics: boolean;
    location_data: any[]; //TODO: Add LocationData interface
    is_location_data_accurate: boolean | null;
    splits_data: SplitsData;
    splits_metrics: SplitsMetric;
    target_metrics_performance_data: TargetMetricsPerformanceData; //TODO: Add TargetMetricsPerformanceData interface
    effort_zones: WorkoutEffortZones;
}

export interface WorkoutMetricSummary {
    display_name: string;
    display_unit: string;
    value: number;
    slug: string;
}

export interface WorkoutMetrics {
    display_name: string;
    display_unit: string;
    max_value: number;
    average_value: number;
    values: number[];
    slug: string;
}

export interface SplitsData {
    distance_marker_display_unit: string;
    elevation_change_display_unit: string;
    splits: Split[];
}

export interface Split {
    distance_marker: number;
    order: number;
    seconds: number;
    elevation_change: number;
    has_floor_segment: boolean;
    is_best: boolean;
}

export interface SplitsMetric {
    header: Header[];
    metrics: SplitMetric[];
}

export interface Header {
    slug: string;
    display_name: string;
}

export interface SplitMetric {
    is_best: boolean;
    has_floor_segment: boolean;
    data: SplitData[];
}

export interface SplitData {
    slug: string;
    value: number;
    unit: string;
}

export interface TargetMetricsPerformanceData {
    target_metrics: any[]; // Define the actual type for `target_metrics`
    time_in_metric: any[]; // Define the actual type for `time_in_metric`
}
