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
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </nav>
    </header>


    <section class="hero">
      <div class="background-image"></div>
      <h1>Internationalize Your Event</h1>
      <h3>Real-Time Translation for your Meetings & Events.</h3>
      <event-join></event-join>
    </section>


    <section class="features">
      <h3 class="title">Features and services</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi
        vitae
        pulvinar
        velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
      <hr>

      <ul class="grid">
        <li>
          <i class="fa fa-camera-retro"></i>
          <h4>Photography</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae
            pulvinar velit.</p>
        </li>
        <li>
          <i class="fa fa-cubes"></i>
          <h4>Web Development</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae
            pulvinar velit.</p>
        </li>
        <li>
          <i class="fa fa-newspaper-o"></i>
          <h4>Content Editing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae
            pulvinar velit.</p>
        </li>
      </ul>
    </section>


    <section class="reviews">
      <h3 class="title">What others say:</h3>

      <p class="quote">Mauris sit amet mauris a arcu eleifend ultricies eget ut dolor. Class aptent taciti sociosqu ad
        litora torquent per conubia
        nostra, per inceptos himenaeos.</p>
      <p class="author">— Patrick Farrell</p>

      <p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum
        ultrices. Morbi vitae pulvinar
        velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
      <p class="author">— George Smith</p>

      <p class="quote">Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam vitae leo quis mi pulvinar
        ornare. Integer eu iaculis
        metus.
      </p>
      <p class="author">— Kevin Blake</p>


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
    background-image: url("../static/slide_conference.jpg");
  }
</style>