<template>
  <div>
    <p>Фільтри</p>
    <label>
      ПІБ
      <input v-model="filterData.name" type="text" />
    </label>
    <label>
      Стаж від:
      <input v-model="filterData.expFrom" type="number" />
    </label>
    <label>
      до:
      <input v-model="filterData.expTo" type="number" />
    </label>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterDrivers",
  data() {
    return {
      filterData: {},
    };
  },
  methods: {
    ...mapActions("drivers", ["filterDriver"]),
  },
  watch: {
    filterData: {
      deep: true,
      handler(newVal) {
        this.filterDriver(newVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>