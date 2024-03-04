import create from 'zustand'

import { Stores, addDoc, initDB } from "@/configs/indexedDb"

const useTodo1Store = create<any>((set: any) => ({
  
  addTaskAct: (payload: task) => {
    try{

    }
    catch(error:any) {
      console.log(error?.message || error);
    }
  },

  deleteTaskAct: () => {
    try{

    }
    catch(error:any) {
      console.log(error?.message || error);
    }
  },

  getDocsAct: () => {
    try{

    }
    catch(error:any) {
      console.log(error?.message || error);
    }
  },

  getDocAct: () => {
    try{

    }
    catch(error:any) {
      console.log(error?.message || error);
    }
  },
}));

const unsub = useTodo1Store.subscribe((state:any) => {
  console.log('useTodo1Store: ', state);
});

export default useTodo1Store;