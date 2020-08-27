import React, {Component}from 'react';
import './FruitContainer.css';
import ListFruits from './ListFruits';
import FilterFruits from './FilterFruits'

class FruitContainer extends Component {
  state = {
    fruitsToDisplay1: this.props.fruits,
    fruitsToDisplay2: this.props.fruits

  }

  handdleFilterChange = (e) => {
    const filteredFruitList = this.props.fruits.filter((f)=> {
      return f.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.handdleUnfilterChange(e)

    this.setState({
        fruitsToDisplay1: filteredFruitList
    })
  }

  handdleUnfilterChange = (e) => {
    const filteredFruitList = this.props.fruits.filter((f)=> {
      return !f.toLowerCase().includes(e.target.value.toLowerCase())
    })

    this.setState({
        fruitsToDisplay2: filteredFruitList
    })
  }


  render() {
    let allFruits1 = this.state.fruitsToDisplay1.map((f,i)=> {
      return <ListFruits key={i} body={f}/>
    })
    let allFruits2 = this.state.fruitsToDisplay2.map((f,i)=> {
      return <ListFruits key={i} body={f}/>
    })

    return(
      <div className="container">
        <div>
          <h1>Fruit Container</h1>
          <p> Let's filter fruits from Fruit Container </p>
          <FilterFruits onChange={this.handdleFilterChange}/>
          <br/>
        </div>
        <div className="fruits">
          <div className="list">
            <h3>Filtered fruits:</h3>
            <ul>
              {allFruits1}
            </ul>
          </div>
          <div className="list">
            <h3>Unfiltered fruits:</h3>
            <ul>
              {allFruits2}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitContainer;
