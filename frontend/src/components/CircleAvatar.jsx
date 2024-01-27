export default function CircleAvatar({label, info, isFlipped, bgColor, labelColor}) {
    return (
        <div className="flex items-center my-2">
            {isFlipped && <p className={`font-semibold text-lg mr-4`}>{info}</p>}
            <div class={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden ${bgColor ?? 'bg-gray-100'} rounded-full mr-4`}>
                <span class={`font-medium ${labelColor ?? ''}`}>{label}</span>
            </div>
            {!isFlipped && <p className={`font-semibold text-lg`}>{info}</p>}
        </div>
    )
}