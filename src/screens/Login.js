import React, { Component } from 'react';
import './Login';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { api } from '../api';
import 'materialize-css/dist/css/materialize.min.css';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #badc58; 
    min-height: 100vh;
`;

const LoginBox = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    min-height: 60vh;
    min-width: 30%;
    padding: 2%;
    background: rgba(242, 242, 242, .6);
    border-radius: 15px;
    color: #777;
    h1 {
        font-size: 3rem;
        font-weight: 300;
        text-align: center;
        color: #777;
    }

    button{
        height: 50px;
        min-width: 200px;
    }
`;

const Input = styled.input`
    background: #777;
    height: 50px;
    border-bottom: 1px solid #fff;

    &::placeholder {
        color: #777;
    }
`;

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        email: null,
        password: null
    }

    async login() {
        const { email, password } = this.state
        try {
            const response = await api.post('/sessions', {email, password})
            const token = response.data.token !== undefined ? response.data.token : null

            console.log(token)
            
            if( token !== null ) {
                this.props.history.push('/inscritos')
            }

        } catch (error) {
            console.log(error)
        }
    }


    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        const {email, password} = this.state
        return (
            <Container>
                <LoginBox>
                    <h1>Login</h1>
                    <div className="input-field ">
                        <i className="material-icons prefix">account_circle</i>
                        <Input 
                            id="user" 
                            type="text" 
                            placeholder="usuario" name='email' 
                            value={email} 
                            onChange={e => this.handleChange(e)} 
                        />
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">lock</i>
                        <Input 
                            type="password" 
                            placeholder="Senha" 
                            name='password' 
                            value={password} 
                            onChange={e => this.handleChange(e)} 
                        />
                    </div>
                    <button className="btn waves-effect waves-light" onClick={() => this.login() } >Entrar
                    </button>
                </LoginBox>
            </Container>
            
        );
    }
}
