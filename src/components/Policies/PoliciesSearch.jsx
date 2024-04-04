import React from 'react';

const PoliciesSearch = () => {
  return (
    <div>
      <div className="w-full flex justify-center flex-col ">
        <div className='max-w-[1500px]  mx-auto'>

          <div className='flex flex-row items-center justify-start py-5'>
         <p className='text-[#D04BC7]'>Ayuda</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 24 24"><path fill="#D04BC7" d="m15.146 12.354l-5.792 5.792a.5.5 0 0 1-.854-.353V6.207a.5.5 0 0 1 .854-.353l5.792 5.792a.5.5 0 0 1 0 .708"/></svg>
        <p>Contenidos que infrinjan la propiedad intelectual</p>
          </div>
        <div className=' flex flex-row gap-2'>

          <input className="border w-[735px] h-[45px] rounded-lg" type="text" placeholder="        Buscar en ayuda" />
          <div className='w-[110px] h-[45px] border rounded-lg px-5 bg-[#D9D9D9] opacity-50 justify-center items-center flex'>
          <p> Buscar</p>
          </div>
        </div>
          

          
        </div>
      </div>
    </div>
  );
};

export default PoliciesSearch;
