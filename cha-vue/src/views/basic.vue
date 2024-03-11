<template>
  이름은 ? {{ chachaData.userName }}
  <!-- <HelloWorld  :propsTest="state.porpsTest"></HelloWorld> -->
  <br>
  <button @click="changeName">홍길동 부르기</button>
  <template v-if="chachaData.userName === `홍길동`">
    <p class="hong-name">홍길동을 안불렀읍니다</p>
  </template>
  <template v-else-if="chachaData.userName === `홍길동!`">
    <p class="hong-name">홍길동을 한번 불럿읍니다</p>
  </template>
  <template v-else-if="chachaData.userName === `홍길동!!`">
    <p class="hong-name">홍길동을 두번 불럿읍니다</p>
  </template>
  <template v-else>
    <p class="hong-name">홍길동을 너무 많이 불럿읍니다</p>
  </template>
  <HelloWorld :propsTest="chachaData.userName"></HelloWorld>
  <br>
  중간에 링크넣기 ::: <router-link to="/">Home으로 가봅니다</router-link>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { reactive } from 'vue'

export default {
  name: 'HomeView',
  setup () {
    const chachaData = reactive({
      userName: '홍길동',
      password: 111,
      porpsTest: '테스트프랍스'
    });

    const changeName = () => {
      chachaData.userName = `${chachaData.userName}!`;
    };

    return { 
      chachaData,
      changeName
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .hong-name {
    color: red;
  }
</style>