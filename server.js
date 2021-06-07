const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const server = require('http').createServer(app);

// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js')
const port = process.env.PORT || 3000
const host = "localhost"

const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
}

server.listen(port, () => {
	consola.ready({
		message: `Server listening on http://`
	})
})
