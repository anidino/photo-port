import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import About from '../../About';

// ensures that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

//declare the component being tested 
//the first argument is the string that will be tested. the second is a callbACK function that runs it 
describe('About component', () => {
	//first test 
	it('renders', () => {
		render(<About />);
	});

	//second test 
	it('matches snapshot DOM node structure', () => {
		//render About 
		const { asFragment } = render(<About />);

		expect(asFragment()).toMatchSnapshot();
	})


})