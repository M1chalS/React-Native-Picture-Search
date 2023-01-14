import {View, StyleSheet, Text, Image, Dimensions, Alert, TouchableOpacity} from 'react-native';
import * as  MediaLibrary from "expo-media-library"
const ImageShowScreen = ({route}) => {
    const { image } = route.params;

    const handleHold = () => {
        // MediaLibrary.saveToLibraryAsync(image.urls.full).then(() => console.log("zapisano"))
    }

    return (<View style={styles.container}>
        <TouchableOpacity
        onLongPress={handleHold}
        >
        <Image
            style={styles.image}
            defaultSource={require("../../assets/placeholder.webp")}
            source={{uri: `${image.urls.full}`}}/>
        </TouchableOpacity>
        <Text style={styles.text}>{image.description && `"${image.description}"`}</Text>
    </View>);
};

const ratio = Dimensions.get('window').width/541;
const imageMargin = 20;

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: Dimensions.get('window').width - imageMargin * 2,
        height: 362 * ratio - imageMargin * 2,
        margin: imageMargin
    },
    text: {
        alignSelf: "center"
    }
});

export default ImageShowScreen;