import React from 'react';
import useAuth from '../../../Context/useAuth';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const {signinGoogle } = useFirebase();
    return (
        <div>
            <h2>please log in</h2>
            <button onClick={signinGoogle} className='btn btn-warning get-service'>Google sign in</button>
        </div>
    );
};

export default Login;