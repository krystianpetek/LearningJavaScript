import { projectState } from "./app.js";
import { Component } from "./Component.js";
import { Project, ProjectStatus } from "./Project.js";

export default class ProjectList extends Component<
  HTMLDivElement,
  HTMLElement
> {
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  configure() {
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
      const listItem = document.createElement("li");
      listItem.textContent = projectInput.title;
      listEl?.appendChild(listItem);
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
