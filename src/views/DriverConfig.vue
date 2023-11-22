<template>
  <div>
    <div>
      <label>
        Name
        <input v-model="dataDriver.name" type="text" />
      </label>
      <label>
        Experience
        <input v-model="dataDriver.exp" type="number" />
      </label>
      <div>
        <button @click="changeDriver">{{ getBtnName }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DriverConfig",
  data() {
    return {
      dataDriver: {},
    };
  },
  computed: {
    ...mapGetters("drivers", ["getEditDriverById"]),
    passedId() {
      return this.$route.params.id;
    },
    getBtnName() {
      return this.passedId ? "Змінити" : "Створити";
    },
  },
  methods: {
    ...mapActions("drivers", ["editDriver", "addDriver"]),
    changeDriver() {
      if (this.passedId) {
        this.editDriver(this.dataDriver);
      } else {
        if (Object.keys(this.dataDriver).length > 1) {
          this.addDriver(this.dataDriver);
        }
      }
      this.$router.push({
        name: "drivers",
      });
    },
  },
  created() {
    if (this.passedId)
      this.dataDriver = { ...this.getEditDriverById(this.passedId) };
  },
};
</script>

<style lang="scss" scoped>
</style>