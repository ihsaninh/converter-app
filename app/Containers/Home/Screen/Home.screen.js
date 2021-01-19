import React, { useLayoutEffect } from 'react';
import { View, FlatList } from 'react-native';

import { Styles } from '../Style/Home.style';
import { dataMeasures } from '../../../Utils/Datas';
import { PopUpMenu } from '../../../Components/PopUpMenu/PopUpMenu.component';
import { ListItemHorizontal } from '../../../Components/ListItemHorizontal/ListItemHorizontal.component';

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PopUpMenu
          actions={['Unit Converter Web', 'Custom Units', 'Settings']}
          onPress={onPopupEvent}
        />
      ),
    });
  }, [navigation]);

  const onPopupEvent = (eventName, index) => {
    return null;
  };

  const onNavigate = (item) => () => {
    navigation.navigate('ConverterScreen', { item });
  };

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => {
    return (
      <ListItemHorizontal
        name={item.name}
        icon={item.icon}
        onPress={onNavigate(item)}
      />
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
};
export default HomeScreen;
