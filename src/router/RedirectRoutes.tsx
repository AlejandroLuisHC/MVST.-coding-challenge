import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface StoreProviderProps {
    children: ReactElement;
}

const RedirectRoutes: FC<StoreProviderProps> = ({ children }): JSX.Element => {
    const { userData } = useSelector((state: RootState) => state.userData)

    return typeof userData !== 'boolean' 
        ? <Navigate to={`/${userData.login}`} /> 
        : children  
}

export default RedirectRoutes