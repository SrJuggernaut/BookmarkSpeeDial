import { watch } from 'fs'
import path from 'path'
import { build } from 'vite'

const buildReact = (): void => {
  console.time('build')
  build({
    root: path.resolve(__dirname),
    build: {
      assetsInlineLimit: Infinity,
      rollupOptions: {
        makeAbsoluteExternalsRelative: 'ifRelativeSource'
      },
      cssMinify: true,
      emptyOutDir: true
    }
  })
    .catch(console.error)
    .finally(() => {
      console.timeEnd('build')
    })
}

buildReact()

const watcher = watch(
  path.resolve(__dirname, 'src'),
  {
    recursive: true
  },
  (event, filename) => {
    console.log(`Detected ${event} in ${filename}`)
    buildReact()
  })

process.on('SIGINT', () => {
  watcher.close()
  process.exit(0)
})
