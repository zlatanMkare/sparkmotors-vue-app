<template>
    <div>
        <b-form-group
            id="fieldset1"
            label-for="input1"
        >
            <b-form-input id="input1" placeholder="Enter your name"></b-form-input>
        </b-form-group>
        <b-form-group
            id="fieldset2"
            label-for="input2"
        >
            <b-form-input id="input2" placeholder="Your email address"></b-form-input>
        </b-form-group>
        <b-form-group
            id="fieldset3"
            label-for="input3"
        >
            <b-form-input id="input3" placeholder="Your phone number"></b-form-input>
        </b-form-group>
        <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="What can we help you with?"
                     :rows="3"
                     :max-rows="6">
        </b-form-textarea>
        <br>
        <b-button variant="primary">Submit Question</b-button>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
