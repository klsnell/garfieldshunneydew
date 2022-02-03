import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us </FooterLinkTitle>
                                <FooterLink className='footerlinka'><a className='footerlinka'href='mailto:Garfieldslawnservice@cox.net'>Email (click here)</a></FooterLink>
                                <FooterLink className='footerlinka'><a className='footerlinka' href='tel:+1-520-417-1171'>520-417-1171</a></FooterLink>
                                <FooterLink className='footerlinka'><a className='footerlinka' href='tel:+1-520-456-6288'>520-456-6288</a></FooterLink>
                                <FooterLink className='footerlinka'><a className='footerlinka' href='tel:+1-520-559-3211'>520-559-3211</a></FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Hours </FooterLinkTitle>
                                <FooterLink>Monday-Friday: 7:00am - 4:00pm</FooterLink>
                                <FooterLink>Saturday-Sunday: Closed</FooterLink>
                        </FooterLinkItems>

                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Address </FooterLinkTitle>
                                <FooterLink>P.O. Box 2350</FooterLink>
                                <FooterLink>Sierra Vista, AZ 85636</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Licensed Bonded & Insured </FooterLinkTitle>
                                <FooterLink>ROC# 306936</FooterLink>
                                <FooterLink>PDM(OPM) 9681</FooterLink>
                        </FooterLinkItems>

                    </FooterLinkWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
};
export default Footer;