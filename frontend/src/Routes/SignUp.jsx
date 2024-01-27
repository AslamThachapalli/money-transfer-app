import { useNavigate } from "react-router-dom";
import PreLoginTemplate from "../components/PreLoginTemplate";
import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
    const navigate = useNavigate();

    return (
        <PreLoginTemplate
        heading="Sign Up"
        subHeading="Enter your information to create an account"
        children={<SignUpForm/>}
        footerLeadingInfoText="Already have an Account?"
        footerClickableText="Login"
        onClickFooterText={() => navigate("/signin")}
        />
    )
}