<template>
    <div id="app" class="container-fluid shadow-sm bg-body p-0 rounded">
        <Content />
        <Footer />
    </div>
</template>

<script>
// import axios from "axios";
// import config from "@/config/index.js";
import Footer from "./components/Footer/Footer.vue";
import Content from "./components/Content/Content.vue";

export default {
    name: "App",
    components: { Footer, Content },
    created() {
        this.$store.dispatch("setAccount");
    },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200;300;400&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
#app {
    font-family: 'Lexend Deca';
    /* box-sizing: border-box; */
    /* background-image: url("https://elearning.ctu.edu.vn/pluginfile.php/1/theme_lambda/pagebackground/1662695177/CTU_Blank_white.png"); */
}
.accordion-item,
.accordion-button:focus,
textarea:focus, 
input[type="text"]:focus, 
input[type="password"]:focus, 
input[type="datetime"]:focus, 
input[type="datetime-local"]:focus, 
input[type="date"]:focus, 
input[type="month"]:focus, 
input[type="time"]:focus, 
input[type="week"]:focus, 
input[type="number"]:focus, 
input[type="email"]:focus, 
input[type="url"]:focus, 
input[type="search"]:focus, 
input[type="tel"]:focus, 
input[type="color"]:focus, 
.uneditable-input:focus,
.button-close:focus,.button-close:focus{   
    border-color: none!important;
    box-shadow: none!important;
    outline: 0 none!important;
    background-color: none!important;

}
select:focus {
  box-shadow: none!important;
  border:none!important;
}
.modal-header {
    background-color: #F2F4E6!important;
}
.modal-body {
    background-color: #F2F4E6!important;
}
.modal-footer {
    background-color: #F2F4E6!important;
}
.accordion-button:not(.collapsed){
        box-shadow: none;
        color:black;
        background-color: transparent;
    }
    .accordion-button:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-icon);
    transform: var(--bs-accordion-btn-icon-transform);
    }
    .btn:first-child:hover, :not(.btn-check)+.btn:hover {
    color: white!important;
    /* background-color: #2C542F!important; */
    border-color: none;
    }
    dropdown-item:active {
    color: white!important;
    text-decoration: none!important;
    background-color: #2C542F!important;}
</style>
