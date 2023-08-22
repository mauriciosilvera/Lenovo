import React, { useState } from 'react';
import './Exercise4.scss';

export default function Exercise4() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <section className="exercise4">
      <button type="button" onClick={handleAdd}>Click me!</button>
      <p>{count}</p>
    </section>
  );
}
