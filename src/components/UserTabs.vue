<template>
  <div class="user-tabs">
    <div class="tweets active">推文</div>
    <div class="repliers">推文與回覆</div>
    <div class="liked">喜歡的內容</div>
  </div>
</template>

<style lang="scss" scoped>
.user-tabs {
  border-bottom: 1px solid #e6ecf0;
  position: relative;
  top: 80px;
  display: flex;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #657786;
  .tweets,
  .repliers,
  .liked {
    width: 130px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid #ff6600;
  }
}
</style>
