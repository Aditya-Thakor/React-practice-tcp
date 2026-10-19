import React, { useCallback, useState } from "react";

const Child = React.memo(function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
});

function MainApp() {
//     const handleClick = () => {
// console.log("Clicked");
// }

const [name,setName]=useState('');

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
    <input type="text"
    onChange={(e)=> setName(e.target.value)}
    ></input>
    <Child onClick={handleClick} />
    </div>
  );
}

// function Child({ onClick }) {
//   console.log("Child rendered");
//   return <button onClick={onClick}>Click Child</button>;
// }
export default MainApp;