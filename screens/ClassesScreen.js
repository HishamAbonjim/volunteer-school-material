import React from 'react';
import { ScrollView, View ,  StyleSheet ,Button , Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ClassesScereen extends React.Component  {
  


    render() {
          return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
       
       <View style={styles.btn}> 
            <Button style={styles.btn}  title=" الصف الخامس"   onPress={()=>{this.props.navigation.navigate("Home" , {class :'5'} )}} /> 
      </View>
      <View style={styles.btn}>
      <Button style={styles.btn}  title=" الصف السادس"   onPress={()=>{this.props.navigation.navigate("Home" , {class :'6'})}} />
</View>
<View style={styles.btn}>
      <Button style={styles.btn}  title=" الصف السابع"   onPress={()=>{this.props.navigation.navigate("Home"  ,{class :'7'} ) }} />
      </View>
      <View style={styles.btn}>
      <Button style={styles.btn}  title=" الصف الثامن"   onPress={()=>{this.props.navigation.navigate("Home", {class :'8'})}} />
      </View>
      <View style={styles.btn}>
      <Button   title=" الصف التاسع"   onPress={()=>{this.props.navigation.navigate("Home" , {class :'9'})}} />
      </View> 
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
  btn:{ 
    paddingTop: 25,
    flex: 1,
    }
});
