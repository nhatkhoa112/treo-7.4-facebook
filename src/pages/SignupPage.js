import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import authActions from '../redux/actions/auth.actions';
import {Redirect} from 'react-router-dom';

export default function LoginPage() {
    const auth = useSelector(state => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");

    const dispatch = useDispatch();
    const  handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.register(username, firstName, lastName, avatarUrl, email, password));
        setEmail("");
        setPassword("");
        setUsername("");
        setFirstName("");
        setLastName("");
        setAvatarUrl("");
    } 

    if(auth.loading){
        return <h1>Loading...</h1>
    }
    if(auth.isDirect){
        return  <Redirect to="/" />
    }


    return (
        <div className="signup-page container">
            <div className="signup-card" >
                <Form onSubmit={handleFormSubmit} className="form-card">
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Row>
                            <Col>
                            <Form.Control 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last name" />
                            </Col>          
                        </Row>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicAvatarUrl">
                        <Form.Label>Avatar Url</Form.Label>
                        <Form.Control 
                                value={avatarUrl}
                                onChange={(e) => setAvatarUrl(e.target.value)}
                                type="text" placeholder="Enter url" />
                    </Form.Group>
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
                    <Button 
                            onClick={handleFormSubmit}
                            variant="primary" type="submit">
                        Register
                    </Button>

                </Form>
            </div>
        </div>
    )

}
