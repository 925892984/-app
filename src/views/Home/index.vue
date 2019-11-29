<template>
  <div id="home">
    <header class="header">
      <div class="container">
        <div class="logo"></div>
        <form class="serchWrap">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="请输入搜索内容" class="inputBox" />
        </form>
      </div>
    </header>
    <div class="main">
      <div class="viewpagerWrap">
        <div class="viewpager container">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in slideList" :key="item.id">
              <img :src="item.image" alt="轮播图" class="image-item" />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="home-menu">
				<div class="menuWrap">
					<div class="mentItem">
						<div class="item-img">
						<img src="@/assets/image/01.png" alt class="imgItem" />
						</div>
            <p class="menuText">特色美食</p>
					</div>
					<div class="mentItem">
						<div class="item-img">
						<img src="@/assets/image/01.png" alt class="imgItem" />
						</div>
            <p class="menuText">特色美食</p>
					</div>
					<div class="mentItem">
						<div class="item-img">
						<img src="@/assets/image/01.png" alt class="imgItem" />
						</div>
            <p class="menuText">特色美食</p>
					</div>
					<div class="mentItem">
						<div class="item-img">
						<img src="@/assets/image/01.png" alt class="imgItem" />
						</div>
            <p class="menuText">特色美食</p>
					</div>
					<div class="mentItem">
						<div class="item-img">
						<img src="@/assets/image/01.png" alt class="imgItem" />
						</div>
            <p class="menuText">特色美食</p>
					</div>
					<div class="mentItem">
						<div class="item-img">
						<img src="@/assets/image/01.png" alt class="imgItem" />
						</div>
            <p class="menuText">特色美食</p>
					</div>
					<div class="mentItem">
						<div class="item-img">
						<img src="@/assets/image/01.png" alt class="imgItem" />
						</div>
            <p class="menuText">特色美食</p>
					</div>
					<div class="mentItem">
						<div class="item-img">
						<img src="@/assets/image/01.png" alt class="imgItem" />
						</div>
            <p class="menuText">特色美食</p>
					</div>
				</div>			
      </div>
      <div class="rule">
        <img src="@/assets/image/ad01.png" alt="分成规则" />
      </div>
    </div>
    <div class="hot">
      <div class="hotWrap">
        <p class="hot-title">
          <img src="@/assets/image/hot.png" alt />
        </p>
        <div class="container">
          <div class="hotShop-wrap" ref="swiper">
            <a class="shop-item" v-for="(item,index) in recommendGoods" :key="index" @click.prevent="headDetail(item.goodsId)">
							<!-- <router-link :to="'/home/details/'+item.goodsId">	 -->
              <div class="shop-img">
                <img :src="item.goodsImg" alt="商品图片" />
              </div>
              <div class="hot-detail">
                <p class="hotName">{{item.goodsTitle}}</p>
                <div class="hot-other">
                  <span class="price">
                    <i class="money-symbol">￥</i>
                    {{item.goodsPrice}}
                  </span>
                  <div class="separate">
                    <span class="separateText money-symbol">分成</span>
                    <span class="separateNum">￥{{item.goodsFenChengPrice}}</span>
                  </div>
                </div>
              </div>
							<!-- </router-link> -->
            </a>
          </div>
					
        </div>
				
      </div>
			
    </div>
		<router-view></router-view>
    <Navbar></Navbar>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import Navbar from "@/components/Navbar/index.vue";
export default {
  name: "Home",
  data() {
    return {
      slideList: [],
      recommendGoods: [],
      scroll: {},
      userId: ""
    };
  },
  components: {
    Navbar
  },
  methods: {
    gethots() {  //获取首页商品推荐
      this.$axios({
        url: "goods/searchGoods",
        method: "post",
        data: {
          flag: "recommend",
          pageNum: 1,
          pageSize: 20,
          userId: this.userId
        },
        transformRequest: [
          function(data) {
            let ret = "";
            for (let key in data) {
              ret +=
                encodeURIComponent(key) +
                "=" +
                encodeURIComponent(data[key]) +
                "&";
            }
            return ret;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(res => {
        let data = res.data;
        if (data.code == 200) {
          this.recommendGoods = data.data.list;
        }
      });
    },
    getslideList() { //获取轮播图
      this.$axios.get("slide/getIndexSlide").then(res => {
        let data = res.data;
        if (data.code == 200) {
          this.slideList = data.data;
        }
      });
		},
		headDetail(id){
			this.$router.push('/home/details/'+id)
		}
  },
  created() {
    this.getslideList();
    this.gethots();
  },
  mounted() {}
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  height: 5rem;
  background: #f30213;
  width: 100%;
  z-index: 1001;
}

.container {
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.logo {
  display: inline-block;
  height: 3rem;
  width: 3rem;
  background-image: url("../../assets/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 1rem;
}

form.serchWrap {
  position: absolute;
  box-sizing: border-box;
  right: 0;
  top: 1.2rem;
  width: 100%;
  height: 3rem;
  padding-left: 5rem;
}

.serchWrap i.iconfont {
  color: #666666;
  display: inline-block;
  position: absolute;
  left: 5.4rem;
  top: 0.5rem;
}

.serchWrap input {
  border: none;
  outline: none;
  padding: 0.8rem 0.4rem;
  border-radius: 8px;
  width: 100%;
  padding-left: 2.2rem;
  box-sizing: border-box;
}

.main {
  width: 100%;
  margin-top: 5rem;
}

.main .viewpagerWrap {
  height: 14rem;
  width: 100%;
  box-sizing: border-box;
  background: #f30213;
  border: solid #f30213;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.viewpager {
  height: 12rem;
  border-radius: 10px;
  overflow: hidden;
}

.image-item {
  width: 100%;
  height: 100%;
}

.home-menu {
  width: 100%;
  height: auto;
  background: #ffffff;
  margin-top: 2rem;
}

.menuWrap {
  width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.menuWrap .mentItem{
	width: 25%;
	overflow: hidden;
}
.mentItem .item-img{
	margin: 0 auto;
	width: 50px;
	height: 50px;
}
.mentItem .item-img > img{
	width: 100%;
	width: 100%;
}
.menuText {
	height: 30px;
	width: 50px;
  font-size: 1.2rem;
	color: #666666;
	margin: 10px auto 0 auto;
}
.rule {
  width: 100%;
  height: auto;
}

.rule img {
  width: 99%;
  height: 13rem;
}

.hot {
  background: #eeeeee;
  width: 100%;
  height: auto;
  margin-top: 0.5rem;
}

.hotWrap {
  font-size: 1.4rem;
  color: #c9b1b1;
}

.hotWrap .container {
  width: 98%;
  margin: 0 auto;
  position: relative;
}

.hot-title {
  display: inline-block;
  width: 100%;
  height: 20px;
  margin: 15px 0;
}

.hot-title > img {
  width: 100%;
  height: 100%;
}

.hotShop-wrap {
  display: flex;
  height: auto;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
}

.hotShop-wrap .shop-item {
  width: 180px;
  box-sizing: border-box;
  background: #ffffff;
	overflow: hidden;
	margin-bottom: 10px;
}

.shop-img {
  width: 182.5px;
  height: 182.5px;
  overflow: hidden;
}
.shop-img > img{
	width: 100%;
	height: 100%;
}
.hot-detail {
  width: 100%;
  height: 70px;
  overflow: hidden;
  box-sizing: border-box;
}

.hot-detail p.hotName {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  color: #000000;
  font-size: 1.4rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hot-other {
  height: 30px;
  line-height: 30px;
	position: relative;
	color: #f30213
}

.hot-other .price {
  position: absolute;
  left: 10px;
}

.hot-other .separate {
  position: absolute;
  display: inline-block;
  right: 10px;
}

.money-symbol {
  font-size: 1rem;
}
</style>
