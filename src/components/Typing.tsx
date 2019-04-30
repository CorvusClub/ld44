import React, { useState, useEffect, useRef } from "react";

type TypingProps = Readonly<{
  children: string;
  timePerCharacter: number;
  skip: boolean;
  onDoneTyping: () => void;
}>;

function useInterval(callback: () => void, delay: number): void {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export const Typing = (props: TypingProps) => {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [doneTyping, setDoneTyping] = useState(false);
  useInterval(() => {
    if (currentCharacter <= props.children.length && !props.skip) {
      setCurrentCharacter(currentCharacter + 1);
    } else {
      if (!doneTyping) {
        setDoneTyping(true);
        props.onDoneTyping();
      }
    }
  }, props.timePerCharacter);

  if (!doneTyping) {
    return <>{props.children.slice(0, currentCharacter)}</>;
  } else {
    return <>{props.children}</>;
  }
};
