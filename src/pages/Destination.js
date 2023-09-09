import React from 'react'
import Header from '../components/Header'
import './css/Destination.css'
import DestinationList from '../components/DestinationList'

export default function Destination () {
  const isDestinationPage = true;
  return (
    <>
      <main className='destination'>
        <Header 
          isDestination={isDestinationPage}
        />
        <DestinationList />
      </main>
    </>
  );
}
