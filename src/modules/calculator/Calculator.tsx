import { Button } from '@chakra-ui/react'
//import './Calculator.css'
import { faker } from '@faker-js/faker';
import styles from './Calculator.module.css'
import useCalcHook, { BTN_TYPES, OPERATIONS, formatDigit,  } from './useCalcHook';

const buttons = [
  {
    id: faker.string.uuid(),
    title: 'AC',
    style: '',
    type: BTN_TYPES.CLEAR
  },
  {
    id: faker.string.uuid(),
    title: 'DEL',
    style: `${styles.span_two} bg-red-200 hover:bg-red-300`,
    type: BTN_TYPES.DELETE,
  },
  // {
  //   id: faker.string.uuid(),
  //   title: '%',
  //   style: '',
  //   type: BTN_TYPES.OPERATION,
  // },
  {
    id: faker.string.uuid(),
    title: OPERATIONS.DIVISION,
    style: '',
    type: BTN_TYPES.OPERATION,
  },
  {
    id: faker.string.uuid(),
    title: 7,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: 8,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: 9,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: OPERATIONS.MULTIPLICATION,
    style: '',
    type: BTN_TYPES.OPERATION,
  },
  {
    id: faker.string.uuid(),
    title: 4,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: 5,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: 6,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: OPERATIONS.SUB,
    style: '',
    type: BTN_TYPES.OPERATION,
  },
  {
    id: faker.string.uuid(),
    title: 1,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: 2,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: 3,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: OPERATIONS.ADD,
    style: '',
    type: BTN_TYPES.OPERATION,
  },
  {
    id: faker.string.uuid(),
    title: 0,
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  {
    id: faker.string.uuid(),
    title: '.',
    style: '',
    type: BTN_TYPES.DIGIT,
  },
  // {
  //   id: faker.string.uuid(),
  //   title: '+/-',
  //   style: '',
  //   type: '',
  // },
  {
    id: faker.string.uuid(),
    title: OPERATIONS.EQUALITY,
    style: `${styles.span_two} bg-green-200 hover:bg-green-300`,
    type: BTN_TYPES.EVALUATE,
  },
];

const Calculator = () => {
  const {
    currentOperand,
    previousOperand,
    operation,
    result,
    //dispatch,
    handCalcBtnClick,
  } = useCalcHook();

  return (
    <div
    className="h-full grid place-content-center"
    style={{
      //background: "linear-gradient(to right, #00AAFF, #00FF6c)"
      background:" linear-gradient(47deg, rgba(70,252,233,0.9136876469164823) 13%, rgba(198,137,255,1) 100%)",
    }}
    >
      <div
      className={`
      ${styles.calc__grid}
      w-[250px] h-[400px] rounded #overflow-hidden
      bg-green-50 #mx-auto p-2 shadow-lg
      `}

      >
        <div 
        className={`
        ${styles.output}
        flex flex-col justify-center
        bg-slate-500 rounded-md text-white
        px-4 text-right
        `}>
          <div className='text-gray-300'>
            {previousOperand}
            <span>
              {operation}
            </span>
          </div>
          <div
          className='
          text-2xl font-bold
          '
          >
            {result ? formatDigit(result) : formatDigit(currentOperand)}
          </div>
        </div>
        {
          buttons.map((el:any) => (
            <button
            key={el.id}
            className={`
            ${el.type === BTN_TYPES.OPERATION ? 'bg-orange-400 hover:bg-orange-300' : el.style ? el.style : 'bg-green-100 hover:bg-green-200'}
            
            rounded-md font-bold grid place-content-center
            transition-all
            `}

            onClick={() => handCalcBtnClick(el)}
            >
              {el.title}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Calculator