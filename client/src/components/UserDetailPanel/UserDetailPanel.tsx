import type { FC } from "react"
import UserCard from "@/components/UserCard/UserCard"
import styles from "./styles.module.css"

import type { User } from "@/types"

interface UserDetailPanelProps {
  user: User
  onClose: () => void
}

const UserDetailPanel: FC<UserDetailPanelProps> = ({ user, onClose }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h3>User Details</h3>
        <button className={styles.closeButton} onClick={onClose}>
          x
        </button>
      </div>
      <UserCard user={user} />
    </div>
  )
}

export default UserDetailPanel
