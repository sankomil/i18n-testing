import React from 'react';
import {Text, Button, View} from 'react-native';
import i18n from './i18n';

export const TestScreen = () => {
  const [lang, setLang] = React.useState('en');
  i18n.locale = lang;

  const Onpress = () => {
    if (lang === 'en') {
      setLang('zhhk');
    } else {
      setLang('en');
    }
  };

  return (
    <View>
      <Text>It's a test screen {i18n.t('Hello')}</Text>
      <Text> Current lang is {lang}</Text>
      <Button title="Press to change lang" onPress={Onpress} />
    </View>
  );
};

export default TestScreen;
