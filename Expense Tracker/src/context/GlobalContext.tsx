import { createContext, useMemo, useState } from "react";
import type { filterOptions, Transaction } from "../utils/Types";
import { initialFilterOption, intialTransaction } from "../utils/Types";

export type MyContext = {
  transaction: Transaction;
  totalIncome: number;
  totalExpense: number;
  allTransaction: Transaction[];
  handleAddTransaction: (data: Transaction) => void;
  filteredTransactions: Transaction[];
  setFilter: (filter: filterOptions) => void;
  filter:filterOptions
};

export const GlobalContext = createContext<MyContext>({
  transaction: intialTransaction,
  totalIncome: 0,
  totalExpense: 0,
  allTransaction: [],
  handleAddTransaction: () => {},
  filteredTransactions: [],
  filter:initialFilterOption,
  setFilter: () => {},
});

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transaction, setTransaction] =
    useState<Transaction>(intialTransaction);
  const [allTransaction, setAllTransaction] = useState<Transaction[] | []>([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [filter,setFilter]=useState<filterOptions>({type:'all'})
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[] | []>([]);

  const handleAddTransaction = (newTransaction: Transaction) => {
    const { amount, type } = newTransaction;
    const newamount = Number(amount);
    if (amount !== null && Number(amount) > 0) {
      if (type === "income") {
        setTotalIncome((prev) => prev + newamount);
      } else {
        setTotalExpense((prev) => prev + newamount);
      }
    }
    setTransaction(newTransaction);
    setAllTransaction((prev: Transaction[]) =>
      [...prev, newTransaction].sort(
        (a, b) => b.date.valueOf() - a.date.valueOf()
      )
    );
    
  };

  const updateIncomeExpense=(type:string,transaction:Transaction[])=>{
    const newValue=transaction.filter((item:Transaction)=>item.type===type).reduce((acc,t)=> acc+Number(t.amount),0);
    if(type==="income"){
        setTotalIncome(newValue)
    }
    else{
        setTotalExpense(newValue)
    }
  }
  const handleFilterBy = useMemo(() => {
    console.log(filter)
    let filtered: Transaction[] = [];
    switch (filter.type) {
      case "all":
        filtered = allTransaction;
        break
      case "date":
        filtered = allTransaction.filter((t) =>
          t.date.isSame(filter.value, "date")
        );
        break
      case "month":
        filtered = allTransaction.filter((t) =>
          t.date.isSame(filter.value, "month")
        );
        break
      case "year":
        filtered = allTransaction.filter((t) =>
          t.date.isSame(filter.value, "year")
        );
        break
      default:
        filtered = allTransaction;
    }
    setFilteredTransactions(filtered)
    updateIncomeExpense("income",filteredTransactions)
    updateIncomeExpense("expense",filteredTransactions)

    
  },[filter,transaction]);

  return (
    <GlobalContext.Provider
      value={{
        transaction,
        totalIncome,
        totalExpense,
        allTransaction,
        handleAddTransaction,
        filteredTransactions,
        setFilter,
        filter
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
