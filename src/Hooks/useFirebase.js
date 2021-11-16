import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Pages/LogIn/Firebase/Firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isloading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
//---------------------------------
    const signinGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })//then
            .finally(() => setIsLoading(false));

    }//signinGoogle
//---------------------------------
     //observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });//onAuthChange
        return () => unsubscribed;
    }, [])//useEffect
//---------------------------------   
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(result => { })//then
        .finally(() => setIsLoading(false))
    }//logOut
//---------------------------------
    return {
        user,
        isloading,
        signinGoogle,
        logOut
    }//return
}//useFirebase

export default useFirebase;

//rafsun_2003218041