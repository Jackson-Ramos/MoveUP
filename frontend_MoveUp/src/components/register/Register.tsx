import './register.css'

function Register() {
  return (
    <>
    <div className='container'>
      <section className='login'>
        <h1>Entrar</h1>
        <p>Já Possui uma conta</p>
        <button>Entrar</button>
      </section>

      <section className='register'>
        <h1 className='title'>Cadastre-se</h1>

        <form >
          <input
            className='input-user input-register'
            type='text'
            placeholder='Nome'
            required
          />

          <input
            className='input-email input-register'
            type='email'
            placeholder='Email'
            required
          />

          <input
            className='input-password input-register'
            type='password'
            placeholder='Senha'
            required
          />

          <button id='send' type='submit'>
            Enviar
          </button>
        </form>
      </section>
      </div>
    </>
  )
}

export default Register
