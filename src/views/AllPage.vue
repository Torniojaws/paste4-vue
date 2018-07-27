<template>
  <div id="all">
    <h1>All pastes</h1>
    <b-row class="header">
      <b-col cols="2">Date</b-col>
      <b-col cols="2">Tags</b-col>
      <b-col cols="7">Paste</b-col>
      <b-col cols="1">Mark</b-col>
    </b-row>
    <paste-item
      v-for="paste in pastes"
      :key="paste._id"
      :id="paste._id"
      :paste="paste.message"
      :date="paste.createdAt"
      :marked="paste.marked"
      :tags="paste.tags"
    ></paste-item>
  </div>
</template>

<script>
import { HTTP } from '@/components/http-common';

export default {
  name: 'All',
  data () {
    return {
      pastes: []
    }
  },
  created () {
    this.loadAllPastes();
  },
  methods: {
    async loadAllPastes () {
      try {
        const response = await HTTP.get('pastes?marked=all');
        this.pastes = response.data;
      } catch (err) {
        console.log('Could not retrieve all pastes!', err);
      }
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
