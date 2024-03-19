import React from 'react'

export const Alerts = ({ titulo, parrafo }) => {
    return (
        <div className="w-full mt-3 bg-[#F9FAFA] rounded-md p-16 py-10 flex flex-col items-center justify-center">
            <div className="cartelImg">
                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32"><path fill="#E4B56F" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12" /><path fill="#E4B56F" d="M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22" /></svg>
            </div>
            <h1 className='font-bold text-3xl text-center leading-8 text-[#4F575D] mt-3'>{titulo}</h1>
            <p className='font-light text-xl leading-7 text-[#4F575D] text-center'>{parrafo}</p>
        </div>
    )
}
