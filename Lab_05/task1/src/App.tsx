import { UserCard } from './UserCard'
import { SkillList } from './SkillList'
import type { User, Skill } from './types'

const SAMPLE_USER: User = {
  name: 'Alice Johnson',
  email: 'alice@example.com',
  age: 28,
}

const SAMPLE_SKILLS: Skill[] = [
  { id: 1, name: 'TypeScript', level: 'Expert' },
  { id: 2, name: 'React', level: 'Expert' },
  { id: 3, name: 'Node.js', level: 'Intermediate' },
  { id: 4, name: 'CSS', level: 'Intermediate' },
  { id: 5, name: 'Testing', level: 'Beginner' },
]

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>User Profile</h1>
      <UserCard user={SAMPLE_USER} isActive>
        <section>
          <h3>Bio</h3>
          <p>Frontend developer with focus on React and TypeScript.</p>
        </section>
        <section>
          <h3>Status</h3>
          <p>Available for new projects.</p>
        </section>
      </UserCard>
      <h2>Skills</h2>
      <SkillList skills={SAMPLE_SKILLS} />
    </div>
  )
}

export default App
