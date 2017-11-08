import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changedFilter} from "../actions/changed-filter";


class FilterList extends React.Component {

  render() {
        return (
          <ul>
          {this.renderFilters()}
          </ul>);
    }

    renderFilters() {
            return Object.values(this.props.filters).map((filter) => {

                  if (filter.isAbc()) {return this.renderAbcFilter(filter)};
                  if (filter.isChoices()) {return this.renderChoicesFilter(filter)};
            });
        }

      renderAbcFilter(filter) {
        return <li key={filter.name}>
                <p>{filter.name}
                <input onChange={(evt) => this.props.changedFilter(filter , evt.target.value)}></input></p>
                </li>;
      }

      renderChoicesFilter(filter) {
        return <li key={filter.name}>choices</li>;
      }

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({changedFilter: changedFilter}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterList);
