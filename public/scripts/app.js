!function(){angular.module("myApp",["ngRoute"]).controller("MainCtrl",[function(){console.log("working")}]).controller("TabsCtrl",["$scope",function(o){o.tab=1,o.setTab=function(r){return o.tab=r},o.checkTab=function(r){return o.tab===r}}]).controller("FormCtrl",["$scope",function(o){o.forms=[],o.form={},o.formEnter=function(){o.form=this.form,o.forms.push(o.form),o.form={},o.demoForm.$setPristine()}}]).config(["$routeProvider",function(o){o.when("/",{templateUrl:"./pages/home.html"}).when("/tabs",{templateUrl:"./pages/tab.html",controller:"TabsCtrl"}).when("/form",{templateUrl:"./pages/form.html",controller:"FormCtrl"})}])}();