'use client'

import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/navigation"; // Importe o hook useRouter
import firebase from '@/app/services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Configura a persistência de sessão ao carregar o componente
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                // Verifica se o usuário está autenticado ao iniciar a aplicação
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        const { uid, email } = user;
                        setUser({ uid, email });
                    }
                    setLoading(false);
                });
            })
            .catch((error) => {
                console.error("Erro ao definir persistência da sessão:", error);
                setLoading(false);
            });
    }, []);

    async function signIn(email, pass) {
        setLoadingAuth(true);
        try {
            // Login do usuário com email e senha
            const response = await firebase.auth().signInWithEmailAndPassword(email, pass);
            const { uid, email: userEmail } = response.user;
            const userData = { uid, email: userEmail };
            setUser(userData);
            setLoadingAuth(false);
            router.push('/downloads'); // Exemplo de redirecionamento após login
        } catch (error) {
            console.log("Erro ao fazer login:", error);
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await firebase.auth().signOut();
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
