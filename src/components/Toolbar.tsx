import Button from '@/components/ui/Button'
import useAppState from '@/hooks/useAppState'
import { faChevronLeft, faHome, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type FC } from 'react'

const Toolbar: FC = () => {
  const { currentBookmarkFolder, currentRoute, defaultRoute } = useAppState()
  return (
    <div
      className="flex justify-between p-4"
    >
      <div
        className="flex gap-2 items-center"
      >
        <Button
          onClick={() => { currentRoute.value = currentBookmarkFolder.value?.parentId ?? '' }}
          disabled={currentBookmarkFolder.value?.parentId === undefined}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          Back
        </Button>
        <Button
          onClick={() => { currentRoute.value = defaultRoute.value }}
        >
          <FontAwesomeIcon icon={faHome} />
          Home
        </Button>
      </div>
      <div>
        <Button
          disabled={defaultRoute.value === currentRoute.value}
          onClick={() => { defaultRoute.value = currentRoute.value }}
        >
          <FontAwesomeIcon icon={faStar} />
          Set as default
        </Button>
      </div>
    </div>
  )
}

export default Toolbar
