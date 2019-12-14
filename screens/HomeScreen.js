import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, 
  Button
} from 'react-native';



export default class HomeScreen extends React.Component{
  //[result, setResult] = useState(null);
  //  _handlePressButtonAsync =  () => {
  //   let result =  WebBrowser.openBrowserAsync('https://www.docdroid.net/cZSsu1A/ktab-aalom-khams-f1.pdf');
  
  // };
  
  render() {
    const _class = this.props.navigation.state.params.class;
    console.log(this.props.navigation.state.params.class);
    console.log(this.props)
    let classView ;
      if(_class == 5){ 
        classView=   <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://www.docdroid.net/cZSsu1A/ktab-aalom-khams-f1.pdf')} /> 
       } 
    return (
    <View style={styles.container}>
{classView} 
      {/* <Text> { this.props.navigation.state.params.class}</Text> */}
        </View>

    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  btn:{ 
    paddingTop: 25,
    flex: 1,
    }
 
});
