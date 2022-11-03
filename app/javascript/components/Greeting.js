import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from "../redux/greetingsReducer";

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <section>
      <h1>Hi Everyone</h1>
      <p>{ greeting }</p>
    </section>
  );
}

export default Greeting;