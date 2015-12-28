import _ from 'underscore'
import App from  './views/app.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import { carController } from './controllers/car'
import { modelHelper } from './model/helper'

let carControllers = {}

modelHelper.cars.getAll().forEach((item) => {
  carControllers[item.id] = carController(item.id)
})


ReactDOM.render(
  <App carControllers={carControllers} />,
  document.getElementById('app')
);
