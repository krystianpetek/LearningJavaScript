import { projectState } from "./app.js";
import { Autobind, Component } from "./Component.js";
import { DragTarget } from "./Draggable.js";
import { Project, ProjectStatus } from "./Project.js";
import { ProjectItem } from "./ProjectItem.js";

export default class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      const listEl = this.element.querySelector("ul");
      listEl?.classList.add("droppable");
    }
  }

  @Autobind
  dropHandler(event: DragEvent): void {
    const projectId = event.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      projectId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }

  @Autobind
  dragLeaveHandler(_: DragEvent): void {
    const listEl = this.element.querySelector("ul");
    listEl?.classList.remove("droppable");
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProject = projects.filter((project) => {
        if (this.type === "active") {
          return project.status === ProjectStatus.Active;
        }
        return project.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProject;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " Projects".toUpperCase();
  }

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`);
    listEl!.innerHTML = "";
    for (const projectInput of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, projectInput);
    }
  }
}

// export class ProjectList {
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLDivElement;
//   element: HTMLElement;
//   assignedProjects: Project[];

//   constructor(private type: "active" | "finished") {
// this.templateElement = <HTMLTemplateElement>(
//   document.querySelector("#project-list")
// );
// this.hostElement = <HTMLDivElement>document.querySelector("#app");
// this.assignedProjects = [];
// const importedNode = document.importNode(
// this.templateElement.content,
// true
// );
// this.element = <HTMLElement>importedNode.firstElementChild;
// this.element.id = `${this.type}-projects`;

// projectState.addListener((projects: Project[]) => {
//   const relevantProject = projects.filter((project) => {
//     if (this.type === "active") {
//       return project.status === ProjectStatus.Active;
//     }
//     return project.status === ProjectStatus.Finished;
//   });
//   this.assignedProjects = relevantProject;
//   this.renderProjects();
// });

// this.attach();
//   this.renderContent();
// }

// private renderProjects() {
//   const listEl = document.getElementById(`${this.type}-projects-list`);
//   listEl!.innerHTML = "";
//   for (const projectInput of this.assignedProjects) {
//     const listItem = document.createElement("li");
//     listItem.textContent = projectInput.title;
//     listEl?.appendChild(listItem);
//   }
// }

// private renderContent() {
//   const listId = `${this.type}-projects-list`;
//   this.element.querySelector("ul")!.id = listId;
//   this.element.querySelector("h2")!.textContent =
//     this.type.toUpperCase() + " Projects".toUpperCase();
// }

// private attach() {
//   this.hostElement.insertAdjacentElement("beforeend", this.element);
// }
// }
