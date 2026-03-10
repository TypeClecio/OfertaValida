import type { ProductConfiguration, Specification } from '../types'

export const renderSpecifications = (specifications: Specification[]) =>
  specifications
    .map(
      (spec) => `
        <div>
          <dt>${spec.label}</dt>
          <dd>${spec.value}</dd>
        </div>
      `,
    )
    .join('')

export const renderDetailsCard = (configuration: ProductConfiguration) => `
  <section class="details-card">
    <h2>Especificações tecnicas</h2>
    <dl data-specifications>
      ${renderSpecifications(configuration.specifications)}
    </dl>
  </section>
`
