import React from 'react';
import { ScrollView, View ,  StyleSheet ,Button , Text , ImageBackground } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ClassesScereen extends React.Component  {
  


    render() {
      return (
      <ImageBackground  source={require('../mmm.jpg')} style={styles.backgroundImage , {width: '100%', height: '100%'}} >
    <ScrollView style={styles.container}> 

       {/* <View style={styles.btn}> 
            <Button style={styles.btn}  title=" الصف الثالث"   onPress={()=>{this.props.navigation.navigate("Home" , {class :'3'} )}} /> 
      </View>
      <View style={styles.btn}> 
            <Button style={styles.btn}  title=" الصف الرابع"   onPress={()=>{this.props.navigation.navigate("Home" , {class :'4'} )}} /> 
      </View> */}
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
      {/* <View style={styles.btn}>
      <Button   title=" الصف العاشر"   onPress={()=>{this.props.navigation.navigate("Home" , {class :'10'})}} />
      </View>  
          <View style={styles.btn}>
      <Button   title=" الصف الحادي عشر"   onPress={()=>{this.props.navigation.navigate("Home" , {class :'11'})}} />
      </View>  */}
      <View  style={styles.autherView}> 
      <Text  style={styles.auther}>
مدرسة بنات المغازي الإعدادية أ 
      </Text> 
      <Text  style={styles.auther}>
      تصميم.ميساء ابو نجيم  
      </Text>
      <Text  style={styles.auther}>
      إشراف.أ.محمد عواد  
      </Text>
      <Text  style={styles.auther}>
      مديرة المدرسة أ. غادة عوض
 
      </Text>
      <Text  style={styles.auther}>
      المديرة المساعدةأ.  رندة الشاعر
 
      </Text>
      </View>
    </ScrollView>
 </ImageBackground>
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
    flexDirection: 'column',

   
    
  }, 
  btn:{ 
    paddingTop: 25,
    flex: 1, 
    alignItems:"center"
    }, 
    backgroundImage: {
      flex: 1,
      resizeMode: 'stretch', // or 'stretch'
    }, 
    autherView: { 
      paddingTop: 120,
    }, 
    auther: { 
    
      textAlign:"center", 
  fontSize:28
    }
});
