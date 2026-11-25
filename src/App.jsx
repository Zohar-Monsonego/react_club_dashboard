// App - keeps all the state (useState) and builds the page from the components.
import { initialMembers, initialTasks } from './data.js'
import styles from './App.module.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import FilterBar from './components/FilterBar/FilterBar.jsx'
import { useState } from 'react'
import MemberList from './components/MembersList/MembersList.jsx'
import TasksPanel from './components/TasksPanel/TasksPanel.jsx'

export default function App() {
  const [members, setMembers] = useState(initialMembers)
  const [tasks, setTasks] = useState(initialTasks)
  const [selectedMemberId, setSelectedMemberId] = useState(null)
  const [showOnlyActive, setShowOnlyActive] = useState(false)
  const [layout, setLayout] = useState('list')

  function onToggleActive() {
    setShowOnlyActive((prev) => !prev)
  }

  function onToggleTask(id) {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done }
        }

        return t
      }),
    )
  }

  // TODO: compute the members to show, the selected member and their tasks
  const selected_member = members.find((m) => m.id === selectedMemberId) ?? null

  let members_after_filter
  if (showOnlyActive) {
    members_after_filter = members.filter((m) => {
      return m.isActive
    })
  } else {
    members_after_filter = members
  }

  // TODO: render: Header, FilterBar, Notice (only when needed), MembersList, TasksPanel, Footer
  return (
    <div className={styles.app}>
      <Header header_title="Campus Club Dashboard" />
      <FilterBar
        showOnlyActive={showOnlyActive}
        onToggleActive={onToggleActive}
        layout={layout}
        onLayoutChange={setLayout}
      />
      <div className={styles.content}>
        <MemberList
          members={members_after_filter}
          layout={layout}
          selectedMemberId={selectedMemberId}
          onSelect={setSelectedMemberId}
        />

        <TasksPanel
          member={selected_member}
          tasks={tasks.filter((t) => t.assignedTo === selectedMemberId)}
          onToggleTask={onToggleTask}
        />
      </div>

      <Footer />
    </div>
  )
}
