<!-- Tooltip.vue -->
<template>
  <div v-if="show" :class="tooltipClasses">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: 'top', // 'top', 'right', 'bottom', or 'left'
  },
});

const tooltipClasses = computed(() => {
  return {
    tooltip: true,
    [props.position]: true,
  };
});
</script>

<style scoped>
.tooltip {
  position: absolute;
  background-color: #101828;
  color: #fff;
  padding: 5px 10px;
  border-radius: var(--ct-border-radius);
  opacity: 1;
  z-index: 10;
  width: max-content;
  box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
    0px 4px 8px -2px rgba(16, 24, 40, 0.1);
}

.tooltip::before {
  content: '';
  position: absolute;
  border-width: 5px;
  border-style: solid;
}

.tooltip.top::before {
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-color: #101828 transparent transparent transparent;
}

.tooltip.bottom::before {
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-color: transparent transparent #101828 transparent;
}

.tooltip.left::before {
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  border-color: transparent transparent transparent #101828;
}

.tooltip.right::before {
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  border-color: transparent #101828 transparent transparent;
}

/* Define the position classes */
.top {
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
}

.right {
  top: 50%;
  left: calc(100% + 10px);
  transform: translateY(-50%);
}

.bottom {
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
}

.left {
  top: 50%;
  right: calc(100% + 10px);
  transform: translateY(-50%);
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: all 0.3s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.tooltip-fade-enter-to,
.tooltip-fade-leave-from {
  opacity: 100;
  transform: translateY(0px);
}
</style>
