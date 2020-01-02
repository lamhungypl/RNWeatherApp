import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {backupData} from './backupData';
const width = Dimensions.get('window').width;
const height = 220;
const chartConfig = {
  backgroundColor: '#0091EA',
  backgroundGradientFrom: '#0091EA',
  backgroundGradientTo: '#0091EA',
  color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const ChartTemperature = props => {
  const [chartData, setChartData] = useState();

  useEffect(() => {});
  return (
    <ScrollView
      key={Math.random()}
      style={{
        backgroundColor: chartConfig.backgroundColor,
        flex: 1,
      }}>
      <Text style={styles.labelStyle}>Biểu đồ nhiệt trong ngày</Text>
      <LineChart
        data={props.data}
        width={width}
        height={height}
        chartConfig={chartConfig}
        style={styles.graphStyle}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: chartConfig.backgroundColor,
    flex: 1,
  },
  labelStyle: {
    color: chartConfig.color(),
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  graphStyle: {
    marginVertical: 8,

    ...chartConfig.style,
  },
});
export default ChartTemperature;
