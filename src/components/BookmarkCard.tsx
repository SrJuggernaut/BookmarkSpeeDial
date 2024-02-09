import Tooltip from '@/components/ui/Tooltip'
import { type FC } from 'react'

export type BookmarkCardProps = browser.bookmarks.BookmarkTreeNode & { type: 'bookmark' }

const BookmarkCard: FC<BookmarkCardProps> = ({ title, url }) => {
  return (
    <a
      href={url}
      className="w-[200px] aspect-[16/11] bg-gray-800 rounded-md hover:bg-gray-900 border-border border-[1px] overflow-hidden"
      rel="noreferrer"
    >
      <div
        className="aspect-video bg-gray-700"
      >
      </div>
      <div
        className="px-2"
      >
        <Tooltip
          content={title}
        >
          <div className=" font-bold text-nowrap overflow-ellipsis whitespace-nowrap overflow-hidden">{title}</div>
        </Tooltip>
      </div>
    </a>
  )
}

export default BookmarkCard
