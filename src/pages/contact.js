import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", name: "", phone: "", email: "", message: "" };
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.name });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.email });
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.phone });
  }

  handleChangeMessage(event) {
    this.setState({ message: event.target.message });
  }

  handleSubmit(event) {
    alert("A form was submitted: " + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    document.title = 'Natalie Michelsen';
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={this.state.phone}
            onChange={this.handleChangePhone}
          />
        </label>
        <label>
          Message:
          <input
            type="text"
            value={this.state.message}
            onChange={this.handleChangeMessage}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Contact;
