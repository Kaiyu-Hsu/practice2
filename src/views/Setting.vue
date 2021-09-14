<template>
  <div class="home">
    <Navbar />
    <Popular />
  </div>
</template>

<script>
import Popular from "./../components/popular";
import Navbar from "./../components/Navbar";

export default {
  name: "Setting",
  components: {
    Popular,
    Navbar,
  },
};
</script>
