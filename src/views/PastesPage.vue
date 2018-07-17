<template>
  <div id="pastes">
    <h1>Show all current pastes</h1>
    <p>Will show all {{ msg }} pastes</p>
    <hr />
    <paste-item
      v-for="paste in mockData"
      :key="paste.id"
      :id="paste.id"
      :paste="paste.paste"
      :date="paste.createdAt"
    ></paste-item>
  </div>
</template>

<script>
export default {
  name: 'Pastes',
  data () {
    return {
      msg: 'active',
      // This will be retrieved from the API
      mockData: [
        {
          "id": 123,
          "paste": "This is a paste",
          "createdAt": "2018-07-17 10:20:30"
        },
        {
          "id": 222,
          "paste": "Yet another paste",
          "createdAt": "2018-07-17 11:22:33"
        },
        {
          "id": 321,
          "paste": "One more paste",
          "createdAt": "2018-07-17 12:24:35"
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
p {
  color: silver;
}
</style>
