<script setup>
import PortfolioItem from '../components/PortfolioItem.vue'
</script><!-- <script setup>
import PortfolioItem from '../components/PortfolioItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'
</script>

<template>
  <PortfolioItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </PortfolioItem>

  <PortfolioItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </PortfolioItem>

  <PortfolioItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </PortfolioItem>

  <PortfolioItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </PortfolioItem>

  <PortfolioItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </PortfolioItem>
</template> -->

<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card border-0" data-bs-toggle="modal" data-bs-target="#item1">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card border-0" data-bs-toggle="modal" data-bs-target="#item1">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card border-0" data-bs-toggle="modal" data-bs-target="#item1">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card border-0" data-bs-toggle="modal" data-bs-target="#item1">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0">
        <img class="card-img-top img-fluid" src="../assets/test-pattern-152459_960_720.png" alt="...">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
        <div class="card-footer">
          <small>#Desgin</small>
          <small>#Coding</small>
        </div>
      </div>
    </div>
  </div>
  <PortfolioItem>
  </PortfolioItem>
</template>