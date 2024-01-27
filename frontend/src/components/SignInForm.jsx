import PaytmButton from "./PaytmButton";
import PaytmInputField from "./PaytmInputField"; 

export default function SignInForm(){
    return (
        <form>
                    <PaytmInputField label="Email" id="email" placeholder="johndoe@example.com" />
                    <PaytmInputField label="Password" id="password" placeholder="******" type="password" />

                    <PaytmButton label="Sign In"/>
                </form>
    )
}