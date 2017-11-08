import {combineReducers} from "redux";
import SpellsReducer from "./reducer-spells";
import ActiveSpellReducer from "./reducer-active-spell";
import FiltersReducer from "./reducer-filters";
import FilterValuesReducer from "./reducer-filter-values";

const allReducers = combineReducers({

    spells: SpellsReducer,
    filters: FiltersReducer,
    filterValues: FilterValuesReducer,
    activeSpell: ActiveSpellReducer
});

export default allReducers
