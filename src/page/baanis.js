import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native';
// import Data from '../assets/json/navigateBaanis';

export default class Baanis extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: ''
    };
    this.isMounted = false;
  }
  async componentDidMount() {
    this.isMounted = true;
    fetch('http://igurbani.sehren.com/api/baanis/getCategory')
    .then(response => response.json())
    .then(json => {
      this.setState({dataSource : json})
    })
  }
  componentWillUnmount(){
    this.isMounted = false;
  }
  renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.goTo('Detail',item.id,item.name)}>
        <Text style={styles.item}>
          {item.name}
        </Text>
      </TouchableWithoutFeedback>
    )
  }
  goTo = (screen,page,name) => {
    this.props.navigation.navigate(screen, {page,name});
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#fafafa'
  },
  sectionHeader: {
    padding : 10,
    fontSize: 15,
    fontWeight: 'bold',
    color : "#999"
  },
  item: {
    padding: 20,
    paddingLeft : 15,
    fontSize: 15,
    margin : 5,
    marginLeft : 10,
    marginRight : 10,
    marginBottom : 10,
    borderRadius : 2,
    backgroundColor : '#fff'
  },
})