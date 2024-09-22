import { connect } from 'react-redux'

const TodoList = (props) => {
    console.log("todolist rendered");
    
    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" id='d1'/>
            <button onClick={()=>{props.addTodo(document.getElementById('d1').value)}}>add todo</button>
            {
                props.todos.map((t,i)=> {
                    return(
                        <li key={i}>{t}</li>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {

    return state.todoR
}

const mapDispatchToProps = (dispatch) => {

    return {
        addTodo : (nt)=>{dispatch({type:"ADD_TODO", payload: nt})}
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (TodoList)