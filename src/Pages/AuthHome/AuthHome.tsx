/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, useLocation, useNavigate } from 'react-router'
import SideMenu from '../../Components/Menu/Menu'
import { useEffect } from 'react';
import { useAuth } from '../../Contexts/AuthContext';

type RedirectOptionsWithKey = { [key: string]: () => void }

export const AuthHome = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { stepAccess, isAuthenticated} = useAuth();

    useEffect(() => { 
        const optionsToRedirectUser: RedirectOptionsWithKey = {
            "initial": () => navigate('/preview'),
            "register": () => navigate('/register'),
            "login": () => navigate('/login'),
            'logged': () => {
                console.log("User logged ");
            }
        }
        optionsToRedirectUser[stepAccess]();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stepAccess])

    useEffect(() => {
        if ( pathname === '/' ) {
            return navigate('/preview'); 
        }           
    }, [])

    return (
        <div>
            {isAuthenticated && 
                <SideMenu />
            }
            <Outlet />
        </div>
    )
}
