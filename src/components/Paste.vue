<template>
  <b-row>
    <b-col>{{ id }}</b-col>
    <b-col cols="2">{{ date }}</b-col>
    <b-col cols="8">{{ paste }}</b-col>
    <b-col><b-button type="submit" variant="info">Mark</b-button></b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Paste',
  props: ['id', 'paste', 'date']
}
</script>
