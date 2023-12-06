import { configureStore } from "@reduxjs/toolkit";
import search_feature from "./SearchFeature";

export default configureStore({
	reducer: {
		search_feature: search_feature,
	},
});