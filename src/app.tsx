import BookmarkCard, { type BookmarkCardProps } from '@/components/BookmarkCard'
import FolderCard, { type FolderCardProps } from '@/components/FolderCard'
import Separator from '@/components/Separator'
import Toolbar from '@/components/Toolbar'
import useAppState from '@/hooks/useAppState'
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'
import { type FC } from 'react'

const app: FC = () => {
  const { currentBookmarkFolder } = useAppState()
  return (
    <TooltipProvider delayDuration={300} skipDelayDuration={700}>
      <div
        className="flex justify-center"
      >
        <h1>{currentBookmarkFolder.value?.title !== undefined && currentBookmarkFolder.value?.title !== '' ? currentBookmarkFolder.value?.title : 'BookmarkSpeeDial'}</h1>
      </div>
      <Toolbar />
      <div
        className="flex flex-wrap flex-row items-center gap-4 p-4"
      >
        {currentBookmarkFolder.value === undefined
          ? 'Loading...'
          : currentBookmarkFolder.value.children === undefined
            ? 'No bookmarks'
            : currentBookmarkFolder.value.children?.map((bookmark) => {
              if (bookmark.type === 'folder') {
                return <FolderCard key={bookmark.id} {...bookmark as FolderCardProps} />
              } else if (bookmark.type === 'bookmark') {
                return <BookmarkCard key={bookmark.id} {...bookmark as BookmarkCardProps} />
              } else {
                return <Separator key={bookmark.id}/>
              }
            })
        }
      </div>
    </TooltipProvider>
  )
}

export default app
