import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import banner from './banner'
import best_selling_products from './best_selling_products'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product,
    banner,
    best_selling_products
  ]),
})
