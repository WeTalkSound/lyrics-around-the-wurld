import React, { useState } from "react"
import Questions from "../../App/Entities/Questions/Questions"
import './Quiz.css'
import PreQuiz from "./PreQuiz"

export default function Quiz() {

  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <div className="col-10 offset-1">
      {
        showQuiz ?
          <Questions />
        :
          <PreQuiz proceed={() => setShowQuiz(true)} />
      }
    </div>
  )
}