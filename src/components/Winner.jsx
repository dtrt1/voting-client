/**
 * Created by DTRT on 26.02.2017.
 */
import React from 'react';

export default React.createClass({
    render: function() {
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
});
