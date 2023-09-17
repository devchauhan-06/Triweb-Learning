function FirstComponent(props){
  return(
      <div className='modal'>
          <h1>{props.owner}'s Application</h1>
          <p>Demo application</p>
          <button onClick={props.closeModal}>Click me!</button>
      </div>
  )
}

export default FirstComponent;