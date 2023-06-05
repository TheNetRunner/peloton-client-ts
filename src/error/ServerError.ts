import { PelotonClientError } from "./pelotonClientError";

export class ServerError extends PelotonClientError {
    constructor(message: string) {
        super({
            message,
            errorCode: "ServerError",
        });
    }
}
