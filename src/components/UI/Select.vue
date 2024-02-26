<template>
    <div class="container">
        <div class="label-text">{{ label }} <span v-show="required">*</span></div>
        <label class="select-label">
            <input @click.stop="toggleDropdown" :value="inputValue" :required="required" class="select-input" readonly />
            <svg :class="[activeSelect ? 'active' : '']" width="12" height="7" viewBox="0 0 12 7" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999999 1L6 6L11 1" stroke="#b0b0b0" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>

            <ul :class="[activeSelect ? 'active' : '']">
                <li v-for="(list, index) in options" :key="index" @click.stop="updateSelect(index)"
                    :class="[options[index].active ? 'active' : '']">{{ list.text }}</li>
            </ul>


        </label>

        <div class="error-message">
            {{ errorMessage }}
        </div>


    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

.container {
    position: relative;
    padding: 0;

    ul {
        position: absolute;
        width: 100%;
        max-height: 0px;
        overflow: auto;
        top: 35px;
        border-radius: 8px;
        left: 0;
        -webkit-box-shadow: 0px 10px 38px -3px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 10px 38px -3px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 10px 38px -3px rgba(0, 0, 0, 0.2);
        transition: .5s;
        z-index: 1;
        background: white;

        &.active {
            max-height: 150px;
        }

        li {
            padding: 10px;
            transition: .5s;
            background: white;

            &:hover {
                background: #f4f4f4;
                cursor: pointer;
            }

            &.active {
                color: white;
                background: $blueColor;
            }
        }
    }

    .label-text {
        display: flex;
        align-items: center;
        gap: 5px;
  
        font-size: 14px;

        span {
            color: rgb(231, 54, 54);
            transform: translateY(2px);
        }
    }

    .error-message {
        margin: 5px 0 0 0;
        color: rgb(231, 54, 54);
        font-size: 12px;
    }

}

label {
    position: relative;
    width: 100%;
    border: 1px solid $grayColor;
    border-radius: 8px;
    padding: 5px 10px;
    margin: 5px 0 0 0;

    .select-input {
        border: 0;
        padding: 0;
        cursor: pointer;
    }


    svg {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%) rotate(0deg);

        transition: .5s;

        &.active {
            transform: translateY(-50%) rotate(180deg);
        }
    }
}
</style>

<script>
export default {
    props: {
        selectList: {
            type: Array,
            required: true,
        },
        mode: {
            type: String,
        },
        name: {
            type: String,
        },
        label: {
            type: String,
            required: true,
        },
        required: {
            type: Boolean,
        },
        nameEmit: {
            type: String,
            required: true,
        },
        errorMessage: {
            type: String
        },

    },
    data() {
        return {
            options: this.selectList.map(el => {
                return { text: el, active: false }
            }),
            inputValue: '',
            multiValuesList: [],
            activeSelect: false,
        }
    },
    methods: {
        updateSelect(index) {
            if (!this.mode || this.mode === 'one') {
                this.options = this.options.map((el, indexArray) => {
                    return index !== indexArray ? { ...el, active: false } : { ...el, active: !el.active }
                })
                this.inputValue = this.options[index].active ? this.options[index].text : '';
                this.activeSelect = !this.activeSelect;
                this.$emit(this.nameEmit, this.inputValue);
                return;
            }

            if (this.mode === 'multi') {
                const arr = []
                this.options = this.options.map((el, indexArray) => {
                    if (indexArray !== index) {
                        if (el.active)
                            arr.push(el.text)
                    }
                    else {
                        if (!el.active)
                            arr.push(el.text)
                    }
                    return index !== indexArray ? { ...el, active: el.active } : { ...el, active: !el.active }
                })

                this.inputValue = arr.join(', ');
                this.activeSelect = !this.activeSelect
                this.$emit(this.nameEmit, this.inputValue);
                return;
            }
        },
        toggleDropdown() {
            this.activeSelect = !this.activeSelect
        },
        closeDropdown() {
            this.activeSelect = false;
        }

    },
    created: function () {
        window.addEventListener('click', this.closeDropdown);
    },
    destroyed: function () {
        window.addEventListener('click', this.closeDropdown);
    },
};
</script>