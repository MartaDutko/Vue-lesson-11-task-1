<template>
  <div>
    <div class="block__drivers">
      <ol>
        <li v-for="driver in getFilteredDrivers" :key="driver.id">
          {{ driver.name }} - {{ driver.exp }}
          <button @click="editDriver(driver.id)">edit</button>
          <button @click="deleteDriver(driver.id)">delete</button>
        </li>
      </ol>
    </div>
    <button @click="addDriver">Add driver</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DriversList",
  computed: {
    ...mapGetters("drivers", ["getFilteredDrivers"]),
  },
  methods: {
    ...mapActions("drivers", ["deleteDriver"]),
    editDriver(id) {
      this.$router.push({
        name: "driverConfig",
        params: {
          id: id,
        },
      });
    },
    addDriver() {
      this.$router.push({
        name: "driverConfig",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>