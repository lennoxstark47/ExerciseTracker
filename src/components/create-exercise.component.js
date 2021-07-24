import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

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
		// window.location = '/';
	};

	render() {
		return (
			<div>
				<h3>Create New Exercise Log</h3>
				<form onSubmit={this.handleSubmit}>
					<div className='form-group'>
						<label>Username: </label>
						<select
							// ref='userInput'
							required
							className='form-control'
							value={this.state.username}
							onChange={this.onUsernameChange}>
							{this.state.users.map((user) => {
								return (
									<option key={user} value={user}>
										{user}
									</option>
								);
							})}
						</select>
					</div>
					<div className='form-group'>
						<label>Description: </label>
						<input
							type='text'
							required
							className='form-control'
							value={this.state.description}
							onChange={this.onDescriptionChange}
						/>
					</div>
					<div className='form-group'>
						<label>Duration (in minutes:)</label>
						<input
							type='text'
							required
							className='form-control'
							value={this.state.duration}
							onChange={this.onDurationChange}
						/>
					</div>
					<div className='form-group'>
						<label>Date: </label>
						<div>
							<DatePicker
								selected={this.state.date}
								onChange={this.onDateChange}
							/>
						</div>
					</div>
					<div className='form-group'>
						<input
							type='submit'
							value='Create Exercise Log'
							className='btn btn-primary'
						/>
					</div>
				</form>
			</div>
		);
	}
}
