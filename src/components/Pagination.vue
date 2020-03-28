<template>
  <div>
    <nav aria-label="Page navigation example">
     <ul class="pagination justify-content-center">
      <li class="page-item" :class="{
        'disabled' : !childPagination.has_pre}">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="getCurrentPage(childPagination.current_page - 1)">
          <span aria-hidden="true">
            <i class="fas fa-angle-double-left"></i>
          </span>
        </a>
      </li>
      <li class="page-item" v-for="page in childPagination.total_pages" :key="page" :class="{'active' : childPagination.current_page === page}">
        <a class="page-link" href="#"  @click.prevent="getCurrentPage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{'disabled' : !childPagination.has_next}">
        <a class="page-link" href="#" aria-label="Next"  @click.prevent="getCurrentPage(childPagination.current_page + 1)">
          <span aria-hidden="true">
            <i class="fas fa-angle-double-right"></i>
          </span>
        </a>
      </li>
     </ul>
   </nav>
  </div>
</template>


<script>
export default {
  props: ['childPagination'],
  methods: {
  getCurrentPage(page) {
    //                事件名稱    , 傳出去的參數
    this.$emit("changeCurrentPage", page);
  }
 }
}
</script>
<style lang="scss" scoped>
.pagination {
  
  .page-item.active {
    .page-link {
      background-color: #999;
      border-color: #999;
      color: #fff;
    }
  }
  .page-link {
    font-size: 14px;
    color: #808080;
    border: 1px solid #e6e6e6;
    box-shadow: none;
    transition: .4s;
    &:hover {
      background-color: #999;
      border-color: #999;
      color: #fff;
    }
  }
}

</style>