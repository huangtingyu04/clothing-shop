<template>
  <div class="wrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="info col-lg-12">
          <ol class="list">
            <li><i class="fas fa-user"></i>收件人資料</li>
            <li><i class="fas fa-file-alt"></i>訂單確認</li>
            <li class="active"><i class="fas fa-check success"></i>成功下單</li>
          </ol>
          <div class="product-notice text-center">
              <p>付款後，備貨到寄出商品為 3~6 個工作天。(不包含假日)</p>
              <p>統一發票中獎另會通知並寄送紙本發票</p>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  margin-top: 70px;
  background: #fafafa;
  height: 100vh;
  display: flex;
  align-items: center;
  .list{
    margin-bottom: 50px;
  }
  .product-notice {
    p {
      color: #111;
      font-weight: 700;
      font-size: 16px;
    }
  }
}
</style>