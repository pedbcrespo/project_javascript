import React, { Component } from 'react';
import Routes from './routes';
import './App.css';
import api from './api/api';

export default class App extends Component{

  state = {
    lista_casas: [],
  }

  async componentDidMount(){
    const res = await api.get('/users/');
    console.log(res.data);  
    this.setState({lista_casas: res.data});
  }
  
  render(){
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}
