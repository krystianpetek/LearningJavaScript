export interface ITask {
    id: number;
    name: string;
    important: boolean;
    active: boolean;
    visible: boolean;
    createDate: Date;
    finishDate: Date | null;
}
