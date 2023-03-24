import './style.scss'
import logo from '../../image/brand/Logo NFS.svg'
import NfsEscrita from '../../image/brand/NFS-ESCRITO.svg'

import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';



function LoginPage() {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    login(email, password);
    setLoading(false)
  }


  return (
    <div className='login-page'>
      <div className="login-box">
        <img className='logo' src={logo} alt="Logo" />

        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              autoFocus
              required
              id="email"
            />
            <label>Login</label>
          </div>

          <div className="user-box" >
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              id="password"
            />
            <label>Senha</label>
          </div>

          <div className='user-submit'>
            <button disabled={loading} className='button'>
              Entrar
            </button>
          </div>

          <div className="login-footer">
            <img className='logo-group' src={NfsEscrita} alt="LOGO GROUP" />
            <a className='link1' href="/recovery-password">Esqueci minha senha</a>
          </div>
        </form>

      </div>
    </div>
  )

}
export default LoginPage;