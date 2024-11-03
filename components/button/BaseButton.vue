<template>
  <button
    v-if="isVisible"
    :id="id"
    class="btn base_btn"
    :class="[classObjects, color, icon ? 'icon-padding' : 'btn-padding']"
    :disabled="disabled || loading"
    @click.prevent="onClickEmit"
    @mouseover.stop="toggleTooltip(true)"
    @mouseout.stop="toggleTooltip(false)"
    v-bind="$attrs"
  >
    <span class="icon-tag" v-if="loading || icon">
      <span
        v-if="loading"
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      >
      </span>
      <component :is="icon" v-if="!loading && icon" />
    </span>
    {{ caption }}
    <span v-if="$slots.default">
      <slot />
    </span>
    <Tooltip position="bottom" :show="showTooltip">
      {{ tooltipText }}
    </Tooltip>
  </button>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'btn-primary',
  },
  id: {
    type: String,
    default: '',
  },
  icon: {
    type: Object,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  tooltipText: {
    type: String,
  },
  block: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  caption: {
    type: String,
    default: '',
  },
  clickable: {
    type: Boolean,
    default: true,
  },
  href: {
    type: String,
    default: '',
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(['on-click']);

// tooltip
const { showTooltip, toggleTooltip } = useTooltip(props);

const classObjects = reactive({
  rounded: props.rounded,
});

const onClickEmit = () => {
  if (props.clickable) {
    emits('on-click');
  }
};
</script>

<style lang="scss" scoped>
.base_btn {
  position: relative;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  height: var(--ct-icon-box-size);
  min-width: var(--ct-icon-box-size);
  border-radius: var(--ct-border-radius) !important;
  position: relative;
  transition: all var(--ct-transition-duration) ease;
  padding: 5px 20px;
  font-size: inherit;
  font-weight: 500;
  line-height: 1;

  &.icon-padding {
    padding: var(--bs-btn-padding-y) calc(var(--bs-btn-padding-x) * 1.5)
      var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  }

  &.btn-padding {
    padding: 10px 20px;
  }

  .icon-tag {
    width: var(--ct-icon-width);
    height: var(--ct-icon-height);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: var(--ct-icon-size);
    }
  }
}

.rounded {
  border-radius: 100% !important;
}

.btn-primary {
  background: var(--ct-primary-btn);
  color: var(--ct-white);
}

.btn-secondary {
  background: var(--ct-secondary-btn);
  color: var(--ct-white);
}

.btn-success {
  // background: #667632;
  color: var(--ct-white);
}

.btn-danger {
  background: var(--ct-danger-color);
  color: var(--ct-white);
  box-shadow: var(--ct-box-shadow-sm);

  &:hover {
    background-color: var(--ct-danger-color) !important;
  }
}

.btn-warning {
  background: #ffd859;
  color: #000;
}

.btn-info {
  background: #6d67dc;
  color: var(--ct-white);
}

.btn-light {
  background: var(--ct-white);
  color: #0000;
}

.btn-dark {
  background: #000 !important;
  color: var(--ct-white);
}

.btn-white {
  background: white;
  color: #000;
}

.btn-white:hover{
  color: white;
  background: #000;
}

.btn-link {
  background: #008080;
  color: #000;
}

.btn-gray {
  background: #f5f6f6;
  color: #1f3f63;
}

.btn-default {
  background: transparent;
  border: var(--ct-border-width) solid var(--ct-border-color) !important;
  color: var(--ct-icon-color);
  box-shadow: none !important;

  &:hover {
    background-color: var(--ct-secondary) !important;
  }
}

// , btn-success, , btn-warning, btn-info, btn-light, btn-dark, btn-link
</style>
