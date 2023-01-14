import {FlatList, Image, StyleSheet, View, Dimensions, ScrollView} from 'react-native';

const ImageList = ({images}) => {

    return (<View style={{ flex: 1}}>
            <FlatList contentContainerStyle={styles.list} data={images}
                      showsVerticalScrollIndicator={false}
                      horizontal={false}
                      numColumns={2}
                      renderItem={({item}) => {
                          return (
                              <Image style={styles.image} source={{uri: `${item.urls.small}`}}/>
                          );
                        }
                      }
                      keyExtractor={(item) => item.id}
            />
    </View>);
};

const styles = StyleSheet.create({
    image: {
        margin: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: '50%'
    },
    list: {

    }
});

export default ImageList;