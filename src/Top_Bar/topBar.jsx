import React from "react";
import { Layout } from 'antd';

import {TranslationOutlined} from '@ant-design/icons';

import './topBar.css';
import 'antd/dist/antd.css';
import logo from '../logo.svg';

const TopBar = () => {
    const { Header } = Layout;

    return (
        <Header style={{backgroundColor:'white', border:'1px solid #dedede'}}>
            <div className="logo" style={{backgroundImage:{logo}, backgroundSize:'cover'}}>
                <p><TranslationOutlined style={{color:'darkblue'}}/> <span style={{color:'black', fontSize:'20px', fontVariant:'small-caps'}}>Translate</span></p>
            </div>
            
        </Header>
    )
}

export default TopBar;