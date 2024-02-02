import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import CircleAvatar from "./CircleAvatar";
import PaytmButton from "./PaytmButton";
import PaytmInputField from "./PaytmInputField";
import { filterState, initiateTransactionState, toUserIdState, usersSelectorState } from "../store/atom/UserList";

export default function UsersList() {
    return (
        <div className="px-4 mt-3">
            <p className="font-bold text-lg">Users</p>

            <FilterField />
            <AllUsers />
        </div>
    )
}

function FilterField() {
    const [filterValue, setFilterValue] = useRecoilState(filterState);

    return (
        <PaytmInputField
            id='filter'
            value={filterValue}
            placeholder='Search Users...'
            setValue={setFilterValue} />
    )
}

function AllUsers() {
    const users = useRecoilValueLoadable(usersSelectorState);
    const setInitiateTransaction = useSetRecoilState(initiateTransactionState);
    const setUserId = useSetRecoilState(toUserIdState)

    switch (users.state) {
        case 'loading':
            return <div className="flex justify-center mt-6">Loading...</div>
        case 'hasValue':
            return users.map((user) => {
                <div className="flex justify-between items-center">
                    <CircleAvatar
                        label={`${user.firstname[0]}`}
                        info={`${user.firstname}`} />

                    <PaytmButton
                        label="Send Money"
                        isSmallButton={true} />
                </div>
            });
        case 'hasError':
            // return <div className="flex justify-center mt-6">Error Loading User Data</div>
            return <div className="flex justify-between items-center">
                <CircleAvatar
                    label={`JD`}
                    info={`master`} />

                <PaytmButton
                    label="Send Money"
                    isSmallButton={true} 
                    onClick={() => {
                        setInitiateTransaction(true);
                        setUserId('123');
                    }}/>
            </div>
    }
}