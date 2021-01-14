import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Styles } from '../Style/Home.style';
import { dataMeasures } from '../../../Utils/Constants';

function HomeScreen({ navigation }) {
  const onNavigate = (item) => () => {
    navigation.navigate('ConverterScreen', { item });
  };

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item, index }) => {
    return (
      <View style={Styles.itemContainer}>
        <Pressable
          onPress={onNavigate(item)}
          style={Styles.button}
          android_ripple={{ color: 'rgba(0, 0, 0, 0.2)', borderless: true }}>
          <View style={Styles.itemContent}>
            <Icon name={item.icon} size={30} color="#444" />
            <Text style={Styles.textName}>{item.name}</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.contentSection}>
        <FlatList
          data={dataMeasures}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
}
export default HomeScreen;
