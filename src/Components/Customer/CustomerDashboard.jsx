import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

const CustomerDashboard = () => {
  return (
          <Layout >
              <Sider className='h-screen'>
                  <div className="demo-logo-vertical" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className='py-7 font-bold text-md  '>
                      <Menu.Item key="1">
                          <Link to="/productlisting"><HomeRoundedIcon className='mx-2' />Products</Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                      <Link to="/cart"><ShoppingCartIcon className='mx-2' />Cart</Link>
                      </Menu.Item>
                  </Menu>
              </Sider>
              <Layout>
                  <Content className=' m-1 mr-6 ml-6 rounded-md flex  flex-col h-screen'>
                      <Outlet />
                  </Content>
              </Layout>
          </Layout>
  )
}

export default CustomerDashboard;
