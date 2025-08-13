import { useLocalStorage } from '@/app/hooks/setDataLocalStorage'
import React from 'react'

const Login = () => {
    const {setStoredValue, storedValue} = useLocalStorage("loginusuario", {username: "", password: ""})

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {id, value} = e.target

        setStoredValue({
            ...storedValue,
            [id]: value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("Data", storedValue);
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className='d-flex flex-column gap-2'>
        <label className='text-white' htmlFor="username">Username:</label>
        <input className='border-2 border-white text-white' type="text" value={storedValue.username} onChange={handleOnChange} id="username" name="username"/>
      </div>
      <div className='d-flex flex-column gap-2'>
        <label className='text-white' htmlFor="password">Senha:</label>
        <input className='border-2 border-white text-white' type="password" value={storedValue.password} onChange={handleOnChange} id="password" name="username"/>
      </div>
      <button className='border-2 border-white text-white' type="submit">Entrar</button>
    </form>
  )
}

export default Login
