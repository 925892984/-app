<template>
  <div id="new">
    <Header title="新品"></Header>
    <div class="content">
      <router-link to="/new/saleHot" class="new-item">热门爆款</router-link>
      <router-link to="/new/recommendNew" class="new-item">上新推荐</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Header from "@/components/Header/index.vue";
import Navbar from "@/components/Navbar/index.vue";
export default {
  name: "New",
  components: {
    Header,
    Navbar
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
	color: #ffffff;
	margin-top: 5.5rem;
}
.new-item{
	width: 45%;
	height: 30px;
	border: 1px solid #ce1010;
	border-radius: 5px;
	line-height: 30px;
	text-align: center;
	color: #ce1010;
	text-decoration: none;
	font-size: 1.6rem;
}
.new-item.router-link-active{
	background-color: #ce1010;
	color: #ffffff;
}
</style>
