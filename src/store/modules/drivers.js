import { filterDrivers } from "@/store/helpers";
export default ({
    namespaced: true,
    state: {
        listDrivers: [
            {
                id: 1,
                name: 'Ivan',
                exp: 13
            },
            {
                id: 2,
                name: 'Pavlo',
                exp: 5
            },
            {
                id: 3,
                name: 'Petro',
                exp: 3
            },
            {
                id: 4,
                name: 'Andriy',
                exp: 10
            },
        ],
        filterObj: {},
    },
    getters: {
        getListDrivers: ({ listDrivers }) => listDrivers,
        getFilteredDrivers: (state) => state.listDrivers.filter(item =>
            filterDrivers(item, state.filterObj)),
        getEditDriverById: (state) => (id) => state.listDrivers.find(item =>
            item.id == id)
    },
    mutations: {
        deleteDriver(state, id) {
            state.listDrivers = state.listDrivers.filter(item => item.id !== id)
        },
        addDriver(state, objDriver) {
            state.listDrivers.push(objDriver)
        },
        editDriver(state, objDriver) {
            const indexDriver = state.listDrivers.findIndex(item => item.id == objDriver.id)
            state.listDrivers[indexDriver] = objDriver
        },
        filterDriver(state, obj) {
            state.filterObj = obj
        }
    },
    actions: {
        deleteDriver({ commit, dispatch }, id) {
            commit('deleteDriver', id),
                dispatch('appointment/deleteAppointmentById', id,
                    { root: true })
        },
        addDriver({ commit }, objDriver) {
            commit('addDriver', {
                id: new Date().getMilliseconds(),
                ...objDriver
            })
        },
        editDriver({ commit }, objDriver) {
            commit('editDriver', objDriver)
        },
        filterDriver({ commit }, obj) {
            commit('filterDriver', obj)
        }
    },
    modules: {},
});
