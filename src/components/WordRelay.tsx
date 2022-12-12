import React, { useCallback, useRef, useState } from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('끝말잇기');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const input = inputEl.current;

      if (word[word.length - 1] === value[0]) {
        setResult('정답');
        setWord(value);
      } else {
        setResult('오답');
      }
      setValue('');
      input?.focus();
    },
    [word, value]
  );

  const onChange = useCallback<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >(e => setValue(e.target.value), []);

  return (
    <form onSubmit={onSubmitForm}>
      <div>{word}</div>
      <input ref={inputEl} value={value} onChange={onChange} />
      <button>버튼</button>

      <div>{result}</div>
    </form>
  );
};

export default WordRelay;
