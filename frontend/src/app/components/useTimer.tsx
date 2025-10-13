import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    if (timer <= 0) return;
    const timelast = setInterval(() => {
      setTimer(timer - 1);
      console.log(timer);
    }, 1000);

    return () => clearTimeout(timelast);
  }, [timer]);

  return (
    <>
      <p>{timer}</p>
    </>
  );
}
