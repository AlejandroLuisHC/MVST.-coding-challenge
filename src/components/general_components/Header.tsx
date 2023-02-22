import React, { memo, useEffect, useState } from 'react'
import {
    ButtonHeaderSearch,
    FormHeaderStyle,
    HeaderStyle,
    InputHeader,
    LabelHeaderStyle,
    LinkLogo,
    NavStyle,
    SpanBlue
} from '../style/generalStyle'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { RESTART, UPDATE } from '../../redux/features/user_data/userSlice'
import { searchUser } from '../../api'
import { RootState } from '../../redux/store'
import { toast } from 'react-hot-toast'
import { BsSearch } from '@react-icons/all-files/bs/BsSearch'

interface IregisterData {
    user: string;
}

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
    } = useForm()
    const { userData } = useSelector((state: RootState) => state.userData)

    const [selectedUser, setSelectedUser] = useState('')
    useEffect(() => {
        (typeof userData !== 'boolean' && userData.login) && setSelectedUser(userData.login)
    }, [userData])

    const setUser = async (data: IregisterData) => {
        const res = await searchUser(data.user)
        if (res) {
            dispatch(UPDATE(res))
            navigate(`/${res.login}`)
        } else {
            toast.error("User not found")
        }
    }

    return (
        <HeaderStyle>
            <LinkLogo to='/'
                onClick={() => {
                    setSelectedUser('')  
                    dispatch(RESTART())
                }}
            >
                Repo<SpanBlue>Explorer</SpanBlue> 
            </LinkLogo>           
            {selectedUser !== '' &&
                <NavStyle>
                    <FormHeaderStyle onSubmit={handleSubmit(data => {
                        setUser(data as IregisterData)
                    })}>
                        <LabelHeaderStyle>
                            <InputHeader
                                type="text"
                                placeholder="Enter a GitHub user..."
                                {...register('user', { required: true })}
                            />
                        </LabelHeaderStyle>
                        <ButtonHeaderSearch type="submit"><BsSearch /></ButtonHeaderSearch>
                    </FormHeaderStyle>
                </NavStyle>
            }
        </HeaderStyle>
    )
}

export default memo(Header)