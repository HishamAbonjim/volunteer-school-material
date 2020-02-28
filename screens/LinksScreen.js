import React from 'react';
import { ScrollView, StyleSheet   , View,  Button} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as WebBrowser from 'expo-web-browser';

export default class LinksScreen extends React.Component {
 
  static navigationOptions = ({navigation}) => {
      
    return {
      title: 'المواد الإثرائية',  
        headerRight: <Button
                         title="الخلف"
                         onPress={ () => navigation.navigate("Classes")} />

    };
};


  render() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
       <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الخامس مادة إثرائية 1 "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/10N4aeQD51MxOQdU9T-gNLwkXJ7uUyjvx/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الخامس مادة إثرائية 2 "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1xoH73OVE--NOWIgfUYjlhTkMiaQPzkT_/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الخامس مادة إثرائية 3 "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/18HQws2MlkS311ik96U12sem4KZWkLzID/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الخامس مادة إثرائية4  "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1jGeJy33HlNtmqg_s8m2qBb1PWhbeAusu/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الخامس مادة إثرائية 5  "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1t9gsKGNkeDb4vE3sEQmD_D41RKNpmJrS/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السادس  مادة إثرائية 1   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1J1MdjcnEy-2UHYwdH0LPbRsScPOQGpsP/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السادس  مادة إثرائية 2   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1LG5oMjcoFT1NsdThXirFjEuZ-CngcVY9/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السادس  مادة إثرائية 3   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/18Nl7eQf25_LncbBmrUe2NqgchALuFJ3E/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السادس  مادة إثرائية 4   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1Qb5oc6jiiKlG0h5rRKxRRtNPDRqJBPVx/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السادس  مادة إثرائية 5   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1wgpiKZP17BmUxinK7Dg3BmlYavPlsa0L/view')} /> 
      </View>
            <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السادس  مادة إثرائية 6   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1NcuZ69whRzCvplZKYPcArSesPLb28bAk/view')} /> 
      </View>
              <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السابع  مادة إثرائية 1   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1sinoB6cEnOneRulGvqui3hQ7NmGPQn_i/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السابع  مادة إثرائية 2   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1-rvuFERcggNn06UShUe2UGbL0U6vU4Nh/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السابع  مادة إثرائية 3   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/10uCeFrDjzBPlOC94inMAuk-s4YSU9qwt/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السابع  مادة إثرائية 4   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1sH45I-X6ZOip8kThn_6lLO65pj_PfLb2/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السابع  مادة إثرائية 5   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1GQk5pVpK_2ldb-n6Kqt_nA1fcURa_dv4/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف السابع  مادة إثرائية 6   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1b0xlDRkG_y0JguzD64F-L6X8BLqr4bjs/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الثامن  مادة إثرائية 1   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1IxaR7pyR2f-bE2PdGFIG5ngpwK2L4Xxl/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الثامن  مادة إثرائية 2   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/15lAJCLk2zn20lDCb_UoVCvpN-YBk4GU1/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الثامن  مادة إثرائية 3   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1LO5MX26JtiyE0X-m1g90Olii6u0gEaom/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الثامن  مادة إثرائية 4   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1StxRLBvGmiqDGw_eAZcK-EELnsHPrjuT/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف الثامن  مادة إثرائية 5   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1RSby08n1rKMmp3V7eJF2cjMzHSY9Koiw/view')} /> 
      </View>
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف التاسع  مادة إثرائية 1   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/17uqZz0yYdEFaC9siNhOORkx5IqenuiVe/view')} /> 
      </View>
      
      <View style={styles.btn}> 
       <Button style={styles.btn}  title=" الصف التاسع  مادة إثرائية 2   "   onPress={()=>WebBrowser.openBrowserAsync('https://drive.google.com/file/d/1fN9NN5-tBs0O5KLTcpA7VNeCFw7lTuCL/view')} /> 
      </View>
    </ScrollView>
  );
}
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
