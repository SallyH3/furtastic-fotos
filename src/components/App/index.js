import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Breeds from '../Breeds';
import BreedPhotos from '../BreedPhotos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      breedName: '',
      breeds: [],
      photos: [],
      hasErrors : false
    }
  }

  getSelectedBreed = (breedName) => {
    this.setState({
      breedName: breedName,
    })
    this.selectBreed(breedName);
  }

  selectBreed = (breedName) => {
    const photoUrl = `https://dog.ceo/api/breed/${breedName}/images/random/2`
    fetch(photoUrl)
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
    return (
      <div>
        <Header />
        <Breeds 
          breeds={this.state.breeds} 
          getSelectedBreed={this.getSelectedBreed}
        />
        <BreedPhotos 
          photos={this.state.photos}
          breedName={this.state.breedName}
        />
      </div>
    )
  }
}

export default App;
