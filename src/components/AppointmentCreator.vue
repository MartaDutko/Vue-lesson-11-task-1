<template>
  <div>
    <p>Нове призначення</p>
    <label>
      Шофер :
      <select v-model="dataAppointment.idDriver">
        <option
          v-for="driver in getListDrivers"
          :key="driver.id"
          :value="driver.id"
        >
          {{ driver.name }}
        </option>
      </select>
    </label>
    <label>
      Автобус :
      <select v-model="dataAppointment.idBus">
        <option v-for="bus in getListBuses" :key="bus.id" :value="bus.id">
          {{ bus.busNumber }}
        </option>
      </select>
    </label>
    <button @click="addNewAppointment">Додати призначення</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AppointmentCreator",
  data() {
    return {
      dataAppointment: {},
    };
  },
  computed: {
    ...mapGetters("drivers", ["getListDrivers"]),
    ...mapGetters("buses", ["getListBuses"]),
  },
  methods: {
    ...mapActions("appointment", ["addAppointment"]),
    addNewAppointment() {
      this.addAppointment(this.dataAppointment);
      this.dataAppointment = {};
    },
  },
};
</script>

<style lang="scss" scoped>
</style>