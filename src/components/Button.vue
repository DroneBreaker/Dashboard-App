<template>
    <div>
        <button class="bg-blue-600 mt-4 p-3 px-4 rounded-md text-white text-sm w-[100%] mb-4">
            {{ props.login }}
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        login: {
            type: String,
            required: true,
            default: "Unknown Button"
        },
    })
</script>

<style lang="scss" scoped>

</style>