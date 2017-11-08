export default function (state = {}, action) {

  switch (action.type) {
      case "CHANGED_FILTER_VALUE":
        return {...state , [action.payload.filter.id]: action.payload.value};

      case "RECEIVED_FILTERS":
        let filterValues = {};
         Object.keys(action.payload).map( (keyName) => {filterValues[keyName] = ""});
        console.log(filterValues);
        return filterValues;
}

    return state;
}
