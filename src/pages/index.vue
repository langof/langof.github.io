<template>
  <div>
    <header>
      <a href="#">
        <img src="logo.png">
      </a>
      <nav>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#reviews">Contacts</a>
        </li>
      </nav>
    </header>


    <section class="hero">
      <div class="background-image"></div>
      <h1>Internationalize Your Event</h1>
      <h3>Real-Time Multi-Language Translation for your Meetings & Events.</h3>
      <event-join></event-join>
    </section>


    <section id="features">
      <h3 class="title">Features and services</h3>
      <p>Lango is real-time multi-language translation service for your meetings, events and conferences.</p>
      <hr>

      <ul class="grid">
        <li>
          <i class="fa fa-commenting"></i>
          <h4>Speech Recognition</h4>
          <p>In-browser High Quality Real-Time Speech Recognition.</p>
        </li>
        <li>
          <i class="fa fa-language"></i>
          <h4>Real-Time Translation</h4>
          <p>Super-Duper Extreme Quality Real-Time Translation.</p>
        </li>
        <li>
          <i class="fa fa-globe"></i>
          <h4>Multi-Language Support</h4>
          <p>A Looooooooots of Supported Language.</p>
        </li>
      </ul>
    </section>


    <section id="reviews">
      <h3 class="title">What others say:</h3>

      <p class="quote">This is Aweeeeeeeeeeeeessssssome!!! I love this project!</p>
      <p class="author">— Nicolas</p>

      <p class="quote">Ohhhhhhhhh.. Nice Project!</p>
      <p class="author">— Lynn</p>

      <p class="quote">This is crazy. I like this.</p>
      <p class="author">— Chris</p>


    </section>

    <footer>
      <ul>
        <li>
          <a href="#">
            <i class="fa fa-twitter-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-snapchat-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-pinterest-square"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/ysm0622">
            <i class="fa fa-github-square"></i>
          </a>
        </li>
      </ul>
      <p>Made by
        <a href="https://github.com/ysm0622" target="_blank ">Chris Yang</a>.</p>
    </footer>
  </div>
</template>

<script>
	import EventJoin from '@/components/EventJoin.vue'

	export default {
		name: "index",
		layout: 'empty',
		components: {
			EventJoin
		}
	}
</script>

<style lang="scss" scoped>
  @import url("../assets/css/styles.css");

  .background-image {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: auto;
    z-index: -1;
    background: #2196F3 url("../static/slide_conference.jpg") no-repeat fixed;
  }

</style>