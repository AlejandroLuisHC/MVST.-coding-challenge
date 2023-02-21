import React from 'react'
import { 
    ButtonLandingStyle, 
    FormLandingStyle, 
    InputLandingStyle, 
    LabelLandingStyle 
} from '../components/style/generalStyle'

const Landing = () => {

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