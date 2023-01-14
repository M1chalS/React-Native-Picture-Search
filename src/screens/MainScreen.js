import {View, StyleSheet, Text} from 'react-native';
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import { FontAwesome } from '@expo/vector-icons';
import unsplash from "../api/unsplash";
import {useState} from "react";

const MainScreen = () => {
    const [imageList, setImageList] = useState([]);

    const searchImages = async (term) => {
        const response = await unsplash.get('search/photos', {
            params: {
                query: term,
                per_page: 40
            }
        });

        setImageList(response.data.results);
    }

    return (<View style={styles.main}>
        <Text style={styles.title}>Search for awesome images <FontAwesome name="image" size={24} color="black" /></Text>
        <SearchBar searchImages={searchImages}/>
        <ImageList images={imageList}/>
    </View>);
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10
    },
    main: {
        flex: 1
    }
});

export default MainScreen;