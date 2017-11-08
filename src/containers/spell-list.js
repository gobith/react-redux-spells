import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectSpell} from "../actions/select-spell";
import {getFilteredSpells} from "../selectors/selector-filter-spells";



class SpellList extends React.Component {

  render() {
        return (
          <ul>
          {this.renderSpells()}
          </ul>);
    }

    renderSpells() {
            return Object.values(this.props.spells).map((spell) => {
                return (
                    <li
                      key= {spell.name}
                      onClick={() => this.props.selectSpell(spell)}>
                        {spell.name}
                    </li>);

            });
        }


}

const mapStateToProps = (state) => {
    return {
        spells: getFilteredSpells(state)
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectSpell: selectSpell}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SpellList);
