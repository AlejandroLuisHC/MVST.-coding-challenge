import React from 'react'
import { 
    FooterStyle, 
    HeaderStyle, 
    MainStyle, 
    Wrapper 
} from '../components/style/generalStyle'

const Layout = () => {
    return (
        <Wrapper>
            <HeaderStyle>
                This is my header
            </HeaderStyle>
            <MainStyle>
                This is my main
            </MainStyle>
            <FooterStyle>
                This is my footer
            </FooterStyle>
        </Wrapper>
    )
}

export default Layout