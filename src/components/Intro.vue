<template>
    <b-container class="intro">
        <b-row>
            <b-col cols="10">
                <h1> {{ IntroHeading }} </h1>
                <br>
                <p> {{ IntroStatement }} </p>
            </b-col>
        </b-row>
    </b-container>
</template>


<script>
export default {
  props: [
      'IntroHeading',
      'IntroStatement'
  ]
}
</script>

<style scoped>
    .intro {
        padding: 5rem 1rem;
    }
    .intro h1 {
        font-size: 2.75em;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: -0.035em;
    }
</style>

