import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  Platform,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import flags from '../assets/flags.json';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, si } from '../assets/strings.js';

function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  const [data, setData] = React.useState(0);

  function loadData() {
    let url = 'https://api.npoint.io/1ec8a81bbd7f294a1e85';
    try {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((newData) => {
          setData(newData);
        });
    } catch (err) {
      console.log('there was an error', err);
    }
  }

  loadData();

  /**  <TouchableOpacity onPress={() => {
        i18n.locale = Localization.locale;
      }}>
        <Text style={styles.languageBtn}>sys</Text>
      </TouchableOpacity> */

  return (
    <SafeAreaView style={{marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,}}>
      <ImageBackground
        source={require('../assets/white.png')}
        style={styles.background}>
        <SafeAreaView>
          <SafeAreaView
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                i18n.locale = 'si';
              }}>
              <Text style={styles.languageBtn}>{flags.SI.emoji} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                i18n.locale = 'en';
              }}>
              <Text style={styles.languageBtn}>{flags.GB.emoji}</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/Location_preview.jpg')}
              style={{ alignSelf: 'center', width: 300, height: 290, top: 35 }}
            />
          </SafeAreaView>

          <SafeAreaView
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#2b3858',
                fontSize: 15,
                fontFamily: 'Montserrat_400Regular',
              }}>
              {i18n.t('welcomeTo')}
            </Text>
          </SafeAreaView>

          <SafeAreaView
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#2b3858',
                fontSize: 60,
                fontStyle: 'bold',
                fontFamily: 'Montserrat_800ExtraBold',
              }}>
              FERI UM
            </Text>
          </SafeAreaView>
          <SafeAreaView
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                color: '#79a1f8',
                fontSize: 25,
                fontStyle: 'bold',
                fontFamily: 'Montserrat_700Bold',
              }}>
              {i18n.t('g2EntranceGuider')}
            </Text>
          </SafeAreaView>

          <SafeAreaView
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#2b3858',
                fontSize: 11,
                fontFamily: 'Montserrat_700Bold',
                padding: 10,
              }}>
              {i18n.t('moto')}
            </Text>
          </SafeAreaView>
        </SafeAreaView>

        <SafeAreaView
          style={{ right: 10, left: 10, position: 'absolute', bottom: 30 }}>
          <View style={{ bottom: 28 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('GalleryScreen');
              }}>
              <Text style={styles.galleryBtn}>{i18n.t('gallery')} </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              if (data != 0) navigation.navigate('ChooseScreen', { data });
            }}>
            <Text style={styles.getstartedBtn}>
              {data != 0 ? i18n.t('getStarted') : i18n.t('loading') + '...'}{' '}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default HomeScreen;
