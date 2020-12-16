import React from "react";

import "./users.styles.scss";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState({ users }, () => console.log(this.state.users))
      );
  }

  render() {
    return (
      <div className="users">
        <h1 className="title">Users</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
