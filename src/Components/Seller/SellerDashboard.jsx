import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

const SellerDashboard = () => {
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
                        <Link to="/productspage"><HomeRoundedIcon className='mx-2' />Products</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/newproduct"><AddCircleIcon className='mx-2' />Add Product</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content className=' m-1 mr-6 ml-6 rounded-md flex  flex-col '>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default SellerDashboard;
