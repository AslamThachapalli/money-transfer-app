import SendMoneyModal from '../components/SendMoneyModal'
import DashboardHeader from '../components/DahboardHeader'
import AvailableBalance from '../components/AvailableBalance'
import UsersList from '../components/UsersList'
import { useRecoilValue } from 'recoil'
import { initiateTransactionState } from '../store/atom/UserList'

export default function Dashboard() {
    return (
        <div className="bg-black w-full flex h-screen items-center justify-center">
            <div className="bg-white h-screen w-full lg:w-8/12 py-6">

                <DashboardHeader />
                <AvailableBalance />

                <UsersList />

                <DisplayModal/>
            </div>
        </div>
    )
}

function DisplayModal(){
    const showModal = useRecoilValue(initiateTransactionState);

    if(showModal){
        return <SendMoneyModal/>
    }else {
        return null;
    }
}