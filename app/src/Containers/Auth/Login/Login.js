import React, { useRef } from 'react';
import InputField from '../../../Components/InputField/InputField';
import Button from '../../../Components/UI/Button/Button';
import ErrorDisplay from '../../../Components/UI/ErrorDisplay/ErrorDisplay';
import { ProcessLoader } from '../../../Components/UI/Loader/Loader';

const Login = ({ loading, error, onLogin }) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(emailRef.current.value, passwordRef.current.value);
    };
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <InputField type="email" placeholder="Enter your email" ref={emailRef} />
                <InputField type="password" placeholder="Enter your password" ref={passwordRef} />
                <Button>{loading ? <ProcessLoader /> : 'Login'}</Button>
                <ErrorDisplay error={error} />
            </form>
        </>
    );
};

export default Login;
