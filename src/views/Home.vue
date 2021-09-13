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
  name: "Home",
  components: {
    Popular,
    Navbar,
  },
};
</script>
