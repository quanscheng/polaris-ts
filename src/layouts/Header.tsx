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
      name="Dharma"
      detail={storeName}
      initials="D"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  )

  return <TopBar showNavigationToggle userMenu={userMenuMarkup} />
}
