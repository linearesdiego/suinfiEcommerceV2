import React from 'react';
import { Account } from '../../components/profile/Account';
import { Navbar } from '../../components/Navbar';
import { AsideProfile } from '../../components/profile/AsideProfile';

export const AccountPage = () => {
  return (
    <div>
      <Navbar />
      <AsideProfile />
    </div>
  );
};
