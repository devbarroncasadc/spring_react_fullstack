import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';


import React, { useState } from 'react';
import { useAuthDispatch } from '../context/authContext';
import { loginUser } from '../services/UserService';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});
    const [sendingData, setSendingData] = useState(false);

    const authDispatch = useAuthDispatch();

    const register = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            setSendingData(true);
            const res = await loginUser(email, password);
            const token = res.data.token;
            authDispatch({
                type: 'login',
                token
            });
            setSendingData(false);
        } catch (errors: any) {
            setErrors(errors.response.data.errors);
            setSendingData(false);
        }
    }

    return (
        <Container>
            <Row>
                <Col lg="5" md="10" sm="10" className='mx-auto'>
                    <Card className='mt-5'>
                        <Card.Body>
                            <h4>Crear cuenta</h4><hr />

                            <Form onSubmit={register} >
                                <Form.Group className='mb-3' controlId='name'>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        isInvalid={!!errors?.name}
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        type='text' placeholder='e.g. John Doe'></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='email'>
                                    <Form.Label>Correo eletronico</Form.Label>
                                    <Form.Control
                                        isInvalid={!!errors?.email}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        type='email' placeholder='john@gmail.com'></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        isInvalid={!!errors?.password}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        type='password' placeholder='******'></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button type='submit' >
                                    {sendingData ? <>
                                        <Spinner
                                            animation='border'
                                            as="span"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        ></Spinner>&nbsp;
                                        <span>Creando cuenta...</span>
                                    </> :
                                        <>Crear cuenta</>
                                    }
                                </Button>

                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default Register;