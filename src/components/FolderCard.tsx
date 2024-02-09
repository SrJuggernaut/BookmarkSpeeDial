import Tooltip from '@/components/ui/Tooltip'
import useAppState from '@/hooks/useAppState'
import { type FC } from 'react'

export type FolderCardProps = browser.bookmarks.BookmarkTreeNode & { type: 'folder' }

const FolderCard: FC<FolderCardProps> = ({ title, id }) => {
  const { currentRoute } = useAppState()
  return (
    <button
      className="cursor-pointer w-[200px] aspect-[16/11] bg-gray-800 rounded-md hover:bg-gray-900 border-border border-[1px] flex items-center gap-2 justify-center"
      onClick={() => { currentRoute.value = id }}
    >
      <div
        className="px-2 py-4 overflow-hidden"
      >
        <Tooltip
          content={title}
        >
          <div className="text-1.5x text-nowrap overflow-ellipsis whitespace-nowrap overflow-hidden max-w-full">{title}</div>
        </Tooltip>
      </div>
    </button>
  )
}

export default FolderCard
