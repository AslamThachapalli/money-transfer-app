import {  useRecoilStateLoadable, useRecoilValueLoadable } from "recoil"
import { balanceState } from "../store/atom/Balance"

export default function AvailableBalance() {
    return (
        <div className="flex items-center px-4">
            <p className="font-bold text-lg">Your Balance</p>
            <BalanceComponent/>
        </div>
    )
}

function BalanceComponent(){
    const balance = useRecoilValueLoadable(balanceState);

    switch(balance.state){
        case 'loading':
            return <p className="font-normal text-lg ml-4">Loading...</p>
        case 'hasValue':
            return <p className="font-semibold text-lg ml-4">{`$${balance.contents}`}</p>
        case 'hasError':
            return <p className="font-normal text-lg ml-4">Failed to load data</p>
    }
}
