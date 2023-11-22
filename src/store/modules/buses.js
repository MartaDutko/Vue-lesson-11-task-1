export default ({
  namespaced: true,
  state: {
    listBuses: [
      {
        id: 1,
        busNumber: 'AA123DD',
        numberOfSeats: 30
      },
      {
        id: 2,
        busNumber: 'DD456AA',
        numberOfSeats: 40
      },
      {
        id: 3,
        busNumber: 'BB123DD',
        numberOfSeats: 50
      },
      {
        id: 4,
        busNumber: 'HH145DD',
        numberOfSeats: 30
      },
    ]
  },
  getters: {
    getListBuses: ({ listBuses }) => listBuses,
    getBusById: state => id => state.listBuses.find(item => item.id == id)
  },
  mutations: {
    addBusToLIst(state, objBus) {
      state.listBuses.push(objBus)
    },
    editBus(state, bus) {
      const editIndex = state.listBuses.findIndex(item => item.id === bus.id)
      state.listBuses[editIndex] = bus
    },
    deleteBus(state, deleteId) {
      state.listBuses = state.listBuses.filter(item => item.id !== deleteId)
    },
  },
  actions: {
    addBusToLIst({ commit }, objBus) {
      commit('addBusToLIst', {
        id: new Date().getSeconds(),
        ...objBus
      })
    },
    editBus({ commit }, bus) {
      commit('editBus', bus)
    },
    deleteBus({ commit, dispatch }, deleteId) {
      commit('deleteBus', deleteId),
        dispatch('appointment/deleteAppointmentById', deleteId,
          { root: true })
    }
  },
  modules: {},
});
