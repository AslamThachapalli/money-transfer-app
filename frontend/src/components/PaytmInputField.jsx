export default function PaytmInputField({ label, id, placeholder, type, withShadow , value, setValue}) {
    return (
        <div className="mb-0">
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>}
            <input className={`${withShadow ? 'shadow' : ''} appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id={id}
                type={type ?? 'text'}
                placeholder={placeholder} 
                value={value} 
                onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}