/**
 * Created by DTRT on 26.02.2017.
 */
import React from 'react';

export default class extends React.PureComponent {
    render() {
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
}
