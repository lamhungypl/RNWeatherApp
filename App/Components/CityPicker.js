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
import Search from 'react-native-search-box';

import {convertCityList} from '../Utils';
import {getCityList, getCityListName, getListCityVN} from '../Utils/data';
import {Icons} from '../Assets';
import HeaderSearch from './HeaderSearch';
const CANCEL_WIDTH = 'cancel'.length * 8 + 25;
const CityPicker = props => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(props.isVisible);
  const [renderData, setRenderData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {});
  useEffect(() => {
    const filterData = data.filter(item => {
      const name = `${item.name}, ${item.country}`;
      const parterm = name.replace(/[, ]/g, '').toLowerCase();
      const keywork = searchValue.replace(/[, ]/g, '').toLowerCase();
      return parterm.includes(keywork);
    });
    setRenderData(filterData);
  }, [searchValue]);
  const getData = async () => {
    const listCityVN = await getListCityVN();
    setData(listCityVN);
    setRenderData(listCityVN);
  };

  const updateSearch = text => {
    setSearchValue(text);
  };
  const clearQuery = () => {
    setSearchValue('');
  };
  const onPressItem = item => {
    props.closeModal();
    props.onPressItem(item);
  };
  const onPressHeader = () => {
    props.closeModal();
  };
  const renderItem = (item, index) => {
    const checked = props.cities.map(city => city.id).includes(item.id);
    const name = `${item.name}, ${item.country}`;
    return (
      <View>
        <TouchableOpacity
          onPress={() => onPressItem(item)}
          style={[styles.cell, props.cellStyle, {height: 40}]}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              numberOfLines={1}
              style={[styles.cellTitle, props.cellTitleStyle]}>
              {name}
            </Text>
            <Text style={[styles.cellLabel, props.cellLabelStyle]} />

            {checked && (
              <Image style={styles.checkboxContainer} source={Icons.tickmark} />
            )}
          </View>
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
      style={{margin: 0}}
      isVisible={props.isVisible}
      hideModalContentWhileAnimating={true}>
      <View style={{flex: 1, backgroundColor: 'white', borderRadius: 5}}>
        <HeaderSearch onPress={() => onPressHeader()} title={'Search'} />
        <Search
          cancelButtonWidth={CANCEL_WIDTH}
          positionRightDelete={CANCEL_WIDTH}
          cancelButtonViewStyle={{width: CANCEL_WIDTH}}
          afterCancel={() => clearQuery()}
          afterDelete={() => clearQuery()}
          onChangeText={text => updateSearch(text)}
          backgroundColor={'rgb(245, 245, 245)'}
          titleCancelColor={'rgb(0, 0, 0)'}
          tintColorSearch={'rgb(0, 0, 0)'}
          inputStyle={styles.searchInput}
          placeholder={'search'}
          cancelTitle={'cancel'}
        />
        <FlatList
          keyExtractor={(item, index) => {
            return Math.random().toString();
          }}
          data={renderData}
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
