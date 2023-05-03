<template>
    <div class="content">
        <router-view></router-view>
        <Toast />
    </div>
</template>

<script>
import Toast from "../Toast/Toast.vue";
export default {
    name: "ContentComponent",
    data() {
        return {};
    },
    components: { Toast },
};
</script>

<style>
.content {
    /* min-height: auto; */
    /* background-color: #fff; */
}
</style>
