import { useNavigate } from "react-router-dom";
import PreLoginTemplate from "../components/PreLoginTemplate";
import SignInForm from "../components/SignInForm";

export default function SignIn(){
    const navigate = useNavigate();

    return (
        <PreLoginTemplate
        heading="Sign In"
        subHeading="Enter your credentials to access your account"
        children={<SignInForm/>}
        footerLeadingInfoText="Don't have an account?"
        footerClickableText="Sign Up"
        onClickFooterText={() => navigate("/signup")}
        />
    )
}