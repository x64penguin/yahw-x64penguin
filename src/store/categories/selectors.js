import { Statuses } from "../../constants/statuses";

export const selectCategoryModule = (state) => state.category;

export const selectCategories = (state) => Object.values(selectCategoryModule(state).entities);

export const selectCategoryById = (state, id) => selectCategoryModule(state).entities[id];

export const selectIsCategoriesLoaded = (state) => selectCategoryModule(state).status == Statuses.success;