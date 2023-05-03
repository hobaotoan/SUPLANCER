<template>
    <div class="detail-task">
        <InforFreelancerTraining />
        <TasksList />
    </div>
</template>

<script>
import InforFreelancerTraining from "../../components/Project/FreelancerTraining/InforFreelancerTraining.vue";
import TasksList from "../../components/Project/FreelancerTraining/TasksList.vue";

export default {
    name: "TaskDetail",
    components: { InforFreelancerTraining, TasksList },
};
</script>

<style></style>
