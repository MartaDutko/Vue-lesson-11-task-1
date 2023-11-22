<template>
  <div>
    <filter-drivers />
    <drivers-list />
  </div>
</template>

<script>
import DriversList from "@/components/DriversList.vue";
import FilterDrivers from "@/components/FilterDrivers.vue";
export default {
  name: "DriversView",
  components: { DriversList, FilterDrivers },
};
</script>

<style lang="scss" scoped>
</style>