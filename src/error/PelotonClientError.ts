export interface PelotonClientErrorParams {
    errorCode: string;
    message: string;
}

export class PelotonClientError extends Error {
    readonly errorCode: string | null;

    constructor(params: PelotonClientErrorParams) {
        super(params.message);
        this.errorCode = params.errorCode;
    }
}
