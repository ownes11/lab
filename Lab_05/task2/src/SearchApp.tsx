import { useState } from 'react'
import type { User } from './types'
import { UserCard } from './UserCard'

const INITIAL_DATA: User[] = [
  { name: 'Alice', email: 'alice@mail.com', age: 25 },
  { name: 'Bob', email: 'bob@mail.com', age: 30 },
  { name: 'Charlie', email: 'charlie@mail.com', age: 28 },
  { name: 'Diana', email: 'diana@mail.com', age: 32 },
  { name: 'Eve', email: 'eve@mail.com', age: 27 },
]

export const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA)
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA)
  const [searchTerm, setSearchTerm] = useState<string>('')

  // Ch. 6, p. 101: Typing event handlers
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchTerm(term)
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase()),
      ),
    )
  }

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setSearchTerm('')
    setFilteredUsers(users)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>User Search</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
      {filteredUsers.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div>
          {filteredUsers.map((user) => (
            <UserCard key={user.email} user={user} />
          ))}
        </div>
      )}
    </div>
  )
}
