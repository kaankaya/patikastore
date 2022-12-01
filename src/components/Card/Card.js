import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './Card.style';

const Card = ({cato}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:cato.imgURL}}></Image>
                <Text style={styles.product_title}>{cato.title}</Text>
                <Text style={styles.product_cost}>{cato.price}</Text>
                {
                    !cato.inStock && (<Text style={styles.stock}>STOKTA YOK</Text>)
                }
        </View>
    )
}

export default Card;