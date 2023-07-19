import './App.css';

import { useState } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);

  function openModal(){
    setShowModal(true);
    console.log(showModal);
  }

  // function closeModal(false);
  return (
    <div className="App">
     {/* {
      <ul>
        <li>data[0].name</li>
        <li>data[1].name</li>
        <li>data[2].name</li>
      </ul>}
      {<h1>props and states</h1>} */}
      <Header></Header>
    </div>
  );
}

export default App;
