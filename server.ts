import { $ } from 'bun'
import { watch } from 'fs'
import path from 'path'

$`bun run build:nopack`.then(console.log).catch(console.error)

const build = async (): Promise<void> => {
  await $`rm -rf dist`.text()
  const exit = await $`bun run build:nopack`.text()
  console.log(exit)
}

build()
  .catch(console.error)

const controller = new AbortController()

const watcher = watch(path.resolve(__dirname, 'src'), { signal: controller.signal })

watcher.on('change', (change, filename) => {
  console.log(`Detected ${change} in ${typeof filename === 'string' ? filename : `Buffer : ${filename.toString()}`}`)
  build()
    .catch(console.error)
})

process.on('SIGINT', () => {
  controller.abort()
  watcher.close()
  process.exit(0)
})
