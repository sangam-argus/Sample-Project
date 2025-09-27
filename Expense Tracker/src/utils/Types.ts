import dayjs, { Dayjs } from "dayjs";

export interface Transaction {
    description: string;
    amount: number | string;
    type: "income" | "expense"
    date: Dayjs
}


export const intialTransaction: Transaction = {
    description: "",
    amount: '',
    type: "income",
    date: dayjs()
}

export interface filterOptions {
    type: string;
    value?: Dayjs
}
export const initialFilterOption: filterOptions = {
    type: 'all',
    value: dayjs()
}