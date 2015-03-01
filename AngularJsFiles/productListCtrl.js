"use strict";

var productListCtrl = function ($scope, $filter, productListActiveClass) {

  var selectedCategory = null;

  $scope.selectedPage = 1;
  $scope.pageSize = productListPageCount;

  $scope.selectCategory = function (newCategory) {
    selectedCategory = newCategory;
    $scope.selectedPage = 1;
  };

  $scope.selectPage = function (newPage) {
    $scope.selectedPage = newPage;
  };

  $scope.categoryFilterFn = function (product) {
    return selectedCategory == null || product.category == selectedCategory;
  };

  $scope.getCategoryClass = function (category) {
    return selectedCategory == category ? productListActiveClass : "";
  };

  $scope.getPageClass = function (page) {
    return $scope.selectedPage == page ? productListActiveClass : "";
  }

};

module.exports = angular.module("storeApp")
  .constant("productListActiveClass", "btn-primary")
  .constant("productListPageCount", 3)
  .controller("productListCtrl", productListCtrl,productListPageCount);
