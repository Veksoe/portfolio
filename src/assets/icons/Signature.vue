<template>
    <svg viewBox="0 0 4.2333332 4.2333333" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
        :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" :class="classes">
        <path d="M 0.80088133,2.2950742
         1.4276341,0.27734163
         2.4327277,3.1822565
         3.10279,1.3558129
         M 2.1067514,1.6863123
         0.36722884,1.8284926
         c 0,0 -0.69583308,2.090233
         1.87534616,2.0756463
         2.1606933,-0.012257
         2.3060497,-3.71150583
         0.1720429,-3.33978474" />
    </svg>
</template>

<script setup>
defineProps({
    strokeWidth: {
        type: [Number, String],
        default: 0.42
    },
    classes: {
        type: String,
        default: ''
    }
})
</script>
