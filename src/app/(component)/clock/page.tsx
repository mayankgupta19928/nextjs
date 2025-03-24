"use client";
import { set } from "mongoose";
import { use, useEffect, useState } from "react";
type CounterProps = number;
type intervalId = NodeJS.Timeout | undefined;
let interval: NodeJS.Timeout;
let val = 0;
const Counter1 = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(true);

  // useEffect(() => {
  //   let intervalId: intervalId;
  //   if (isRunning) {
  //     // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
  //     intervalId = setInterval(() => setTime(time + 1), 10);
  //   }
  //   return () => clearInterval(intervalId);
  // }, [isRunning, time]);

  // console.log("Time", time);

  // useEffect(() => {
  //   let intervalId: intervalId;
  //   if (isRunning) {
  //     // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
  //     intervalId = setInterval(() => setTime(time + 1), 10);
  //     console.log("Time useEffect", time);
  //   }
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [time, isRunning]);

  const [count, setCount] = useState<CounterProps>(0);

  const counterValueSet = () => {
    if (!interval) {
      interval = setInterval(() => {
        // setCount(count + 1);
        setCount((preCount) => preCount + 1);
        // console.log("Count", count, val);

        val = val + 1;
      }, 1000);
    }
  };

  const pauseCounter = () => {
    clearInterval(interval);
    setCount(count);
  };
  const stopCounter = () => {
    clearInterval(interval);
    setCount(0);
  };

  useEffect(() => {
    console.log("Counter component mounted");
    return () => {
      console.log("Counter component unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <p>
        Check Count{count}
        <br />
        {val}
      </p>
      <button onClick={counterValueSet}>Increment</button>
      <button onClick={pauseCounter}>Pause</button>
      <button onClick={stopCounter}>Stop</button>
      {/* <button onClick={resetCounter}>Reset</button>  */}
    </div>
  );
};

export default Counter1;
