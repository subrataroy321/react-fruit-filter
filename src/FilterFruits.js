import React, {Component} from 'react';

class FilterFruits extends Component {

    render() {
        return(
            <div>
                <input 
                    type="text" 
                    placeholder="Enter a fruit to filter" 
                    onChange={this.props.onChange}
                />

            </div>
        )
    }

}

export default FilterFruits;