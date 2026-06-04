import { createStore } from 'easy-peasy'
import filterModel from './filterModel'
import legislatorModel from './legislatorModel'
import socialsModel from './socialsModel'

const store = createStore({
    filters: filterModel,
    legislators: legislatorModel,
    socials: socialsModel,
})

export default store;