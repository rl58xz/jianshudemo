import React from 'react';
import {Header,Logo} from './style';

export default function(props){
    console.log(document.styleSheets)
    return(<Header>
        <Logo href='/'></Logo>
    </Header>);
}