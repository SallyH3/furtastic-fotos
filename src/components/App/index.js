import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Header from '../Header';
import Breeds from '../Breeds';
import BreedPhotos from '../BreedPhotos';
import { loadAllBreeds, selectBreed } from '../../actions/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      breedName: '',
    }
  }

  getSelectedBreed = (breedName) => {
    this.setState({ breedName: breedName })
    this.props.selectBreed(breedName);
  }

  componentDidMount() {
    this.props.loadAllBreeds();
  }

  render() {
    return (
      <div>
        <Header />
        <Breeds 
          breeds={ this.props.breeds } 
          getSelectedBreed={ this.getSelectedBreed }
        />
        <BreedPhotos 
          photos={ this.props.photos }
          breedName={ this.state.breedName }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    breeds: state.breeds,
    photos: state.photos
})

export default connect(mapStateToProps, {loadAllBreeds, selectBreed})(App);
