<template>
  <div class="wrapper">
    <BaseHeader></BaseHeader>
    <Search @search="handleSearch"></Search>

    <div class="container">
      <!-- 商品筛选栏 -->
      <GoodsClassNav @getParams="getParams"></GoodsClassNav>

      <!-- 商品展示容器 -->
      <div class="goods-box">
        <!-- 商品列表 -->
        <div class="goods-list-box">
          <!-- 排序 -->
          <div class="goods-list-tool">
            <ul>
              <li
                v-for="(item, index) in goodsTool"
                :key="index"
                @click="orderBy(item.en, index)"
              >
                <span :class="{ 'goods-list-tool-active': index === sortIndex }"
                  >{{ item.title }}<Icon type="ios-arrow-round-down"
                /></span>
              </li>
              <li @click="orderBy('price', 5, 'up')" class="price-sort">
                <span :class="{ 'goods-list-tool-active': 5 === sortIndex }">
                  价格
                  <div>
                    <Icon
                      type="md-arrow-dropup"
                      :class="{ 'price-color': sortPriceIndex == 'desc' }"
                    />
                    <Icon
                      type="md-arrow-dropdown"
                      :class="{ 'price-color': sortPriceIndex == 'asc' }"
                    />
                  </div>
                </span>
              </li>
            </ul>
          </div>
          <!-- 列表 -->
          <div class="goods-list">
            <empty v-if="goodsList.length === 0" />
            <div
              v-else
              class="goods-show-info"
              v-for="(item, index) in goodsList"
              :key="index"
              @click="goGoodsDetail(item.id, item.goodsId)"
            >
              <div class="goods-show-img">
                <img width="220" height="220" :src="item.thumbnail" />
              </div>
              <div class="goods-show-price">
                <span>
                  <span class="seckill-price text-danger">{{
                    item.price | unitPrice("￥")
                  }}</span>
                </span>
              </div>
              <div class="goods-show-detail">
                <Tag
                  v-if="item.salesModel === 'WHOLESALE'"
                  class="goods-show-tag"
                  color="purple"
                >
                  批发
                </Tag>
                <span>{{ item.goodsName }}</span>
              </div>
              <div class="goods-show-num">
                已有<span>{{ item.commentNum || 0 }}</span
                >人评价
              </div>
              <div class="goods-show-seller">
                <span class="text-bottom" style="color: #e4393c">{{
                  item.storeName
                }}</span>
              </div>
              <div class="goods-show-right">
                <Tag
                  class="goods-show-tag"
                  color="red"
                  v-if="item.selfOperated"
                >
                  自营
                </Tag>
                <Tag
                  class="goods-show-tag"
                  color="blue"
                  v-if="item.goodsType === 'VIRTUAL_GOODS'"
                >
                  虚拟
                </Tag>
                <Tag
                  class="goods-show-tag"
                  color="blue"
                  v-else-if="item.goodsType === 'PHYSICAL_GOODS'"
                >
                  实物
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-page">
        <Page
          show-total
          show-sizer
          @on-change="changePageNum"
          @on-page-size-change="changePageSize"
          :total="total"
          :page-size="params.pageSize"
        ></Page>
      </div>
    </div>
    <Spin size="large" fix v-if="loading"></Spin>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import GoodsClassNav from "@/components/nav/GoodsClassNav";
import * as apiGoods from "@/api/goods";
export default {
  name: "GoodsList",
  beforeRouteEnter(to, from, next) {
    if(process.client){
      process.client && window.scrollTo(0, 0);;
    }
    next();
  },
  data() {
    return {
      sortIndex: 0, // 排序状态
      sortPriceIndex: false, // 判断价格升序还是降序
      goodsTool: [
        // 排序类型
        { title: "综合", en: "" },
        { title: "销量", en: "buyCount" },
        { title: "评论数", en: "commentNum" },
        { title: "新品", en: "releaseTime" },
      ],
      goodsList: [], // 商品列表
      loading: false, // 加载状态
      total: 0, // 列表总数
      params: {
        // 请求参数
        pageNumber: 0,
        pageSize: 20,
        categoryId: "",
      },
    };
  },
  watch: {
    $route() {
      const keyword = this.$route.query.keyword;
      if (keyword) {
        this.handleSearch(keyword);
      }
      if (this.$route.query.categoryId) {
        let cateId = this.$route.query.categoryId.split(",");
        Object.assign(this.params, this.$route.query);
        this.params.categoryId = cateId[cateId.length - 1];
      }
      if (this.$route.query.promotionType) {
        this.params.promotionType = this.$route.query.promotionType;
      }
      if (this.$route.query.promotionsId) {
        this.params.promotionsId = this.$route.query.promotionsId;
      }
      this.getGoodsList();
    },
  },
  methods: {
    // 搜索
    handleSearch(key) {
      this.params.keyword = key;
      this.$route.query.keyword = key
      this.params.pageNumber = 0;
      this.getGoodsList();
    },
    orderBy(data, index) {
      // 排序
      this.sortIndex = index;
      this.params.sort = data;
      this.params.order = "desc";
      if (data === "price") {
        if (!this.sortPriceIndex) {
          this.sortPriceIndex = "asc";
        } else {
          this.sortPriceIndex === "desc"
            ? (this.sortPriceIndex = "asc")
            : (this.sortPriceIndex = "desc");
        }
        this.params.order = this.sortPriceIndex;
      } else {
        this.sortPriceIndex = false;
      }
      this.getGoodsList();
    },
    goGoodsDetail(skuId, goodsId) {
      // 跳转商品详情
      let routeUrl = this.$router.resolve({
        path: "/goodsDetail",
        query: { skuId, goodsId },
      });
      window.open(routeUrl.href, "_self");
    },
    // 分页 修改页码
    changePageNum(val) {
      this.params.pageNumber = val;
      this.getGoodsList();
    },
    // 分页 修改页数
    changePageSize(val) {
      this.params.pageNumber = 1;
      this.params.pageSize = val;
      this.getGoodsList();
    },

    // 获取商品列表
    getGoodsList() {
      this.loading = true;
      apiGoods
        .goodsList(this.params)
        .then((res) => {
          this.loading = false;
          if (res.success) {
            this.goodsList = res.result.records;
            this.total = res.result.total;
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
    getParams(val) {
      // 筛选条件回显
      Object.assign(this.params, val);
      this.getGoodsList();
    },
  },
  created() {
    if (this.$route.query.categoryId) {
      let cateId = this.$route.query.categoryId.split(",");
      Object.assign(this.params, this.$route.query);
      this.params.categoryId = cateId[cateId.length - 1];
    } else {
      Object.assign(this.params, this.$route.query);
    }
    this.getGoodsList();
  },
  components: {
    GoodsClassNav,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/goodsList.scss";
.cate-nav{
  margin-top: 10px;
}
.goods-show-info > .goods-show-seller > .goods-show-buyer {
  width: 35px;
  height: 17px;
  white-space: nowrap;
  line-height: 17px;
  text-align: center;
  align-content: center;
  padding: 0 3px;
  background-color: #e23a3a;
}

.goods-show-tag {
  height: 18px;
  width: 32px;
  line-height: 14px;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  padding: 0 3px;
}

.goods-show-seller {
  // padding:3px 0;
  vertical-align: middle;
}
.container {
  margin:25px auto 15px auto;
  width: 1184px;
  min-width: 1000px;
  position: relative;
}
.price-sort:hover {
  color: #e23a3a;
}
.goods-box {
  display: flex;
}
/* ---------------侧边广告栏开始------------------- */

.goods-show-right {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}



/* ---------------商品栏开始------------------- */
.goods-list-box {
  position: relative;
  width: 100%;
  // margin-left: 15px;
  // width: calc(100% - 215px);
}
.goods-list-tool {
  width: 100%;
  height: 38px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.goods-list-tool ul {
  padding-left: 15px;
  font-size: 12px;
  margin-top: 10px;
  &::after {
    content: "";
    display: block;
    clear: left;
  }

  .price-sort {
    span {
      display: inline-block;
      vertical-align: middle;
      width: 50px;
      height: 22px;
      position: relative;
      line-height: 15px;
      top: -2px;
      left: 0;
    }
    span > div {
      display: inline-block;
      .ivu-icon {
        font-size: 12px;
        position: absolute;
        &:nth-child(1) {
          top: 1px;
        }
        &:nth-child(2) {
          top: 7px;
        }
      }
      .price-color {
        color: #b3b3b3;
      }
    }
  }
}
.goods-list-tool li {
  cursor: pointer;
  float: left;
}
.goods-list-tool span {
  padding: 3px 5px;
  border: 1px solid #ccc;
  margin-left: -1px;
  background-color: #fff;
}
.goods-list-tool span:hover {
  border-color: $theme_color;
  position: relative;
  text-decoration: none;
  z-index: 1;
}
.goods-list-tool .ivu-icon {
  font-weight: bold;
  font-size: 16px;
}
.goods-list-tool-active {
  color: #fff;
  border-left: 1px solid #ccc;
  background-color: $theme_color !important;
}

/* ---------------商品栏结束------------------- */
</style>
