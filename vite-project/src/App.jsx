import './App.css'
import Button from './shared/Button';
import Button2 from './shared/Button2';

function App() {

  const handleClick = () => {
    console.log("click event1");
  };

  return (
    <>
      <button onClick={handleClick}> Button 1 </button>
      <button onClick={() => {console.log("click event2")}}> Button 2 </button>
      <br />

      <Button name="save" />
      <Button name="cancel" />
      <br />

      <Button2 />


    </>
  )
}

export default App
