import { getAccessorType } from 'typed-vuex'
import { getterTree, mutationTree, actionTree } from 'typed-vuex'

// Import all your submodules
// import * as submodule from '~/store/submodule'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
export const state = () => ({
  birthday: '' as string,
  username: '' as string,
  counter: 0 as number
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  birthday: state => state.birthday,
  username: state => state.username,
})

export const mutations = mutationTree(state, {
  setBirthday(state, birthday: string): void {
    state.birthday = birthday
  },
  setUsername(state, name: string): void {
    state.username = name
  },
  setCounter(state, data: number): void {
    state.counter = data
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  getOlder({ state, commit }) {
    const current = state.counter
    commit('setCounter', current + 1)
  }
})

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    // submodule,
  },
})
