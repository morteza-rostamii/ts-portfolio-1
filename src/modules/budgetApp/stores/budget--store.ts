import { create } from 'zustand'

const useBudgetStore = create((set) => ({
  totalIncome: 0,
  totalExpenses: 0,
  balance: 0,

  
}));

const unsub = useBudgetStore.subscribe((state:any) => {
  console.log('budgetStore: ', state);
});