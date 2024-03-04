import { resolve } from "path";

const indexedDB: any = 
  window.indexedDB ||
  (window as any).mozIndexedDB ||
  (window as any).webkitIndexedDB ||
  (window as any).msIndexedDB ||
  (window as any).shimIndexedDB;

let request: IDBOpenDBRequest;
let db: IDBDatabase;
let version: number = 1;

export interface User {
  id: string;
  name: string;
  email: string;
};

// name of tables
export enum Stores {
  Users = 'users',
  Tasks = 'tasks',
};

// name pf database 
const DbName = 'challenges';

export const initDB = (): Promise<boolean> => {

  return new Promise((resolve:any, reject:any) => {
    // open connection
    request = indexedDB.open(DbName);

    // runs on creating a new db or updating version with: indexedDB.opn('challenges', version + 1)
    request.onupgradeneeded = () => {
      //if (!request?.result) return;

      db = request.result;

      // if table does not exist: create
      if (!db.objectStoreNames.contains(Stores.Tasks)) {
        console.log('creating Tasks store');
        db.createObjectStore(Stores.Tasks, {
          keyPath: 'id'
        });
      }
    };

    // on connection success
    request.onsuccess = () => {
      //if (!request?.result) return;
      //console.log(request.result);
      db = request.result;
      version = db.version;
      console.log('request.onsuccess - init-DB', version);
      // connection success
      resolve(true);
    };

    // on connection failed
    request.onerror = () => {
      resolve(false);
    };
  })
};

// add row
export const addDoc = <T>(storeName:string, data: T): Promise<T|string|null> => {

  return new Promise((resolve:any, ) => {
    // open a connection
    request = indexedDB.open(DbName, version);
  
    // on success
    request.onsuccess = () => {
      console.log('request.onsuccess - addData', data);
      db = request.result;
      // create a transaction
      const tx = db.transaction(storeName, 'readwrite');
      // get store
      const store = tx.objectStore(storeName);
      // add a row
      store.add(data);
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        resolve(error);
      }
      else {
        resolve('unknown error.');
      }
    };

  });
} 

// updateById-----------------------------------
export const updateDocById = <T>(storeName:string, data: T, id: string): Promise<T|string|null> => {

  return new Promise((resolve:any, ) => {
    // open a connection
    request = indexedDB.open(DbName, version);
  
    // on success
    request.onsuccess = () => {
      console.log('request.onsuccess - addData', data);
      db = request.result;
      // create a transaction
      const tx = db.transaction(storeName, 'readwrite');
      // get store
      const store = tx.objectStore(storeName);

      const task = store.get(id);

      let updatedDoc: any = null;
      if (task) {
        updatedDoc = Object.assign({}, task, data);
        const updatedRequest = store.put(updatedDoc);

        updatedRequest.onsuccess = function(event:any) {
          resolve(updatedDoc);
        };
      }

      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        resolve(error);
      }
      else {
        resolve('unknown error.');
      }
    };

  });
}

// read all table data
export const getDocs = <T>(storeName: Stores): Promise<T[]> => {
  return new Promise((resolve:any) => {
    
    request = indexedDB.open(DbName);

    request.onsuccess = () => {
      console.log('request.onsuccess - getAllData');
      db = request.result;
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const res = store.getAll();
      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};

// read one row 
export const getDoc = <T>(storeName: Stores, id:string): Promise<T> => {
  return new Promise((resolve:any) => {
    request = indexedDB.open(DbName);

    request.onsuccess = () => {
      console.log('request.onsuccess - getAllData');
      db = request.result;
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const res = store.get(id);
      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};

// delete row
export const deleteDoc = (storeName:string, key:string): Promise<boolean> => {
  return new Promise((resolve:any) => {
    request = indexedDB.open(DbName, version);

    request.onsuccess = () => {
      console.log('request.onsuccess - deleteDoc', key);
      db = request.result;
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const res = store.delete(key);

      res.onsuccess = () => {
        resolve(true);
      };

      res.onerror = () => {
        resolve(false);
      };
    };
  });
};
