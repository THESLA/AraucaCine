import { publish } from 'gh-pages'
publish('dist', { message: 'Deploy ' + process.argv[2] || 'latest' }, (e) => {
  if (e) { console.error(e.message); process.exit(1) }
  console.log('Deployed OK')
})
