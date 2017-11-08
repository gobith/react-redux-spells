import React from 'react';
import ABCFilter from "../filters/abc-filter";
import ChoicesFilter from "../filters/choices-filter";



class FilterComponent extends React.Component {



    render() {

      let a = "";
      if (this.props.filter.isAbc()) {a = this.renderAbcFilter()};
      if (this.props.filter.isChoices()) {a = this.renderChoicesFilter()};



      return (
        <li key ={this.props.filter.name}>
          <p>{this.props.filter.name}</p>
          <p>{a}</p>
        </li>)

    }

    renderAbcFilter() {
      return (<input onChange={(evt) => {this.props.filter.setValue(evt.target.value)}}></input>)
    }

    renderChoicesFilter() {
      return "choices"
    }



}



export default FilterComponent
