import { StyleSheet } from 'react-native';

export const SearchFeature = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 15,
        backgroundColor: 'rgba(195, 96, 42, 1)',
        borderRadius: 12,
        backdropFilter: 'blur(16px) saturate(180%)',
        filter: 'drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))',
        overflow: 'hidden',
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: '#fff',
    },
});
