import { useRecoilState } from "recoil";
import PaytmButton from "./PaytmButton";
import PaytmInputField from "./PaytmInputField";
import { signUpEmailState, signUpFirstnameState, signUpLastnameState, signUpPasswordState } from "../store/atom/SignUp";

export default function SignUpForm() {
    const [firstname, setFirstname] = useRecoilState(signUpFirstnameState);
    const [lastname, setLlastname] = useRecoilState(signUpLastnameState);
    const [email, setEmail] = useRecoilState(signUpEmailState);
    const [password, setPassword] = useRecoilState(signUpPasswordState);

    return (
        <>
            <PaytmInputField label="First Name" id="firstname" placeholder="John" value={firstname} setValue={setFirstname}/>
            <PaytmInputField label="Last Name" id="lastname" placeholder="Doe" value={lastname} setValue={setLlastname}/>
            <PaytmInputField label="Email" id="email" placeholder="johndoe@example.com" value={email} setValue={setEmail}/>
            <PaytmInputField label="Password" id="password" placeholder="******" type="password" value={password} setValue={setPassword}/>

            <PaytmButton buttonState={''} label="Sign Up" />
        </>
    )
}