import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth';
import { fetchOneProfile } from '../../services/Perfil';

//images
//import group from '../../assets/Group 225.png';
import imgProfile from '../../assets/imgProfile.png';
export const Account = () => {
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
    <>
      <div className=" ml-2 mr-2 pl-2 md:pl-4 w-11/12 md:ml-10 md:mr-4">
        <div className="bg-white border border-stone-400 shadow-lg p-4 rounded-xl block md:flex items-center md:mt-8 mr-4 ml-2 mb-2 h-2/6 gap-6">
          <div className="w-auto h- m-1 rounded-full flex justify-center items-center">
            <img width={180} height={180} src={imgProfile} alt="Superpuesta" />
          </div>

          <div className="p-0">
            <div className="mb-6 md:ml-6">
              <h2 className="text-2xl md:text-4xl text-center md:text-start font-bold mb-2">
                {profile?.nombre} {profile?.apellido}
              </h2>
            </div>
            <div className="mt-0 md:ml-6">
              <p className="p-2 text-[#5D5D5D] text-center md:text-start">
                {profile?.email}
              </p>
            </div>
            {/* <div className="mt-0 ml-6">
              <p className="p-2 text-[#5D5D5D]">Córdoba Argentina</p>
            </div> */}
          </div>
        </div>

        <div className="md:ml-8">
          <div className="p-4 mt-2 font-bold text-2xl md:text-3xl">
            <h4>Información de la cuenta</h4>
          </div>
          <div className=" py-0 px-4 ">
            <h2 className="font-bold py-2 px-0 ">Nombre y apellido:</h2>
            <span>
              {profile?.nombre} {profile?.apellido}
            </span>
            <h2 className="font-bold py-2 px-0 mt-4">Telefono:</h2>
            <span className="mb-0">{profile?.celular}</span>
            <h2 className="font-bold py-2 px-0 mt-4">Mail:</h2>
            <span>{profile?.email}</span>
          </div>
        </div>
      </div>
    </>
  );
};
