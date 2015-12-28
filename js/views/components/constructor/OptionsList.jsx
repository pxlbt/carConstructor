import React from 'react'

export default class OptionsList extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleVariant(id, e) {
    let isChecked = e.target.checked;
    this.props.onOptionChange(id, isChecked)
  }
  renderOption(item) {
    let elmProps = {
      isChecked : this.props.activeCar
                && this.props.activeCar.getVariants(this.props.id)
                && this.props.activeCar.getOptions(this.props.id).indexOf(item.id) > -1,
      isDisabled: !this.props.activeCar
    }
    return (
      <li key={item.id}>
        <label><input type="checkbox" onChange={this.toggleVariant.bind(this, item.id)} checked={elmProps.isChecked} disabled={elmProps.isDisabled} /> {item.name}</label>
      </li>
    )
  }
  render() {
    return  (
      <ul>
        {this.props.model.variants.getOptions(this.props.id).map(this.renderOption.bind(this))}
      </ul>
    )
  }
}
