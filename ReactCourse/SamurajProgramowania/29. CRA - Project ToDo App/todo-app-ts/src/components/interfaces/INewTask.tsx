export interface INewTask {
    name?: string;
    finishDate?: string;
    priority?: boolean;
}

export function NewTaskDefault(): INewTask {
    const date = new Date();
    return {
        name: "",
        priority: false,
        finishDate: date.toLocaleString()
    }
}
export default INewTask;