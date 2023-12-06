import React from "react";
import {View} from "react-native";
import {
    GeographicalObjectView,
    GeographicalObjectImage,
    TextDescribe,
    styles,
    GradientBackground,
    TextFeature, GeographicalObjectViewDetail
} from "./Style";

export const GeographicalObjectCard = ({feature, photo}) => {
    return (
        <GradientBackground colors={['rgb(195, 96, 42)', 'rgba(11, 3, 45, 1)']}>
            <GeographicalObjectView>
                <GeographicalObjectImage source={{uri: photo}}/>
                <View style={styles.textContainer}>
                    <TextFeature>{feature}</TextFeature>
                </View>
            </GeographicalObjectView>
        </GradientBackground>
    );
};

// Карточки для начальных меню
export const GeographicalObjectShort = ({feature, photo}: { feature: string, photo: string }) => {
    const GeographicalObjectData = {
        feature: feature,
        photo: photo
    };

    return (
        <GeographicalObjectCard {...GeographicalObjectData} />
    );
};

// Детальная информация в карточке
export const GeographicalObjectDetail = ({ feature, type, size, describe, photo }) => {
    return (
        <GradientBackground colors={['rgb(195, 96, 42)', 'rgba(11, 3, 45, 1)']}>
            <GeographicalObjectViewDetail>
                <GeographicalObjectImage source={{ uri: photo }} />
                <View style={styles.textContainer}>
                    <TextDescribe>{feature}</TextDescribe>
                    <TextDescribe>Тип местности: {type}</TextDescribe>
                    <TextDescribe>Площадь: {size}</TextDescribe>
                    <TextDescribe>{describe}</TextDescribe>
                </View>
            </GeographicalObjectViewDetail>
        </GradientBackground>
    );
};

export const GeographicalObjectFull = ({feature, type, size, describe, photo}) => {
    const GeographicalObjectData = {
        feature: feature,
        type: type,
        size: size,
        describe: describe,
        photo: photo,
    };
    return (
        <GeographicalObjectDetail {...GeographicalObjectData} />
    );
};