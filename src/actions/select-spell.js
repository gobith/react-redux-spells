export const selectSpell = (spell) => {
    console.log("Clicked: " + spell.name);
    return {
        type: "SPELL_SELECTED",
        payload: spell
    }
};
