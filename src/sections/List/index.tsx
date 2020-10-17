import { FC } from 'react'
import { Section } from '@components'
import { useData } from '@hooks'
import { Button } from 'src/components/Button/styled'

export const List: FC = () => {
  const data = useData()
  return (
    <Section>
      <Button>asdf</Button>
      {data &&
        data.data.map((product) => (
          <div key={product.id}>
            {Object.entries(product).map(([key, value]) => (
              <div key={key}>
                {key}
                {': '}
                {JSON.stringify(value)}
              </div>
            ))}
          </div>
        ))}
    </Section>
  )
}
