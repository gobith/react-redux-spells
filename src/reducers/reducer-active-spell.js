export default function (state = null, action) {

    switch (action.type) {
        case "SPELL_SELECTED":
            return action.payload;
            break;
    }
    return state;
}
