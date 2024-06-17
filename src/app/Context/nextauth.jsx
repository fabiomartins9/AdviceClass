'use client'

import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/navigation" // Importe o hook useRouter
import firebase from '@/app/services/firebaseConnection';

export const AuthContext = createContext({})



function AuthProvider({ children }) { // Adicione router como uma propriedade
    const router = useRouter()
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('SistemaUser');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            } else {
                setLoading(false);
            }
        }
        loadStorage();
    }, []);

    async function signIn(email, pass) {
        setLoadingAuth(true);
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, pass);
            const { uid, email: userEmail } = response.user;
            const userData = { uid, email: userEmail };
            setUser(userData);
            storageUser(userData);
            setLoadingAuth(false);
            router.push('/downloads'); // Exemplo de redirecionamento após login
        } catch (error) {
            console.log(error);
            setLoadingAuth(false);
        }
    }

    async function storageUser(data) {
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    async function signOut() {
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null);
        router.push('/'); // Exemplo de redirecionamento após logout
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;


