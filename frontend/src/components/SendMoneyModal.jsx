import React from "react";
import CircleAvatar from "./CircleAvatar";
import PaytmInputField from "./PaytmInputField";
import PaytmButton from "./PaytmButton";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { initiateTransactionState, toUserIdState, transferAmountState } from "../store/atom/UserList";
import transferMoney from "../api/Transfer";
import { shouldRefetchBalanceState } from "../store/atom/Balance";

export default function SendMoneyModal() {
    const setInitiateTransaction = useSetRecoilState(initiateTransactionState);
    const [amount, setAmount] = useRecoilState(transferAmountState);
    const toUserId = useRecoilValue(toUserIdState)
    const resetBalance = useRecoilState(shouldRefetchBalanceState)

    async function sendMoney() {
        try {
            await transferMoney({
                to: toUserId,
                amount
            })

            setInitiateTransaction(false)
            resetBalance((state) => !state)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-50" onClick={() => setInitiateTransaction(false)}></div>

            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="m-4">
                        <p className="text-3xl font-bold text-center mb-16">Send Money</p>

                        <div>
                            <CircleAvatar
                                label="JL"
                                info="Friend's Name"
                                bgColor="bg-green-500"
                                labelColor="text-white" />

                            <PaytmInputField
                                label="Amount (in Rs)"
                                id="amount"
                                placeholder="Enter Amount"
                                value={amount}
                                setValue={setAmount} />

                            <PaytmButton
                                label="Initiate Transfer"
                                btnColor="bg-green-500"
                                hoverColor="bg-green-400"
                                fontWeight="font-medium" 
                                onClick={sendMoney}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}  