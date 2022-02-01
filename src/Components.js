import React from 'react';

export default function AgentsList() {
  return (
    <div>
      <Agent name="Bond! James Bond" />
      <Agent name="Dam! Vahn Dam! Clode Vahn Dam! Jan Clode Vahn Dam" />
    </div>
  );
}

class Agent extends React.Component {
  render() {
    return (
      <div>
        <div>My name is, {this.props.name}!</div>
        <Avatar url="imageURL" />
      </div>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
      </div>
    );
  }
}
