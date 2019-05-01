import React, { Component } from 'react';

import { StyleSheet, View, Image, Button } from 'react-native';

const styless = sStyleSheet.create({
  MainContainer:
  {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
  imageStyle:
  {
    resizeMode: 'center',
    width: '50%',
    height: '50%',
  }
})

class Image extends Componment {
  constructor(props){
    super(props);
    this.state = {
      loadingImage: false
    }
  }

  loadRealImage() {
    this.state.setState({ loadingImage: true });
  }

  render() {
    return(
    <View style={StyleSheet.MainContainer}>
      <Image
        source = { this.state.loadingImage
        ? { uri: 'https://apod.nasa.gov/apod/ap190430.html' }
        : require('../images/default_image.png')} 
        style ={{height: 200, width: 250, resizeMode: 'stretch'}}
        style = { StyleSheet.imageStyel}
      />
      <button
        title='Load Image From Server'
        onPress={this.loadRealImage.bind(this)}
      />
    </View>

    )
  }
}

///export down here
