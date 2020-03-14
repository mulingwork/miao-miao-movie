<template>
    <router-link tag="li" :to="path">
        <div>
            <slot></slot>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            default: '/'
        }
    }
}
</script>