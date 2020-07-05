import React, { useState } from "react"

export default function PreQuiz({proceed, ...props}) {

  const [showButton, setShowButton] = useState(false)

  setTimeout(() => {
    setShowButton(true)
  }, 30000)

  return (
    <>
      <h1>Watch The New Wurld Video To Take The Quiz</h1>
      {
        showButton ?
          <button onClick={proceed} className="btn btn-primary">Play Now!</button>
        :
        ""
      }
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title="Wurld Video" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
      </div>
    </>
  )
}