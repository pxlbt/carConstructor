import _ from 'underscore'
import React from 'react'
import CarConstructor from './components/Constructor.jsx'
import CarsVariants from './components/CarsVariants.jsx'
import {modelHelper} from '../model/helper'
import {carController, aggregationModel} from '../controllers/car'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: modelHelper.cars.getAll(),
      activeCar: null
    }
  }
  carSelect(id) {
    this.setState({
      activeCar: this.props.carControllers[id] || null
    })
  }
  variantChange(id, isActive) {
    if (isActive)
      this.state.activeCar.addVariants(id)
    else
      this.state.activeCar.removeVariant(id)
  }
  onVariantChange(id,isActive) {
    this.variantChange(id,isActive)
    this.setState({
      activeCar: this.state.activeCar
    })
  }
  optionChange(id, isActive) {
    let vid = modelHelper.variants.getOptionVariant(id)
    if (isActive) {
      if (!this.state.activeCar.getVariants(vid))
        this.variantChange(vid, true)
      this.state.activeCar.addOption2Variant(vid,id)
    } else {
      this.state.activeCar.removeOption(vid, id)
    }
  }
  onOptionChange(id, isActive) {
    this.optionChange(id, isActive);
    this.setState({
      activeCar: this.state.activeCar
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <CarConstructor
          model={modelHelper}
          cars={this.state.cars}
          activeCar={this.state.activeCar}
          onCarSelect={this.carSelect.bind(this)}
          onVariantChange={this.onVariantChange.bind(this)}
          onOptionChange={this.onOptionChange.bind(this)}
        />
        <h3>Data</h3>
        <CarsVariants model={modelHelper} aggModel={aggregationModel}  />
      </div>
    )
  }
}
