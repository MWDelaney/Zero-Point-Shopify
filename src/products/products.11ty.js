const fs = require('fs')
const YAML = require('yaml')
const products = shopify.products;

products.forEach(product => {
  const layout = {
    layout: 'product',
    product_id: product.id
  }

  const contents = `---
    ${YAML.stringify(Object.assign(layout, product))}
    ---`

  fs.writeFileSync(`./${product.handle}.md`, contents);
})


console.log('✅ Success')
