<template>
  <b-row>
    <b-col cols="2">{{ dateFormat(date) }}</b-col>
    <b-col cols="2">
      <span v-for="(tag, index) in tags">
        <!-- Add a comma for each, except last item -->
        <!-- In the same row, otherwise there is an extra space -->
        <a :href="'tags/' + tag">{{ tag }}</a><span v-if="index+1 < tags.length">, </span>
      </span>
    </b-col>
    <b-col cols="7" v-html="paste" v-linkified></b-col>
    <b-col cols="1">
      <b-button v-on:click="toggle" type="submit" variant="info">{{ markStatus }}</b-button>
    </b-col>
  </b-row>
</template>

<script>
import { HTTP } from '@/components/http-common';
import formatDate from '@/components/date';

export default {
  name: 'Paste',
  props: ['id', 'paste', 'date', 'tags', 'marked'],
  data () {
    return {
      markStatus: this.marked ? 'Unmark' : 'Mark'
    }
  },
  methods: {
    async toggle (event) {
      event.preventDefault();
      console.log(`Will mark/unmark ID: ${this.id}`);
      try {
        const payload = {
          marked: this.markStatus === 'Unmark' ? false : true
        };
        const response = await HTTP.put(`pastes/${this.id}`, payload);
        // To update the displayed text immediately
        this.markStatus = this.markStatus === 'Unmark' ? 'Mark' : 'Unmark';
      } catch (err) {
        console.log('Failed to mark/unmark:', err);
      }
    },
    dateFormat (date) {
      return formatDate(date);
    }
  }
}
</script>

<style>
/* For some reason, this is missing in bootstrap-vue */
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
