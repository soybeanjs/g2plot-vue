/* eslint-disable @typescript-eslint/no-var-requires */
const { isVue2, isVue3 } = require('vue-demi')
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

if (isVue2) {
  console.log('[G2Plot-Vue] Switch main field for Vue 2')
  pkg.main = 'lib2/index.js'
  pkg.module = 'es2/index.js'
} else if (isVue3) {
  console.log('[G2Plot-Vue] Switch main field for Vue 3')
  pkg.main = 'lib/index.js'
  pkg.module = 'es/index.js'
}

fs.writeFileSync(
  path.resolve(__dirname, '../package.json'),
  JSON.stringify(pkg, null, 2),
  {
    encoding: 'utf-8',
  }
)