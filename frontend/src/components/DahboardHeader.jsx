import CircleAvatar from "./CircleAvatar";

export default function DashboardHeader() {
    return (
        <>
            <div className="flex justify-between items-center px-4">
                <p className="font-bold text-xl">Payments App</p>

                <CircleAvatar
                    label="JL"
                    info="Hello, User"
                    isFlipped={true} />
            </div>
            <hr className="my-2 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
        </>
    )
}