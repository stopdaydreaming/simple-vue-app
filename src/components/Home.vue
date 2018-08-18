<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn More</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">Happy Text</h1>
        <h2 class="subtitle">
          We can fix anything. Let's make some happy little clouds in our world. See there, told you that would be easy. That's a crooked tree. We'll send him to Washington.
        </h2>
      </div>
    </section>

    <div class="columns pd">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="title">Isn't that fantastic that you can create an almighty tree that fast?</p>
            <p class="subtitle">-Bob Ross</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="title">Don't hurry. Take your time and enjoy. You can do anything here.</p>
            <p class="subtitle">-Bob Ross</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="title">Every time you practice, you learn more.</p>
            <p class="subtitle">-Bob Ross</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      heading: 'Soaring to New Heights',
      subheading: 'The more we do this - the more it will do good things to our heart. Just beat the devil out of it. Have fun with it. Only God can make a tree - but you can paint one. La- da- da- da- dah. Just be happy. The very fact that you are aware of suffering is enough reason to be overjoyed that you are alive and can experience it.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: url('../assets/clouds2.jpg')
  background-size: cover

  .title
    color: #fff
    =mobile
      font-weight: bold
    =tablet
      font-size: 2.5rem
    =desktop
      font-size: 4rem
      margin-top: 2rem
  .subtitle
    color: #fff
h2
  margin: 1.5rem 0 2rem 0
.fa-cog
  font-size: 40px
#learn
  =desktop
    margin-bottom: 2em
.pd
  =tablet
    margin-bottom: 2em 0
</style>
