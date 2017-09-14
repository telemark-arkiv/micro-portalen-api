const { router, get } = require('microrouter')

// Routes
const hello = require('./handlers/hello')
const ping = require('./handlers/ping')
const shortcuts = require('./handlers/shortcuts')
const links = require('./handlers/links')
const roles = require('./handlers/roles')
const content = require('./handlers/content')
const frontpage = require('./handlers/frontpage')

module.exports = router(
  get('/hello/:who', hello),
  get('/ping', ping),
  get('/shortcuts', shortcuts),
  get('/links', links),
  get('/roles/map', roles),
  get('/roles/list', roles),
  get('/content', content),
  get('/', frontpage)
)
