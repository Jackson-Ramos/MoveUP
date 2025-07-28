import './Login.css'
import { useState } from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [erro, setErro] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      })

      const token = response.data.token

      // Salva no localStorage
      localStorage.setItem('token', token)

      // Redireciona para a página principal
      window.location.href = '/dashboard'
    } catch (err: any) {
      setErro(err.response?.data?.mensagem || 'Erro ao fazer login')
    }
  }

  return (
    <div className='container'>
      <section className='register'>
        <h1>Cadastre-se</h1>
        <p>Cadastre-se e tenha acesso a recursos incríveis</p>
        <button>Quero me cadastrar</button>
      </section>

      <section className='login'>
        <h1 className='title'>Bem-vindo de volta</h1>

        <form onSubmit={handleLogin}>
          <input
            className='input-email input-login'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className='input-user input-login'
            type='password'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div id='forgotten-and-checkbox'>
            <div>
              <input type='checkbox' />
              <span>Mantenha-me conectado</span>
            </div>
            <a href='' target='_blank' className='link'>
              Esqueceu a senha?
            </a>
          </div>

          {erro && <p style={{ color: 'red' }}>{erro}</p>}

          <button id='send' type='submit'>
            Entrar
          </button>
        </form>
      </section>
    </div>
  )
}

export default Login
