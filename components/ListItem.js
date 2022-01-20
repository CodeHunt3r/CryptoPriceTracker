import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import React from 'react';


const ListItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl}) => {
    
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

     const pirceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';
  
    return (
    <TouchableOpacity>
        <View style={styles.itemWrapper}>
            {/*Left Side */}
            <View style={styles.leftWrapper}>
                <Image source={{uri: logoUrl}} style={styles.image}/>
           
            <View style={styles.titelsWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
            </View>
            </View> 
            {/*Right Side */}
            <View style={styles.rightWrapper}>
                <Text style={styles.title}>{currencyFormat(currentPrice)}</Text>
                <Text style={styles.subtitle, {color: pirceChangeColor}}>{priceChangePercentage7d.toFixed(2)}%</Text>
            </View>
           
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
    image: {
        height: 48,
        width: 48,
    },
    titelsWrapper: {
        marginLeft:8,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 14,
        marginTop: 4,
        color: "#A9ABB1",
    },
    
               
});

export default ListItem;
