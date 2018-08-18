<template>
  <div id="app">
    <div class="navbar has-shadow">
      <div class="container">

        <div class="navbar-start">
          <a class="navbar-brand">Wings Company</a>
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-on:click="toggleNav" v-bind:class="{'is-active': isActive}">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div class="navbar-end navbar-menu" v-bind:class="{'is-active': isActive}">
          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="/about" class="navbar-item r-item">About</router-link>
          <router-link to="/features" class="navbar-item r-item">Features</router-link>
          <router-link to="/faq" class="navbar-item r-item">FAQs</router-link>

          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary is-outlined" href="#">
                <span class="icon">
                  <i class="fa fa-download"></i>&nbsp;<span>Join Now</span>
                </span>
              </a>
            </p>
          </div>
        </div>

    </div>
  </div>

  <router-view></router-view>

  <footer class="footer is-primary">
  <div class="container">
    <div class="columns">
      <div class="column">
        <p>Wings Company. Soaring to new heights.</p>
      </div>
      <div class="column has-text end">
        <a class="icon" href="#"><i class="fa fa-facebook"></i></a>
        <a class="icon" href="#"><i class="fa fa-twitter"></i></a>
      </div>
    </div>
  </div>
</footer>

</div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return{
      isActive: false
    }
  },
  methods: {
    toggleNav: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.navbar
  background-color: #383838
  a:hover
    color: gray
.navbar-start a
  color: #fff
  font-weight: bold
a.r-item
  color: #c1c1c1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #f1f1f1
.navbar-burger span
  background-color: #c1c1c1
footer
  background-color: $primary !important
  color: #fff
  .icon
    color: #fff
    margin-left: 20px
.navbar-item .button.is-primary
  width: 135px
</style>
