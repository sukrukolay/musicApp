import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './MusicCard.style';
const MusicCard = ({ datas }) => {
    // console.log(datas);
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: datas.imageUrl }}
            />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{datas.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text>{datas.artist}</Text>
                        <Text style={styles.year}>{datas.year}</Text>
                    </View>

                    {
                        datas.isSoldOut && (
                            <View style={styles.soldout_container}>
                                <Text style={styles.soldout_title}>TÜKENDİ</Text>
                            </View>)

                    }
                </View>
            </View>
        </View>
    )
}

export default MusicCard;