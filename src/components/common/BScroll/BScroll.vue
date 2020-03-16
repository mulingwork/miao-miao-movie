<template>
    <div ref="BScroll" style="height: 80vh">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    props: {
        pull_down: {
            type: Function,
            default: () => {}
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.BScroll, {
                tap: true,
                probeType: 1
            });
            this.scroll.on("scroll", pos => {
                if (pos.y > 40) {
                    this.pull_down()
                }
            });
        });
    },
    methods: {
        handleScrollTo(y){
            this.scroll.scrollTo(0, -y, 1000)
        }
    }
};
</script>