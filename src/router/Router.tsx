import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GeneralProvider from '../helper/GeneralProvider'
import NoUserRoute from './NoUserRoute'
import UserRoute from './UserRoute'

// Lazy import components
const Layout = lazy(() => import('./Layout'))
const Landing = lazy(() => import('../pages/Landing'))
const Dashboard = lazy(() => import('../pages/Dashboard'))

const Router = () => {
    return (
        <GeneralProvider>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<NoUserRoute><Landing /></NoUserRoute>} />
                            <Route path="/:user" element={<UserRoute><Dashboard /></UserRoute>} />
                            <Route path="*" element={<p>Error 404: Page not found</p>} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </GeneralProvider>
    )
}

export default Router