import ABCFilter from "../filters/abc-filter";
import ChoicesFilter from "../filters/choices-filter";

export default function (state = {}, action) {

    switch (action.type) {
        case "RECEIVED_FILTERSs":
        let filters = {};
        Object.keys(action.payload).map( (keyName) => {
        let filterSpec = action.payload[keyName];
        let filter = new window[filterSpec.class](filterSpec);
        filter.id = keyName;
        filters[keyName] = filter;

        } );
        return filters;
    }

    switch (action.type) {
        case "RECEIVED_FILTERS":
        let filters = {}

        for (var key in action.payload) {
          let filterSpec = action.payload[key];
          let filter = new window[filterSpec.class](filterSpec);
          filter.id = key;
          filters[key] = filter;
        } ;
        return filters;
    }
    return state;
}
