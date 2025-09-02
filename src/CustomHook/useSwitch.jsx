import { useState } from "react";

export default function useSwitc() {
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    if (isOn === false) {
      setIsOn(true);
    }
    if (isOn === true) {
      setIsOn(false);
    }
  }
  return [isOn, toggle];
}
