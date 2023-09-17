import FirstComponent from "./components/FirstComponent";
import Backdrop from "./components/Backdrop";
import {useState} from "react";

function App() {

  const [modalOpen, setModalOpen] = useState(true);

  const modalCloseHandler = () => {
    setModalOpen(false);
  }

  const openModalHandler = () =>{
    setModalOpen(true);
  }

  return (
    <div >
      <h1>Dummy</h1>
      {modalOpen?<FirstComponent owner="Dev" reason="For demo" closeModal={modalCloseHandler}/>:null}
      {modalOpen?<Backdrop />:null}
      <button onClick={openModalHandler}>Open!</button>
    </div>
  );
}

export default App;