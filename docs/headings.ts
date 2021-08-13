import { Heading } from 'libframe-docs/types'

export const headings: Heading[] = [
  {
    level: 1,
    title: 'Overview',
    titleEmoji: 'compass'
  },
  {
    level: 2,
    title: 'Introduction',
    titleDocument: 'vite-plugin-ssr',
    url: '/'
  },
  {
    level: 2,
    title: 'Vue Tour',
    url: '/vue-tour'
  },
  {
    level: 2,
    title: 'React Tour',
    url: '/react-tour'
  },
  {
    level: 1,
    title: 'Get Started',
    titleEmoji: 'seedling'
  },
  {
    level: 2,
    title: 'Scaffold new app',
    url: '/scaffold'
  },
  {
    level: 2,
    title: 'Add to existing app',
    url: '/add'
  },
  {
    level: 1,
    title: 'Guides',
    titleEmoji: 'books'
  },
  {
    level: 4,
    title: 'Basics'
  },
  {
    level: 2,
    title: 'Data Fetching',
    url: '/data-fetching'
  },
  {
    level: 2,
    title: 'Routing',
    url: '/routing'
  },
  {
    level: 2,
    title: 'Pre-rendering (SSG)',
    url: '/pre-rendering'
  },
  {
    level: 4,
    title: 'More'
  },
  {
    level: 2,
    title: 'SPA vs SSR vs HTML',
    url: '/SPA-vs-SSR-vs-HTML'
  },
  {
    level: 2,
    title: 'HTML `head`',
    url: '/html-head'
  },
  {
    level: 2,
    title: 'Page Redirection',
    url: '/page-redirection'
  },
  {
    level: 2,
    title: 'Paths Aliases',
    url: '/path-aliases'
  },
  {
    level: 2,
    title: '`.env` Files',
    url: '/.env-files'
  },
  {
    level: 2,
    title: 'Base URL',
    url: '/base-url'
  },
  {
    level: 1,
    title: 'Integration',
    titleEmoji: 'plug'
  },
  {
    level: 2,
    title: 'Authentication',
    titleAddendum: 'NextAuth.js, Passport.js, Auth0, Grant, ...',
    url: '/auth'
  },
  {
    level: 2,
    title: 'Markdown',
    url: '/markdown'
  },
  {
    level: 2,
    title: 'Store (Vuex, Redux, ...)',
    url: '/store'
  },
  {
    level: 2,
    title: 'GraphQL & RPC',
    titleAddendum: '',
    url: '/graphql-rpc'
  },
  {
    level: 2,
    title: 'Tailwind CSS / Windi CSS',
    url: '/tailwind-css'
  },
  {
    level: 2,
    title: 'Internationalization (i18n)',
    url: '/i18n'
  },
  {
    level: 2,
    title: 'Sass / Less / Stylus',
    url: '/sass'
  },
  {
    level: 2,
    title: 'HTTPS',
    url: '/https'
  },
  {
    level: 2,
    title: 'Svelte',
    url: '/svelte'
  },
  {
    level: 2,
    title: 'Other Integrations',
    titleInNav: 'Other',
    titleAddendum: 'CSS Frameworks, Service Workers, ...',
    url: '/integration'
  },
  {
    level: 1,
    title: 'Deploy',
    titleEmoji: 'earth'
  },
  {
    level: 2,
    title: 'Satic Hosts',
    titleAddendum: 'Netlify, GitHub Pages, Cloudflare Pages, ...',
    url: '/static-hosts'
  },
  {
    level: 2,
    title: 'Cloudflare Workers',
    url: '/cloudflare-workers'
  },
  {
    level: 2,
    title: 'Vercel',
    url: '/vercel'
  },
  {
    level: 2,
    title: 'AWS Lambda',
    url: '/aws-lambda'
  },
  {
    level: 2,
    title: 'Firebase',
    url: '/firebase'
  },
  {
    level: 2,
    title: 'Other Deployments',
    titleInNav: 'Ohter',
    url: '/deploy'
  },
  {
    level: 1,
    title: 'API',
    titleEmoji: 'gear'
  },
  {
    level: 4,
    title: 'Node.js & Browser'
  },
  {
    level: 2,
    title: '`.page.js`',
    url: '/.page.js'
  },
  {
    level: 2,
    title: '`pageContext`',
    url: '/pageContext'
  },
  {
    level: 4,
    title: 'Node.js'
  },
  {
    level: 2,
    title: '`.page.server.js`',
    url: '/.page.server.js'
  },
  {
    level: 2,
    title: '`addPageContext()` hook',
    titleInNav: '`export { addPageContext }`',
    isListTitle: true,
    url: '/addPageContext'
  },
  {
    level: 2,
    title: '`passToClient`',
    titleInNav: '`export { passToClient }`',
    isListTitle: true,
    url: '/passToClient'
  },
  {
    level: 2,
    title: '`render()` hook',
    titleInNav: '`export { render }`',
    isListTitle: true,
    url: '/render'
  },
  {
    level: 2,
    title: '`prerender()` hook',
    titleInNav: '`export { prerender }`',
    isListTitle: true,
    url: '/prerender'
  },
  {
    level: 2,
    title: '`doNotPrerender`',
    titleInNav: '`export { doNotPrerender }`',
    isListTitle: true,
    url: '/doNotPrerender'
  },
  {
    level: 2,
    title: "`import { html } from 'vite-plugin-ssr'`",
    titleInNav: '`html` template tag',
    url: '/html-tag'
  },
  {
    level: 4,
    title: 'Browser'
  },
  {
    level: 2,
    title: '`.page.client.js`',
    url: '/.page.client.js'
  },
  {
    level: 2,
    title: "`import { getPage } from 'vite-plugin-ssr/client'`",
    titleInNav: '`getPage()`',
    url: '/getPage'
  },
  {
    level: 2,
    title: "`import { useClientRouter } from 'vite-plugin-ssr/client/router'`",
    titleInNav: '`useClientRouter()`',
    url: '/useClientRouter'
  },
  {
    level: 2,
    title: "`import { navigate } from 'vite-plugin-ssr/client/router'`",
    titleInNav: '`navigate()`',
    url: '/navigate'
  },
  {
    level: 4,
    title: 'Routing'
  },
  {
    level: 2,
    title: '`.page.route.js`',
    url: '/.page.route.js'
  },
  {
    level: 2,
    title: 'Route String',
    titleInNav: 'Route String',
    isListTitle: true,
    url: '/route-string'
  },
  {
    level: 2,
    title: 'Route Function',
    titleInNav: 'Route Function',
    isListTitle: true,
    url: '/route-function'
  },
  {
    level: 2,
    title: 'Filesystem Routing',
    url: '/filesystem-routing'
  },
  {
    level: 4,
    title: 'Special Pages'
  },
  {
    level: 2,
    title: '`_default.page.*`',
    url: '/default-page'
  },
  {
    level: 2,
    title: '`_error.page.js`',
    url: '/error-page'
  },
  {
    level: 4,
    title: 'Integration'
  },
  {
    level: 2,
    title: "`import { createPageRender } from 'vite-plugin-ssr'` (Server Middleware)",
    titleInNav: '`createPageRender()`',
    titleAddendum: 'Server Middleware',
    url: '/createPageRender'
  },
  {
    level: 2,
    title: "`import ssr from 'vite-plugin-ssr/plugin'` (Vite Plugin)",
    titleInNav: 'Vite Plugin',
    url: '/vite-plugin'
  },
  {
    level: 4,
    title: 'CLI'
  },
  {
    level: 2,
    title: 'Command `prerender`',
    url: '/command-prerender'
  }
]