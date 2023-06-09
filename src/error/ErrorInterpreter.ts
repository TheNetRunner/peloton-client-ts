import { AxiosError } from "axios";
import { RedirectError } from "./redirectError";
import { ClientError } from "./clientError";
import { ServerError } from "./serverError";

export class RequestErrorInterpreter {
    interpretRequestError(error: AxiosError): Error {
        if (error.status && error.status < 400) {
            throw new RedirectError(error.message);
        }

        if (error.status && error.status < 500) {
            throw new ClientError(error.message);
        }

        if (error.status && error.status < 600) {
            throw new ServerError(error.message);
        }

        throw new Error(error.message);
    }
}
