<template>
  <div v-for="(abc, abcIndex) in chaData.abcList">
    <span :class="{'green-color': abcIndex % 2 == 0 }">{{ abc.name }}</span><input type="text" v-model="abc.name">
    <button @click="removeList(abcIndex)">삭제합니다</button>
  </div>
  <br>
  <br>
  <div>
    새로운 사람 : <input type="text" v-model="chaData.newAbc.name">
    <button @click="addList(abcIndex)">추가합시다</button>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'HomeView',
  setup () {
    const chaData = reactive({
      abcList: [
        {
          name: '김철수',
          age: 15
        },
        {
          name: '박나나',
          age: 15
        },
        {
          name: '홍길동',
          age: 15
        },
      ],
      newAbc: {
        name: '임시',
        age: 99
      }
    });

    const removeList = (idx) => {
      chaData.abcList = chaData.abcList.filter((item, itemIdx) => {
        return itemIdx != idx;
      })
    }

    const addList = () => {
      chaData.abcList.push(JSON.parse(JSON.stringify(chaData.newAbc)));
    }

    return {
      chaData,
      removeList,
      addList
    }
  },
  components: {
  }
}
</script>

<style scoped>
  .green-color {
    font-weight: 600;
    color: green;
  }
</style>