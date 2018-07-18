<template>
  <div id="pastes">
    <b-row class="header">
      <b-col cols="2">Date</b-col>
      <b-col cols="2">Tags</b-col>
      <b-col cols="7">Paste</b-col>
      <b-col cols="1">Mark</b-col>
    </b-row>
    <paste-item
      v-for="paste in mockData"
      :key="paste.id"
      :id="paste.id"
      :paste="paste.paste"
      :date="paste.createdAt"
      :marked="paste.marked"
      :tags="paste.tags"
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
          "createdAt": "2018-07-17 10:20:30",
          "marked": true,
          "tags": ["test", "something"]
        },
        {
          "id": 222,
          "paste": "Yet another paste with example.com link!",
          "createdAt": "2018-07-17 11:22:33",
          "tags": ["test", "something"]
        },
        {
          "id": 321,
          "paste": "Example <pre>message</pre>",
          "createdAt": "2018-07-17 12:24:35",
          "marked": false,
          "tags": ["stuff"]
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
.header {
  font-weight: bold;
}
</style>
