<template>
    <div class="container">
        <div v-show="label" class="label-text">{{ label }}<span v-show="required">*</span></div>
        <div class="container-input">
            <input @focus="focusDate" @blur="blurDate" @input="updateDate" name="day" type="tel" v-model="day" maxlength="2"
                placeholder="ДД" /><span>.</span><input @focus="focusDate" @blur="blurDate" @input="updateDate" name="month"
                v-model="month" maxlength="2" type="tel" placeholder="ММ" /><span>.</span><input @focus="focusDate"
                @blur="blurDate" @input="updateDate" name="year" v-model="year" maxlength="4" type="tel"
                placeholder="ГГГГ" /><span>Г.</span>
        </div>

        <div class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
.container {
    padding: 0;

    .container-input {
        display: flex;
        gap: 5px;
        margin: 5px 0 0 0;

        input {
            padding: 0;
        }

        span {
            transform: translateY(4px);
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

    .error {
        color: rgb(231, 54, 54);
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
        label: {
            type: String
        },
        required: {
            type: Boolean,
        },
        nameEmit: {
            type: String,
            required: true
        },
        errorMessage: {
            type: String,
        },
    },
    data() {
        return {
            day: '',
            month: '',
            year: '',
            focus: false,
        }
    },
    methods: {
        updateDate(e) {
            let numericValue = e.target.value.replace(/[^+\d]/g, ''); // Remove non-numeric characters
            switch (e.target.name) {
                case 'day':
                    if (Number(this.month) === 1 || Number(this.month) === 3
                        || Number(this.month) === 5 || Number(this.month) === 7 || Number(this.month) === 8
                        || Number(this.month) >= 10 || this.month === '')
                        numericValue = Number(numericValue) > 31 ? '31' : numericValue;
                    if (Number(this.month) === 2) {
                        if (this.year === '') {
                            numericValue = Number(numericValue) > 28 ? '28' : numericValue;
                        }
                        else {
                            if (Number(numericValue) > 28) {
                                numericValue = Number(this.year) % 4 === 0 ? '29' : '28';
                            }
                        }

                    }

                    if (Number(this.month) === 4 || Number(this.month) === 6 || Number(this.month) === 9)
                        numericValue = Number(numericValue) > 30 ? '30' : numericValue;

                    this.day = numericValue
                    break;
                case 'month':
                    numericValue = Number(numericValue) > 12 ? '12' : numericValue;
                    this.month = numericValue
                    if (Number(this.day) > 31) {
                        if (Number(numericValue) === 1 || Number(numericValue) === 3
                            || Number(numericValue) === 5 || Number(numericValue) === 7
                            || Number(numericValue) === 8 || Number(numericValue) >= 10) {
                            this.day = '31'
                        }
                    }
                    if (Number(this.day) > 30) {
                        if (Number(numericValue) === 4 || Number(numericValue) === 6
                            || Number(numericValue) === 9 || Number(numericValue) === 11) {
                            this.day = '30'

                        }
                    }
                    if (Number(this.day) > 28) {
                        if (Number(numericValue) === 2) {
                            if (this.year === '') {
                                this.day = '28'
                            }
                            else {
                                this.day = Number(this.year) % 4 === 0 ? '29' : '28'
                            }


                        }
                    }
                    break
                case 'year':
                    if (Number(this.day) > 28 && Number(this.month) === 2) {
                        this.day = Number(numericValue) % 4 === 0 ? '29' : '28';
                    }
                    this.year = numericValue
                    break

            }


        },
        blurDate(e) {
            if ((e.target.name === 'day' || e.target.name === 'month') && e.target.value.length < 2)
                this[e.target.name] = Number(e.target.value) > 0 && Number(e.target.value) < 10 ? `0${e.target.value}` : e.target.value;
            this.focus = false;

            const emitValue = { value: `${this.month}/${this.day}/${this.year}`, focus: this.focus }
            this.$emit(this.nameEmit, emitValue);
        },
        focusDate(e) {
            this.focus = true;
            const emitValue = { value: `${this.month}/${this.day}/${this.year}`, focus: this.focus }
            this.$emit(this.nameEmit, emitValue);
        }
    }


}
</script>