import { useRecoilValue } from "recoil"
import { shouldRefetchBalanceState } from "../store/atom/Balance"
import { useEffect, useState } from "react";
import getBalance from "../api/Balance";

export default function AvailableBalance() {
    return (
        <div className="flex items-center px-4">
            <p className="font-bold text-lg">Your Balance</p>
            <BalanceComponent />
        </div>
    )
}

function BalanceComponent() {
    const refetchBalance = useRecoilValue(shouldRefetchBalanceState)
    const [balance, setBalance] = useState('loading');
    const [fetchStatus, setFetchStatus] = useState('loading');

    useEffect(() => {
        async function fetchBalance() {
            try {
                setFetchStatus('loading')
                const balance = await getBalance();
                setBalance(balance);

                setFetchStatus('hasValue')
            } catch (e) {
                setFetchStatus('hasError')
                throw e;
            }
        }

        fetchBalance();
    }, [refetchBalance])

    switch (fetchStatus) {
        case 'loading':
            return <p className="font-normal text-lg ml-4">Loading...</p>
        case 'hasValue':
            return <p className="font-semibold text-lg ml-4">{`$${balance}`}</p>
        case 'hasError':
            return <p className="font-normal text-lg ml-4">Failed to load data</p>
    }
}
