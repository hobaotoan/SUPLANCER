<template style="background-color: #F2F4E6;">
    <div class=" " style="background-color: #F2F4E6;">
        <footer
        class="container footer d-flex align-items-center justify-content-between"
    >
        <!-- Copyright -->
        <div class="text-center p-3 d-flex flex-column">
            <img src="/logo.png" style="height:60px; width: 150px;">
            <p>© 2023 Copyright: SUPLANCER</p>
        </div>
        <!-- Contact -->
        <div class="contact d-flex">
            <div class="email me-3">
                <i class="bi bi-envelope-fill"></i>
                suplancer.contact@gmail.com
            </div>
            <a
                class="facebook-fanpage text-decoration-none text-black"
                href="https://www.facebook.com/CTUDHCT/"
                target="_blank"
            >
                <i class="bi bi-facebook"></i>
                fb.com/SUPLANCER
            </a>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
    name: "FooterComponent",
};
</script>

<style>
.footer {
    background-color: #F2F4E6;
    font-size: 14px;
}

.facebook-fanpage {
    color: #212529 !important;
}
</style>
