<template>
    <div class="container-input">
        <div>
            <div class="label-text" v-show="label">{{ label }} <span v-show="required">*</span></div>
            <input @focus="focusInput" @blur="blurInput" :placeholder="placeholder" :name="inputName" :value="inputValue"
                type="text" @input="updateValue" />
        </div>

        <div class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
.container-input {
    div {
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

    }

    .error-message {
        margin: 5px 0 0 0;
        color: rgb(231, 54, 54);
        font-size: 12px;
    }
}
</style>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true,
        },
        label: {
            type: String,
        },
        inputName: {
            type: String,
        },
        errorMessage: {
            type: String,
        },
        required: {
            type: Boolean,
        },
        placeholder: {
            type: String,
        },
        inputFunction: {
            type: Function,
        },
        focusEmitName: {
            type: String,
        }

    },
    watch: {
        inputValue(oldValue, newValue) {
            if (this.inputFunction) {
                this.inputValue = this.inputFunction(newValue, oldValue);
            }
        },
    },
    data() {
        return {
            inputValue: this.value,
            errorMsg: this.errorMessage
        }
    },
    methods: {
        updateValue(event) {
            this.inputValue = event.target.value
            const value = {
                value: this.inputValue,
                name: this.inputName,
            }
            this.$emit('update-value', value);
        },

        focusInput(event) {
            if (this?.focusEmitName)
                this.$emit(this.focusEmitName, true)
        },

        blurInput(event) {
            if (this?.focusEmitName)
                this.$emit(this.focusEmitName, false)
        },
    }
};
</script>