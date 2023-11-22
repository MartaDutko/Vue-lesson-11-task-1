<template>
  <div class="block__bus">
    <div>
      <ol>
        <li v-for="bus in getListBuses" :key="bus.id">
          {{ bus.busNumber }} - {{ bus.numberOfSeats }}
          <button @click="editBus(bus.id)">edit</button>
          <button @click="deleteBus(bus.id)">delete</button>
        </li>
      </ol>
    </div>
    <button @click="addBus">Add bus</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BusesList",
  computed: {
    ...mapGetters("buses", ["getListBuses"]),
  },
  methods: {
    ...mapActions("buses", ["deleteBus"]),
    addBus() {
      this.$router.push({
        name: "busConfig",
      });
    },
    editBus(id) {
      this.$router.push({
        name: "busConfig",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>