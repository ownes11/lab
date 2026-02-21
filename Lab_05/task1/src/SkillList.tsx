import type { Skill, SkillLevel } from './types'

interface SkillListProps {
  skills: Skill[] // Array type (Ch. 6, p. 93)
}

const levelBadgeColor = (level: SkillLevel): string => {
  switch (level) {
    case 'Beginner':
      return '#6b7280'
    case 'Intermediate':
      return '#2563eb'
    case 'Expert':
      return '#059669'
    default:
      return '#374151'
  }
}

export const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          {skill.name} —{' '}
          <span
            style={{
              color: levelBadgeColor(skill.level),
              fontWeight: 600,
            }}
          >
            {skill.level}
          </span>
        </li>
      ))}
    </ul>
  )
}
