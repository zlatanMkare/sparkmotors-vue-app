<template>
  <footer>
      <b-container>
          <b-row class="mx-auto">
                <p>© Sparks Motor {{ getThisYear }}. All rights reserved</p>
          </b-row>
      </b-container>
  </footer>
</template>

<script>
export default {
    computed: {
        getThisYear() {
            return new Date().getFullYear();
        }
    }
}
</script>


<style scoped>
footer {
    background-color: #f6f6f6;
    padding: 15px 0;
    margin-top: 3rem;
}

footer p {
    padding: 0;
    margin: 20px 0;
}

</style>
