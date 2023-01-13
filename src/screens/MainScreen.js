import {View, StyleSheet, Text} from 'react-native';
import SearchBar from "../components/SearchBar";
import PhotosList from "../components/PhotosList";
import { FontAwesome } from '@expo/vector-icons';

const MainScreen = () => {
    return (<View style={styles.main}>
        <Text style={styles.title}>Search for awesome images <FontAwesome name="image" size={24} color="black" />
        </Text>
        <SearchBar />
        <PhotosList />
    </View>);
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10
    }
});

export default MainScreen;