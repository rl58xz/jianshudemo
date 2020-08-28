import styled from 'styled-components';
const img = require('../img/jianshu.png')

export const Header = styled.header`
    position: absolute;
    margin: 0 auto;
    height: 3.5em;
`

export const Logo = styled.a`
    float: left;
    width: 12em;
    height: 3em;
    background-image: url(${img});
    background-size: 12em 3em;
`

