import {Menu} from 'antd'
import {HomeOutlined,
     AppstoreOutlined,
      AreaChartOutlined, 
      PayCircleOutlined,
    SettingOutlined} from '@ant-design/icons'
const Sidebar = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'> 
        <Menu.Item key='home' icon={<HomeOutlined />}>
            Home
        </Menu.Item>
        <Menu.Item key='activity' icon={<AppstoreOutlined />}>
            Activity
        </Menu.Item>
        <Menu.Item key='progress' icon={<AreaChartOutlined />}>
            Progress
        </Menu.Item>
        <Menu.Item key='payment' icon={<PayCircleOutlined />}>
            Payment
        </Menu.Item>
        <Menu.Item key='setting' icon={<SettingOutlined />}>
            Setting
        </Menu.Item>
    </Menu>
  )
}

export default Sidebar