import { useState } from "react";
import { Button } from "@tb/ui";
import { add } from "@tb/math";

export default function Web() {
  const [sum, updateSum] = useState<number>(0);

  const clickHandler = () => {
    updateSum(pev => add(pev, 1));
  };

  return (
    <div>
      <h1>Web</h1>
      <Button onClick={clickHandler} />
      <div>{sum}</div>
    </div>
  );
}
