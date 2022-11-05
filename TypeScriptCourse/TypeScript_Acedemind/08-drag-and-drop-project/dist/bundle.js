/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Component.ts":
/*!*************************************!*\
  !*** ./src/components/Component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = (document.querySelector(`#${templateId}`));
        this.hostElement = document.querySelector(`#${hostElementId}`);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", this.element);
    }
}


/***/ }),

/***/ "./src/components/ProjectInput.ts":
/*!****************************************!*\
  !*** ./src/components/ProjectInput.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectInput)
/* harmony export */ });
/* harmony import */ var _util_Validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Validate */ "./src/util/Validate.ts");
/* harmony import */ var _state_ProjectState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/ProjectState */ "./src/state/ProjectState.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
/* harmony import */ var _decorators_Autobind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators/Autobind */ "./src/decorators/Autobind.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class ProjectInput extends _Component__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor() {
        super("project-input", "app", true, "user-input");
        this.titleInputElement = (this.element.querySelector("#title"));
        this.descriptionInputElement = (this.element.querySelector("#description"));
        this.peopleInputElement = (this.element.querySelector("#people"));
        this.configure();
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    renderContent() { }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5,
        };
        if (!_util_Validate__WEBPACK_IMPORTED_MODULE_0__.Validate(titleValidatable) ||
            !_util_Validate__WEBPACK_IMPORTED_MODULE_0__.Validate(descriptionValidatable) ||
            !_util_Validate__WEBPACK_IMPORTED_MODULE_0__.Validate(peopleValidatable)) {
            alert("Invalid input, please try again!");
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            _state_ProjectState__WEBPACK_IMPORTED_MODULE_1__.projectState.addProject(title, desc, people);
            this.clearInputs();
            console.log(title, desc, people);
        }
    }
}
__decorate([
    _decorators_Autobind__WEBPACK_IMPORTED_MODULE_3__.Autobind
], ProjectInput.prototype, "submitHandler", null);


/***/ }),

/***/ "./src/components/ProjectItem.ts":
/*!***************************************!*\
  !*** ./src/components/ProjectItem.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectItem": () => (/* binding */ ProjectItem)
/* harmony export */ });
/* harmony import */ var _decorators_Autobind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/Autobind */ "./src/decorators/Autobind.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class ProjectItem extends _Component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(hostId, project) {
        super("single-project", hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    get persons() {
        if (this.project.people === 1) {
            return "1 person";
        }
        else {
            return `${this.project.people} persons`;
        }
    }
    dragStartHandler(event) {
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    dragEndHandler(_) {
        console.log("DragEnd");
    }
    configure() {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = `${this.persons} assigned`;
        this.element.querySelector("p").textContent = this.project.description;
    }
}
__decorate([
    _decorators_Autobind__WEBPACK_IMPORTED_MODULE_0__.Autobind
], ProjectItem.prototype, "dragStartHandler", null);


/***/ }),

/***/ "./src/components/ProjectList.ts":
/*!***************************************!*\
  !*** ./src/components/ProjectList.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _decorators_Autobind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/Autobind */ "./src/decorators/Autobind.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Project */ "./src/models/Project.ts");
/* harmony import */ var _state_ProjectState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/ProjectState */ "./src/state/ProjectState.ts");
/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectItem */ "./src/components/ProjectItem.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class ProjectList extends _Component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(type) {
        super("project-list", "app", false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            const listEl = this.element.querySelector("ul");
            listEl?.classList.add("droppable");
        }
    }
    dropHandler(event) {
        const projectId = event.dataTransfer.getData("text/plain");
        _state_ProjectState__WEBPACK_IMPORTED_MODULE_3__.projectState.moveProject(projectId, this.type === "active" ? _models_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Active : _models_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Finished);
    }
    dragLeaveHandler(_) {
        const listEl = this.element.querySelector("ul");
        listEl?.classList.remove("droppable");
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.addEventListener("drop", this.dropHandler);
        _state_ProjectState__WEBPACK_IMPORTED_MODULE_3__.projectState.addListener((projects) => {
            const relevantProject = projects.filter((project) => {
                if (this.type === "active") {
                    return project.status === _models_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Active;
                }
                return project.status === _models_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProject;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + " Projects".toUpperCase();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = "";
        for (const projectInput of this.assignedProjects) {
            new _ProjectItem__WEBPACK_IMPORTED_MODULE_4__.ProjectItem(this.element.querySelector("ul").id, projectInput);
        }
    }
}
__decorate([
    _decorators_Autobind__WEBPACK_IMPORTED_MODULE_0__.Autobind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    _decorators_Autobind__WEBPACK_IMPORTED_MODULE_0__.Autobind
], ProjectList.prototype, "dropHandler", null);
__decorate([
    _decorators_Autobind__WEBPACK_IMPORTED_MODULE_0__.Autobind
], ProjectList.prototype, "dragLeaveHandler", null);


/***/ }),

/***/ "./src/decorators/Autobind.ts":
/*!************************************!*\
  !*** ./src/decorators/Autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Autobind": () => (/* binding */ Autobind)
/* harmony export */ });
function Autobind(_a, _b, descriptor) {
    return {
        ...descriptor.value,
        get() {
            return descriptor.value.bind(this);
        },
    };
}


/***/ }),

/***/ "./src/models/Project.ts":
/*!*******************************!*\
  !*** ./src/models/Project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectStatus": () => (/* binding */ ProjectStatus)
/* harmony export */ });
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/state/ProjectState.ts":
/*!***********************************!*\
  !*** ./src/state/ProjectState.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectState": () => (/* binding */ ProjectState),
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "projectState": () => (/* binding */ projectState)
/* harmony export */ });
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Project */ "./src/models/Project.ts");

class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, numOfPeople) {
        const newProject = new _models_Project__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, numOfPeople, _models_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find((project) => project.id === projectId);
        if (project && project.status != newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstance();


/***/ }),

/***/ "./src/util/Validate.ts":
/*!******************************!*\
  !*** ./src/util/Validate.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validate": () => (/* binding */ Validate)
/* harmony export */ });
function Validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value?.toString().trim().length !== 0;
    }
    if (validatableInput.minLength !== ( false || undefined) &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength !== ( false || undefined) &&
        typeof validatableInput.value === "string") {
        isValid =
            isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ProjectInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ProjectInput */ "./src/components/ProjectInput.ts");
/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProjectList */ "./src/components/ProjectList.ts");


new _components_ProjectInput__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _components_ProjectList__WEBPACK_IMPORTED_MODULE_1__["default"]("active");
new _components_ProjectList__WEBPACK_IMPORTED_MODULE_1__["default"]("finished");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUMxQztRQUNBLE9BQU8sR0FBRyxPQUFPLElBQUksZ0JBQWdCLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztLQUNyRTtJQUVELElBQ0UsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLElBQUk7UUFDNUIsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUMxQztRQUNBLE9BQU8sR0FBRyxPQUFPLElBQUksZ0JBQWdCLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztLQUNyRTtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFZ0M7Ozs7Ozs7VUNsRGpDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ0Y7QUFFbkQsSUFBSSxnRUFBWSxFQUFFLENBQUM7QUFDbkIsSUFBSSwrREFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLElBQUksK0RBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzAxLnVuZGVyc3RhbmRpbmctdHMvLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vMDEudW5kZXJzdGFuZGluZy10cy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RJbnB1dC50cyIsIndlYnBhY2s6Ly8wMS51bmRlcnN0YW5kaW5nLXRzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdEl0ZW0udHMiLCJ3ZWJwYWNrOi8vMDEudW5kZXJzdGFuZGluZy10cy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RMaXN0LnRzIiwid2VicGFjazovLzAxLnVuZGVyc3RhbmRpbmctdHMvLi9zcmMvZGVjb3JhdG9ycy9BdXRvYmluZC50cyIsIndlYnBhY2s6Ly8wMS51bmRlcnN0YW5kaW5nLXRzLy4vc3JjL21vZGVscy9Qcm9qZWN0LnRzIiwid2VicGFjazovLzAxLnVuZGVyc3RhbmRpbmctdHMvLi9zcmMvc3RhdGUvUHJvamVjdFN0YXRlLnRzIiwid2VicGFjazovLzAxLnVuZGVyc3RhbmRpbmctdHMvLi9zcmMvdXRpbC9WYWxpZGF0ZS50cyIsIndlYnBhY2s6Ly8wMS51bmRlcnN0YW5kaW5nLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzAxLnVuZGVyc3RhbmRpbmctdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzAxLnVuZGVyc3RhbmRpbmctdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8wMS51bmRlcnN0YW5kaW5nLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMDEudW5kZXJzdGFuZGluZy10cy8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQsIFUgZXh0ZW5kcyBIVE1MRWxlbWVudD4ge1xyXG4gIHRlbXBsYXRlRWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuICBob3N0RWxlbWVudDogVDtcclxuICBlbGVtZW50OiBVO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRlbXBsYXRlSWQ6IHN0cmluZyxcclxuICAgIGhvc3RFbGVtZW50SWQ6IHN0cmluZyxcclxuICAgIGluc2VydEF0U3RhcnQ6IGJvb2xlYW4sXHJcbiAgICBuZXdFbGVtZW50SWQ/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gPEhUTUxUZW1wbGF0ZUVsZW1lbnQ+KFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0ZW1wbGF0ZUlkfWApXHJcbiAgICApO1xyXG4gICAgdGhpcy5ob3N0RWxlbWVudCA9IDxUPmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2hvc3RFbGVtZW50SWR9YCk7XHJcblxyXG4gICAgY29uc3QgaW1wb3J0ZWROb2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcclxuICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudCxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQgPSA8VT5pbXBvcnRlZE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBpZiAobmV3RWxlbWVudElkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5pZCA9IG5ld0VsZW1lbnRJZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dGFjaChpbnNlcnRBdFN0YXJ0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoKGluc2VydEF0QmVnaW5uaW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcclxuICAgICAgaW5zZXJ0QXRCZWdpbm5pbmcgPyBcImFmdGVyYmVnaW5cIiA6IFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIHRoaXMuZWxlbWVudFxyXG4gICAgKTtcclxuICB9XHJcbiAgYWJzdHJhY3QgY29uZmlndXJlKCk6IHZvaWQ7XHJcbiAgYWJzdHJhY3QgcmVuZGVyQ29udGVudCgpOiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFZhbGlkYXRlIGZyb20gXCIuLi91dGlsL1ZhbGlkYXRlXCI7XHJcbmltcG9ydCB7IHByb2plY3RTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9Qcm9qZWN0U3RhdGVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEF1dG9iaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvQXV0b2JpbmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RJbnB1dCBleHRlbmRzIENvbXBvbmVudDxcclxuICBIVE1MRGl2RWxlbWVudCxcclxuICBIVE1MRm9ybUVsZW1lbnRcclxuPiB7XHJcbiAgdGl0bGVJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgcGVvcGxlSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwicHJvamVjdC1pbnB1dFwiLCBcImFwcFwiLCB0cnVlLCBcInVzZXItaW5wdXRcIik7XHJcblxyXG4gICAgdGhpcy50aXRsZUlucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIilcclxuICAgICk7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50ID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxyXG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKVxyXG4gICAgKTtcclxuICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZW9wbGVcIilcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jb25maWd1cmUoKTtcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc3VibWl0SGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb250ZW50KCk6IHZvaWQge31cclxuXHJcbiAgcHJpdmF0ZSBnYXRoZXJVc2VySW5wdXQoKTogW3N0cmluZywgc3RyaW5nLCBudW1iZXJdIHwgdm9pZCB7XHJcbiAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRQZW9wbGUgPSB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB0aXRsZVZhbGlkYXRhYmxlOiBWYWxpZGF0ZS5WYWxpZGF0YWJsZSA9IHtcclxuICAgICAgdmFsdWU6IGVudGVyZWRUaXRsZSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsaWRhdGFibGU6IFZhbGlkYXRlLlZhbGlkYXRhYmxlID0ge1xyXG4gICAgICB2YWx1ZTogZW50ZXJlZERlc2NyaXB0aW9uLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWluTGVuZ3RoOiA1LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwZW9wbGVWYWxpZGF0YWJsZTogVmFsaWRhdGUuVmFsaWRhdGFibGUgPSB7XHJcbiAgICAgIHZhbHVlOiArZW50ZXJlZFBlb3BsZSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1pbjogMSxcclxuICAgICAgbWF4OiA1LFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFWYWxpZGF0ZS5WYWxpZGF0ZSh0aXRsZVZhbGlkYXRhYmxlKSB8fFxyXG4gICAgICAhVmFsaWRhdGUuVmFsaWRhdGUoZGVzY3JpcHRpb25WYWxpZGF0YWJsZSkgfHxcclxuICAgICAgIVZhbGlkYXRlLlZhbGlkYXRlKHBlb3BsZVZhbGlkYXRhYmxlKVxyXG4gICAgKSB7XHJcbiAgICAgIGFsZXJ0KFwiSW52YWxpZCBpbnB1dCwgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gW2VudGVyZWRUaXRsZSwgZW50ZXJlZERlc2NyaXB0aW9uLCArZW50ZXJlZFBlb3BsZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFySW5wdXRzKCkge1xyXG4gICAgdGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIEBBdXRvYmluZFxyXG4gIHByaXZhdGUgc3VibWl0SGFuZGxlcihldmVudDogRXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB1c2VySW5wdXQgPSB0aGlzLmdhdGhlclVzZXJJbnB1dCgpO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlcklucHV0KSkge1xyXG4gICAgICBjb25zdCBbdGl0bGUsIGRlc2MsIHBlb3BsZV0gPSB1c2VySW5wdXQ7XHJcbiAgICAgIHByb2plY3RTdGF0ZS5hZGRQcm9qZWN0KHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xyXG4gICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdElucHV0IHtcclxuLy8gICB0ZW1wbGF0ZUVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbi8vICAgaG9zdEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG4vLyAgIGVsZW1lbnQ6IEhUTUxGb3JtRWxlbWVudDtcclxuLy8gICB0aXRsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcclxuLy8gICBkZXNjcmlwdGlvbklucHV0RWxlbWVudDogSFRNTFRleHRBcmVhRWxlbWVudDtcclxuLy8gICBwZW9wbGVJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4vLyAgIGNvbnN0cnVjdG9yKCkge1xyXG4vLyAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQgPSA8SFRNTFRlbXBsYXRlRWxlbWVudD4oXHJcbi8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1pbnB1dFwiKVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHRoaXMuaG9zdEVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIik7XHJcblxyXG4vLyAgICAgY29uc3QgaW1wb3J0ZWROb2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcclxuLy8gICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudCxcclxuLy8gICAgICAgdHJ1ZVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHRoaXMuZWxlbWVudCA9IDxIVE1MRm9ybUVsZW1lbnQ+aW1wb3J0ZWROb2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG4vLyAgICAgdGhpcy5lbGVtZW50LmlkID0gXCJ1c2VyLWlucHV0XCI7XHJcbi8vICAgICB0aGlzLnRpdGxlSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4vLyAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQgPSA8SFRNTFRleHRBcmVhRWxlbWVudD4oXHJcbi8vICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4oXHJcbi8vICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Blb3BsZVwiKVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHRoaXMuY29uZmlndXJlKCk7XHJcbi8vICAgICB0aGlzLmF0dGFjaCgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcHJpdmF0ZSBnYXRoZXJVc2VySW5wdXQoKTogW3N0cmluZywgc3RyaW5nLCBudW1iZXJdIHwgdm9pZCB7XHJcbi8vICAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlO1xyXG4vLyAgICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZTtcclxuLy8gICAgIGNvbnN0IGVudGVyZWRQZW9wbGUgPSB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZTtcclxuXHJcbi8vICAgICBjb25zdCB0aXRsZVZhbGlkYXRhYmxlOiBWYWxpZGF0YWJsZSA9IHtcclxuLy8gICAgICAgdmFsdWU6IGVudGVyZWRUaXRsZSxcclxuLy8gICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsaWRhdGFibGU6IFZhbGlkYXRhYmxlID0ge1xyXG4vLyAgICAgICB2YWx1ZTogZW50ZXJlZERlc2NyaXB0aW9uLFxyXG4vLyAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuLy8gICAgICAgbWluTGVuZ3RoOiA1LFxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBjb25zdCBwZW9wbGVWYWxpZGF0YWJsZTogVmFsaWRhdGFibGUgPSB7XHJcbi8vICAgICAgIHZhbHVlOiArZW50ZXJlZFBlb3BsZSxcclxuLy8gICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbi8vICAgICAgIG1pbjogMSxcclxuLy8gICAgICAgbWF4OiA1LFxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBpZiAoXHJcbi8vICAgICAgICFWYWxpZGF0ZSh0aXRsZVZhbGlkYXRhYmxlKSB8fFxyXG4vLyAgICAgICAhVmFsaWRhdGUoZGVzY3JpcHRpb25WYWxpZGF0YWJsZSkgfHxcclxuLy8gICAgICAgIVZhbGlkYXRlKHBlb3BsZVZhbGlkYXRhYmxlKVxyXG4vLyAgICAgKSB7XHJcbi8vICAgICAgIGFsZXJ0KFwiSW52YWxpZCBpbnB1dCwgcGxlYXNlIHRyeSBhZ2FpbiFcIik7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICByZXR1cm4gW2VudGVyZWRUaXRsZSwgZW50ZXJlZERlc2NyaXB0aW9uLCArZW50ZXJlZFBlb3BsZV07XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICBwcml2YXRlIGNsZWFySW5wdXRzKCkge1xyXG4vLyAgICAgdGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcbi8vICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuLy8gICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuLy8gICB9XHJcblxyXG4vLyAgIEBBdXRvYmluZFxyXG4vLyAgIHByaXZhdGUgc3VibWl0SGFuZGxlcihldmVudDogRXZlbnQpIHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBjb25zdCB1c2VySW5wdXQgPSB0aGlzLmdhdGhlclVzZXJJbnB1dCgpO1xyXG4vLyAgICAgaWYgKEFycmF5LmlzQXJyYXkodXNlcklucHV0KSkge1xyXG4vLyAgICAgICBjb25zdCBbdGl0bGUsIGRlc2MsIHBlb3BsZV0gPSB1c2VySW5wdXQ7XHJcbi8vICAgICAgIHByb2plY3RTdGF0ZS5hZGRQcm9qZWN0KHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xyXG4vLyAgICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgcHJpdmF0ZSBjb25maWd1cmUoKSB7XHJcbi8vICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdEhhbmRsZXIpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcHJpdmF0ZSBhdHRhY2goKSB7XHJcbi8vICAgICB0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgdGhpcy5lbGVtZW50KTtcclxuLy8gICB9XHJcbi8vIH1cclxuIiwiaW1wb3J0IHsgQXV0b2JpbmQgfSBmcm9tIFwiLi4vZGVjb3JhdG9ycy9BdXRvYmluZFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSBcIi4uL21vZGVscy9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvUHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RJdGVtXHJcbiAgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTFVMaXN0RWxlbWVudCwgSFRNTExJRWxlbWVudD5cclxuICBpbXBsZW1lbnRzIERyYWdnYWJsZVxyXG57XHJcbiAgcHJpdmF0ZSBwcm9qZWN0OiBQcm9qZWN0O1xyXG4gIGdldCBwZXJzb25zKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5wcm9qZWN0LnBlb3BsZSA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gXCIxIHBlcnNvblwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGAke3RoaXMucHJvamVjdC5wZW9wbGV9IHBlcnNvbnNgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoaG9zdElkOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3QpIHtcclxuICAgIHN1cGVyKFwic2luZ2xlLXByb2plY3RcIiwgaG9zdElkLCBmYWxzZSwgcHJvamVjdC5pZCk7XHJcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgdGhpcy5jb25maWd1cmUoKTtcclxuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4gIH1cclxuICBAQXV0b2JpbmRcclxuICBkcmFnU3RhcnRIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LmRhdGFUcmFuc2ZlciEuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgdGhpcy5wcm9qZWN0LmlkKTtcclxuICAgIGV2ZW50LmRhdGFUcmFuc2ZlciEuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0VuZEhhbmRsZXIoXzogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRyYWdFbmRcIik7XHJcbiAgfVxyXG4gIGNvbmZpZ3VyZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIHRoaXMuZHJhZ1N0YXJ0SGFuZGxlcik7XHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdGhpcy5kcmFnRW5kSGFuZGxlcik7XHJcbiAgfVxyXG4gIHJlbmRlckNvbnRlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpIS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC50aXRsZTtcclxuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIikhLnRleHRDb250ZW50ID0gYCR7dGhpcy5wZXJzb25zfSBhc3NpZ25lZGA7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInBcIikhLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBdXRvYmluZCB9IGZyb20gXCIuLi9kZWNvcmF0b3JzL0F1dG9iaW5kXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEcmFnVGFyZ2V0IH0gZnJvbSBcIi4uL21vZGVscy9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFN0YXR1cyB9IGZyb20gXCIuLi9tb2RlbHMvUHJvamVjdFwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvUHJvamVjdFN0YXRlXCI7XHJcbmltcG9ydCB7IFByb2plY3RJdGVtIH0gZnJvbSBcIi4vUHJvamVjdEl0ZW1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RMaXN0XHJcbiAgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxFbGVtZW50PlxyXG4gIGltcGxlbWVudHMgRHJhZ1RhcmdldFxyXG57XHJcbiAgYXNzaWduZWRQcm9qZWN0czogUHJvamVjdFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6IFwiYWN0aXZlXCIgfCBcImZpbmlzaGVkXCIpIHtcclxuICAgIHN1cGVyKFwicHJvamVjdC1saXN0XCIsIFwiYXBwXCIsIGZhbHNlLCBgJHt0eXBlfS1wcm9qZWN0c2ApO1xyXG4gICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gW107XHJcblxyXG4gICAgdGhpcy5jb25maWd1cmUoKTtcclxuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgQEF1dG9iaW5kXHJcbiAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSBcInRleHQvcGxhaW5cIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBsaXN0RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG4gICAgICBsaXN0RWw/LmNsYXNzTGlzdC5hZGQoXCJkcm9wcGFibGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAQXV0b2JpbmRcclxuICBkcm9wSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC5kYXRhVHJhbnNmZXIhLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG4gICAgcHJvamVjdFN0YXRlLm1vdmVQcm9qZWN0KFxyXG4gICAgICBwcm9qZWN0SWQsXHJcbiAgICAgIHRoaXMudHlwZSA9PT0gXCJhY3RpdmVcIiA/IFByb2plY3RTdGF0dXMuQWN0aXZlIDogUHJvamVjdFN0YXR1cy5GaW5pc2hlZFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBdXRvYmluZFxyXG4gIGRyYWdMZWF2ZUhhbmRsZXIoXzogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG4gICAgbGlzdEVsPy5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCB0aGlzLmRyYWdPdmVySGFuZGxlcik7XHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIpO1xyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHRoaXMuZHJvcEhhbmRsZXIpO1xyXG5cclxuICAgIHByb2plY3RTdGF0ZS5hZGRMaXN0ZW5lcigocHJvamVjdHM6IFByb2plY3RbXSkgPT4ge1xyXG4gICAgICBjb25zdCByZWxldmFudFByb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSBcImFjdGl2ZVwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gcHJvamVjdC5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuQWN0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvamVjdC5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuRmluaXNoZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSByZWxldmFudFByb2plY3Q7XHJcbiAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgIGNvbnN0IGxpc3RJZCA9IGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGA7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpIS5pZCA9IGxpc3RJZDtcclxuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikhLnRleHRDb250ZW50ID1cclxuICAgICAgdGhpcy50eXBlLnRvVXBwZXJDYXNlKCkgKyBcIiBQcm9qZWN0c1wiLnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xyXG4gICAgY29uc3QgbGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YCk7XHJcbiAgICBsaXN0RWwhLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IHByb2plY3RJbnB1dCBvZiB0aGlzLmFzc2lnbmVkUHJvamVjdHMpIHtcclxuICAgICAgbmV3IFByb2plY3RJdGVtKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikhLmlkLCBwcm9qZWN0SW5wdXQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0IHtcclxuLy8gICB0ZW1wbGF0ZUVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbi8vICAgaG9zdEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG4vLyAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4vLyAgIGFzc2lnbmVkUHJvamVjdHM6IFByb2plY3RbXTtcclxuXHJcbi8vICAgY29uc3RydWN0b3IocHJpdmF0ZSB0eXBlOiBcImFjdGl2ZVwiIHwgXCJmaW5pc2hlZFwiKSB7XHJcbi8vIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gPEhUTUxUZW1wbGF0ZUVsZW1lbnQ+KFxyXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpXHJcbi8vICk7XHJcbi8vIHRoaXMuaG9zdEVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIik7XHJcbi8vIHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IFtdO1xyXG4vLyBjb25zdCBpbXBvcnRlZE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxyXG4vLyB0aGlzLnRlbXBsYXRlRWxlbWVudC5jb250ZW50LFxyXG4vLyB0cnVlXHJcbi8vICk7XHJcbi8vIHRoaXMuZWxlbWVudCA9IDxIVE1MRWxlbWVudD5pbXBvcnRlZE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbi8vIHRoaXMuZWxlbWVudC5pZCA9IGAke3RoaXMudHlwZX0tcHJvamVjdHNgO1xyXG5cclxuLy8gcHJvamVjdFN0YXRlLmFkZExpc3RlbmVyKChwcm9qZWN0czogUHJvamVjdFtdKSA9PiB7XHJcbi8vICAgY29uc3QgcmVsZXZhbnRQcm9qZWN0ID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiB7XHJcbi8vICAgICBpZiAodGhpcy50eXBlID09PSBcImFjdGl2ZVwiKSB7XHJcbi8vICAgICAgIHJldHVybiBwcm9qZWN0LnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5BY3RpdmU7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gcHJvamVjdC5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuRmluaXNoZWQ7XHJcbi8vICAgfSk7XHJcbi8vICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gcmVsZXZhbnRQcm9qZWN0O1xyXG4vLyAgIHRoaXMucmVuZGVyUHJvamVjdHMoKTtcclxuLy8gfSk7XHJcblxyXG4vLyB0aGlzLmF0dGFjaCgpO1xyXG4vLyAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4vLyB9XHJcblxyXG4vLyBwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xyXG4vLyAgIGNvbnN0IGxpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGApO1xyXG4vLyAgIGxpc3RFbCEuaW5uZXJIVE1MID0gXCJcIjtcclxuLy8gICBmb3IgKGNvbnN0IHByb2plY3RJbnB1dCBvZiB0aGlzLmFzc2lnbmVkUHJvamVjdHMpIHtcclxuLy8gICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4vLyAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0SW5wdXQudGl0bGU7XHJcbi8vICAgICBsaXN0RWw/LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIHByaXZhdGUgcmVuZGVyQ29udGVudCgpIHtcclxuLy8gICBjb25zdCBsaXN0SWQgPSBgJHt0aGlzLnR5cGV9LXByb2plY3RzLWxpc3RgO1xyXG4vLyAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikhLmlkID0gbGlzdElkO1xyXG4vLyAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIikhLnRleHRDb250ZW50ID1cclxuLy8gICAgIHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpICsgXCIgUHJvamVjdHNcIi50b1VwcGVyQ2FzZSgpO1xyXG4vLyB9XHJcblxyXG4vLyBwcml2YXRlIGF0dGFjaCgpIHtcclxuLy8gICB0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCB0aGlzLmVsZW1lbnQpO1xyXG4vLyB9XHJcbi8vIH1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEF1dG9iaW5kKF9hOiBhbnksIF9iOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5kZXNjcmlwdG9yLnZhbHVlLFxyXG4gICAgZ2V0KCkge1xyXG4gICAgICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZS5iaW5kKHRoaXMpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFByb2plY3RTdGF0dXMge1xyXG4gIEFjdGl2ZSxcclxuICBGaW5pc2hlZCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgcHVibGljIHBlb3BsZTogbnVtYmVyLFxyXG4gICAgcHVibGljIHN0YXR1czogUHJvamVjdFN0YXR1c1xyXG4gICkge31cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3RhdHVzIH0gZnJvbSBcIi4uL21vZGVscy9Qcm9qZWN0XCI7XHJcblxyXG50eXBlIExpc3RlbmVyPFQ+ID0gKGl0ZW1zOiBUW10pID0+IHZvaWQ7XHJcbmV4cG9ydCBjbGFzcyBTdGF0ZTxUPiB7XHJcbiAgcHJvdGVjdGVkIGxpc3RlbmVyczogTGlzdGVuZXI8VD5bXSA9IFtdO1xyXG4gIGFkZExpc3RlbmVyKGxpc3RlbmVyRm46IExpc3RlbmVyPFQ+KSB7XHJcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyRm4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RTdGF0ZSBleHRlbmRzIFN0YXRlPFByb2plY3Q+IHtcclxuICBwcml2YXRlIHByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcclxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvamVjdFN0YXRlO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IFByb2plY3RTdGF0ZSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQcm9qZWN0U3RhdGUoKTtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdCh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBudW1PZlBlb3BsZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0OiBQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBudW1PZlBlb3BsZSxcclxuICAgICAgUHJvamVjdFN0YXR1cy5BY3RpdmVcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlUHJvamVjdChwcm9qZWN0SWQ6IHN0cmluZywgbmV3U3RhdHVzOiBQcm9qZWN0U3RhdHVzKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgaWYgKHByb2plY3QgJiYgcHJvamVjdC5zdGF0dXMgIT0gbmV3U3RhdHVzKSB7XHJcbiAgICAgIHByb2plY3Quc3RhdHVzID0gbmV3U3RhdHVzO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyRm4gb2YgdGhpcy5saXN0ZW5lcnMpIHtcclxuICAgICAgbGlzdGVuZXJGbih0aGlzLnByb2plY3RzLnNsaWNlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RTdGF0ZSA9IFByb2plY3RTdGF0ZS5nZXRJbnN0YW5jZSgpO1xyXG4iLCIvLyB2YWxpZGF0aW9uXHJcbmludGVyZmFjZSBWYWxpZGF0YWJsZSB7XHJcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gIG1pbkxlbmd0aD86IG51bWJlcjtcclxuICBtYXhMZW5ndGg/OiBudW1iZXI7XHJcbiAgbWluPzogbnVtYmVyO1xyXG4gIG1heD86IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gVmFsaWRhdGUodmFsaWRhdGFibGVJbnB1dDogVmFsaWRhdGFibGUpOiBib29sZWFuIHtcclxuICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gIGlmICh2YWxpZGF0YWJsZUlucHV0LnJlcXVpcmVkKSB7XHJcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlPy50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDA7XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICB2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aCAhPT0gKG51bGwgfHwgdW5kZWZpbmVkKSAmJlxyXG4gICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09IFwic3RyaW5nXCJcclxuICApIHtcclxuICAgIGlzVmFsaWQgPVxyXG4gICAgICBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUubGVuZ3RoID49IHZhbGlkYXRhYmxlSW5wdXQubWluTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgdmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGggIT09IChudWxsIHx8IHVuZGVmaW5lZCkgJiZcclxuICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSBcInN0cmluZ1wiXHJcbiAgKSB7XHJcbiAgICBpc1ZhbGlkID1cclxuICAgICAgaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA8PSB2YWxpZGF0YWJsZUlucHV0Lm1heExlbmd0aDtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIHZhbGlkYXRhYmxlSW5wdXQubWluICE9IG51bGwgJiZcclxuICAgIHR5cGVvZiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID09PSBcIm51bWJlclwiXHJcbiAgKSB7XHJcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID49IHZhbGlkYXRhYmxlSW5wdXQubWluO1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgdmFsaWRhdGFibGVJbnB1dC5tYXggIT0gbnVsbCAmJlxyXG4gICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09IFwibnVtYmVyXCJcclxuICApIHtcclxuICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPD0gdmFsaWRhdGFibGVJbnB1dC5tYXg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNWYWxpZDtcclxufVxyXG5cclxuZXhwb3J0IHsgVmFsaWRhdGFibGUsIFZhbGlkYXRlIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3RJbnB1dCBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RJbnB1dFwiO1xyXG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0TGlzdFwiO1xyXG5cclxubmV3IFByb2plY3RJbnB1dCgpO1xyXG5uZXcgUHJvamVjdExpc3QoXCJhY3RpdmVcIik7XHJcbm5ldyBQcm9qZWN0TGlzdChcImZpbmlzaGVkXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=