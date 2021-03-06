import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableWithoutFeedback } from 'react-native';
import Data from '../assets/json/navigateNitnem';

export default class Nitnem extends React.Component {
  constructor() {
    super();
    this.state = { dataSource: Data};
  }
  content = ({ item }) => {
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
        <SectionList style={styles.list}
          sections={this.state.dataSource}
          renderItem={this.content}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
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