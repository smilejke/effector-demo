import {} from 'effector'

import {mapDomain} from './domain'

const { createStore } = mapDomain

export const $shops = createStore([])

export const $mapbox = createStore({})
