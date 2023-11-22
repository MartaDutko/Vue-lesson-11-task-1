<template>
  <div>
    <appointment-list />
    <appointment-creator />
  </div>
</template>

<script>
import AppointmentList from "@/components/AppointmentList.vue";
import AppointmentCreator from "@/components/AppointmentCreator.vue";

export default {
  name: "AppointmentView",
  components: { AppointmentList, AppointmentCreator },
};
</script>

<style lang="scss" scoped>
</style>