<template>
    <div class="rounded-circle ps-0 position-relative">
        <img
            class="avatar rounded-circle ps-0 position-relative"
            style="background-color: #2C542F; border:none;"
            :src="urlAvatar"
        />
    </div>
</template>

<script>
export default {
    name: "AvatarComponent",
    props: ["urlAvatar"],
};
</script>

<style scoped>
.avatar {
    height: 190px;
    width: 190px;
}
</style>
