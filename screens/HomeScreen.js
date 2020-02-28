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

  static navigationOptions = ({navigation}) => {
      
    return {
      title: 'الكتب',  
        headerRight: <Button
                         title="الخلف"
                         onPress={ () => navigation.navigate("Classes")} />

    };
};


  render() {
    const _class = this.props.navigation.state.params.class;
    console.log(this.props.navigation.state.params.class);
    console.log(this.props)
    let classView1 ; 
    let classView2; 

    if(_class == 3){ 
     classView1 =   <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/17pgcCw5sAYmbZSZL9TByVf_eBDyfsvah/view')} /> 
      classView2 = <Button style={styles.btn}  title=" العلوم الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1VFRioMKBuWqhavaZVml5tTN3HFGWHUa_/view')} /> 

     // classView=   <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1YEDhpidRG5SOrCTH_FV7jSa3y4tMA44H/view')} /> 
   } 
   if(_class == 4){ 

     classView1= <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1kC3vCh0rHicIcRArC0PSeG_J1E0-Lcig/view')} /> 
     classView2=    <Button style={styles.btn}  title=" العلوم الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1UHFtis97k3XKtYYGNkYr6gCZUQ8yh73s/view')} /> 

   // classView=   <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1YEDhpidRG5SOrCTH_FV7jSa3y4tMA44H/view')} /> 
 } 
   if(_class == 5){ 
   classView1 = <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1kC3vCh0rHicIcRArC0PSeG_J1E0-Lcig/view')} /> 
   classView2 = <Button style={styles.btn}  title=" العلوم الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1uvLQ9ovL-WLucohVVDwqyCwK2ftZsfFg/view')} /> 

   // classView=   <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1YEDhpidRG5SOrCTH_FV7jSa3y4tMA44H/view')} /> 
 } 
 if(_class == 6){ 
  classView1 = <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1RKyHOx1Mg-g_OsQRy0LSz1PvSiswtGxp/view')} /> 
  classView2 = <Button style={styles.btn}  title=" العلوم الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1lzW7ZxabiJeUXg63S_QAg6FmGTWW-vyK/view')} /> 
} 
if(_class == 7){ 
  classView1 = <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1_m8v6XC0RCLJ0LK9dAGPj5_v5qNIYerT/view')} /> 
  classView2 = <Button style={styles.btn}  title=" العلوم الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1wfoc_cJcvriX2pxDmDxyJX5CsGS2q8qX/view')} /> 
} 
if(_class == 8){ 
  classView1 = <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/11ypr2OrQPjCRMTpsVag2OUd1vMyyEBYJ/view')} /> 
  classView2 = <Button style={styles.btn}  title=" العلوم الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1CW6hFS2Xxsk1rjUNiWUWF_tcQon_FLtI/view')} /> 
} 
if(_class == 9){ 
  classView1 = <Button style={styles.btn}  title=" العلوم الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/15c_wwesDQKrS9t4C-q0PFWuOGliFPyqN/view')} /> 
  classView2 = <Button style={styles.btn}  title=" العلوم الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1YEDhpidRG5SOrCTH_FV7jSa3y4tMA44H/view')} /> 
}
if(_class == 10){ 
  classView1 = <View style={styles.btn}><View style={styles.btn}><Button style={styles.btn}  title=" العلوم الحياتية الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/10gxC_dpBMwaitmsFFajE0Z3sEqVLp4Nh/view')} /></View><View style={styles.btn}><Button style={styles.btn}  title=" الفيزياء الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/19PJcU76xcxCCC-kpyek-M_LbKCukXfv-/view')}/></View><View style={styles.btn}><Button style={styles.btn}  title=" الكيمياء الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1Q_t9c6Yb9jgtrE9xUyBC7mq-mvmWtN0L/view')}/></View></View>
  classView2 = <View style={styles.btn}><View style={styles.btn}><Button style={styles.btn}  title=" العلوم الحياتية الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1RnSJquJAEByelpUHMPzGK35pkW0rIkd5/view')} /></View><View style={styles.btn}><Button style={styles.btn}  title=" الفيزياء الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1cvjZC443s8B2wMzf20OpyaKI_DUjerRg/view')}/></View><View style={styles.btn}><Button style={styles.btn}  title=" الكيمياء الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1SZGSj_yhvLKdzEVOHKRhnhDgmQy7aHVn/view')}/></View></View>
} 
 if(_class == 11){ 
  classView1 =<View style={styles.btn}><View style={styles.btn}><Button style={styles.btn}  title=" العلوم الحياتية الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1HTAK_km9DvppK2BDMxrKimfCWfFTMTp3/view')} /></View><View style={styles.btn}><Button style={styles.btn}  title=" الفيزياء الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1I6cA0p1cKqJ4UyRyR7IKc01_HZBudtv7/view')}/></View><View style={styles.btn}><Button style={styles.btn}  title=" الكيمياء الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/17nXYlby3RNwSILFCOitAPtziGfASYWMB/view')}/></View><View style={styles.btn}><Button style={styles.btn}  title=" الثقافة العلمية الفصل الأول "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1JlSnaySfAk4VUyPmVg4eifctYeCTiR-L/view')}/></View></View>
  classView2 =<View style={styles.btn}><View style={styles.btn}><Button style={styles.btn}  title=" العلوم الحياتية الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1KAkDc4NB_VaH4raM8qBx0t0Y74fF9LDK/view')} /></View><View style={styles.btn}><Button style={styles.btn}  title=" الفيزياء الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1DvIlxxaOUkgYpry78gYE0JYqDhbRmwYD/view')}/></View><View style={styles.btn}><Button style={styles.btn}  title=" الكيمياء الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1UqqEeyi1mpifzbiN93egVAWWB3mppNXT/view')}/></View><View style={styles.btn}><Button style={styles.btn}  title=" الثقافة العلمية الفصل الثاني "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1Ku7RVvd1T3Dj9emGVrkNdwSOmsqrUKvi/view')}/></View></View>
}  
    return (
    <View style={styles.container}> 
{classView1}
 {classView2} 
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
    marginTop:6

    }
 
});
 