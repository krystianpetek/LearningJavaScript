import { IErrors } from "./IErrors";

export interface IAppProps { }
export interface IAppState {
    username: string;
    email: string;
    password: string;
    accept: boolean;
    errors: IErrors;
    message: string;
}
