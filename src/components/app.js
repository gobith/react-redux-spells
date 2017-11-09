import React from "react";
import FilterList from "../containers/filter-list";
import SpellList from "../containers/spell-list";
import SpellDetail from "../containers/spell-detail";


const App = () => (
    <div className = "spell-container">
        <FilterList/>
        <SpellList/>
        <SpellDetail/>
    </div>
);

export default App;
