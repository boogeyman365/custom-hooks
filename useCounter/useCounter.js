import { useState } from "react"

export const useCounter = ( initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    return setCounter( counter + value);
  }
  const decrement = (value = 1) => {
    
    if (counter <= 0) return setCounter(0);
    return setCounter( counter - value);
  }
  const reset = () => {
    setCounter( initialValue);
  }

  const random = (min = 1, max = 100) => {
    const random = Math.round(min + Math.random() * (max - min));
    return setCounter( random );
  }


  return {
    counter,
    increment,
    reset,
    decrement,
    random,
  }
}
