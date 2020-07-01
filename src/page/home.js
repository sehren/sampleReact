import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Home extends React.Component {
  render() {
    const goTo = (screen) => {
      this.props.navigation.navigate(screen);
    }
    return (
      <View style={styles.container}>
        {/* <View style={styles.welcomeBox}>
          <Text style={styles.welcomeText}>Hai, Good Evening</Text>
        </View> */}
        <Image style={styles.image} source={require('../assets/image/background3.jpg')}/>
        <View style={styles.boxMenu}>
          <View style={styles.row}>
            <View style={styles.col} onStartShouldSetResponder={() =>{goTo('Sggs')}}>
              <Image style={styles.icon} source={require('../assets/image/book.jpg')}/>
              <Text style={styles.Text}>SGGS</Text>
            </View>
            <View style={styles.col} onStartShouldSetResponder={() =>{goTo('Baanis')}}>
              <Image style={styles.icon} source={require('../assets/image/note.jpg')}/>
              <Text style={styles.Text}>Baanis</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col} onStartShouldSetResponder={() =>{goTo('Nitnem')}}>
              <Image style={styles.icon} source={require('../assets/image/meditation.jpg')}/>
              <Text style={styles.Text}>Nitnem</Text>
            </View>
            <View style={styles.col} onStartShouldSetResponder={() =>{goTo('Gurdwara')}}>
              <Image style={styles.icon} source={require('../assets/image/tajmahal.png')}/>
              <Text style={styles.Text}>gurdwara</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "#fff"
  },
  // welcomeBox : {
  //   position : "absolute",
  //   zIndex : 999,
  //   marginLeft : 15,
  //   marginTop : 20
  // },
  // welcomeText : {
  //   fontSize : 30,
  //   fontWeight : "bold"
  // },
  image : {width: '100%', height: 350},
  boxMenu : {
    position : "absolute",
    top : 250,
    left : 0,
    right : 0
  },
  row : {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    marginTop : 50,
    textAlign : "center",
  },
  col : {
    height: 200,
    width: 150,
    justifyContent : "center",
    alignItems : "center",
    shadowColor: "#000",
    borderRadius : 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 18,
    backgroundColor : '#fff'
  },
  icon : {
    width : 100,
    height : 100,
    marginBottom : 15
  },
  Text : {
    textAlign : "center",
    fontFamily : 'lucida grande'
  }
});
