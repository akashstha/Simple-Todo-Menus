import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modal, setModal] = useState(false);

  const deleteHandler = () => {
    setModal(true);
  };
  const closeHandler = () => {
    setModal(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modal && <Modal onCancel={closeHandler} onConfirm={closeHandler}/>}
      {modal && <Backdrop onClick={closeHandler}/>}
    </div>
  );
};

export default Todo;
