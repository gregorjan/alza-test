import { storiesOf } from '@storybook/react'
import { Section } from '@components'

storiesOf('Section', module).add('with paragraph', () => (
  <Section>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
      sollicitudin mauris. Etiam at mollis orci, in cursus dui. Fusce sagittis,
      neque at suscipit viverra, turpis justo placerat orci, id aliquet est nisi
      ac dui. In in ante pharetra, ornare tortor nec, vehicula ex. Quisque arcu
      tortor, auctor ut gravida eget, commodo nec lectus. Mauris nec risus
      turpis. Suspendisse tempor lacus augue, ac lobortis turpis porta nec.
      Morbi eu bibendum neque. Suspendisse fermentum, est vitae venenatis
      ornare, neque justo commodo felis, sit amet molestie lorem tellus ac
      lectus.
    </p>
  </Section>
))
