import React, { Component } from 'react';

export default class CreateExercise extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			users: [],
		};
	}

	componentDidMount() {
		this.setState({
			username: 'test user',
			users: ['test user'],
		});
	}

	onUsernameChange = (event) => {
		this.setState({
			username: event.target.value,
		});
	};
	onDescriptionChange = (event) => {
		this.setState({
			description: event.target.value,
		});
	};
	onDurationChange = (event) => {
		this.setState({
			duration: event.target.value,
		});
	};
	onDateChange = (date) => {
		this.setState({
			date: date,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date,
		};

		console.log(exercise);
		window.location = '/';
	};

	render() {
		return (
			<div>
				<p>
					You are on the create exercise
					component!
				</p>
			</div>
		);
	}
}
