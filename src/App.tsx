import { useMemo, useState } from "react";
import wordsJSON from "./words.json";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="rounded-md bg-[#1C76D5] hover:bg-[#1c8bd5] disabled:bg-[#dae3ee] hover:mo text-white py-3 px-5 flex gap-1"
    >
      {props.children}
    </button>
  );
}

function App() {
  const words = useMemo(() => wordsJSON.words, []);
  const [curIndex, setCurIndex] = useState(-1);

  const onStart = function () {
    setCurIndex(0);
  };

  const onNext = function () {
    if (curIndex !== words.length - 1) setCurIndex((prev) => prev + 1);
  };

  const onBack = function () {
    if (curIndex !== 0) setCurIndex((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-full">
      {curIndex === -1 ? (
        <Button onClick={onStart}>Start</Button>
      ) : (
        <>
          <span>
            {curIndex + 1} / {words.length}
          </span>
          <span className="my-20">
            <p className="text-8xl font-bold">{words[curIndex]}</p>
          </span>
          <div className="flex gap-5">
            <Button disabled={curIndex === 0} onClick={onBack}>
              Back
            </Button>
            <Button disabled={curIndex === words.length - 1} onClick={onNext}>
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
