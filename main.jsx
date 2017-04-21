import React from 'react';

export default ({children}) => {

	const updateTitle = () => {
		let title = document.querySelector('title');
		
		if(!title) {
			title = document.createElement('title');
			document.querySelector('head').appendChild(title);
		}

		title.innerHTML = children;
	}

	updateTitle();

	return null
}