import { createSelector } from "reselect";


export const getFilteredSpells = createSelector(

  state => state.spells ,
  state => state.filters ,
  state => state.filterValues ,
  (spells, filters, filterValues) => {

    let filteredSpells = spells;

    Object.keys(filterValues).map((keyName) => {

          let value = filterValues[keyName];
          let filter = filters[keyName];

          filteredSpells = filter.filter(filteredSpells , value);

        });


    return filteredSpells;
  }
)
