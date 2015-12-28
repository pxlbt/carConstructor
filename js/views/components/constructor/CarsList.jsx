import React from 'react'
import classNames from 'classnames'

export default class CarsList extends React.Component {
  constructor(props) {
    super(props);
  }
  onSelect(id,e) {
    e.preventDefault()
    this.props.onCarSelect(id)
  }
  renderCars(item) {
    let itemClass =  classNames({
      'list-group-item': true,
      'active': this.props.activeCar && this.props.activeCar.getCurrentCar().id === item.id
    })
    return <a href="#" key={item.id} className={itemClass} onClick={this.onSelect.bind(this, item.id)} >{item.name}</a>
  }
  render() {
    return  (
      <div className="list-group">
        {this.props.model.cars.getAll().map(this.renderCars.bind(this))}
      </div>
    )
  }
}
