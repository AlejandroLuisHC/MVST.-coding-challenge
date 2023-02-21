import React, { FC, ReactNode } from 'react'
import StoreProvider from '../redux/provider/StoreProvider';

interface StoreProviderProps {
    children: ReactNode;
}

const GeneralProvider: FC<StoreProviderProps> = ({ children }) => {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}

export default GeneralProvider