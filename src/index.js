/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StyleSheet, ScrollView,View,Text,} from 'react-native';
import Post from './components/Post'

const App = () => {
  return (
    <Fragment>
          <View style={styles.container}>
              <ScrollView>
                  <Post title="Bem Vindo ao React Native" author="Rodrigo César"  resume="is simply dummy text of the printing 
                  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of ">
                  </Post>

                  <Post title="Bem Vindo ao React Native" author="Rodrigo César"  resume="is simply dummy text of the printing 
                  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of  ">
                  </Post>

                  <Post title="Bem Vindo ao React Native" author="Rodrigo César"  resume="is simply dummy text of the printing 
                  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of ">
                 </Post>

                 <Post title="Bem Vindo ao React Native" author="Rodrigo César"  resume="is simply dummy text of the printing 
                 and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of ">
                 </Post>

                 <Post title="Bem Vindo ao React Native" author="Rodrigo César"  resume="is simply dummy text of the printing 
                 and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of  ">
                 </Post>

                 <Post title="Bem Vindo ao React Native" author="Rodrigo César"  resume="is simply dummy text of the printing 
                 and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of ">
                </Post>
              
              </ScrollView>

          </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
     backgroundColor: "#EE7777",
     paddingTop: 30,
     paddingLeft:10,
     paddingRight:10,
     flex:1
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: "#333",
   },
 
 });

export default App;
