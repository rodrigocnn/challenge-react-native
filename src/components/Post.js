import React, {Fragment} from 'react';
import {StyleSheet, View,Text} from 'react-native';

const Post = ({title, author, resume  })=>{
    return (
        <Fragment>
              <View style={styles.container}>
                  <View style={styles.containerTitle}> 
                    <Text style={styles.title}> {title} </Text>  
                    <Text style={styles.author}> {author} </Text>  
                  </View>

                  <Text style={styles.postResume}>{resume}</Text>
              </View>
        </Fragment>
      );
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: "#fff",
       marginBottom:10,
       padding:10,
     },
     containerTitle: {
      borderBottomColor: '#d5d5d5',
      borderBottomWidth: 1,
      marginBottom:5,
      paddingBottom:10,
    },
     title:{
        color:"#333",
        fontSize:16,
     },
     author:{
        color:"#666",
        fontSize:11,
     },
   
     postResume:{
        color:"#666"
     },
   
   });
   
export default Post;