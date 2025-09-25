export interface Transaction{
    description:string;
    amount:number | string;
    type: "income" | "expense"
}

export const intialTransaction : Transaction= {
    description: "",
    amount: '',
    type: "income",
}