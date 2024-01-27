export default function PaytmButton({ label, isSmallButton, btnColor, hoverColor, fontWeight}) {
    return (
        <button className={`${isSmallButton ? '' : 'w-full'} ${btnColor ?? 'bg-black'} hover:${hoverColor ?? 'bg-gray-900'} text-white ${fontWeight ?? 'font-bold'} py-2 px-4 my-4 rounded focus:outline-none focus:shadow-outline`} type="button">
            {label}
        </button>
    )
}