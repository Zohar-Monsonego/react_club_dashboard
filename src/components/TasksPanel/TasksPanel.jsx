// TasksPanel - the tasks of the selected member, with messages for the empty states.
import styles from './TasksPanel.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: string, isActive: boolean} | null} props.member - the selected member, or null
 * @param {Array<{id: number, title: string, done: boolean, assignedTo: number}>} props.tasks - the tasks of the selected member
 * @param {(taskId: number) => void} props.onToggleTask - call it with task.id when a task checkbox is clicked
 */
export default function TasksPanel({ member, tasks, onToggleTask }) {
  // TODO: otherwise, a loop over tasks: a checkbox (checked = done) + the title, inside a <label>
  return (
    <div className={styles.tasksPanel}>
      {/* //the case if no member has been selected */}
      {member === null && (
        <p className={styles.empty}>Select a member to see their tasks</p>
      )}
      {/* //the case if there is no tasks to the member has been selected */}
      {member !== null && tasks.length === 0 && (
        <p className={styles.empty}>No tasks yet</p>
      )}

      {member !== null && tasks.length !== 0 && (
        <>
          <p className={styles.title}>{`Tasks of ${member.name}`}</p>
          {tasks.map((task) => (
            <label className={styles.task} key={task.id}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => onToggleTask(task.id)}
              />

              <span className={task.done ? styles.done : ''}>{task.title}</span>
            </label>
          ))}

          <div className={styles.add_task_div}>
            <input
              className={styles.quickAdd}
              type="text"
              placeholder="New task..."
            ></input>

            <button className={styles.add_task_button}>Add</button>
          </div>
        </>
      )}
    </div>
  )
}
