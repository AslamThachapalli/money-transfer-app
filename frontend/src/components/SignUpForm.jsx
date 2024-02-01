import { useRecoilState } from "recoil";
import PaytmButton from "./PaytmButton";
import PaytmInputField from "./PaytmInputField";
import { signUpEmailState, signUpFirstnameState, signUpLastnameState, signUpPasswordState } from "../store/atom/SignUp";
import { useState } from "react";
import signUp from "../api/SignUp";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const [firstname, setFirstname] = useRecoilState(signUpFirstnameState);
    const [lastname, setLlastname] = useRecoilState(signUpLastnameState);
    const [email, setEmail] = useRecoilState(signUpEmailState);
    const [password, setPassword] = useRecoilState(signUpPasswordState);

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const signUpUser = async () => {
        setIsLoading(true);

        try {
            await signUp({
                firstname,
                lastname,
                password,
                username: email,
            })
            setIsLoading(false);
            navigate('/dashboard');
        } catch (e) {
            setIsLoading(false);
            console.log(e.message)
        }
    }

    return (
        <>
            <PaytmInputField label="First Name" id="firstname" placeholder="John" value={firstname} setValue={setFirstname} />
            <PaytmInputField label="Last Name" id="lastname" placeholder="Doe" value={lastname} setValue={setLlastname} />
            <PaytmInputField label="Email" id="email" placeholder="johndoe@example.com" value={email} setValue={setEmail} />
            <PaytmInputField label="Password" id="password" placeholder="******" type="password" value={password} setValue={setPassword} />

            <PaytmButton onClick={signUpUser} isLoading={isLoading} label="Sign Up" />
        </>
    )
}