import {FlatList, Image, StyleSheet, View, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const ImageList = ({images}) => {

    const navigation = useNavigation();

    return (<View style={{ flex: 1}}>
            <FlatList contentContainerStyle={styles.list} data={images}
                      showsVerticalScrollIndicator={false}
                      horizontal={false}
                      numColumns={2}
                      renderItem={({item}) => {
                          return (
                              <TouchableOpacity style={styles.button}
                                                onPress={() => navigation.navigate('Show', {image: item})}>
                                    <Image style={styles.image} source={{uri: `${item.urls.small}`}}/>
                              </TouchableOpacity>
                          );
                        }
                      }
                      keyExtractor={(item) => item.id}
            />
    </View>);
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        height: 100,
        width: '50%'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    list: {

    }
});

export default ImageList;