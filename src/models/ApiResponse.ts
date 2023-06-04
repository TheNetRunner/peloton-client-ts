export interface ApiResponse {
    limit: number;
    page: number;
    total: number;
    count: number;
    page_count: number;
    show_previous: boolean;
    show_next: true;
    sort_by: string;
    next: {
        [key: string]: string;
        created_at: string;
    };
}
