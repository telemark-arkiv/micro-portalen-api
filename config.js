module.exports = {
  jwtSecret: process.env.API_JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  url: {
    shortcuts: process.env.URL_SHORTCUTS || 'https://shortcuts.portalen.win',
    roles: process.env.URL_ROLES || 'https://roles.portalen.win',
    content: process.env.URL_CONTENT || 'https://content.portalen.win',
    links: process.env.URL_LINKS || 'https://links.portalen.win'
  },
  defaults: {
    company: process.env.DEFAULTS_COMPANY || 'Sentraladministrasjonen',
    mail: process.env.DEFAULTS_MAIL || 'post@tfk.no',
    roles: ['alle', 'administrasjonen', 'sentraladministrasjonen']
  }
}
