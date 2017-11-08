import React from "react";
import FilterList from "../containers/filter-list";
import SpellList from "../containers/spell-list";
import SpellDetail from "../containers/spell-detail";


const App = () => (
    <div>
        <FilterList/>
        <h2>Spell List:</h2>
        <SpellList/>
        <SpellDetail/>
    </div>
);

export default App;
