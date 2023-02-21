import React, { FC, ReactNode } from 'react'
import StoreProvider from '../redux/provider/StoreProvider';
import QueryProvider from './QueryProvider';

interface StoreProviderProps {
    children: ReactNode;
}

const GeneralProvider: FC<StoreProviderProps> = ({ children }) => {
    return (
        <QueryProvider>
            <StoreProvider>
                {children}
            </StoreProvider>
        </QueryProvider>
    )
}

export default GeneralProvider