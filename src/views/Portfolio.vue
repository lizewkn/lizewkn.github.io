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
    <div class="col-md-3 mb-4" v-show="coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item10">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/citi/card.jpg">
        <div class="card-body pb-0">
          <p class="card-text pb-0">Citibank website</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item9">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/tp/1.jpg">
        <div class="card-body pb-0">
          <p class="card-text pb-0">Thepoint website</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item11">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/lbs/layouts/Home.jpg">
        <div class="card-body pb-0">
          <p class="card-text pb-0">Lazybug Studio website</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item15">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/oncc2015/ontv.jpg">
        <div class="card-body pb-0">
          <p class="card-text pb-0">ON.CC website design</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item16">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/onccipad/iPad_oncc_index.jpg">
        <div class="card-body pb-0">
          <p class="card-text pb-0">ON.CC iPad app design</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item1">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/s63/screencapture-63salon-1493355216115.png">
        <div class="card-body pb-0">
          <p class="card-text pb-0">S63 gaming website desgin and coding</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item2">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/appicons/Icon-App-1024x1024.png">
        <div class="card-body pb-0">
          <p class="card-text pb-0">App icon design for mobile devices</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item12">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/sag/screencapture-sagaming-1493354857030.png">
        <div class="card-body pb-0">
          <p class="card-text pb-0">SA Gaming website</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small>
        </div>
      </div>
      </div>
    <div class="col-md-3 mb-4" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item5">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/coin178/coin178_1.jpg">
        <div class="card-body pb-0">
          <p class="card-text pb-0">Coin178 gaming website desgin and coding</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item6">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/faichun/1.png">
        <div class="card-body pb-0">
          <p class="card-text pb-0">Fai Chun design</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item7">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/fh/20160302_688fh_2.png">
        <div class="card-body pb-0">
          <p class="card-text pb-0">FH finance website</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item8">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/ja8/0761d-0a755301-c44b-480f-8ad2-40ebad552d14.png">
        <div class="card-body pb-0">
          <p class="card-text pb-0">JA8 gaming website</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item14">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/ppg/layouts/PPGaming_web_layout.jpg">
        <div class="card-body pb-0">
          <p class="card-text pb-0">PP gaming website</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small>
        </div>
      </div>
      </div>
    <div class="col-md-3 mb-4" v-show="design">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item13">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/logo/Artboard11.png">
        <div class="card-body pb-0">
          <p class="card-text pb-0">SDRE logo design</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item3">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/backoffice/20170201_login.jpg">
        <div class="card-body pb-0">
          <p class="card-text pb-0">Back office design and fronend coding</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design || coding">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item4">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/clubgj/clubgj3.png">
        <div class="card-body pb-0">
          <p class="card-text pb-0">ClubGJ gaming website desgin and coding</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4" v-show="design">
      <div class="card border-0 h-100" data-bs-toggle="modal" data-bs-target="#item17">
        <img class="card-img-top img-thumbnail border-0" src="../assets/images/ui/Artboard1.jpg">
        <div class="card-body pb-0">
          <p class="card-text pb-0">Live gaming UI design</p>
        </div>
        <div class="card-footer border-0 pt-0">
          <small class="green">#Desgin</small>
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
  .card-img-top.img-thumbnail{border-radius: 0; background-color: #191919;}
</style>