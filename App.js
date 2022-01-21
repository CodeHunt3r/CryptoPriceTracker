import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';

import {SAMPLE_DATA} from "./assets/data/sampleData";
import { useEffect } from 'react';
import { getMarketData } from './services/cryptoService';

const ListHeader = () => (
  <>
  <View style={styles.titleWrapper}>
    <Text style={styles.largeTitle}>Markets</Text>
  </View>
  <View style={styles.divider}/>
</>
)

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    }

    fetchMarketData();
  }, [])
  return (
   
    <SafeAreaView style={styles.container}>

    <FlatList 
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({item}) => (
        <ListItem name={item.name} symbol={item.symbol} currentPrice={item.current_price}
        priceChangePercentage7d={item.price_change_percentage_7d_in_currency} logoUrl={item.image}
      />
      )}
      ListHeaderComponent={<ListHeader />}
    />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal:16,
    marginTop: 14,
      }
});
