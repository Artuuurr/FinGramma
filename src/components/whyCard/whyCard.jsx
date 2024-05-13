import React, { useEffect, useState } from 'react'

export const WhyCard = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3001/api/cards')
				const responseData = await response.json()
				setData(responseData.cards)
			} catch (error) {
				console.error('Error:', error)
			}
		}

		fetchData()
	}, [])

	return (
		<div>
			{data ? console.log({ data }) : <p>Loading...</p>}
			<div className='grid grid-cols-3'>
				{data && data.map((element) => (
					<div className='p'>
						<div>
							<img src={element.imgRoute} alt={element.title} />
						</div>
						<div>
							<h3>{element.title}</h3>
						</div>
						<div>
							<p>{element.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
