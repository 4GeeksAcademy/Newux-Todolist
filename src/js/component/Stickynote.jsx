import React, { useState } from 'react';

//create your first component
export const StickyNote = () => {
	const [task, setTask] = useState('');
	return (
		<div className="stickyNote">
			<input className="myInput" placeholder="What needs to be done?" />
			<ul class="list-group">
				<li class="list-group-item">An item</li>
				<li class="list-group-item">A second item</li>
				<li class="list-group-item">A third item</li>
				<li class="list-group-item">A fourth item</li>
				<li class="list-group-item">And a fifth one</li>
				<li class="list-group-item">And a fifth one</li>
			</ul>
		</div>
	);
};