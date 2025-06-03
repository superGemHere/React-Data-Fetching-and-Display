import { useState, useEffect } from "react"
import axios from "axios"
import UserTable from "@/components/UserTable/UserTable"
import UserModal from "@/components/UserModal/UserModal"
import UserDetailPanel from "@/components/UserDetailPanel/UserDetailPanel"
import styles from "@/App.module.css"

import type { User } from "@/types"

type ViewMode = "modal" | "sidebar"

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>("modal")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
        setError(null)
      } catch (err) {
        setError("Error loading users.")
        console.error("Error fetching users:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleUserClick = (user: User) => {
    setSelectedUser(user)
  }

  const handleCloseDetail = () => {
    setSelectedUser(null)
  }

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode)
    setSelectedUser(null) 
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>User List</h1>
        <div className={styles.controls}>
          <label className={styles.viewModeLabel}>View Mode:</label>
          <button
            className={`${styles.modeButton} ${viewMode === "modal" ? styles.active : ""}`}
            onClick={() => handleViewModeChange("modal")}
          >
            Modal
          </button>
          <button
            className={`${styles.modeButton} ${viewMode === "sidebar" ? styles.active : ""}`}
            onClick={() => handleViewModeChange("sidebar")}
          >
            Sidebar
          </button>
        </div>
      </header>

      <main className={styles.main}>
        {loading && <p className={styles.message}>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}

        {!loading && !error && (
          <div className={`${styles.content} ${viewMode === "sidebar" && selectedUser ? styles.withSidebar : ""}`}>
            <div className={styles.tableContainer}>
              <UserTable users={users} onUserClick={handleUserClick} />
            </div>

            {viewMode === "sidebar" && selectedUser && (
              <UserDetailPanel user={selectedUser} onClose={handleCloseDetail} />
            )}
          </div>
        )}

        {viewMode === "modal" && selectedUser && <UserModal user={selectedUser} onClose={handleCloseDetail} />}
      </main>
    </div>
  )
}

export default App
