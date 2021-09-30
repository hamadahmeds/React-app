export default function Modal(props) {
  function canelHandler() {
    props.onCancel()
  }
  function confirmHandler() {
    props.onConfirm()
  }
  return (
    <div className='modal'>
      <p> Are you sure?</p>
      <button className='btn btn--alt' onClick={canelHandler}>
        Cancel
      </button>
      <button className='btn' onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  )
}
