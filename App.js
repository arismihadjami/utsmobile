import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Lightbox from 'react-native-lightbox-v2';
export default function App() {
  const clickHandler = () => {
    alert('Floating Button clicked')
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowUpper}>
        <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>
                  <Text>M</Text>
              </View>
            </View>
            <Entypo name="twitter" size={24} color="black" />
            <AntDesign name="staro" size={24} color="black" />
          </View>
        </View>
      <ScrollView style={styles.container}>
       {data.map(val => {
         return(<View style={styles.wrapper}>
          <View style={styles.hederWrapper}>
            <View style={styles.iconWrapper}>
              <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>
                  <Text>{val.id}</Text>
              </View>
            </View>
              <Text style={styles.usernameText}>{val.author}</Text>
            </View>
            <View>
            <Entypo name="dots-three-vertical" size={22} color="black" />
            </View>
          </View>
          <Lightbox>
          <View style={styles.box}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: val.url,
        }}
      />
        </View>
        </Lightbox>
        <View>
          <View style={styles.iconRow}>
          <EvilIcons name="comment" size={24} color="black" />
          <EvilIcons name="retweet" size={24} color="black" />
          <EvilIcons name="heart" size={24} color="black" />
          <EvilIcons name="share-google" size={24} color="black" />
          </View>
        </View>
          </View>)
       })}
      </ScrollView>
      
          <TouchableOpacity 
          style={styles.TouchableOpacity}
          onPress={clickHandler}>
            
            <Image
            style={styles.floatingButton}
            source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/79/fd/aa/79fdaaaa-4b93-4d66-89e9-3d8b721fff16/source/512x512bb.jpg'}} />
          </TouchableOpacity>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowBottom}>
        <Entypo name="home" size={24} color="black" />
        <EvilIcons name="search" size={24} color="black" />
        <EvilIcons name="bell" size={24} color="black" />
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
  },
  wrapper:{
    marginTop: 10
  },
  scroll:{
    height: 150,
    backgroundColor: '#000',
  },
  box:{
    width: '100%',
    height: 300,
    backgroundColor: '#C2C',
    marginTop: 10,
    marginLeft: 60,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  touch:{
    backgroundColor: '#F54',
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10
  },
  tinyLogo:{
    width: '100%',
    height: '100%',
    
  },
  text: {
    fontSize: 30
  },
  iconWrapper:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoContainer:{
    backgroundColor: '#C2C2C2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
    
  },
  logoWrapper: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'red',
    padding: 2
  },
  hederWrapper:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  usernameText:{
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16
  },
  iconRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 60,
    marginRight: 10,
    marginTop: 10
  },
  TouchableOpacity:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 70

  },
  floatingButton:{
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 100,
   
  },
  bottomIcon:{
    padding: 10
  },
  iconRowBottom:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  iconRowUpper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

const data=[
  {
    id: '0',
    author: 'Geto Suguru',
    width: 5616,
    height: 3744,
    url: "https://asset.sanepo.com/q:i/r:0/wp:1/w:1/u:https://sanepo.com/wp-content/uploads/2021/12/Suguru-Geto.jpg",
  },
  {
    id: '1',
    author: 'Gojo Satoru',
    width: 5616,
    height: 3744,
    url: "https://www.greenscene.co.id/wp-content/uploads/2021/09/Jujutsu-Kaisen-4-696x497.jpg",
  },
  {
    id: '2',
    author: 'Yuta Okkotsu',
    width: 5616,
    height: 3744,
    url: "https://s.yimg.com/ny/api/res/1.2/AB7z8DsqgKUsWqXmEMZSMw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/uu/api/res/1.2/BX2co31d2DLNf41vmlLU_Q--~B/aD00ODc7dz03MzA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/id/antara_original_130/efae307a8d3e90413d67b0ee2fd23c47",
  },
  {
    id: '3',
    author: 'Nanami',
    width: 5616,
    height: 3744,
    url: "https://obs.line-scdn.net/0hYAwzjSW7Bm5KAxIw2DV5OXJVCh95ZRxnaGFID24KWw5hL0I7f2VVDThTDUJuMBI6ajUeCDsHDV1vMUg-cQ/w644",
  },
  {
    id: '4',
    author: 'Sukuna',
    width: 5616,
    height: 3744,
    url: "https://foto.kontan.co.id/on8bzOpWxAdetXpVOJZUpT-l_GE=/smart/2020/11/30/2046877133p.jpg",
  },
  {
    id: '5',
    author: 'Fushiguro',
    width: 5616,
    height: 3744,
    url: "https://1.bp.blogspot.com/-6aGTlKcXkzo/YBfKbFu7_lI/AAAAAAAAszo/x2zwBNCvHR0CHWIkDeXTX-aoHhEl4018wCLcBGAsYHQ/s1280/maxresdefault%2B%252814%2529.jpg",
  },
  {
    id: '6',
    author: 'Nobara',
    width: 5616,
    height: 3744,
    url: "https://www.greenscene.co.id/wp-content/uploads/2021/05/Jujutsu-2-696x497.jpg",
  },
]