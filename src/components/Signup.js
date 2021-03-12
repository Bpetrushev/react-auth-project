import React, { Component } from 'react';
import { Card, Form, Input, Label, Button, Alert } from '../UI/UI';
import {useAuth} from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
    emailRef = React.createRef();
    passwordRef = React.createRef();
    passwordConfirmRef = React.createRef();
    state = {
        error: '',
        loading: false,
        someTest: '',
    }
    // const { signup } = useAuth();

     handleSubmit = async (event) => {
        event.preventDefault();

        if (this.passwordRef.current.value !== this.passwordConfirmRef.current.value) {
            return this.setState({error: 'Password do not match!'});
        }

        try {
            this.setState({error: ''});
            // await signup(this.emailRef.current.value, this.passwordRef.current.value);
            this.setState({loading: true});
        } catch (error){
            this.setState({error: 'Failed to create an account'});
        }

        this.setState({loading: false});
    }

    render() {
        return (
            <>
                <Card>
                    {console.log(this.state)}
                    <h2 style={{textAlign: 'center'}}>Sign Up</h2>
                    {this.state.error && <Alert addClass="danger">{this.state.error}</Alert>}
                    <Form onSubmit={this.handleSubmit}>
                        <Label htmlFor='email'>Email *</Label>
                        <Input id='email' type='email' required ref={this.emailRef} />

                        <Label htmlFor='password'>Password *</Label>
                        <Input id='password' type='password' required ref={this.passwordRef}/>

                        <Label htmlFor='passwordConfirm'>Password Confirm *</Label>
                        <Input id='passwordConfirm' type='password' required ref={this.passwordConfirmRef}/>

                        <Button disabled={this.loading}>Sign Up</Button>
                    </Form>
                </Card>
                <div style={{marginTop: '15px'}}>
                    Already have and account? <Link to='/login'>Login</Link>
                </div>
            </>
        );
    }
    // return (
    //     <>
    //         <Card>
    //             <h2 style={{textAlign: 'center'}}>Sign Up</h2>
    //             {error && <Alert addClass="danger">{error}</Alert>}
    //             <Form onSubmit={handleSubmit}>
    //                 <Label htmlFor='email'>Email *</Label>
    //                 <Input id='email' type='email' required ref={emailRef} />

    //                 <Label htmlFor='password'>Password *</Label>
    //                 <Input id='password' type='password' required ref={passwordRef}/>

    //                 <Label htmlFor='passwordConfirm'>Password Confirm *</Label>
    //                 <Input id='passwordConfirm' type='password' required ref={passwordConfirmRef}/>

    //                 <Button disabled={loading}>Sign Up</Button>
    //             </Form>
    //         </Card>
    //         <div style={{marginTop: '15px'}}>
    //             Already have and account? <Link to='/login'>Login</Link>
    //         </div>
    //     </>
    // );
}
