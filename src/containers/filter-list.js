import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changedFilter} from "../actions/changed-filter";


class FilterList extends React.Component {

  render() {
        return (
          <div className = "filter">
            <ul>
              {this.renderFilters()}
            </ul>
          </div>);
    }

    renderFilters() {
            return Object.values(this.props.filters).map((filter) => {

                  if (filter.isAbc()) {return this.renderAbcFilter(filter)};
                  if (filter.isChoices()) {return this.renderChoicesFilter(filter)};
            });
        }

      renderAbcFilter(filter) {
        return <li key={filter.name}>
                <p>{filter.name}</p>
                <p><input onChange={(evt) => this.props.changedFilter(filter , evt.target.value)}></input></p>
                </li>;
      }

      renderChoicesFilter(filter) {
        return (
          <li key={filter.name}>
            <p>{filter.name}</p>
            <div className="dropdown">
              <button className="dropbtn">{this.props.filterValues[filter.id]}</button>
              <div className="dropdown-content">
              {Object.values(filter.choices).map((choice) => {
                return (
                  <a onClick={() => {this.props.changedFilter(filter , choice)}}>
                  {choice}
                  </a>)})}
              </div>
            </div>
          </li>);
      }

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters ,
        filterValues: state.filterValues
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({changedFilter: changedFilter}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterList);
