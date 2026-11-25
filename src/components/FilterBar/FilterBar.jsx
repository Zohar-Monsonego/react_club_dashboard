// FilterBar - the toggle "Show only active members" + the "List" / "Grid" switch.
// It has no state of its own: App owns the state and passes it down as props.
import styles from './FilterBar.module.css'

/**
 * @param {object} props
 * @param {boolean} props.showOnlyActive - is the checkbox checked?
 * @param {() => void} props.onToggleActive - call it when the checkbox is clicked
 * @param {"list" | "grid"} props.layout - the current layout. Its button gets the class styles.active
 * @param {(layout: "list" | "grid") => void} props.onLayoutChange - call it with "list" or "grid"
 */
export default function FilterBar({
  showOnlyActive,
  onToggleActive,
  layout,
  onLayoutChange,
}) {
  return (
    <div className={styles.filterBar}>
      <label className={styles.toggle}>
        <input
          type="checkbox"
          checked={showOnlyActive}
          onChange={onToggleActive}
        ></input>
        <label className={styles.checkbox_label}>
          Show only active members
        </label>
      </label>

      <div className={styles.search_div}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search members..."
        ></input>
      </div>

      <div className={styles.layoutSwitch}>
        <button
          className={layout === 'list' ? styles.active : styles.list_button}
          onClick={() => {
            onLayoutChange('list')
          }}
        >
          List
        </button>
        <button
          className={layout === 'grid' ? styles.active : styles.grid_button}
          onClick={() => {
            onLayoutChange('grid')
          }}
        >
          Grid
        </button>
      </div>
    </div>
  )
}
