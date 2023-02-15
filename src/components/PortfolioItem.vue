<!-- <template>
 <div class="item">
   <i>
     <slot name="icon"></slot>
   </i>
   <div class="details">
     <h3>
       <slot name="heading"></slot>
     </h3>
     <slot></slot>
   </div>
 </div>
</template>

<style scoped>
.item {
 margin-top: 2rem;
 display: flex;
}

.details {
 flex: 1;
 margin-left: 1rem;
}

i {
 display: flex;
 place-items: center;
 place-content: center;
 width: 32px;
 height: 32px;
 color: var(--color-text);
}

h3 {
 font-size: 1.2rem;
 font-weight: 500;
 margin-bottom: 0.4rem;
 color: var(--color-heading);
}

@media (min-width: 1024px) {
 .item {
   margin-top: 0;
   padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
 }

 i {
   top: calc(50% - 25px);
   left: -26px;
   position: absolute;
   border: 1px solid var(--color-border);
   background: var(--color-background);
   border-radius: 8px;
   width: 50px;
   height: 50px;
 }

 .item:before {
   content: ' ';
   border-left: 1px solid var(--color-border);
   position: absolute;
   left: 0;
   bottom: calc(50% + 25px);
   height: calc(50% - 25px);
 }

 .item:after {
   content: ' ';
   border-left: 1px solid var(--color-border);
   position: absolute;
   left: 0;
   top: calc(50% + 25px);
   height: calc(50% - 25px);
 }

 .item:first-of-type:before {
   display: none;
 }

 .item:last-of-type:after {
   display: none;
 }
}
</style>
-->

<template>
  <div class="modal fade" id="item1" data-bs-keyboard="false" tabindex="-1" aria-labelledby="item1Label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg border-0">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="item1Label">Modal title</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="clearfix">
        <img class="img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">

  <p>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>
        </div>
      </div>
    </div>
  </div>
</template>