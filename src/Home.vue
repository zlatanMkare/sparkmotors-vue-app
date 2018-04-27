<template>
    <div>
        <Intro
        intro-heading="Welcome to Spark Motors, a car dealership website for the fast and the furious."
        intro-statement="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore." />

        <b-container>
            <b-row>
            <Car  car-image="https://i.imgur.com/LkuziQv.png" 
                    car-title="Bmw Tuned 2017"
                    car-description="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis " />
            
            <Car  car-image="https://i.imgur.com/Fj9a2eX.png" 
                    car-title="Mercedes S 223 2014"
                    car-description="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis " />
            
            <Car  car-image="https://i.imgur.com/UH8LcYT.png" 
                    car-title="Audi Q4 Quattro"
                    car-description="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis " />

            <Car  car-image="https://i.imgur.com/LkuziQv.png" 
                    car-title="Bmw Tuned 2017"
                    car-description="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis " />
            
            <Car  car-image="https://i.imgur.com/ZvjYXI0.png" 
                    car-title="Audi A5 2017"
                    car-description="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis " />
            
            <Car  car-image="https://i.imgur.com/2ZRJ7BY.png" 
                    car-title="Audi Q4"
                    car-description="Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis " />      
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Car from './components/Car.vue'

export default {
  name: 'app',
  components: {
    Intro,
    Car
  }
}
</script>

<style scoped>

</style>
