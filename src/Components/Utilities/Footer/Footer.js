import React from 'react'
import appStoreImg from "./app-store.png"
import playStoreImg from "./play-store.png"
import homeImage from './home-image.png'

export default function Footer() {
  return (
    <>
    <footer className="footer fixed-bottom">
      <div className="">
        <h5 className="footertext font-weight-bold">#LyricsAroundTheWurld</h5>
      </div>
      <div className="footerbtns">
        Powered by <a href="https://wtxtra.agency">WTXtra</a>
      </div>
    </footer>
    </>
  )
}