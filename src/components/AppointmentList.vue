<template>
  <div>
    <p>Призначення</p>
    <div
      v-for="appointment in getListAppointment"
      :key="appointment.id"
      class="item-appointment"
    >
      <p>{{ appointment.nameDriver }} - {{ appointment.busNumber }}</p>
      <div>
        <button @click="deleteAppointmentById(appointment.id)">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AppointmentList",
  computed: {
    ...mapGetters("appointment", ["getListAppointment"]),
  },
  methods: {
    ...mapActions("appointment", ["deleteAppointmentById"]),
  },
};
</script>

<style lang="scss" scoped>
.item-appointment {
  p {
    margin: 0;
  }
  display: flex;
}
</style>