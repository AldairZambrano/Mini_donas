import {Layout, Button, theme} from 'antd'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import Logo from './components/Logo'
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import ToggleThemeButton from './components/ToggleThemeButton';

const {Header, Sider} = Layout;
function App() {
  
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, seCollaped] = useState(false)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  return (
    <>
    <Layout>
      <Sider 
      collapsed={collapsed}
      trigger={null}
       theme={darkTheme ? 'dark' : 'light'} className='sidebar'>
          <Logo></Logo>
          <Sidebar darkTheme={darkTheme}/>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}></ToggleThemeButton>
      </Sider>
      <Layout>
        <Header style={{padding:0, background: colorBgContainer}}>
          <Button type='text' 
          className='toggle'
          onClick={()=>seCollaped(!collapsed)}
          icon={collapsed ? 
          <MenuUnfoldOutlined/> : 
          <MenuFoldOutlined/>}></Button>
       </Header>
      </Layout>
    </Layout>
    </>
  )
}

export default App
