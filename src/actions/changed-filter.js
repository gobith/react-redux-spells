export const changedFilter = (filter , value) => {
    console.log("Changed: " + filter.name + " " + value);
    return {
        type: "CHANGED_FILTER_VALUE",
        payload: {filter , value}
    }
};
