import React, { useState } from 'react'
import { Button } from '@material-ui/core'

const Words = ({ allWords, goodWords, nick, question }) => {
	const [ pickedWords, setPickedWords ] = useState([])
	const [ checkAnswers, setCheckAnswers ] = useState(false)
	const [ finishGame, setFinishGame ] = useState(false)
	const correctAnswers = pickedWords.filter((word) => goodWords.includes(word))
	const wrongAnswers = pickedWords.filter((word) => !goodWords.includes(word))
	const correctAnswersNotPicked = goodWords.filter((word) => !pickedWords.includes(word))
	const score = correctAnswers.length * 2 - (wrongAnswers.length + correctAnswersNotPicked.length)

	const wordHandleClick = (word) => {
		if (!checkAnswers) {
			if (!pickedWords.includes(word)) {
				setPickedWords((pickedWords) => [ ...pickedWords, word ])
			} else {
				const pickedWordsCopy = pickedWords
				const newPickedWords = pickedWordsCopy.filter((pickedWord) => pickedWord !== word)
				setPickedWords(newPickedWords)
			}
		}
	}

	const btnHandleClick = () => {
		setCheckAnswers(true)
	}

	const finishGameHandleClick = () => {
		setFinishGame(true)
	}

	return (
		<div className="main-content">
			{finishGame ? (
				<div className="finish-game-container">
					<h2 className="finish-game">
						{`${score <= 0 ? 'Try next time' : 'Congratulations'}`}, {nick}
					</h2>
					<h2 className="finish-game">Your score:</h2>
					<h3 className="finish-game score">{score} points</h3>
				</div>
			) : (
				<div>
					<div className="question">{question}</div>
					<div className="all-words-wrapper">
						{allWords.map((word) => (
							<div
								key={word}
								className={`word ${pickedWords.includes(word) ? 'active' : ''}  ${checkAnswers
									? correctAnswers.includes(word)
										? 'correct'
										: wrongAnswers.includes(word) ||
											(checkAnswers && correctAnswersNotPicked.includes(word))
											? 'wrong'
											: null
									: 'picking-active'}`}
								onClick={() => wordHandleClick(word)}
							>
								{checkAnswers && pickedWords.includes(word) ? (
									<div className={`result ${correctAnswers.includes(word) ? 'correct' : 'wrong'}`}>
										{correctAnswers.includes(word) ? 'Good' : 'Bad'}
									</div>
								) : null}
								{checkAnswers && correctAnswersNotPicked.includes(word) ? (
									<div className="wrong result">Bad</div>
								) : null}
								<span className="word-content">{word}</span>
							</div>
						))}
					</div>
				</div>
			)}

			{checkAnswers ? !finishGame ? (
				<Button
					variant="outlined"
					color="primary"
					onClick={finishGameHandleClick}
					className="btn btn-finish-game"
				>
					finish game
				</Button>
			) : null : (
				<Button variant="outlined" color="primary" onClick={btnHandleClick} className="btn btn-check-answers">
					check answers
				</Button>
			)}
		</div>
	)
}

export default Words
