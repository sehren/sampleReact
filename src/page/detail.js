import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Data from '../assets/json/navigateBaanis';

export default class Detail extends React.Component {
  constructor(){
    super();
    this.state = {
      datasource : []
    }
    this.isMounted = false;
  }
  componentDidMount(){
    // const { page } = this.props.route.params;
    // var temp = []
    // Data.forEach(i=>{
    //   if(page == i.id){
    //     temp = i.data
    //   }
    // })
    // this.setState({datasource : temp})
  }
  componentDidMount(){
    this.isMounted = true;
    const { page } = this.props.route.params;
    fetch('http://igurbani.sehren.com/api/baanis/getShabad/'+page)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({datasource : json})
    })
  }
  componentWillUnmount(){
    this.isMounted = false;
  }
  renderItem = ({ item }) => {
    let temp = []
    for(var obj in item){
      var tag;
      if(obj == 'gurmukhi'){
        tag = <Text key={obj} style={styles.gurmukhiFont}>{item[obj]}</Text>
      } else if(obj != 'id' && obj !='idCategory'){
        tag = <Text key={obj} style={styles.normalFont}>{item[obj]}</Text>
      }
      temp.push(tag)
    }
    return (
      <View style={styles.boxContainer}>
        {temp}
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.datasource}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id+''}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor : '#fafafa',
    paddingLeft : 10,
    paddingRight : 10
  },
  boxContainer : {
    margin : 10,
    padding : 20,
    backgroundColor : '#fff',
    shadowColor: "#000",
    borderRadius : 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor : '#fff'
  },
  gurmukhiFont : {
    fontFamily : 'Chatrik',
    fontSize : 25,
    textAlign : 'center',
    padding : 5
  },
  normalFont : {
    fontSize : 15,
    textAlign : 'center',
    padding : 5,
    fontWeight : 'bold'
  }
});