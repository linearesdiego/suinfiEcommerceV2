'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/Auth';
import Image from 'next/image';
import { fetchOneProfile } from '@/services/Perfil';
import { useRouter } from 'next/navigation';

export const Account = () => {
  const [profile, setProfile] = useState({} as any);
  const { dataLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await fetchOneProfile(dataLogin.payload.userId);
        setProfile(profileData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <div className="pl-4 w-11/12 ml-10 mr-4">
        <div className="bg-white border shadow-lg p-4 rounded-xl flex items-center mt-8 mr-4 h-2/6">
          <div className="w-[220px] h-[220px] rounded-full bg-[#DDB1DC] flex justify-center items-end">
            <Image
              width={180}
              height={180}
              src="/Group 225.png"
              alt="Superpuesta"
            />
          </div>

          <div className="p-0">
            <div className="mb-6 ml-6">
              <h2 className="text-4xl font-bold mb-2">
                {profile.nombre} {profile.apellido}
              </h2>
            </div>
            <div className="mt-0 ml-6">
              <p className="p-2 text-[#5D5D5D]">{profile.email}</p>
            </div>
            {/* <div className="mt-0 ml-6">
              <p className="p-2 text-[#5D5D5D]">Córdoba Argentina</p>
            </div> */}
          </div>
        </div>

        <div className="ml-8">
          <div className="p-4 mt-2 font-bold text-3xl">
            <h4>Información de la cuenta</h4>
          </div>
          <div className=" py-0 px-4 ">
            <h2 className="font-bold py-2 px-0 ">Nombre y apellido:</h2>
            <span>
              {profile.nombre} {profile.apellido}
            </span>
            <h2 className="font-bold py-2 px-0 mt-4">Telefono:</h2>
            <span className="mb-0">{profile.celular}</span>
            <h2 className="font-bold py-2 px-0 mt-4">Mail:</h2>
            <span>{profile.email}</span>
          </div>
        </div>
      </div>
    </>
  );
};
