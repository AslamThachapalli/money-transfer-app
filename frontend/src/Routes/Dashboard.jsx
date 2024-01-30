import SendMoneyModal from '../components/SendMoneyModal'
import DashboardHeader from '../components/DahboardHeader'
import AvailableBalance from '../components/AvailableBalance'
import UsersList from '../components/UsersList'

export default function Dashboard() {
    return (
        <div className="bg-black w-full flex h-screen items-center justify-center">
            <div className="bg-white h-screen w-full lg:w-8/12 py-6">

                <DashboardHeader />
                <AvailableBalance />

                <UsersList />

                {/* <SendMoneyModal></SendMoneyModal> */}

            </div>
        </div>
    )
}