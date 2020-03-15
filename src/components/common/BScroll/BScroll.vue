<template>
    <div ref="BScroll" style="height: 80vh">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    mounted() {
        this.$nextTick(() => {
            new BScroll(this.$refs.BScroll,{
                tap: true
            });
        });
    },
}
</script>