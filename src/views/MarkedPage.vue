<template>
  <div id="marked">
    <h1>Marked pastes</h1>
    <b-row class="header">
      <b-col cols="2">Date</b-col>
      <b-col cols="2">Tags</b-col>
      <b-col cols="7">Paste</b-col>
      <b-col cols="1">Mark</b-col>
    </b-row>
    <paste-item
      v-for="paste in pastes"
      :key="paste.date"
      :id="paste.date"
      :paste="paste.contents"
      :date="paste.date"
      :marked="paste.marked"
      :tags="paste.tags"
    ></paste-item>
  </div>
</template>

<script>
import { HTTP } from '@/components/http-common';

export default {
  name: 'Marked',
  data () {
    return {
      pastes: []
    }
  },
  created () {
    this.loadMarkedPastes();
  },
  methods: {
    async loadMarkedPastes () {
      try {
        const response = await HTTP.get('pastes?marked=true');
        this.pastes = response.data;
      } catch (err) {
        console.log('Could not retrieve marked pastes!', err);
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
