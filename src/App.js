import React from "react";
import { SafeAreaView,Text,StyleSheet,TextInput,View,FlatList,Dimensions } from "react-native";
import Card from './components/Card';
import catalog_data from './catalog.json';
const App = () => {
  const renderCato = ({item})=><Card cato={item}/>
  return(
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      </View>
      <TextInput style={styles.search} placeholder={"Arama Yapınız"}/>
      <FlatList
        data={catalog_data}
        renderItem={renderCato}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  headerText:{
    fontWeight:'bold',
    fontSize:30,
    color:'purple',
  },
  search:{
    height:40,
    margin:10,
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#eceff1',
  }
});

export default App;