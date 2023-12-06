import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import { useDispatch } from "react-redux";
import { updateFeatureGeographicalObject } from "../../store/SearchFeature";
import {SearchFeature} from "./Style";

export const SearchComponent = ({ feature,  updateTrigger, onUpdateTriggerChange}: {feature: string, updateTrigger: boolean, onUpdateTriggerChange:any}) => {
    const dispatch = useDispatch();
    const handleChange = (search_feature: string) => {
        dispatch(updateFeatureGeographicalObject(search_feature));
    };
    const pressButton = () => {
        onUpdateTriggerChange(true);
    };

    return (
        <View style={SearchFeature.searchContainer}>
            <TextInput
                style={SearchFeature.searchInput}
                placeholder="Поиск..."
                value={feature}
                onChangeText={(text) => handleChange(text)}
                onSubmitEditing={pressButton}
            />
            {/*Иконка кнопки*/}
            {/*<Button title="Поиск" onPress={pressButton} />*/}
        </View>
    );
};