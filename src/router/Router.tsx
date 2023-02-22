import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GeneralProvider from '../helper/GeneralProvider'
import RedirectRoutes from './RedirectRoutes'

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
                            <Route index element={<RedirectRoutes><Landing /></RedirectRoutes>} />
                            <Route path="/:user" element={<Dashboard />} />
                            <Route path="*" element={<div>404</div>} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </GeneralProvider>
    )
}

export default Router