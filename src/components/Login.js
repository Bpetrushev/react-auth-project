import React, { useRef, useState } from 'react';
import { Card, Form, Input, Label, Button, Alert } from '../UI/UI';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setError('');
            await login(emailRef.current.value, passwordRef.current.value);
            setLoading(true);
            history.push('/');
        } catch (error){
            console.log(error);
            setError('Failed to login');
        }

        setLoading(false);
    }

    return (
        <>
            <Card>
                <h2 style={{textAlign: 'center'}}>Login</h2>
                {error && <Alert addClass="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor='email'>Email *</Label>
                    <Input id='email' type='email' required ref={emailRef} />

                    <Label htmlFor='password'>Password *</Label>
                    <Input id='password' type='password' required ref={passwordRef}/>

                    <Button disabled={loading}>Log In</Button>
                </Form>
            </Card>
            <div style={{marginTop: '15px'}}>
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    );
}
