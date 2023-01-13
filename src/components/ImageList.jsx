import {FlatList, Image, StyleSheet, View} from 'react-native';

const ImageList = ({images}) => {

    return (<View>
        <FlatList data={images}
                  renderItem={({item}) => {
                      console.log(item.urls.small);
                      return (<View style={styles.list}>
                          <Image style={styles.image} source={{uri: `${item.urls.small}`}}/>
                      </View>);
                  }
                  }
                  keyExtractor={(item) => item.id}
        />
    </View>);
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginVertical: 5,
        alignSelf: "center"
    },
    list: {
    }
});

export default ImageList;