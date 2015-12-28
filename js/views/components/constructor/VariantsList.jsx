import _ from 'underscore'
import React from 'react'
import OptionsList from './OptionsList.jsx'

export default class VariantsList extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleVariant(id, e) {
    let isChecked = e.target.checked;
    this.props.onVariantChange(id, isChecked)
  }
  renderVariants(item) {
    let elmProps = {
      isChecked : this.props.activeCar && _.findWhere(this.props.activeCar.getVariants(), {id: item.id}),
      isDisabled: !this.props.activeCar
    }
    return (
      <li key={item.id}>
        <label><input type="checkbox" checked={elmProps.isChecked} disabled={elmProps.isDisabled} onChange={this.toggleVariant.bind(this, item.id)} /> {item.name}</label>
        <OptionsList {...this.props} id={item.id} />
      </li>
    )
  }
  render() {
    return  (
      <ul>
        {this.props.model.variants.getAll().map(this.renderVariants.bind(this))}
      </ul>
    )
  }
}
