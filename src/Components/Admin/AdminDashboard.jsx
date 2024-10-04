import React from 'react';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;
import { Link, Outlet } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Person4Icon from '@mui/icons-material/Person4';
const AdminDashboard = () => {
  return (
    <Layout >
      <Sider breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className='py-7 font-bold text-md  '>
          <Menu.Item key="1">
            <Link to="/add"><PersonAddIcon className='mx-2' />Add User</Link>

          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/userlisting"><Person4Icon className='mx-2' />Users Listing</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className=' m-1 mr-6 ml-6 rounded-md flex  flex-col h-screen items-center'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminDashboard
