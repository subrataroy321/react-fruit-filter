import React, {Component} from 'react';

class ListFruits extends Component {
    render() {
        return(
            <div>
                <li>{this.props.body}</li>
            </div>
        )
    }
}

export default ListFruits;