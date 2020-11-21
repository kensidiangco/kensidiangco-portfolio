import React, { Component } from 'react';
import axios from 'axios';
import './static/contact_section.css';


class Contact extends Component {
	constructor() {
		super()

		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	};

	async handleSubmit(e) {
    
		const { name, email, subject, message }= this.state

		await axios.post('/api/form', {
			name,
			email,
			subject,
			message
		})
	}

	render() {
    return (
      <form onSubmit={this.handleSubmit} className="contact__form" tag="form">
        <label for="input__name">Name</label>
        <input 
          type="text" 
          name="name"
          id="input__name" 
          onChange={this.handleChange} 
          required />

        <label for="input__subject">Subject</label>
        <input 
          type="text" 
          name="subject"
          id="input__subject" 
          onChange={this.handleChange} 
          required />

        <label for="input__email">Email</label>
        <input 
          type="email" 
          name="email"
          id="input__email" 
          onChange={this.handleChange} 
          required />

        <label for="input__message">Message</label>
        <textarea 
          rows="5" 
          maxLength="1000" 
          id="input__message" 
          name="message"
          onChange={this.handleChange} 
          required></textarea>

        <button className="contact__button" type="submit">Submit</button>
      </form>
    )
  }
}

export default Contact;