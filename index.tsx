import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import useRandomJoke from '../components/useRandomjoke'
const Home: NextPage = () =>{

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, SetFirstName] = useState('')
  const [lastName, SetLastName] = useState('')

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    SetFirstName(firstNameRef.current.value);
    SetLastName(lastNameRef.current.value);
  }

    return (
      <div className='text-gray-900 text-xl text-center spacing-y-4'>
        <p className='text-2xl'>Joke Generator</p>
        {joke}
        <form>
          <input placeholder='First Name' ref={firstNameRef} />
          <input placeholder='Last Name'  ref={lastNameRef}/>
          <button className='border rounded-md' onClick={generateJoke}>Generate Joke</button>
        </form>
      </div>
    )
}

export default Home
