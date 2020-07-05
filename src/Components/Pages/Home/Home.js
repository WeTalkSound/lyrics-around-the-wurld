import React from 'react'
import Button from '../../Utilities/Button/Button'

export default function Home() {
  return (
    <>
      <div className="col-10 offset-1 justify-content-center">
        <div className="firstcon text-center justify-content-center">
          
          <h1>Lyrics Around The Wurld Challenge</h1>
          <h4>Do you know every lyric to <i>Wayo</i>?</h4>
          <p>Prove it by taking the challenge!</p>
          <Button linkTo="/quiz">Get Started</Button>
        </div>
      </div>
    </>
  )
}