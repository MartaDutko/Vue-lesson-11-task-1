import { Date } from "core-js";
export default ({
  namespaced: true,
  state: {
    listAppointment: [
      {
        id: 1,
        idDriver: 1,
        idBus: 1
      },
      {
        id: 2,
        idDriver: 2,
        idBus: 2
      },
    ]
  },
  getters: {
    getListAppointment: (state, getters, rootState, rootGetters) =>
      state.listAppointment.map(item =>
      ({
        id: item.id,
        nameDriver: rootGetters['drivers/getEditDriverById'](item.idDriver).name,
        busNumber: rootGetters['buses/getBusById'](item.idBus).busNumber
      }))

  },
  mutations: {
    deleteAppointmentById(state, id) {
      state.listAppointment = state.listAppointment.filter(item =>
        item.id !== id)
    },
    addAppointment(state, newAppointment) {
      state.listAppointment.push(newAppointment)
    },
  },
  actions: {
    deleteAppointmentById({ commit }, id) {
      commit('deleteAppointmentById', id)
    },
    addAppointment({ commit }, newAppointment) {
      commit('addAppointment', {
        id: new Date().getMilliseconds(),
        ...newAppointment
      })
    },
  },
  modules: {},
});
