import React from 'react'
import { Outlet } from 'react-router-dom';
import { 
    MainStyle, 
    Wrapper 
} from '../components/style/generalStyle'
import Header from '../components/general_components/Header';
import Footer from '../components/general_components/Footer';

const Layout = () => {
    return (
        <Wrapper>
            <Header />

            <MainStyle>
                <Outlet />
            </MainStyle>
            
            <Footer />
        </Wrapper>
    )
}

export default Layout