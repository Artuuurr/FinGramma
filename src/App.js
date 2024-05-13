import React from 'react'
import { MainSection } from './components/mainSection/mainSection'
import { NavItem } from './components/navItem'
import { TitleSection } from './components/titleSection/titleSection'
import { WhyCard } from './components/whyCard/whyCard'
import { ReactComponent as Calendar } from './images/calendar.svg'
import { ReactComponent as Graduation } from './images/graduation-cap.svg'
import { ReactComponent as Logo } from './images/logo.svg'
import { ReactComponent as Work } from './images/work.svg'

function App() {
	

	return (
		<div>
			<div className='container mx-auto  px-10 pt-8'>
				<header className='flex items-center'>
					<Logo className='w-40 h-14' />
					<nav className='flex ml-auto'>
						<NavItem text='Записаться' />
					</nav>
				</header>
				<MainSection />
			</div>
			<div className='backgroundGradient  py-9'>
				<div className='container mx-auto flex justify-around'>
					<div>
						<Calendar className='w-16 h-16' />
						<p className='text-mainColor text-2xl mt-3 font-semibold'>
							31 день
						</p>
					</div>
					<div>
						<Graduation className='w-16 h-16' />
						<p className='text-mainColor text-2xl mt-3 font-semibold'>
							6 уроков
						</p>
					</div>
					<div>
						<Work className='w-16 h-16' />
						<p className='text-mainColor text-2xl mt-3 font-semibold'>
							13 упражнений
						</p>
					</div>
				</div>
			</div>
			<div className='container mx-auto flex h-screen py-28'>
				<div>
					<TitleSection text='На этом курсе вы научитесь:' />
					<WhyCard />
				</div>
			</div>
		</div>
	)
}

export default App
