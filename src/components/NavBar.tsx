import React from 'react';
import Loader from "react-loader-spinner";
import {Link} from 'react-router-dom';
import { Button, 
        Menu, 
        Typography, 
        Avatar, 
        // HomeOutlinedIcon, 
    } from 'antd';

import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, WalletOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png'

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large' />
                <Typography.Title className="logo" level={2}> 
                    <Link to="/">J-Trade</Link>
                </Typography.Title>
                {/* <Button className="menu-control-container "></Button> */}
            </div>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<WalletOutlined />}>
                        <Link to='/portfolio'>Portfolio</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to='/exchanges'>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
        </div>
    )
}

export default NavBar
