import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  // eslint-disable-next-line
  state = {
    name: '',
    id: null,
    serverErrors: false,
    succesfulMsg: false,
  };

  sendToServer = () => {
    const url = 'http://localhost:8080/';
    const { name, id } = this.state;
    axios
      .post(url, { name, id })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ succesfulMsg: true });
        }
      })
      .catch(() => {
        this.setState({ serverErrors: true });
      });
  };

  saveName = (event) => {
    this.setState({ name: event.target.value });
  };

  saveId = (event) => {
    this.setState({ id: parseInt(event.target.value, 10) });
  };

  render() {
    const { serverErrors, succesfulMsg } = this.state;
    return (
      <div className="App">
        <h3>proof of concept: bff validations and testing</h3>
        <section className="inputs">
          <input
            id="id"
            className={!serverErrors ? 'app_input--ok' : 'app_input--error'}
            type="text"
            name="id"
            placeholder="id"
            onChange={(e) => {
              this.saveId(e);
            }}
          />
          <input
            id="name"
            className={!serverErrors ? 'app_input--ok' : 'app_input--error'}
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => {
              this.saveName(e);
            }}
          />
          {serverErrors && <h4>Fail to send data to server</h4>}
        </section>
        <button
          className="app_btn--submit"
          type="submit"
          onClick={this.sendToServer}
        >
          Send to server
        </button>
        {succesfulMsg && <h4>Succesfully saved in server!</h4>}
      </div>
    );
  }
}

export default App;
