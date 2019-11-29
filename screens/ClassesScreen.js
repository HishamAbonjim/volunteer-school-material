import React from 'react';
import { ScrollView, StyleSheet ,Button , Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ClassesScereen extends React.Component  {
  
    render() {
          return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Button  title=" الصف الخامس"   onPress={()=>{this.props.navigation.navigate("Main")}} /> 
      
    </ScrollView>
  );
    }
}

// LinksScreen.navigationOptions = {
//   title: 'Classes',
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
});
