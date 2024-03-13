import { useEffect, useState } from "react"
import { 
  Stores, 
  addDoc, 
  initDB } from "@/configs/indexedDb"
//import { faker } from "@faker-js/faker";

function useProfileHook() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('--');
    if (!name && !description) return alert('please fill the form.');

    // primary_key for row
    //const id = faker.string.uuid(); 
    const id = '62516720-5f36-446b-b0e6-40d015ade7e0';
    
    try {
      const res = await addDoc(Stores.Users, {
        id,
        name,
        description,
      });
      console.log('create user result: ', res);
    }
    catch(error:any) {
      console.log(error?.message || error);
    }

  };

  useEffect(() => {
    async function connectDB(): Promise<void> {
      const status = await initDB();
      console.log(status);
    }
    connectDB();
  }, []);

  return {
    name,
    description,
    setName,
    setDescription,
    handAddUser,
  }
}

export default useProfileHook