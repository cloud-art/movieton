export interface IPerson{
    id: number;
    name: string;
    surname: string;
    activities?: Array<IActivity>
}

export interface IActivity{
    id: number;
    title: string;
}