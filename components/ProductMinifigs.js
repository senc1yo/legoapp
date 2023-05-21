import * as React from 'react';
import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from 'react-native-vector-icons';

import Styles from './Styles';
import SvgComponent from '../assets/SvgComponent.jsx';
import LogoLego from '../assets/LogoLego.jsx';
import imagenotfound from '../assets/imagenotfound.jpg'; // Importa la imagen local
import CabezasVisual from '../assets/CabezasVisual.jsx'
const ProductMinifigs = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(item);
    navigation.navigate('DetailsMinifig', { item: item });
  };

  return (
    <Pressable onPress={handlePress}>
      <SafeAreaView style={Styles.contanier}>
        <View style={Styles.upper_text_view}>
          <Text style={Styles.low_text}>MINIFIG</Text>
          <AntDesign name="" size={24} style={Styles.cardName} />
          <Text style={Styles.name_of_song_Text1}>{item.num_parts}</Text>
        </View>

        <View style={Styles.middle_text_view}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={Styles.theme_name}>
            {item.name}
          </Text>
        </View>

        <View style={Styles.middlebar}>
          <LogoLego style={Styles.frameLogo} />
          <SvgComponent style={Styles.frameImage} />

          {item.set_img_url ? (
            <Image
              style={Styles.illustrationImage}
              source={{ uri: item.set_img_url }}
              resizeMode="cover"
            />
          ) : (
            <Image
              style={Styles.illustrationImage}
              source={imagenotfound}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={Styles.bot_text_view}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={Styles.theme_name}>
            {item.set_num}
          </Text>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};
export default ProductMinifigs;