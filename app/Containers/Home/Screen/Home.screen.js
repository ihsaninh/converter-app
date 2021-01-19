import React, { useLayoutEffect } from 'react';
import { View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Styles } from '../Style/Home.style';
import { dataMeasures } from '../../../Utils/Datas';
import { PopUpMenu } from '../../../Components/PopUpMenu/PopUpMenu.component';
import { ListItemHorizontal } from '../../../Components/ListItemHorizontal/ListItemHorizontal.component';
import { Colors } from '../../../Themes/Colors';

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="menu"
          size={24}
          color={Colors.tundora}
          onPress={onPressDrawer}
          style={Styles.icon}
        />
      ),
      headerRight: () => (
        <PopUpMenu
          actions={['Custom Units', 'Settings', 'About Us']}
          onPress={onPopupEvent}
        />
      )
    });
  }, [navigation]);

  const onPopupEvent = (eventName, index) => {
    return null;
  };

  const onPressDrawer = () => {
    navigation.openDrawer();
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
