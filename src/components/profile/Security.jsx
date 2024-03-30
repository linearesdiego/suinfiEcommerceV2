import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth';
import { fetchOneProfile } from '../../services/Perfil';

export const Security = () => {
  const [profile, setProfile] = useState();
  const { dataLogin } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await fetchOneProfile(dataLogin?.payload?.userId);
        setProfile(profileData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className=" ml-2 mr-2 pl-2 md:pl-4 w-11/12 md:ml-10 md:mr-4 h-5/6">
      <div className="md:p-4 mt-2 font-bold text-2xl md:text-3xl">
        <h4 className="p-2 md:p-0">Seguridad de tu cuenta</h4>
      </div>
      <div className="bg-white border  border-stone-400 shadow-lg  p-4 rounded-xl md:mt-4 ml-2 mr-4 h-full">
        <div className="m-auto md:ml-4">
          <div className=" py-0 md:px-4 ">
            <h2 className="font-bold py-2 px-0 ">Mail</h2>
            <span>{profile?.email}</span>
            <h2 className="font-bold py-2 px-0 mt-4">Clave</h2>
            <span className="mb-0">**********</span>
          </div>
        </div>
      </div>
    </div>
  );
};
