import { effect, signal, type Signal } from '@preact/signals-react'
import { useSignals } from '@preact/signals-react/runtime'

interface AppState {
  currentBookmarkFolder: Signal<browser.bookmarks.BookmarkTreeNode & { type: 'folder' } | undefined>
  currentRoute: Signal<string>
  defaultRoute: Signal<string>
}

const currentBookmarkFolder = signal<browser.bookmarks.BookmarkTreeNode & { type: 'folder' } | undefined>(undefined)
const currentRoute = signal<string>(typeof window !== 'undefined' ? window.localStorage.getItem('defaultRoute') ?? '' : '')
const defaultRoute = signal<string>(typeof window !== 'undefined' ? window.localStorage.getItem('defaultRoute') ?? '' : '')

const getCurrentBookmarkFolder = async (): Promise<void> => {
  const currentRouteValue = await browser.bookmarks.getSubTree(currentRoute.value)
  currentBookmarkFolder.value = currentRouteValue[0] as browser.bookmarks.BookmarkTreeNode & { type: 'folder' }
}

effect(() => {
  getCurrentBookmarkFolder()
    .catch(console.error)
})

effect(() => {
  window.localStorage.setItem('defaultRoute', defaultRoute.value)
})

browser.bookmarks.onChanged.addListener(() => {
  getCurrentBookmarkFolder()
    .catch(console.error)
})

const useAppState = (): AppState => {
  useSignals()
  return {
    currentBookmarkFolder,
    currentRoute,
    defaultRoute
  }
}

export default useAppState
