import {FlatList, StyleSheet, Text, View} from 'react-native';

const ImageList = ({images}) => {
    return (<View>
        <FlatList data={images}
                  renderItem={({item}) => {
                      return (<View>
                          <Text>{item.description}</Text>
                      </View>);
                    }
                  }
                  keyExtractor={(item) => item.id}
        />
    </View>);
};

const styles = StyleSheet.create({});

export default ImageList;