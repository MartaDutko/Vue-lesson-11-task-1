<template>
  <div class="block__addBus">
    <label>
      Add bus number:
      <input v-model="newBus.busNumber" type="text" />
    </label>
    <label>
      Add bus number of seats:
      <input v-model="newBus.numberOfSeats" type="number" />
    </label>
    <div>
      <button @click="changeBus">{{ getBtnName }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BusConfig",
  data() {
    return {
      newBus: {},
    };
  },
  computed: {
    ...mapGetters("buses", ["getBusById"]),
    passedId() {
      return this.$route.params.id;
    },
    getBtnName() {
      return this.passedId ? "Змінити" : "Створити";
    },
  },
  methods: {
    ...mapActions("buses", ["addBusToLIst", "editBus"]),
    changeBus() {
      if (this.passedId) {
        this.editBus(this.newBus);
      } else {
        if (Object.keys(this.newBus).length > 1) {
          this.addBusToLIst(this.newBus);
        }
      }
      this.$router.push({
        name: "buses",
      });
    },
  },
  created() {
    if (this.passedId) this.newBus = { ...this.getBusById(this.passedId) };
  },
};
</script>

<style lang="scss" scoped>
.block__addBus {
  display: flex;
  flex-direction: column;
}
</style>