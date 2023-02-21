import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('./Layout'))
const Landing = lazy(() => import('../pages/Landing'))

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Landing />} />

                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router