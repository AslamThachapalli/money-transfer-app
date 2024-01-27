import PaytmButton from "./PaytmButton";
import PaytmInputField from "./PaytmInputField";

export default function SignUpForm() {
    return (
        <form>
            <PaytmInputField label="First Name" id="firstname" placeholder="John" />
            <PaytmInputField label="Last Name" id="lastname" placeholder="Doe" />
            <PaytmInputField label="Email" id="email" placeholder="johndoe@example.com" />
            <PaytmInputField label="Password" id="password" placeholder="******" type="password" />

            <PaytmButton label="Sign Up" />
        </form>
    )
}