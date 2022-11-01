import { INamed } from "./INamed.js";

export interface IGreetable extends INamed {
  greet(phrase: string): void;
}
