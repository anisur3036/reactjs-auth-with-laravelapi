import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }
  handleForm = (e) => {
    e.preventDefault();
    const data = { email: this.state.email, password: this.state.password };
    axios
      .post('http://localhost:8000/api/auth/login', data)
      .then((res) => {
        cookie.set('token', res.data.access_token);
        cookie.set('user', res.data.user);
        this.props.history.push('/profile');
      })
      .catch((e) => this.setState({ errors: e.response.data.errors }));
  };

  handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="flex">
        <div className="w-1/3" />
        <div className="w-1/3 mt-10 p-4 bg-white">
          <form className="border border-gray-500" onSubmit={this.handleForm}>
            <div className="p-4">
              <h1 className="text-lg border-b border-gray-500">Ping Here</h1>
              {this.state.errors ? (
                <p className="text-red-500 text-sm">
                  {this.state.errors['result']}
                </p>
              ) : null}
              <div className="mt-4">
                <label>Email</label>
                <input
                  onChange={this.handleInput}
                  type="email"
                  name="email"
                  placeholder="Lovely Email"
                  className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"
                />
              </div>
              <div className="mt-4">
                <label>Password</label>
                <input
                  onChange={this.handleInput}
                  type="password"
                  name="password"
                  placeholder="Super Duper Secret Password"
                  className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"
                />
              </div>
              <div className="mt-4">
                <input
                  type="submit"
                  className="mt-1 p-2 border border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
