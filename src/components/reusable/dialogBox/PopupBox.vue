<template>
  <div>
    <div class="mb-1"></div>
  </div>
</template>
<script>
export default {
  name: "PopupBox",
  data() {
    return {
    };
  },
  props: {
    type: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  created() {
    if (this.type !== undefined) this.open(this.type, this.message);
  },
  methods: {
    open(type, message) {
      this.$buefy.dialog.alert({
        title: type,
        message: message,
        confirmText: "Ok",
      });
    },
  },
};
</script>
