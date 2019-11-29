<template>
  <div class="price">
    <div class="item">
      <div class="item-img">
        <img src="@/assets/image/default.png" alt="商品图片">
      </div>
      <div class="item-details">
        <div class="item-details-top">
          <p class="item-name">测试产品名称</p>
          <div class="store"></div>
        </div>
        <div class="item-details-other">

        </div>
      </div>
    </div>
  </div>
</template><script>
export default {
  name: 'Price'
}
</script>
<style scoped>
  .price{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .item{
    width: 350px;
    height: 200px;
    box-sizing: border-box;
    border: 1px solid #000;
    display: flex;
    margin: 10px 0;
  }
  .item-img{
    height: 100%;
    width: 180px;
  }
  .item-img>img{
    width: 100%;
    height: 100%;
  }
  .item-details{
    flex: 1;
    border: 1px solid #000;
    font-size: 1.2rem;
    color: #eeeeee;
    font-weight: 400;
    position: relative;
  }
  .item-details .item-details-top{
    width: 100%;
    color: #000;
    font-weight: 600;
  }
  .item-details .item-details-other{
    position: absolute;
    height: 50px;
    bottom: 0px;
  }


</style>