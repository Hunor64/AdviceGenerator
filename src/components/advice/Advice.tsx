import { useState, useEffect } from "react"
import "./Advice.css"

const Advice = () => {
	const [advice, setAdvice] = useState("")
	const [adviceId, setAdviceId] = useState(0)
	const fetchAdvice = async () => {
		try {
			const response = await fetch("https://api.adviceslip.com/advice")
			const data = await response.json()
			setAdvice(data.slip.advice)
			setAdviceId(data.slip.id)
		} catch (error) {
			console.error("Error fetching advice:", error)
		}
	}

	useEffect(() => {
		fetchAdvice()
	}, [])

	return (
		<div className="advice">
			<p>Advice #{adviceId}</p>
			<h1>"{advice}"</h1>
			<img style={{ cursor: "default" }} src="/public/images/pattern-divider-desktop.svg" alt="divider" />
			<button onClick={() => fetchAdvice()}>
				<img src="public/images/icon-dice.svg"></img>
			</button>
		</div>
	)
}

export default Advice
