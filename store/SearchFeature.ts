import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    feature: ""
};

const feature_geographical_object = createSlice({
    name: "search_feature",
    initialState: initialState,
    reducers: {
        updateFeatureGeographicalObject: (state, action) => {
            state.feature = action.payload;
        },
        cleanFeatureGeographicalObject: (state) => {
            state.feature = initialState.feature;
        },
    },
});

export const {updateFeatureGeographicalObject, cleanFeatureGeographicalObject} = feature_geographical_object.actions;

export default feature_geographical_object.reducer;