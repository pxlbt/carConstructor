import React from 'react'
import CarsList from './constructor/CarsList.jsx'
import VariantsList from './constructor/VariantsList.jsx'

export default class CarConstructor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return  (
      <div className="row">
        <div className="col-md-4">
          <CarsList {...this.props} />
        </div>
        <div className="col-md-4 col-offset-1">
          <VariantsList {...this.props} />
        </div>
      </div>

    )
  }
}
