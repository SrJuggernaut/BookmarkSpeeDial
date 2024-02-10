import { $ } from 'bun'
import { watch } from 'fs'
import path from 'path'

$`bun run build:nopack`.then(console.log).catch(console.error)

const controller = new AbortController()

const watcher = watch(path.resolve(__dirname, 'src'), { signal: controller.signal })

watcher.on('change', (filename) => {
  console.log(`Detected change in ${filename}`)
  $`bun run build:nopack`.then(console.log).catch(console.error)
})

process.on('SIGINT', () => {
  controller.abort()
  watcher.close()
  process.exit(0)
})
