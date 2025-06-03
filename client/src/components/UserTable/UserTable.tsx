
import type { FC } from "react"
import styles from "./styles.module.css"

import type { User } from "@/types"

interface UserTableProps {
  users: User[]
  onUserClick: (user: User) => void
}

const UserTable: FC<UserTableProps> = ({ users, onUserClick }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={styles.row} onClick={() => onUserClick(user)}>
              <td className={styles.nameCell}>
                <div className={styles.avatar}>{user.name.charAt(0)}</div>
                <span>{user.name}</span>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
