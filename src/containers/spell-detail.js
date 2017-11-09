import React from 'react';
import Parser from 'html-react-parser';
import {connect} from 'react-redux';


class SpellDetail extends React.Component {


render(){
  return(
    <div className = "spell-detail">
      {this.renderSpellDetail()}
    </div>)
}


renderSpellDetail() {

  if (!this.props.spell) {
    return <p>Nothing selected</p>
  }

  return (
    <div>
      <h2>{this.props.spell.name}</h2>

        {this.renderLevels()}
        {this.renderSingle("School" , this.props.spell.school)}
        {this.renderSubSchools()}
        {this.renderSingle("Casting Time" , this.props.spell.castingTime)}
        {this.renderSingle("Range" , this.props.spell.range)}
        {this.renderSingle("Effect" , this.props.spell.effect)}
        {this.renderSingle("Duration" , this.props.spell.duration)}
        {this.renderSingle("Saving Throw" , this.props.spell.savingThrow)}
        {this.renderSingle("Target" , this.props.spell.target)}
        {this.renderSingle("Spell Resistance" , this.props.spell.spellResistance)}
        {this.renderSingle("Description" , this.props.spell.description)}

    </div>

  )
}

renderSingle(title , contents){


  let parsedContents = Parser(String(contents));

  return (
    <div className = "spell-item-container">
      <div className = "spell-item-name">
        {title}
      </div>
      <div className = "spell-item-contents">
        {parsedContents}
      </div>
    </div>)
}

renderSubSchools() {

  let contents = "";

  Object.values(this.props.spell.subSchools).forEach((subSchool) => {
    contents += subSchool.name;
    contents += "<br>"
  })

  return this.renderSingle("Subschool" , contents)

}

renderLevels() {

  let contents = "";

  Object.values(this.props.spell.levels).forEach((level) => {
    contents += level.name;
    contents += " ";
    contents += level.level;
    contents += "<br>"
  })

  return this.renderSingle("Subschool" , contents)

}


}


function mapStateToProps(store) {
    return {
        spell: store.activeSpell
    };
}

export default connect(mapStateToProps)(SpellDetail);
