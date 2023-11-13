<template>
  <!-- button type -->
  <button
    :type="type"
    class="font-medium rounded-full flex justify-center transition ease-in"
    :class="[
      {
        'bg-primary text-white': bg.length === 0 && !outlined,
        'px-5 py-3 text-sm':
          (size.length === 0 && !outlined) || (size === 'normal' && !outlined),
        'px-5 py-2 text-sm': size === 'sm' && !outlined,
        'px-3 py-2 text-xs': size === 'xs' && !outlined,
        'px-5 py-2.5 text-sm':
          (size.length === 0 && outlined) || (size === 'normal' && outlined),
        'px-5 py-1.5 text-sm': size === 'sm' && outlined,
        'px-3 py-2 text-xs': size === 'xs' && outlined,
        'opacity-50 cursor-not-allowed': disabled,
      },
      buttonBg,
      buttonOutlined,
      buttonOutlineColor,
      buttonFullWidth,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div v-if="isLoading" class="flex items-center">
      <svg
        class="animate-spin -ml-1 mr-2 h-5 w-5 inline"
        :class="[
          {
            'text-white': bg !== 'white',
            'text-gray-600': bg === 'white' || outlined,
          },
        ]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span class="inline truncate">Please wait</span>
    </div>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: "VoBtn",
  props: {
    type: {
      type: String,
      default: "",
      required: false,
    },
    to: {
      type: String,
      default: undefined,
      required: false,
    },
    bg: {
      type: String,
      default: "",
      required: false,
    },
    outlined: {
      type: Boolean,
      default: null,
      required: false,
    },
    outlineColor: {
      type: String,
      default: "",
      required: false,
    },
    size: {
      type: String,
      default: "",
      required: false,
    },
    isFullWidth: {
      type: Boolean,
      default: null,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: null,
      required: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    buttonBg() {
      return {
        "bg-primary text-white": this.bg === "primary",
        "bg-light text-light": this.bg === "light",
        "bg-light-accent text-light-accent": this.bg === "light-accent",
        "bg-dark text-dark": this.bg === "dark",
        "bg-dark-accent text-dark-accent": this.bg === "dark-accent",
        "bg-success text-success": this.bg === "success",
        "bg-warning text-warning": this.bg === "warning",
        "bg-danger text-danger": this.bg === "danger",
        "bg-white": this.bg === "white",
      };
    },
    buttonOutlined() {
      return {
        "outlined border-2 border-primary text-primary bg-white": this.outlined,
      };
    },
    buttonOutlineColor() {
      return {
        "border-primary text-primary bg-white": this.outlineColor === "primary",
        "border-white-transparent text-white-transparent bg-white-transparent":
          this.outlineColor === "white-transparent",
      };
    },
    buttonFullWidth() {
      return {
        "w-full": this.isFullWidth,
      };
    },
  },
  methods: {
    handleClick(e) {
      if (this.to) {
        this.$router.push(this.to);
      }
      return this.$emit("click", e);
    },
  },
};
</script>

<style scoped>
/* primary color */
.bg-primary {
  background: #a64673;
}
.text-primary {
  color: #d05790;
}
.border-primary {
  border-color: #d05790;
}
/* light color */
.bg-light {
  background: #eae8de;
}
.text-light {
  color: #a59ba3;
}
.border-light {
  border-color: #a59ba3;
}
/* light accent color */
.bg-light-accent {
  background: #a59ba3;
}
.text-light-accent {
  color: #eae8de;
}
.border-light-accent {
  border-color: #eae8de;
}
/* dark color */
.bg-dark {
  background: #17182c;
}
.text-dark {
  color: #647aac;
}
.border-dark {
  border-color: #647aac;
}
/* dark accent color */
.bg-dark-accent {
  background: #647aac;
}
.text-dark-accent {
  color: #17182c;
}
.border-dark-accent {
  border-color: #17182c;
}
/* success color */
.bg-success {
  background-color: #5e764f;
}
.text-success {
  color: #acbea1;
}
.border-success {
  border-color: #5e764f;
}
/* warning color */
.bg-warning {
  background-color: #c26922;
}
.text-warning {
  color: #f7b580;
}
.border-warning {
  border-color: #c26922;
}
/* danger color */
.bg-danger {
  background-color: #c3362b;
}
.text-danger {
  color: #f88e86;
}
.border-danger {
  border-color: #c3362b;
}
/* white transparent color */
.bg-white-transparent {
  background-color: rgba(0, 0, 0, 0);
}
.text-white-transparent {
  color: #fff;
}
.border-white-transparent {
  border-color: #fff;
}
@media (hover: hover) and (pointer: fine) {
  /* Desktops with mouse */
  .bg-primary:hover:disabled {
    background: #923d65;
  }
  .bg-primary:hover {
    background: #923d65;
  }
  .outlined.border-primary:hover {
    background: #d05790;
    color: #fff;
  }
  .outlined.border-primary:hover:disabled {
    background: #fff;
    color: #d05790;
  }
  .outlined.border-white-transparent:hover {
    background-color: #fff;
    color: #000;
  }
  .outlined.border-white-transparent:hover:disabled {
    background: #fff;
    color: #000;
  }
}
@media (hover: none) and (pointer: coarse) {
  /* Smartphones and touchscreens */
  .bg-primary:active:disabled {
    background: #923d65;
  }
  .bg-primary:active {
    background: #923d65;
  }
  .outlined.border-primary:active {
    background: #d05790;
    color: #fff;
  }
  .outlined.border-primary:active:disabled {
    background: #fff;
    color: #d05790;
  }
  .outlined.border-white-transparent:active {
    background-color: #fff;
    color: #000;
  }
  .outlined.border-white-transparent:active:disabled {
    background: #fff;
    color: #000;
  }
}
</style>
