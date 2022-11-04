import ProjectInput from "./ProjectInput.js";
import ProjectList from "./ProjectList.js";
import { ProjectState } from "./ProjectState.js";

const projectInput = new ProjectInput();
export const projectState = ProjectState.getInstance();

const _1 = new ProjectList("active");
const _2 = new ProjectList("finished");

[projectInput, _1, _2];
