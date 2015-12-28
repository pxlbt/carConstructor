import React from 'react'

export default class CarsVariants extends React.Component {
  constructor(props) {
    super(props);
  }
  renderOption(item) {
    return (
      <li key={item.id}>
        {item.name}
      </li>
    )
  }
  renderVariant(carData, item) {
    return (
      <li key={item.id}>
        {item.name}
        <ul>
          {carData.getOptions(item.id).map(this.renderOption)}
        </ul>
      </li>
    )

  }
  renderCarRow(item) {
    let carData = this.props.aggModel(item.id)
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>
          <ul>
            {carData.getVariants().map(this.renderVariant.bind(this, carData))}
          </ul>
        </td>
      </tr>
    )
  }
  render() {
    return  (
      <table className="table">
        <thead>
          <tr>
            <th style={{width: '20%'}}>Название</th>
            <th>Варианты</th>
          </tr>
        </thead>
        <tbody>
          {this.props.model.cars.getAll().map(this.renderCarRow.bind(this))}
        </tbody>
      </table>
    )
  }
}
