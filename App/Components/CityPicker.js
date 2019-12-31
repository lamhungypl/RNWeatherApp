import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
// import {SearchBar} from 'react-native-elements';
import {convertCityList} from '../Utils';
import {getCityList, getCityListName} from '../Utils/data';
import {Icons} from '../Assets';
const CityPicker = props => {
  const [searchValue, setSearchValue] = useState('');
  const [isVisible, setIsVisible] = useState(props.isVisible);
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // const list = await getCityList();
    // const listCity = convertCityList(list);
    const listCity = await getCityListName();
    setData(listCity);
  };

  const updateSearch = text => {
    setSearchValue(text);
  };
  const onPressItem = () => {
    setIsVisible(false);
  };
  const renderItem = (item, index) => {
    const checked = true;
    return (
      <View>
        <TouchableOpacity
          onPress={() => onPressItem()}
          style={[styles.cell, props.cellStyle, {height: 40}]}>
          <Text
            numberOfLines={1}
            style={[styles.cellTitle, props.cellTitleStyle]}>
            {item.name}
          </Text>
          <Text style={[styles.cellLabel, props.cellLabelStyle]} />

          {checked && (
            <Image style={styles.checkboxContainer} source={Icons.tickmark} />
          )}
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
    );
  };
  return (
    <Modal
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      isVisible={true}
      hideModalContentWhileAnimating={true}>
      <View style={{flex: 1, backgroundColor: 'white', borderRadius: 5}}>
        {/* <SearchBar
          placeholder="Type Here..."
          onChangeText={text => updateSearch(text)}
          value={searchValue}
        /> */}
        <FlatList
          keyExtractor={(item, index) => {
            return index;
          }}
          data={data}
          extraData={data}
          renderItem={({item, index}) => renderItem(item, index)}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },

  cell: {
    paddingLeft: 20,
    paddingRight: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cellTitle: {
    fontSize: 13,
    flex: 1,
    paddingRight: 10,
    color: '#212529',
  },
  cellLabel: {
    fontSize: 13,
    color: '#212529',
  },
  searchInput: {
    backgroundColor: 'white',
  },
});

export default CityPicker;
