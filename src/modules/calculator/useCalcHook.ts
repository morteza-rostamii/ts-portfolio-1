import { useReducer } from "react";

interface TPayload {
  digit?: number,
  operation?: string,
}

interface TAction {
  type: string,
  payload: TPayload
};

// type of buttons
export const BTN_TYPES = {
  DIGIT: 'digit',
  OPERATION: 'operation',
  CLEAR: 'clear',
  DELETE: 'delete',
  EVALUATE: 'evaluate',
};

// type of actions
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

export const OPERATIONS = {
  ADD: '+',
  SUB: '-',
  MULTIPLICATION: '*',
  DIVISION: '/',
  EQUALITY: '=',
};

// separate the before decimal point part, every 3 digits by a ,
export const formatDigit = (digits: string) => {
  //console.log('---start formating', digits);
  //if (typeof digits !== 'string') return '';
  digits = digits.toString();

  let formatted = '';
  if (digits.includes('.')) {
    const num: any[] = digits.toString().split('.');
    console.log('---boob', num);
    formatted = num[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    formatted = formatted + '.' + num[1];
  }
  else {
    formatted = digits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return formatted;
}

// format number: 123,345
function createOperand(state: any, digit: string): string {
  let operand = state.currentOperand;

  
  if (digit.includes('.')) {
    // if: already there is a . =: do nothing.
    console.log('has a dot: ', digit);
    if (!operand.includes('.')) {
      operand = `${!!(state.currentOperand === '0') ? '' : state.currentOperand}${digit}`;
    }
  }
  else {
    // if: there is no . =: format the number to: 123,456
    operand = `${!!(state.currentOperand === '0') ? '' : state.currentOperand}${digit}`;
  }
  
  console.log('operand', operand);
  return operand;
}

// actions
//---

function additionAct(currOperand:number, prevOperand:number): number {
  return prevOperand + currOperand;
}

function subtractionAct(currOperand:number, prevOperand:number): number {
  return prevOperand - currOperand;
}

function multiAct(currOperand:number, prevOperand:number): number {
  return prevOperand * currOperand;
}

function divisionAct(currOperand:number, prevOperand:number): number {
  return prevOperand / currOperand;
}

function evaluate(operation:string, currOperand:number, prevOperand:number) {
  let result: number | null = null;

  console.log(currOperand, prevOperand, operation);
  // do the operation
  switch (operation) {
    case OPERATIONS.ADD:
      result = additionAct(currOperand, prevOperand);
      break;
    case OPERATIONS.SUB:
      result = subtractionAct(currOperand, prevOperand);
      break;
    case OPERATIONS.MULTIPLICATION:
      result = multiAct(currOperand, prevOperand);
      break;
    case OPERATIONS.DIVISION:
      result = divisionAct(currOperand, prevOperand);
      break;
    default:
      break;
  }

  return result;
}

const initState = {
  currentOperand: '0',
  previousOperand: '',
  operation: '',
  result: '',
};

const reducer = (state=initState, {type, payload}: TAction) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      console.log('add--digit');
      
      return {
        ...state,
        // concat 3 to 4 to get: 34 =: which is new operand
        currentOperand: createOperand(state, payload.digit?.toString() || ""),
        result: '',
      }
    case ACTIONS.CHOOSE_OPERATION:
      console.log('set--operation');

      // if: nothing entered yet.
      //if (state.currentOperand === '0') return state;
      if (!state?.operation && state.currentOperand === '0') return state;

      // we reset result when a digit or . is clicked
      if (state.result) return {
        ...state,
        operation: payload.operation,
      };

      // if: we have an operator
      if (state.operation) {
        const operation: any = state.operation;
        const currOperand = parseFloat(state.currentOperand);
        const prevOperand = parseFloat(state.previousOperand);
        // evaluate and set prevOperand
        const result = evaluate(operation, currOperand, prevOperand);

        console.log('res--', result);
        return {
          ...state,
          operation: payload.operation,
          previousOperand: result,
          currentOperand: '0',
          result: result,
        }
      }

      // if: no operation
      console.log('---gooo[pp');
      return {
        ...state,
        operation: payload.operation,
        previousOperand: state.currentOperand,
        currentOperand: '0'
      };
      // return {
      //   ...state,
      //   // concat 3 to 4 to get: 34 =: which is new operand
      //   //operation: payload.operation,
      //   previousOperand: state.currentOperand,
      //   currentOperand: '0',
      // }
    case ACTIONS.DELETE_DIGIT:
      console.log('delete-action');
      let editedOperand: string[] | any = [];
      if (state.currentOperand !== '0') {

        if (state.currentOperand.length === 1) {
          // we join() it into string later
          editedOperand = ['0'];
        } 
        else {
          editedOperand = state.currentOperand.split('');
          editedOperand.pop();
          //editedOperand.join('');
        }
      }

      return {
        ...state,
        // concat 3 to 4 to get: 34 =: which is new operand
        currentOperand: editedOperand.length ? editedOperand.join('') : state.currentOperand,
      }
    case ACTIONS.CLEAR:
      console.log('clear-action');
      //if (state.currentOperand === '0') return state;

      return {
        ...state,
        // concat 3 to 4 to get: 34 =: which is new operand
        currentOperand: '0',
        previousOperand: '',
        operation: '',
        result: null,
      }
    case ACTIONS.EVALUATE:
      console.log('evaluate-action');
      
      if (
        !state?.currentOperand ||
        !state?.previousOperand ||
        !state?.operation
      ) return state;

      const currOperand: number = Number(state.currentOperand); 
      const prevOperand: number = Number(state.previousOperand);
      const operation: string = state.operation;
      
      const result = evaluate(operation, currOperand, prevOperand);

      console.log(result);
      return {
        ...state,
        // concat 3 to 4 to get: 34 =: which is new operand
        currentOperand: '0',
        previousOperand: '',
        operation: '',
        result: result,
      }
    default: 
      break;
    
  }
}

function useCalcHook() {
  
  const [{
    currentOperand, 
    previousOperand,
    operation,
    result,
  }, dispatch]: any = useReducer<any>(reducer, initState);

  const handCalcBtnClick = (el: any) => {
    const type = el.type;
    switch (type) {
      case BTN_TYPES.DIGIT:
        dispatch({
          type: ACTIONS.ADD_DIGIT,
          payload: {digit: el.title},
        });
        break;
      case BTN_TYPES.OPERATION:
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: {operation: el.title},
        });
        break;
      case BTN_TYPES.DELETE:
        console.log('delete-digit');
        dispatch({
          type: ACTIONS.DELETE_DIGIT,
          payload: {},
        });
        break;
      case BTN_TYPES.CLEAR:
        console.log('clear');
        dispatch({
          type: ACTIONS.CLEAR,
          payload: {},
        });
        break;
      case BTN_TYPES.EVALUATE:
        console.log('evaluate');
        dispatch({
          type: ACTIONS.EVALUATE,
          payload: {},
        });
        break;
      default:
        break;
    }
  }

  return {
    currentOperand,
    previousOperand,
    operation,
    result,
    dispatch,
    handCalcBtnClick,
  }
}

export default useCalcHook;