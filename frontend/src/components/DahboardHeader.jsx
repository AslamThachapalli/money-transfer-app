import { useRecoilValue } from "recoil";
import CircleAvatar from "./CircleAvatar";
import { signUpFirstnameState } from "../store/atom/SignUp";

export default function DashboardHeader() {
    const firstname = useRecoilValue(signUpFirstnameState);

    return (
        <>
            <div className="flex justify-between items-center px-4">
                <p className="font-bold text-xl">Payments App</p>

                <CircleAvatar
                    label={`${firstname[0]}`}
                    info={`Hello, ${firstname}`}
                    isFlipped={true} />
            </div>
            <hr className="my-2 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
        </>
    )
}