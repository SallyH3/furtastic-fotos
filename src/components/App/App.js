import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Breeds from '../Breeds/Breeds';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      breedName: '',
      breeds: [],
      hasErrors : false
    }
  }

  getSelectedBreed = (breedName) => {
    this.setState({
      breedName: breedName,
    })
    this.selectBreed();
  }

  selectBreed = (breedName) => {
    fetch(`https://dog.ceo/api/breed/${breedName}/images`)
    .then(res => res.json())
    .then(breed => this.setState({ photos: breed.message }))
    .catch(() => this.setState({ hasErrors: true }))
  }

  componentDidMount() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res => res.json())
      .then(data => this.setState({breeds: data.message}))
      .catch(() => this.setState({ hasErrors: true }))
  }

  render() {
    console.log('breed', this.breedName)
    return (
      <div>
        <Header />
        <Breeds 
          breeds={this.state.breeds} 
          getSelectedBreed={this.getSelectedBreed}
        />
      </div>
    )
  }
}

export default App;
