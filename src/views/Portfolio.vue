<script setup>
import PortfolioItem from '../components/PortfolioItem.vue'
</script>
<template>
  <div class="container-fluid">
    <div class="row pb-4 justify-content-center">
      <div class="col-auto">
  <a class="link" @click=" designf();">#Design</a>
      </div>
      <div class="col-auto">
  <a class="link" @click=" codingf();">#Coding</a>
      </div>
      </div>
  <div class="row">
    <div class="col-md-3" v-show="coding">
      <div class="card border-0 h-100">
        <img class="card-img-top img-fluid" src="../assets/images/test-pattern-152459_960_720.png">
        <div class="card-body">
          <p class="card-text">Thepoint website</p>
        </div>
        <div class="card-footer border-0">
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item1">
        <img class="card-img-top img-fluid" src="../assets/images/s63/screencapture-63salon-1493355216115.png">
        <div class="card-body">
          <p class="card-text">S63 gaming website desgin and coding</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3" v-show="design">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item2">
        <img class="card-img-top img-fluid" src="../assets/images/appicons/Icon-App-1024x1024.png">
        <div class="card-body">
          <p class="card-text">App icon design for mobile devices</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small>
        </div>
      </div>
    </div>
    <div class="col-md-3" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item3">
        <img class="card-img-top img-fluid" src="../assets/images/backoffice/20170201_login.jpg">
        <div class="card-body">
          <p class="card-text">Back office design and fronend coding</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item4">
        <img class="card-img-top img-fluid" src="../assets/images/clubgj/clubgj3.png">
        <div class="card-body">
          <p class="card-text">ClubGJ gaming website desgin and coding</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item5">
        <img class="card-img-top img-fluid" src="../assets/images/coin178/coin178_1.jpg">
        <div class="card-body">
          <p class="card-text">Coin178 gaming website desgin and coding</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3" v-show="design">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item6">
        <img class="card-img-top img-fluid" src="../assets/images/faichun/1.png">
        <div class="card-body">
          <p class="card-text">Fai Chun design</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item7">
        <img class="card-img-top img-fluid" src="../assets/images/fh/20160302_688fh_2.png">
        <div class="card-body">
          <p class="card-text">FH finance website</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item8">
        <img class="card-img-top img-fluid" src="../assets/images/ja8/0761d-0a755301-c44b-480f-8ad2-40ebad552d14.png">
        <div class="card-body">
          <p class="card-text">JA8 gaming website</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item1">
        <img class="card-img-top img-fluid" src="../assets/images/test-pattern-152459_960_720.png">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100">
        <img class="card-img-top img-fluid" src="../assets/images/test-pattern-152459_960_720.png">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100">
        <img class="card-img-top img-fluid" src="../assets/images/test-pattern-152459_960_720.png">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100">
        <img class="card-img-top img-fluid" src="../assets/images/test-pattern-152459_960_720.png">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item1">
        <img class="card-img-top img-fluid" src="../assets/images/test-pattern-152459_960_720.png">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100">
        <img class="card-img-top img-fluid" src="../assets/images/test-pattern-152459_960_720.png">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100">
        <img class="card-img-top img-fluid" src="../assets/images/test-pattern-152459_960_720.png">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card border-0 h-100">
        <img class="card-img-top img-fluid" src="../assets/images/test-pattern-152459_960_720.png">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer border-0">
          <small>#Desgin</small><small class="ps-1">#Coding</small>
        </div>
      </div>
    </div>
  </div>
  <PortfolioItem>
  </PortfolioItem></div>
</template>
<script>
export default {
  data() {
  	return {
	    design: true,
	    coding: true
  	}
	},
  methods: {
  designf: function () {
    return this.design=true, this.coding=false
  },
  codingf: function () {
    return this.design=false, this.coding=true
}
}
}
</script>
<style>
@media screen and (max-width: 768px) {
  .col{flex: auto;}
  }
a.link{cursor: pointer; color:#00ff00;}
a.link:hover, a.link:focus{color:#00ff00;}
</style>