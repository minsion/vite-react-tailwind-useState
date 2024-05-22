import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const handleClick = () => {
    setCount(count + 1)
  }
  const handleChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = () => {
    console.log(666, form)
  }
  return (
    <>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
      <div className='flex flex-col gap-y-2'>
        <input
          className='px-4 py-2'
          type="text"
          placeholder='first name'
          autoComplete='off'
          name='firstName'
          value={form.firstName}
          onChange={handleChangeInput}
        />
        <input
          className='px-4 py-2 mt-2'
          type="text"
          placeholder='last name'
          autoComplete='off'
          name='lastName'
          value={form.lastName}
          onChange={handleChangeInput}
        />
        <input
          className='px-4 py-2 mt-2'
          type="text"
          placeholder='email'
          autoComplete='off'
          name='email'
          value={form.email}
          onChange={handleChangeInput}
        />
        <input
          className='px-4 py-2 mt-2'
          type="text"
          placeholder='password'
          autoComplete='off'
          name='password'
          value={form.password}
          onChange={handleChangeInput}
        />
        <button
          className='mt-2 bg-blue-500 text-white'
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </>
  )
}

export default App
