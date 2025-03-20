import React from 'react';
import { View, Button, Alert } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { InteractionManager } from 'react-native';

const InfoPage = () => {
    const navigation = useNavigation();

    const handleNavigation = () => {
        try {
            console.log("Before test navigation");

            // Use InteractionManager to delay the navigation reset
            InteractionManager.runAfterInteractions(() => {
                setTimeout(() => {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Home' }], // Reset to the Home screen
                        })
                    );
                }, 2000); // Delay of 2000ms
            });

            console.log("After test navigation");
        } catch (error) {
            console.error("Navigation error:", error);
            Alert.alert("Navigation Error", "Could not navigate to Home screen");
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title="Test Navigation Reset"
                onPress={handleNavigation}
            />
        </View>
    );
};

export default InfoPage;
