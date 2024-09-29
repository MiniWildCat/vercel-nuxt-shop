import request, {
  Method
} from '@/utils/request.js';
import requestSEO from '@/utils/request_seo.js';


// 商品列表
export function goodsList (params) {
  return request({
    url: '/buyer/goods/goods/es',
    method: Method.GET,
    needToken: false,
    params
  });
}

// 商品分类 筛选条件  品牌， 尺寸等
export function filterList (params) {
  return request({
    url: '/buyer/goods/goods/es/related',
    method: Method.GET,
    needToken: false,
    params
  });
}

// id获取商品详情
export function goodsDetail (goodsId) {
  return request({
    url: `/buyer/goods/goods/get/${goodsId}`,
    method: Method.GET,
    needToken: false
  });
}

// id获取商品Sku详情
export function goodsSkuDetail (params) {
  return request({
    url: `/buyer/goods/goods/sku/${params.goodsId}/${params.skuId}`,
    method: Method.GET,
    needToken: true,
    params
  });
}

// id获取商品Sku详情(seo版本)
export function goodsSkuDetailSEO (params) {
  return requestSEO({
    url: `/buyer/goods/goods/sku/${params.goodsId}/${params.skuId}`,
    method: Method.GET,
    params
  });
}

// 获取所有商品分类
export function getCategory (parentId) {
  return request({
    url: `/buyer/goods/category/get/${parentId}`,
    method: Method.GET,
    needToken: false
  });
}

// 获取所有商品分类(seo版本)
export function getCategorySEO (parentId) {
  return requestSEO({
    url: `/buyer/goods/category/get/${parentId}`,
    method: Method.GET,
    needToken: false
  });
}

// 当前拼团活动未成团会员
export function pintuanMembers (pintuanId) {
  return request({
    url: `/buyer/promotion/pintuan/${pintuanId}/members`,
    method: Method.GET,
    needToken: false
  });
}

/**
 * 获取搜索热词
 * @param {Number} count 获取搜索热词数量
 */
export function hotWords (params) {
  return request({
    url: `/buyer/goods/goods/hot-words`,
    method: Method.GET,
    needToken: false,
    params
  });
}
