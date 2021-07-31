import React, { useRef } from 'react';
import InputField from '../../../Components/InputField/InputField';
import Button from '../../../Components/UI/Button/Button';
import ErrorDisplay from '../../../Components/UI/ErrorDisplay/ErrorDisplay';
import { ProcessLoader } from '../../../Components/UI/Loader/Loader';

const Signup = ({ loading, error, onSignup }) => {
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confPasswordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup(
            usernameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
            confPasswordRef.current.value
        );
    };

    return (
        <>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <InputField type="text" placeholder="Enter username" ref={usernameRef} />
                <InputField type="email" placeholder="Enter email address" ref={emailRef} />
                <InputField type="password" placeholder="Enter password" ref={passwordRef} />
                <InputField type="password" placeholder="Confirm password" ref={confPasswordRef} />
                <Button> {loading ? <ProcessLoader /> : 'Signup'} </Button>
                <ErrorDisplay error={error} />
            </form>
        </>
    );
};

export default Signup;
