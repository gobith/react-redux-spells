import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectSpell} from '../actions/select-spell';
import ABCFilter from "../filters/abc-filter";
import ChoicesFilter from "../filters/choices-filter";
import FilterComponent from "../components/filter-component";

class SpellList extends React.Component {

  constructor(props){
      super(props);
      this.filters = null;
      this.changedFilter = this.changedFilter.bind(this);
    }

    getFilters(){


      if (this.props.filterSpecs === null) {
        console.log('filterSpecs is null');
        return Object.values({})
      };

      if (this.filters === null) {
        console.log('filters is null');
        this.filters = this.createFilters();
      }

      return Object.values(this.filters);

    }

  createFilters() {
    return (Object.values(this.props.filterSpecs).map( (filterSpec) => {
      return new window[filterSpec.class](filterSpec , this.changedFilter);
    } ))
  }

  renderFilters() {

          return this.getFilters().map((filter) => {
            return (
              <FilterComponent filter = {filter}/>
            );
  });
}

  changedFilter() {
        console.log(this);
        this.filters = this.filters.splice();

  };

  renderSpells() {
        console.log('ttt');
          return Object.values(this.props.spells).map((spell) => {
              return (
                  <li
                    key= {spell.name}
                    onClick={() => this.props.selectSpell(spell)}>
                      {spell.name}
                  </li>);

          });
      }

  render() {
        return (
          <div>
            <ul>{this.renderFilters()}</ul>
            <ul>{this.renderSpells()}</ul>
          </div>);
    }
  }

function mapStateToProps(store) {
    return {
        spells: store.spells,
        filterSpecs: store.filters

    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectSpell: selectSpell}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SpellList);
