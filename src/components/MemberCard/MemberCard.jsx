// MemberCard - avatar (initials), name, role badge and a small role-colored action button.
import styles from './MemberCard.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: "Leader" | "Member" | "Guest", isActive: boolean}} props.member
 * @param {boolean} props.isSelected - true when this is the selected member (the card gets styles.selected)
 * @param {(memberId: number) => void} props.onSelect - call it with member.id when the card is clicked
 */
export default function MemberCard({ member, isSelected, onSelect, layout }) {
  //getting the first letter of the first name and the first letter of the last name
  const avatarInitials = member.name
    .split(' ')
    .map((word) => word[0])
    .join('')

  return (
    <div
      className={`${styles.card} ${!member.isActive ? styles.inactive : ''} ${isSelected ? styles.selected : ''} ${layout === 'grid' ? styles.grid_card : ''}`}
      onClick={() => {
        onSelect(member.id)
      }}
    >
      <div className={styles.avatar}>
        <span className={styles.avatar_name}>
          {avatarInitials.toUpperCase()}
        </span>
      </div>

      <div className={styles.name_and_role_div}>
        <p className={styles.name}>{member.name}</p>
        <p className={styles.badge}>{member.role}</p>
      </div>

      <button
        disabled={!member.isActive}
        className={`${styles.roleButton} ${styles[member.role.toLowerCase()]}`}
      >
        Contact
      </button>
    </div>
  )
}
