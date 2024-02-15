
const indexedDB = 
  window.indexedDB ||
  (window as any).mozIndexedDB ||
  (window as any).webkitIndexedDB ||
  (window as any).msIndexedDB ||
  (window as any).shimIndexedDB;

// table names
const PIZZAS = 'pizzas';

const connectDb = () => {
  return new Promise((resolve:any, reject:any) => {
    
    // create a database
    const request = indexedDB.open('pizza_db', 2);
    
    request.onerror = (event:any) => {
      console.error('error creating a database.');
      console.error(event);
      reject(event);
    };
    
    // runs on db create
    request.onupgradeneeded = function() {
      const db = request.result;
      console.log('00');
      console.log(db, request);
      db.onerror =() => {
        console.log('error loading database.');
      }
    
      try {
        // create a table:
        let Pizza: any;
    
        // create table if does not exist
        if (!db.objectStoreNames.contains(PIZZAS)) {
          Pizza = db.createObjectStore('pizzas', {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
    
        if (!Pizza) return;

        // create cols
        Pizza.createIndex(
          'code',
          'code',
          {unique: false}
        );
      
        Pizza.createIndex(
          'price',
          'price',
          {unique: false}
        );
      }
      catch(error:any) {
        console.log(error?.message || error);
        reject(error);
      }
    
      request.onsuccess = function() {
        console.log('--s')
        const db = request.result;
        resolve(db);
      }
    }
  })
}

export default connectDb;