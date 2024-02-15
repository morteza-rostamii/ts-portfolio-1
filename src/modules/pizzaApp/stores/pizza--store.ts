import { create } from 'zustand'

import { indexedDB } from '@/configs/indexedDb';

const usePizzaStore = create((set) => ({
  

  //test: () => console.log();
}));

const unsub = usePizzaStore.subscribe((state:any) => {
  console.log('budgetStore: ', state);
});