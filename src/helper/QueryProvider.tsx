import React, { FC, ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

interface StoreProviderProps {
    children: ReactNode;
}

const QueryProvider: FC<StoreProviderProps> = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider