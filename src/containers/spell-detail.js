import React from 'react';
import {connect} from 'react-redux';


class SpellDetail extends React.Component {

    render() {

        if (!this.props.spell) {
            return (<div>Nothing selected</div>)
        }

        return (
            <div>
                <h2>{this.props.spell.name}</h2>
            </div>)
    }
}


function mapStateToProps(store) {
    return {
        spell: store.activeSpell
    };
}

export default connect(mapStateToProps)(SpellDetail);
