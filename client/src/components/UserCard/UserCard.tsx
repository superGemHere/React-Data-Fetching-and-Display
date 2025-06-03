import type { FC } from "react"
import styles from "./styles.module.css"

import type { User } from "@/types"

interface UserCardProps {
  user: User
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>{user.name.charAt(0)}</div>
        <div className={styles.basicInfo}>
          <h2>{user.name}</h2>
          <p className={styles.username}>@{user.username}</p>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.section}>
          <h3>Contact Information</h3>
          <div className={styles.field}>
            <span className={styles.label}>Email:</span>
            <span>{user.email}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Phone:</span>
            <span>{user.phone}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Website:</span>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {user.website}
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Address</h3>
          <div className={styles.address}>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city} {user.address.zipcode}
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Company</h3>
          <div className={styles.field}>
            <span className={styles.label}>Name:</span>
            <span>{user.company.name}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Catchphrase:</span>
            <span className={styles.italic}>"{user.company.catchPhrase}"</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
