import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	// state
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];

	const checkNumber = num => {
		if (num > people.length - 1) {
			return 0;
		} else if (num < 0) {
			return people.length - 1;
		}
		return num;
	};

	// event handlers
	// (approach #1)
	const handleNext = () => {
		setIndex(currState => {
			let newIndex = currState + 1;
			return checkNumber(newIndex);
		});
	};

	// (approach #2)
	const handlePrev = () => {
		if (index > 0) {
			setIndex(index - 1);
		} else {
			setIndex(people.length - 1);
		}
	};

	const handleRandom = () => {
		let randomNum = Math.floor(Math.random() * people.length);
		if (randomNum === index) {
			randomNum = index + 1;
		}
		setIndex(checkNumber(randomNum));
	};

	// ui
	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={handlePrev}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={handleNext}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={handleRandom}>
				Suprise Me
			</button>
		</article>
	);
};

export default Review;
