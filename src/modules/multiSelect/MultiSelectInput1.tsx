import { faker } from "@faker-js/faker";
import { useState } from "react";

const MultiSelectInput1 = () => {
  const [pills, setPills]:any = useState([]);

  const [text, setText] = useState('');

  const handInputChange = (e:any) => {
    setText(e.target.value);
  }

  const handAddPill = (e:any) => {
    e.preventDefault();

    setPills((c:any) => ([
      ...c,
      {
        id: faker.string.uuid(),
        name: text,
      }
    ]));

    // clear the input
    setText('');
  }

  console.log(pills)
  return (
    <div>
      
      <section
      className='
      grid place-content-center p-10
      container mx-auto bg-red-50 max-w-[400px]
      '
      >

        <div
        className='
        flex items-center
        border-2 border-black p-2
        '
        >
          <ul
          className="
          flex items-center gap-3 flex-wrap
          "
          >
            {
              
              pills?.length
              ?(
                pills.map((el:any) => (
                  <Pill
                  key={el.id}
                  item={el}
                  />
                ))
              ): ''
            }
            <form 
            className="mt-4 flex-1"
            onSubmit={handAddPill}
            >
              <input
              className='
              outline-green-400 w-full p-2 rounded-md
              '
              type='text'
              value={text}
              onChange={handInputChange}
              />
              <button type='submit'></button>
            </form>
          </ul>
        </div>
      </section>

    </div>
  )
}

const Pill = ({item}:any) => {
  return(
    <li
    className="
    bg-slate-50 p-1 px-2 rounded-md shadow-md
    "
    >
      {item.name}
    </li>
  )
}

export default MultiSelectInput1