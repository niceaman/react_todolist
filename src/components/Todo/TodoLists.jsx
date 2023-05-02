import styles from './TodoLists.module.scss'
import { TodoItem } from './TodoItem'

export  function TodoLists({lists, onEditTodo, onDeleteTodo}) {
	

	
  return (
	<ul className={styles.todoList}>
		{lists?.map(item => (<TodoItem todo={item} key={item.id} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo}/>))}
	</ul>
  )
}
