'use client';
import React, { useState } from 'react';
import Magnet from './components/MagneticButton';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const Home = () => {
	const [show, setShow] = useState(false);
	const { width, height } = useWindowSize();
	return (
		<div className="flex w-full flex-col h-screen items-center p-5 gap-[300px]">
			<div >
				<p className='text-3xl pt-5'>Can we postpone the Haircut to tomorrow ?</p>
			</div>

			<div className="flex items-center justify-center flex-col gap-2">
				<Magnet padding={150} disabled={false} magnetStrength={1}>
					<button onClick={() => {
						setShow(true)
						console.log("yayy Ansam")
					}} className="bg-black border px-4 py-3 w-3xl cursor-pointer">
						Yes
					</button>
				</Magnet>
				<button onClick={()=> console.log('yayy')}>No</button>
			</div>
			{show && <Confetti width={width} height={height} />}
		</div>
	);
};

export default Home;
