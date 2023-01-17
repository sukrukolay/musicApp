import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';
import music_datas from './music.json';
import MusicCard from './components/MusicCard';
import SearchBar from './components/SearchBar';
const App = () => {

  const [list, setList] = useState(music_datas);

  const handleSearch = text => {
    const filteredList = music_datas.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    })

    setList(filteredList);
  }

  const renderMusicDatas = ({ item }) => <MusicCard datas={item} />;
  const renderSeperator = () => <View style={styles.seperator}></View>
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={list}
        renderItem={renderMusicDatas}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
})

export default App;

