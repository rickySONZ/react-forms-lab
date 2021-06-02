import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
    this.handleMessageChange = this.handleMessageChange.bind(this)
  }
  handleMessageChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleMessageChange(event)} value = {this.state.message}  type="text" name="message" id="message" />
        <p>{this.props.maxChars - this.state.message.length}</p>
       
      </div>
    );
  }
}

export default TwitterMessage;
