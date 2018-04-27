<template>
  <div>
      <Intro 
            intro-heading="About Spark Motors"
            intro-statement="From humble beginnings to world leaders"/>
        <b-container>
            <b-row>
                <b-col lg="7">
                    <p>
                        Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
                        Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
                    </p>
                    <p>
                        Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
                        Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
                    </p>
                    <p>
                        Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
                        Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
                    </p>
                </b-col>
                <b-col class="contact" lg="4" offset-lg="1">
                    <h4>Got questions?</h4>
                    <br>
                    <Contact/>
                </b-col>
            </b-row>
        </b-container>    
  </div>
</template>

<script>
    import Intro from './components/Intro.vue'
    import Contact from './components/Contact.vue'

    export default {
        components: {
           Intro,
           Contact
        }
    }
</script>

<style>
.contact {
    background-color: #f6f6f6;
    padding: 25px;
}

</style>

