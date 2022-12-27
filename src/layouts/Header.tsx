import naruto from '@/assets/webp/naruto_png.webp'
import { TopBar } from '@shopify/polaris'
import { useCallback, useState } from 'react'
export const Header = () => {
  const [userMenuActive, setUserMenuActive] = useState(false)

  const [storeName] = useState('transon')

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  )

  const userMenuActions = [
    {
      items: [{ content: 'Community forums' }],
    },
  ]
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Naruto"
      detail={storeName}
      avatar={naruto}
      initials="N"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  )

  return <TopBar showNavigationToggle userMenu={userMenuMarkup} />
}
