import naruto from '@/assets/png/naruto.png'
import { Frame } from '@shopify/polaris'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sider } from './Sider'
const logo = {
  width: 124,
  topBarSource: naruto,
  contextualSaveBarSource: naruto,
  accessibilityLabel: '那撸多!',
}

export const Main = () => {
  return (
    <Frame logo={logo} navigation={<Sider />} topBar={<Header />}>
      <Outlet />
    </Frame>
  )
}
