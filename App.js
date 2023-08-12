
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Search from './src/components/searchBar';
import BannerMovies from './src/components/bannerMovies';
import Filmes from './src/data/filmes'
import CardMovies from './src/components/cardFilmes';
import Series from './src/data/series';
import CardSeries from './src/components/cardSeries';





export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Search></Search>
      
      
      <View style = {{width: '90%'}}>
        
      <FlatList
      showsHorizontalScrollIndicator = {false}
        horizontal = {true}
        data = {Filmes}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) =>(
          
          <CardMovies
            titulo = {item.nome}
            imagem = {item.imagem}
            nota = {item.nota}
>
        
        </CardMovies>
        )}
        />
        <BannerMovies></BannerMovies>
        
        <FlatList
      showsHorizontalScrollIndicator = {false}
        horizontal = {true}
        data = {Series}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) =>(
          
          <CardSeries
            titulo = {item.nome}
            imagem = {item.imagem}
            nota = {item.nota}
>
          </CardSeries>
        )}
      />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    
  },
});
