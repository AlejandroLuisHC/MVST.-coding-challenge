import React from 'react'
import { 
    ButtonLandingStyle, 
    FormLandingStyle, 
    InputLandingStyle, 
    LabelLandingStyle 
} from '../components/style/generalStyle'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Landing = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    


    const handleSubmit = e => {
        e.preventDefault()
        console.log('Submit')
    }
    return (
        <FormLandingStyle onSubmit={() => handleSubmit}>
            <LabelLandingStyle>
                Write a GitHub user
                <InputLandingStyle type="text"/>
                <ButtonLandingStyle type="submit">Submit</ButtonLandingStyle>
            </LabelLandingStyle>
        </FormLandingStyle>
    )
}

export default Landing