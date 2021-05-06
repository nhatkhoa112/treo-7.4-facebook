import React, {useState} from 'react';
import {Form, Button, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import authActions from '../redux/actions/auth.actions';
import {Redirect} from 'react-router-dom';


export default function LoginPage() {
    const auth = useSelector(state => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.userLogin(email, password))
    }

    if(auth.loading){
        return <h1>Loading</h1>
    }

    if(auth.isDirect){
        return <Redirect to='/' />
    }


    return (
        <div className="login-card" >
            <Form onSubmit={handleFormSubmit}  className="form-card">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Nav.Link as={Link} to="/signup" className="link" >Register if you don't have account</Nav.Link>
                <Button 
                    onClick={handleFormSubmit}
                    variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    )

}
