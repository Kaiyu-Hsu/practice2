<template>
  <div class="home">
    <Navbar />
    <div class="profile">
      <!-- ShowUser -->
      <ShowUser />
      <!-- UserTabs -->
      <UserTabs />
      <!-- 推文 -->
    </div>
    <Popular />
  </div>
</template>

<style lang="scss" scoped>
.profile {
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  position: absolute;
  left: 27%;
  bottom: 0px;
  width: 42%;
  height: 100%;
}
</style>

<script>
import Popular from "./../components/popular";
import Navbar from "./../components/Navbar";
import ShowUser from "./../components/ShowUser";
import UserTabs from "./../components/UserTabs";

export default {
  name: "User",
  components: {
    Popular,
    Navbar,
    ShowUser,
    UserTabs,
  },
};
</script>
