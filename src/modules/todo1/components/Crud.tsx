import { Button, Input } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useState } from "react";

const Crud = () => {
  const [tasks, setTasks] = useState([{
    id: faker.string.uuid(),
    name: 'do something',
  }]);

  const [task, setTask] = useState<{id: String, name:string} | null>(null);

  return (
    <div>
      
      <form >
    
        <Input 
        type="text" 
        name="" 
        id="" 
        placeholder="add a task"
        />
        <Button
        type="submit"
        >
          add
        </Button>

      </form>

      <form 
      className="
      bg-orange-100 p-4 m-2
      "
      >
    
        <Input 
        type="text" 
        name="item-id" 
        id="" 
        placeholder="enter item id"
        />
        <Button
        type="submit"
        >
          get one item
        </Button>
        
        <div>
          {task?.name}
        </div>
      </form>

      <ul>
        {
          tasks?.length
          ?(
            tasks.map((el:any) => (
              <li
              key={el.id}
              className="
              border-2 p-2 bg-red-50
              "
              >
                <p>
                {el.name}

                </p>

                <Button>
                  delete
                </Button>
                
                <form >
    
                  <Input 
                  type="text" 
                  name="" 
                  id="" 
                  placeholder=""
                  />
                  <Button
                  type="submit"
                  >
                    edit
                  </Button>

                </form>
              </li>
            ))
          ): ''
        }
      </ul>

      {/* upload image to indexedDb */}
      <form >
        <input 
        type="file" 
        name="image" 
        id="" />
        <button type="submit">upload</button>
      </form>
    </div>
  )
}

export default Crud