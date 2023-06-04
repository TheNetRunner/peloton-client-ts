import { PelotonClientError } from "./PelotonClientError";

export class ClientError extends PelotonClientError {
    constructor(message: string) {
        super({
            message,
            errorCode: "ClientError",
        });
    }
}
