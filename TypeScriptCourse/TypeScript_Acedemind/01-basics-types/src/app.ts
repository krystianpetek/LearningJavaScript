let userInput: unknown; // 'unknown' is little bit more restrictive than 'any' type
let userName: string;

userInput = 5;
userInput = "Krystian";
if (typeof userInput === "string") {
  userName = userInput;
}

// never type, never always crash function, never returns anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
