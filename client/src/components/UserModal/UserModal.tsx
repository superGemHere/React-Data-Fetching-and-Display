import type React from "react"

import type { FC } from "react"
import UserCard from "@/components/UserCard/UserCard"
import styles from "./styles.module.css"

import type { User } from "@/types"

interface UserModalProps {
  user: User
  onClose: () => void
}

const UserModal: FC<UserModalProps> = ({ user, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <UserCard user={user} />
      </div>
    </div>
  )
}

export default UserModal
