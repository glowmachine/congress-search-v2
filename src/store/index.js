import { createStore } from 'easy-peasy'
import filterModel from './filterModel'
import legislatorModel from './legislatorModel'

const store = createStore({
    filters: filterModel,
    legislators: legislatorModel,
})

export default store;