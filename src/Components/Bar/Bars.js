import React from 'react';
import {
    BarContainer,
    CloseIcon,
    Icon,
    BarWrapper,
    SidebarRoutes,
    BarLink,
    BarBtnWrap,
    BarMenu

} from './BarsElement';

const Bars = ({isOpen, toggle}) => {
    return(
        <BarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <BarWrapper>
                <BarMenu>
                    <BarLink to='*'>
                        Home
                    </BarLink>

                    <BarLink to='/services' onClick={toggle}>
                        Services
                    </BarLink>

                    <BarLink to='/gallery' onClick={toggle}>
                        Gallery
                    </BarLink>

                    <BarLink to='/contact' onClick={toggle}>
                        Contact
                    </BarLink>

                    {/* <BarLink to='estimate'>
                        Estimate
                    </BarLink> */}

                </BarMenu>
                <BarBtnWrap>
                    <SidebarRoutes to='/estimate'>
                        Estimate
                    </SidebarRoutes>
                </BarBtnWrap>
            </BarWrapper>
        </BarContainer>
    )
}
export default Bars;