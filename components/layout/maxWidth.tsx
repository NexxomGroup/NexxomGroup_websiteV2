import React, { ReactNode } from 'react'

const MaxWidth = ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
        <div className={ "z-40 relative w-full flex justify-center px-8"}>
            <div className={`${className} w-full max-w-[1500px] `}>
                {children}
            </div>



        </div>
    )
}

export default MaxWidth