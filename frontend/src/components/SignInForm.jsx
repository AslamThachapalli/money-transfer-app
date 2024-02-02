import { useState } from "react";
import PaytmButton from "./PaytmButton";
import PaytmInputField from "./PaytmInputField";
import signIn from "../api/SignIn";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { signUpEmailState, signUpFirstnameState, signUpLastnameState } from "../store/atom/SignUp";

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const setUsername = useSetRecoilState(signUpEmailState);
    const setFirstname = useSetRecoilState(signUpFirstnameState);
    const setLastname = useSetRecoilState(signUpLastnameState);

    const signInUser = async () =>{ 
        setIsLoading(true)

        try{
            const userData = await signIn({
                username: email,
                password
            })
            setUsername(userData.username)
            setFirstname(userData.firstname)
            setLastname(userData.lastname)

            setIsLoading(false);
            navigate('/dashboard');
        }catch(e){
            setIsLoading(false);
            console.log(e.message)
        }
    }

    return (
        <form>
            <PaytmInputField label="Email" id="email" placeholder="johndoe@example.com" value={email} setValue={setEmail}/>
            <PaytmInputField label="Password" id="password" placeholder="******" type="password" value={password} setValue={setPassword}/>

            <PaytmButton onClick={signInUser} isLoading={isLoading} label="Sign In" />
        </form>
    )
}