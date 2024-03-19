import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const redirect = async () => {
            await navigate('/profile/account');
        };
        redirect();
    }, []);
    return (
        <></>
    )
}
