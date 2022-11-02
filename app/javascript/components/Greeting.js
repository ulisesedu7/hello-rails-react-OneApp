import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from "../redux/greetingsReducer";

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);
  console.log(greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <section>
      <h2>{ greeting }</h2>
    </section>
  );
}

export default Greeting;