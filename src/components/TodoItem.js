const TodoItem = (props) => {
    const {text, createdAt} = props.todos
   
   return(
       <div>
        <p>{text}</p>
        <div>{createdAt}</div>
       </div>
  )
 
 }
 
 export default TodoItem