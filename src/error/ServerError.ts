import { PelotonClientError } from "./PelotonClientError";

export class ServerError extends PelotonClientError {
    constructor(message: string) {
        super({
            message,
            errorCode: "ServerError",
        });
    }
}
