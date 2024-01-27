import CircleAvatar from "./CircleAvatar";
import PaytmButton from "./PaytmButton";
import PaytmInputField from "./PaytmInputField";

export default function UsersList() {
    return (
        <div className="px-4 mt-3">
            <p className="font-bold text-lg">Users</p>

            <PaytmInputField
                id='filter'
                placeholder='Search Users...' />

            <div className="flex justify-between items-center">
                <CircleAvatar
                    label="JL"
                    info="User 1" />

                <PaytmButton
                    label="Send Money"
                    isSmallButton={true} />
            </div>
        </div>
    )
}