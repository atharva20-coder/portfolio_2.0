import * as Comlink from 'https://unpkg.com/comlink@4.0.2/dist/esm/comlink.mjs'
import 'https://unpkg.com/terser@4.0.0/dist/bundle.js'

Comlink.expose({
  minify: code => Terser.minify(code)
})
