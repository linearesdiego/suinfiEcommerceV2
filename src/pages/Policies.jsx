import React from 'react'
//Components imports
import { Navbar } from '../components/Navbar';
import PoliciesSearch from '../components/Policies/PoliciesSearch';
import PoliciesComp from '../components/Policies/PoliciesComp';

const Policies = () => {
  return (
    <div className='bg-[#E1E1E1] min-h-screen'>
        <Navbar/>
        <PoliciesSearch/>
        <PoliciesComp/>
    </div>
  )
}

export default Policies
