import React, { memo } from 'react'
import { HeaderStyle } from '../style/generalStyle'

const Header = () => {
    return (
        <HeaderStyle>
            RepoExplorer
        </HeaderStyle>
    )
}

export default memo(Header)