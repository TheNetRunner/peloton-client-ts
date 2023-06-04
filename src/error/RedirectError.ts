import { PelotonClientError } from "./PelotonClientError";

export class RedirectError extends PelotonClientError {
    constructor(message: string) {
        super({
            message,
            errorCode: "RedirectError",
        });
    }
}
