import React, { useEffect, useState } from 'react'

export const SuitsCards = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3001/api/suitsCards')
				const responseData = await response.json()
				setData(responseData.suitsCards)
			} catch (error) {
				console.error('Error:', error)
			}
		}

		fetchData()
	}, [])

	return (
		<div>
			{data ? console.log({ data }) : <p>Loading...</p>}
			<div>
				{data && data.map((element) => (
					<div className='flex'>
						<div className=' w-24  mt-10 '>
							<img src={element.imgRoute} alt={element.title} />
						</div>
						<div className='text-xl w-3/4 p-5 mt-6'>
							<p className='inline font-bold'>{element.textBold}</p> 
							<p className='inline'>{element.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}