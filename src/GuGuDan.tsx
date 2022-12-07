import * as React from 'react';
import { useState, useRef } from 'react';

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const input = inputEl.current;

    setValue('');
    if (first * second === parseInt(value)) {
      setResult('정답!');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
    } else {
      setResult('오답ㅠ');
    }

    input?.focus();
  };
  return (
    <form onSubmit={onSubmitForm}>
      <div>
        {first} x {second}의 값은?
      </div>
      <input
        ref={inputEl}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button>버튼</button>

      <div>{result}</div>
    </form>
  );
};

export default GuGuDan;
