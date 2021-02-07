import React, { useState } from 'react'
import Words from '../components/Words'
import { useForm } from 'react-hook-form'
import { Button } from '@material-ui/core'

const Game = ({ categories }) => {
	const category = categories[Math.floor(Math.random() * categories.length)],
		allWords = category.all_words,
		goodWords = category.good_words,
		question = category.question,
		[ startGame, setStartGame ] = useState(false),
		[ userNick, setUserNick ] = useState(''),
		{ handleSubmit, register } = useForm()

	const onSubmit = ({ nick }) => {
		setUserNick(nick)
		setStartGame(true)
	}

	return (
		<div>
			{startGame ? (
				<div>
					<Words allWords={allWords} goodWords={goodWords} nick={userNick} question={question} />
				</div>
			) : (
				<div className="game-form">
					<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
						<h3 className="form-title">Wordcloud game</h3>
						<input
							className="input-form"
							name="nick"
							ref={register({ required: true, minLength: 2 })}
							placeholder="Enter your nickname here..."
							required
						/>

						<Button variant="outlined" color="primary" type="submit" className="cart-btn form-cart-btn">
							play
						</Button>
					</form>
				</div>
			)}
		</div>
	)
}

export default Game
