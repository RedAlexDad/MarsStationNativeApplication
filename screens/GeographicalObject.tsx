import {useEffect, useState} from 'react';
import axios from "axios";
import {ActivityIndicator, Text, View} from "react-native";
import {GeographicalObjectDetail} from "../components/GeographicalObject/GeographicalObjectCard";
import {DOMEN} from "../Consts";

export const GeographicalObject = ({route,navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [GeographicalObject, setGeographicalObject] = useState();
    const {id,title} =route.params;

    useEffect(() => {
        navigation.setOptions(title);
        const GetGeographicalObject = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${DOMEN}/api/geographical_object/${id}/`);
                const fetchedGeographicalObject = response.data;
                setGeographicalObject(fetchedGeographicalObject);
            } catch (error) {
                console.log(error);
                alert('Error GET GeographicalObject');
            } finally {
                setIsLoading(false);
            }
        };
        GetGeographicalObject();
    }, []);

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size="large"/>
                <Text>Загружается...</Text>
            </View>
        );
    }

    if (!GeographicalObject) {
        return (
            <View>
                <Text>GeographicalObject not found.</Text>
            </View>
        );
    }

    return (
        <GeographicalObjectDetail
            // @ts-ignore
            feature={GeographicalObject.feature}
            // @ts-ignore
            type={GeographicalObject.type}
            // @ts-ignore
            size={GeographicalObject.size}
            // @ts-ignore
            describe={GeographicalObject.describe}
            // @ts-ignore
            photo={GeographicalObject.photo}
        />
    );
};