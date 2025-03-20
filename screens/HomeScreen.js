import React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Info Page"
                onPress={() => navigation.navigate('InfoPage')}
            />
        </View>
    );
};

export default HomeScreen;
