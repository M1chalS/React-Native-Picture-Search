import {View, StyleSheet, Text} from 'react-native';
import SearchBar from "../components/SearchBar";
import PhotosList from "../components/PhotosList";

const MainScreen = () => {
    return (<View style={styles.main}>
        <SearchBar />
        <PhotosList />
    </View>);
};

const styles = StyleSheet.create({
    main: {

    }
});

export default MainScreen;