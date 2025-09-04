/*/ sneck1 /*/

// import useSwitch from "./CustomHook/useSwitch";

// export default function App() {
//   const [isOn, toggle] = useSwitch();
//   return (
//     <div>
//       <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
//       <button onClick={toggle}>Cambia Stato</button>
//     </div>
//   );

/*/ sneck2 /*/

// import useDate from "./CustomHook/useDate";
// export default function App() {
//   const currentDate = useDate();

//   return (
//     <div>
//       <h1>Data e ora attuali:</h1>
//       <p>{currentDate.toLocaleString()}</p>
//     </div>
//   );
// }

/*/ sneck3 /*/

// import useCustomPointer from "./CustomHook/customPointer";
// export default function App() {
//   const customPointer = useCustomPointer("🔥");

//   return (
//     <div>
//       <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
//       {customPointer}
//     </div>
//   );
// }

/*/ sneckBonus /*/

import useKeyPress from "./CustomHook/useKeyPress";

export default function App() {
  const isPressed = useKeyPress("Enter");

  return (
    <div>
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>{isPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
    </div>
  );
}
