import React, { memo } from 'react'
import { FooterStyle } from '../style/generalStyle'

const Footer = () => {
    return (
        <FooterStyle>
            <small>
                Alejandro L. Herrero Conesa
            </small>
        </FooterStyle>
    )
}

export default memo(Footer)