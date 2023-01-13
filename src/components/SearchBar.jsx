import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import {useState} from "react";

const SearchBar = ({searchImages}) => {

    const [term, setTerm] = useState();

    const handleChange = (term) => {
        setTerm(term)
    }

    const handleClick = () => {
        searchImages(term);
    }

    return (<View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={term} onChangeText={handleChange} onSubmitEditing={handleClick}/>
                <FontAwesome5 name="search" style={styles.icon}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleClick}>
                <Text>Search</Text>
                <MaterialCommunityIcons name="cursor-default-click" size={20} color="black"/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 5,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 40,
        width: 80,
        marginVertical: 10
    },
    inputContainer: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 40,
        height: 40,
        flexDirection: "row",
        marginHorizontal: 20
    },
    input: {
        paddingLeft: 10,
        paddingRight: 5,
        fontSize: 20,
        flex: 1,
    },
    icon: {
        padding: 5,
        fontSize: 24
    }
});

export default SearchBar;