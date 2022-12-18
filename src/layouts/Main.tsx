import { Frame } from '@shopify/polaris'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sider } from './Sider'

const logo = {
  width: 124,
  topBarSource:
    'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
  contextualSaveBarSource:
    'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
  accessibilityLabel: 'Jaded Pixel',
}

export const Main = () => {
  return (
    <Frame logo={logo} navigation={<Sider />} topBar={<Header />}>
      <Outlet />
    </Frame>
  )
}
