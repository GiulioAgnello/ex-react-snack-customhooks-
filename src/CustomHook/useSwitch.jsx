import { useState } from "react";

export default function useSwitc(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  function toggle() {
    setIsOn((curr) => !curr);
  }
  return [isOn, toggle];
}
