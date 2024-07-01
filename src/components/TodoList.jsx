import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem'

const TodoList = ({ todoList, onRemoveTodo, paramSorting, setParamSorting }) => {
    
    return (
        <div>
            <ul style={{ margin: '0', padding: '0 40px'}}>
                {todoList.map((item) => (
                    <TodoListItem key={item.id} setParamSorting={setParamSorting} paramSorting={paramSorting} todo={[item.id, item.title, item.date, item.dueAt, item.tStatus]} onRemoveTodo={() => onRemoveTodo(item.id)} />
                ))}

            </ul>
        </div>
    )
}

TodoList.protoTypes = {
    todoList: PropTypes.object,
    onRemoveTodo: PropTypes.func,
    setParamSorting: PropTypes.func
}

export default TodoList