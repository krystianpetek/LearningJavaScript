export interface ITask {
    id: number;
    name: string;
    important: boolean;
    active: boolean;
    visible: boolean;
    finishDate: string;
    completeDate: string | null;
}

export function ITaskDefault(): ITask {
    return {
        id: 0,
        name: "",
        important: false,
        active: true,
        visible: true,
        finishDate: new Date().toLocaleString(),
        completeDate: null,
    }
}
export default ITask;