import React, {useEffect, useState} from 'react';
import {Text, FlatList, View, ActivityIndicator, RefreshControl, TouchableOpacity,} from 'react-native';
import {GeographicalObjectShort} from "../components/GeographicalObject/GeographicalObjectCard";
import axios from "axios";
import {SearchComponent} from "../components/SearchFeature/SearchFeature";
import {DOMEN, requestTime} from "../Consts";
import {useSelector} from "react-redux";
import {GeographicalObject} from "../Types";

export const GeographicalObjectList = ({navigation}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [GeographicalObject, setGeographicalObject] = React.useState<GeographicalObject[]>([]);
    const [updateTrigger, setUpdateTrigger] = useState(false);

    // @ts-ignore
    const feature = useSelector((state: string) => state.search_feature.feature);

    const GetGeographicalObjectList = async () => {
        setIsLoading(true);
        // Определяем параметры запроса, включая номер страницы и количество объектов на странице
        const params = new URLSearchParams({
            page: '1',
            status: 'True',
            feature: feature,
        });
        const url = `${DOMEN}api/geographical_object/?${params}`
        await axios.get(url, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            signal: new AbortController().signal,
            timeout: requestTime,
        })
            .then(response => {
                setGeographicalObject(response.data.results);
                // console.log("Успешно!", response.data.results);
                // dispatch(updateGeographicalObject([...response.data.results]));
                setIsLoading(false);
                setUpdateTrigger(false)
            })
            .catch(error => {
                console.error("Ошибка!\n", error);
                // createMock();
                return;
            });
    };

    useEffect(() => {
        GetGeographicalObjectList()
        if (updateTrigger) {
            // Вызываем код или обновление, которое должно произойти после успешного удаления
            // Например, здесь можно обновить список географических объектов или выполнить другие действия
            setUpdateTrigger(false);
        }
    }, [updateTrigger])

    if (isLoading) {
        return <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ActivityIndicator size="large"/>
            <Text>Загружается..</Text>
        </View>
    }

    // При нажатии изменяется состояние
    const handleUpdateTriggerChange = (value) => {
        setUpdateTrigger(value);
    };

    return (
        <View>
            <SearchComponent feature={feature} updateTrigger={updateTrigger} onUpdateTriggerChange={handleUpdateTriggerChange}/>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={GetGeographicalObjectList}/>}
                data={GeographicalObject}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('GeographicalObject', {id: item.id, feature: item.feature})}>
                        <GeographicalObjectShort feature={item.feature} photo={item.photo}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

