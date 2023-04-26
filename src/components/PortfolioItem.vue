<template>
  <div class="modal fade" id="item1" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item1Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item1Label">S63 gaming website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem1" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner">
      <template v-for="(image, index) in images1">
        <div :class="['carousel-item', { active: index === 0 }]" data-bs-interval="99999">
          <img :src="image.src" :alt="image.alt" class="d-block w-100">
        </div>
      </template>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem1" data-bs-slide="prev">
      <i class="bi bi-chevron-left green fs-1"></i>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselitem1" data-bs-slide="next">
      <i class="bi bi-chevron-right green fs-1"></i>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item2" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item2Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item2Label">App icon</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem2" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner">
      <template v-for="(image, index) in images2">
        <div :class="['carousel-item', { active: index === 0 }]" data-bs-interval="99999">
          <img :src="image.src" :alt="image.alt" class="d-block w-100">
        </div>
      </template>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem2" data-bs-slide="prev">
      <i class="bi bi-chevron-left green fs-1"></i>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselitem2" data-bs-slide="next">
      <i class="bi bi-chevron-right green fs-1"></i>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item3" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item3Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item3Label">Back office</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem3" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner">
      <template v-for="(image, index) in images3">
        <div :class="['carousel-item', { active: index === 0 }]" data-bs-interval="99999">
          <img :src="image.src" :alt="image.alt" class="d-block w-100">
        </div>
      </template>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem3" data-bs-slide="prev">
      <i class="bi bi-chevron-left green fs-1"></i>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselitem3" data-bs-slide="next">
      <i class="bi bi-chevron-right green fs-1"></i>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item4" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item4Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item4Label">ClubGJ gaming website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem4" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/clubgj/clubgj3.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/clubgj/clubgj4.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem4" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem4" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item5" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item5Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item5Label">Coin178 gaming website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem5" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/coin178/alt_1.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/coin178/coin178_1.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/coin178/slc_1.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem5" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem5" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item6" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item6Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item6Label">Fai Chun</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem6" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/faichun/1.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/faichun/2.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/faichun/3.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/faichun/4.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/faichun/5.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/faichun/6.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/faichun/7.png" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem6" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem6" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item7" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item7Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item7Label">FH finance website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem7" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/fh/20160302_688fh_2.png" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem7" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem7" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item8" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item8Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item8Label">JA8 gaming website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem8" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/ja8/0761d-0a755301-c44b-480f-8ad2-40ebad552d14.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/ja8/opt1.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem8" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem8" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item9" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item9Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item9Label">Thepoint website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem9" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/tp/1.jpg" class="d-block w-100">
    </div>
  </div>
</div>
  <p class="mt-4">
          <small class="green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item10" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item10Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item10Label">Citibank website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem10" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/citi/card.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/citi/citigold.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/citi/form.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/citi/edm.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem10" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem10" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item11" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item11Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item11Label">Lazybug Studio website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem11" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/lbs/layouts/Home.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/screencapture-lazybugstudio-1493354791787.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/screencapture-lazybugstudio-1493375950851.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/screencapture-lazybugstudio-cs1-html-1493375544545.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/screencapture-lazybugstudio-cs2-html-1493375556264.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/screencapture-lazybugstudio-cs3-html-1493375563309.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/screencapture-lazybugstudio-expertise-html-1493375505712.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/screencapture-lazybugstudio-lazybug-html-1493375521061.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/screencapture-lazybugstudio-partner-html-1493375580576.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/screencapture-lazybugstudio-work-html-1493375573762.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/lbs/layouts/WhoWeAre.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem11" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem11" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item12" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item12Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item12Label">SA Gaming website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem12" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/sag/screencapture-sagaming-1493354857030.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/sag/screencapture-sagaming-1493375908156.png" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem12" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem12" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item13" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item13Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item13Label">SDRE logo design</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem13" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/logo/Artboard11.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/logo/Artboard14.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/logo/Artboard2.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/logo/Artboard3.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/logo/Artboard5.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/logo/Artboard6.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/logo/Artboard9.png" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem13" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem13" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item14" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item14Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item14Label">PP gaming website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem14" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/ppg/layouts/PPGaming_web_layout.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/ppg/layouts/PPGaming_web_layout2.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem14" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem14" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small><small class="ps-2 green">#Coding</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item15" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item15Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item15Label">ON.CC website</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem15" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/oncc2015/ontv.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/02_web_index_01.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/20151020.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/640x832.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/hkjc20150901_resulttable.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/hkjc_20150917.png" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/HKSL.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/mgfocus_1.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/mgfocus_2.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/web_index.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/oncc2015/web_landing_20151125.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem15" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem15" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="item16" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item16Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item16Label">ON.CC iPad app design</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem16" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/onccipad/iPad_oncc_index.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/onccipad/iPad_oncc_index_m.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/onccipad/iPad_oncc_index_mmenu.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem16" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem16" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small></p>
</div>
        </div>
        </div>
      </div>
    </div>
  <div class="modal fade" id="item17" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item17Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item17Label">Live gaming UI design</h1>
          <button type="button" class="btn-close bi bi-x-lg green fs-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
            <div id="carouselitem17" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="99999"><img src="../assets/images/ui/Artboard1.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/ui/1col_1.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/ui/LOBBY.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item" data-bs-interval="99999">
      <img src="../assets/images/ui/sicbo_20170301_6.jpg" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselitem17" data-bs-slide="prev">
    <i class="bi bi-chevron-left green fs-1"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselitem17" data-bs-slide="next">
    <i class="bi bi-chevron-right green fs-1"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <p class="mt-4">
          <small class="green">#Desgin</small></p>
</div>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      images1: [
        {
          src: "../src/assets/images/s63/screencapture-63salon-1493355216115.png"
        },
        {
          src: "../src/assets/images/s63/10_0_promotion.jpg",
        },
        {
          src: "../src/assets/images/s63/1_0_index.jpg"
        },
        {
          src: "../src/assets/images/s63/1_1_point_mall.jpg"
        },
        {
          src: "../src/assets/images/s63/63-1.jpg"
        },
        {
          src: "../src/assets/images/s63/63_2_dark_blue_p2.jpg"
        },
        {
          src: "../src/assets/images/s63/8_0_mobile.jpg"
        }
      ],
      images2: [
        {
          src: "../src/assets/images/appicons/Android_Product_Icon.jpg"
        },
        {
          src: "../src/assets/images/appicons/app.jpg"
        },
        {
          src: "../src/assets/images/appicons/AppIcons-iOS11.jpg"
        },
        {
          src: "../src/assets/images/appicons/Icon-App-1024x1024.png"
        },
        {
          src: "../src/assets/images/appicons/512.png"
        }       
      ],
      images3: [
        {
          src: "../src/assets/images/backoffice/20170201_login.jpg"
        },
        {
          src: "../src/assets/images/backoffice/20170124_bo.jpg"
        },
        {
          src: "../src/assets/images/backoffice/20170201_bo2.jpg"
        }       
      ],
    };
  }
};
</script>