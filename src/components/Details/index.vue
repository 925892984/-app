<template>
  <div id="details">
    <header id="header">
      <a href="http://localhost:8080/home" class="back-wrap">
        <i class="iconfont icon-fanhui back"></i>
      </a>
      <h4 class="title">详情</h4>
    </header>
  </div>
</template>

<script>
export default {
  name: "Details"
};
</script>

<style scoped>
header {
  height: 5rem;
  background: #f30213;
  width: 100%;
}
header .back-wrap {
  position: absolute;
  left: 0;
  top: 0;
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  text-align: center;
  color: #ffffff;
}
header .back {
  font-size: 2rem;
  font-weight: 800;
}
header .title {
  display: inline-block;
  height: 5rem;
  width: 100%;
  line-height: 5rem;
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
}
</style>
