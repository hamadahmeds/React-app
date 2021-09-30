import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
  const [modalIsOpen, setModeIsOpen] = useState(false)
  function deleteHandler() {
    setModeIsOpen(true)
  }

  function CloseModalHandler() {
    setModeIsOpen(false)
  }
  return (
    <div className='card'>
      <h2>{props.text}</h2>

      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={CloseModalHandler} onConfirm={CloseModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={CloseModalHandler} />}
    </div>
  )
}
export default Todo
