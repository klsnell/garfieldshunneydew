import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom';
import{FaTimes} from 'react-icons/fa';

export const BarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition:0.3s ease-in-out;

    opacity:${({ isOpen }) => (isOpen ? '100%' : '0')};
    top:${({ isOpen }) => (isOpen ? '0' : '-100%')}; 

    // top:0;
    
`

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`

export const BarWrapper = styled.div`
    color:#000;
`

export const BarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align:center;
    
    @media screen and (max-width:480px){
        grid-template-rows:repeat(6, 60px);
    }
`

export const BarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#ff8c00;
    cursor:pointer;

    &:hover{
        color:#fff;
        transition:0.2s ease-in-out;
    }
`

export const BarBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`

export const SidebarRoutes = styled(LinkR)`
    border-radius:50px;
    background:#ff8c00;
    white-space:nowrap;
    padding:16px 64px;
    color:#000;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#000;
        color:#010606;
    }
`