
import react from 'react';

function Keypad() {

  function handleChange() {
    console.log('Entering password...');
  }

  return (
   <Input type="password" onChange={handleChange} />
    )
  }


export default Keypad;
