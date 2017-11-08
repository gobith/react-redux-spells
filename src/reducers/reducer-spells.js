export default function (state = {}, action) {

    switch (action.type) {
        case "RECEIVED_SPELLS":
            return action.payload;
    }

    return state;
}
