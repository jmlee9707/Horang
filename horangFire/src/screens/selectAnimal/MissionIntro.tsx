import React, {useState} from 'react';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../../components/common/Btn_short';

import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import {scriptIntro} from '../../script/scriptIntro';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

const styles = StyleSheet.create({
  section1: {
    flex: 4,
  },
  section2: {
    flex: 4,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
  },
  section3: {
    flex: 10,
    paddingHorizontal: 24,
  },
  section4: {
    flex: 3,
    paddingHorizontal: 24,
  },
  backgroundColor: {
    backgroundColor: '#FFD783',
    width: '100%',
    height: '100%',
  },
  missionBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  missionText: {
    paddingHorizontal: 30,
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    width: '70%',
    height: '80%',
  },
  characterName: {
    textAlign: 'center',
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BROWN_47,
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'MissionIntro'>;
  route: any;
}

const MissionIntro = ({navigation, route}: Props) => {
  const {params} = route;
  const characterName = params.animalName;

  const [scriptNum, setScriptNum] = useState<number>(1);

  const handleScriptNum = () => {
    if (scriptNum < 7) {
      setScriptNum(prev => prev + 1);
    }
  };

  const startButton = () => {
    if (scriptNum === 7) {
      return (
        <Btn txt="start!" clickEvent={() => navigation.navigate('Home')} />
      );
    } else {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <View style={styles.section1} />
      <Pressable onPress={handleScriptNum} style={styles.section2}>
        <Image
          style={styles.missionBack}
          source={require('../../../src/assets/image/b.png')}
        />
        <Text style={styles.missionText}>
          {scriptIntro.tiger[`${scriptNum}`]}
        </Text>
      </Pressable>
      <View style={styles.section3}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.characterImage}
            source={require('../../assets/image/character/tiger.png')}
          />
          <Text style={styles.characterName}>{characterName}</Text>
        </View>
      </View>
      <View style={styles.section4}>{startButton()}</View>
    </SafeAreaView>
  );
};

export default MissionIntro;