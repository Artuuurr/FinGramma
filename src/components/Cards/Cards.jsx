import React, { useEffect, useState } from 'react'

export const Cards = ({ text }) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				let url = ''
				if (text === 'findCards') {
					url = 'http://localhost:3001/api/findCards'
				}
				if (text === 'whyCards') {
					url = 'http://localhost:3001/api/whyCards'
				}
				if (text === 'getCards') {
					url = 'http://localhost:3001/api/getCards'
				}
				const response = await fetch(url)
				const responseData = await response.json()
				setData(responseData[text])
			} catch (error) {
				console.error('Error:', error)
			}
		}

		fetchData()
	}, [text])

	return (
		<div>
			{data ? console.log({ data }) : <p>Loading...</p>}
			<div className='grid grid-cols-3 pt-14 '>
				{data &&
					data.map(element => (
						<div className=' px-12 pt-14 pb-9'>
							{text === 'findCards' ? (
								<div>
									<img
										className='w-52 h-28 rounded-lg object-cover'
										src={element.imgRoute}
										alt={element.title}
									/>
								</div>
							) : text === 'getCards' ? (
								<div className=' h-64'>
									<img src={element.imgRoute} alt={element.title} />
								</div>
							) : (
								<div>
									<img src={element.imgRoute} alt={element.title} />
								</div>
							)}
							<div className=' pt-6 text-left text-2xl font-extrabold text-mainColor'>
								<h3>{element.title}</h3>
							</div>
							<div className=' mt-3 text-lg text-mainColor'>
								<p>{element.text}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}
