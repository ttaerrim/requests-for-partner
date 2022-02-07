export interface IRequests {
    id: number;
    title: string;
    client: string;
    due: string;
    count: number;
    amount: number;
    method: string[];
    material: string[];
    status: string;
    selected?: boolean;
}

export type RequestsArray = IRequests[];

export type ISetData = React.Dispatch<
    React.SetStateAction<RequestsArray | null>
>;