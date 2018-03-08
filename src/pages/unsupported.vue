<template>
	<section>
		<v-layout>
			<v-card>
				<img class="icon" src="/chrome_icon.png">
				<span>{{ text }}</span>
				<v-btn href="https://www.google.co.kr/chrome/" flat>크롬 다운로드</v-btn>
			</v-card>
		</v-layout>
	</section>
</template>

<script>
export default {
  data() {
    return {
      text: '이 서비스는 크롬 브라우저에서만 사용 가능합니다.'
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .card {
    display: grid;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    grid-gap: 1rem;
    background: #282a36;
    justify-items: center;
    .icon {
      width: 6rem;
      justify-self: center;
      transition: all 100s;
      animation: rotation 5s infinite linear;
    }
    .btn {
      color: #8be9fd;
      margin: 0;
    }
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}
</style>