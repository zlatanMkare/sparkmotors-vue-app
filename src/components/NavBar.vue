<template>
    <b-navbar toggleable="md" fixed>
        <b-container>
            <b-navbar-brand href="#">
                <b-img src="https://i.imgur.com/ysNi7ml.jpg" fluid alt="Responsive image" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                    <b-nav-item href="#">Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.navbar {
    padding: 20px 0;
    background-color: #fff !important;
    border-bottom: 1px solid #f5f5f5;
}

.navbar-brand img {
    width: 250px;
}

</style>



