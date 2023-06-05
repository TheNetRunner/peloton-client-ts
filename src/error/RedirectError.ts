import { PelotonClientError } from "./pelotonClientError";

export class RedirectError extends PelotonClientError {
    constructor(message: string) {
        super({
            message,
            errorCode: "RedirectError",
        });
    }
}
