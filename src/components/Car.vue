<template>
    <b-col class="car">
        <b-img class="car-img" :src='CarImage' alt=""/>
        <h4>{{ CarTitle }}</h4>
        <p>{{ CarDescription }}</p>
    </b-col>
</template>

<script>
export default {
  props: [
      'CarImage',
      'CarTitle',
      'CarDescription'
  ]
}
</script>

<style scoped>
.car-img {
    width: 300px;
}
.car {
    border: 1px solid #eee;
    cursor: pointer;
    margin: 10px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.car:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

</style>


