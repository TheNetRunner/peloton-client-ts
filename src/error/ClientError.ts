import { PelotonClientError } from "./pelotonClientError";

export class ClientError extends PelotonClientError {
    constructor(message: string) {
        super({
            message,
            errorCode: "ClientError",
        });
    }
}
