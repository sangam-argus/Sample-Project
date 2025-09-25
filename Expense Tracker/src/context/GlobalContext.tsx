import { createContext, useState } from "react";
import type { Transaction } from "../utils/Types";
import { intialTransaction } from "../utils/Types";
export type MyContext={
   transaction:Transaction,
   totalIncome:number,
   totalExpense:number,
   allTransaction:Transaction[],
   handleAddTransaction:(data:Transaction)=>void
}

export const GlobalContext=createContext<MyContext>({
    transaction:intialTransaction,
   totalIncome:0,
   totalExpense:0,
   allTransaction:[],
   handleAddTransaction:()=>{}
})

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const [transaction,setTransaction]=useState<Transaction>(intialTransaction)
    const [allTransaction,setAllTransaction]=useState<Transaction[]|[]>([])
    const [totalIncome,setTotalIncome]=useState(0)
    const [totalExpense,setTotalExpense]=useState(0)

    const handleAddTransaction=(newTransaction:Transaction)=>{
        console.log("in :",newTransaction)
        const {amount,type}=newTransaction
        const newamount=Number(amount)
        if(amount!==null && Number(amount)>0){
            if(type==="income" ){
            setTotalIncome((prev)=>prev+ newamount)
        }
        else{
            setTotalExpense((prev)=>prev+newamount)
        }
        }
        setTransaction(newTransaction)
        setAllTransaction((prev:Transaction[])=>[...prev,newTransaction])
    }
    return(
    <GlobalContext.Provider value={{
        transaction,
           totalIncome,
           totalExpense,
           allTransaction,
           handleAddTransaction
    }

    }>
        {children}
    </GlobalContext.Provider>
    )
}