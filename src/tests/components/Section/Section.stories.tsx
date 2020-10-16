import { Section } from '@components'
import { renderStories } from '@tests'

export default { title: 'Section' }

export const Base = () =>
  renderStories(
    <Section>
      <p>text</p>
    </Section>
  )
