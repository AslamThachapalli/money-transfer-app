export default function PreLoginTemplate({heading, subHeading, children, footerLeadingInfoText, footerClickableText, onClickFooterText}){
    return (
        <div className="bg-black w-full flex h-screen items-center justify-center">
            <div className="bg-white w-full md:w-2/4 lg:w-4/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <p className="flex justify-center text-2xl font-semibold">
                    {heading}
                </p>
                <p className="flex justify-center text-base font-normal text-center text-slate-500 mb-6">
                    {subHeading}
                </p>
                {children}

                <p className="flex justify-center text-sm font-normal text-center">
                    {footerLeadingInfoText}<a className="underline ml-2 hover:cursor-pointer" onClick={onClickFooterText}>{footerClickableText}</a>
                </p>
            </div>
        </div>
    )
}