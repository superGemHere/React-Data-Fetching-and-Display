import type { FC } from "react"
import UserCard from "@/components/UserCard/UserCard"
import styles from "./styles.module.css"

import type { User } from "@/types"

interface UserListProps {
  users: User[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles.userList}>
      <h2>Users ({users.length})</h2>
      <div className={styles.grid}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default UserList
