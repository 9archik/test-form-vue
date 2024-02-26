<template>
  <div style="padding:20px 10px" id="app">
    <form @submit.prevent="formSubmit" style="padding: 20px; border-radius: 10px" class="container form">
      <form-input :class="'container__input'" @update-value="updateValue" :value="''" :inputName="'surname'"
        :label="'Фамилия'" :required="true" :errorMessage="formLabels.surname.errorMessage"
        :placeholder="'Введите фамилию'" />

      <form-input :class="'container__input'" @update-value="updateValue" :value="''" :inputName="'name'" :label="'Имя'"
        :required="true" :errorMessage="formLabels.name.errorMessage" :placeholder="'Введите имя'" />

      <form-input :class="'container__input'" @update-value="updateValue" :value="''" :inputName="'otch'"
        :label="'Отчество'" :errorMessage="formLabels.otch.errorMessage" :placeholder="'Введите отчество'" />

      <form-input-date :nameEmit="'update-date-birth'" @update-date-birth="updateBirthDay" :class="'container__input'"
        :required="true" :errorMessage="formLabels.birthDate.errorMessage" :label="'Дата рождения'" />

      <form-input :class="'container__input'" @update-value="updateValue" :value="''" :inputName="'gender'" :label="'Пол'"
        :errorMessage="formLabels.gender.errorMessage" :placeholder="'Введите пол'" />

      <form-input :class="'container__input'" :focusEmitName="'focus-phone'" @focus-phone="focusPhone"
        @update-value="updateValue" :value="'7'" :required="true" :inputName="'phone'" :label="'Телефон'"
        :errorMessage="formLabels.phone.errorMessage" :placeholder="'79178752448'" :inputFunction="updatePhone" />

      <form-select :errorMessage="formLabels.clientGroup.errorMessage" :nameEmit="'update-group-client'"
        @update-group-client="updateGroupClient" :class="'container__input'" :mode="'multi'"
        :select-list="selects.clientGroup" :required="true" :label="'Группа клиентов'" />

      <form-select :nameEmit="'update-doctor'" @update-doctor="updateDoctor" :class="'container__input'"
        :selectList="selects.doctor" :required="false" :label="'Лечащий врач'" />

      <label class="checkbox-label">
        <input @change="updateCheckbox" type="checkbox" />

        <span :class="[formLabels.SMS.value ? 'active' : '']">
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.14025 7.32731L0.969769 4.69886C0.861844 4.57263 0.717297 4.50278 0.56726 4.50436C0.417222 4.50594 0.273699 4.57882 0.167603 4.7073C0.0615065 4.83578 0.00132542 5.00959 2.16319e-05 5.19128C-0.00128215 5.37298 0.0563956 5.54803 0.160632 5.67872L2.73568 8.79711C2.84299 8.92702 2.98851 9 3.14025 9C3.29198 9 3.4375 8.92702 3.54481 8.79711L9.83937 1.17439C9.9436 1.04369 10.0013 0.868648 9.99998 0.686953C9.99867 0.505257 9.93849 0.331451 9.8324 0.202968C9.7263 0.0744846 9.58278 0.00160508 9.43274 2.61961e-05C9.2827 -0.00155269 9.13815 0.0682955 9.03023 0.194526L3.14025 7.32731Z"
              fill="white" />
          </svg>
        </span>

        Не отправлять смс
      </label>

      <div class="form__header">Адрес</div>

      <div class="form__address">
        <form-input @update-value="updateValue" :value="''" :inputName="'index'" :label="'Индекс'"
          :placeholder="'Индекс'" />

        <form-input @update-value="updateValue" :value="''" :inputName="'country'" :label="'Страна'"
          :placeholder="'Страна'" />

        <form-input @update-value="updateValue" :value="''" :inputName="'area'" :label="'Область'"
          :placeholder="'Область'" />

        <form-input @update-value="updateValue" :value="''" :required="true" :inputName="'city'" :label="'Город'"
          :errorMessage="formLabels.city.errorMessage" :placeholder="'Город'" />

        <form-input @update-value="updateValue" :value="''" :inputName="'street'" :label="'Улица'"
          :placeholder="'Улица'" />

        <form-input @update-value="updateValue" :value="''" :inputName="'home'" :label="'Дом'" :placeholder="'Дом'" />
      </div>

      <div class="form__header">Паспорт</div>

      <form-select :nameEmit="'update-doc-types'" @update-doc-types="updateDocTypes" :class="'container__input'"
        :select-list="selects.docTypes" :errorMessage="formLabels.docType.errorMessage" :required="true"
        :label="'Тип документа'" />

      <form-input :class="'container__input'" @update-value="updateValue" :value="''" :inputName="'series'"
        :label="'Серия'" :errorMessage="formLabels.otch.errorMessage" :placeholder="'Серия'" />

      <form-input :class="'container__input'" @update-value="updateValue" :value="''" :inputName="'number'"
        :label="'Номер'" :placeholder="'Номер'" />

      <form-input :class="'container__input'" @update-value="updateValue" :value="''" :inputName="'whoIssue'"
        :label="'Кем выдан'" :placeholder="'Кем выдан'" />

      <form-input-date :nameEmit="'update-date-issue'" :errorMessage="formLabels.dateIssue.errorMessage"
        @update-date-issue="updateDateIssue" :class="'container__input'" :required="true" :label="'Дата выдачи'" />

      <div class="form__container-button">
        <button type="submit">Создать клиента</button>
      </div>


    </form>

    <div :class="[notificationCreateActive ? 'active' : '']" class="notification">
      Клиент создан
    </div>

    <div style="display:flex; justify-content:center;" :class="[notificationErrorActive ? 'active' : '']"
      class="notification error">
      Ошибка
    </div>


  </div>
</template>

<script>
import FormInput from './components/UI/Input.vue';
import FormSelect from "./components/UI/Select.vue";
import FormInputDate from "./components/UI/InputDate.vue"
import { required, minLength, between } from 'vuelidate/lib/validators'

const formLabels = {
  surname: { value: '' },
  name: { value: '' },
  otch: { value: '' },
  gender: { value: '' },
  phone: { value: '7' },
  birthDate: { value: '' },
  clientGroup: { value: '' },
  doctor: { value: '' },
  index: { value: '' },
  country: { value: '' },
  area: { value: '' },
  city: { value: '' },
  street: { value: '' },
  home: { value: '' },
  docType: { value: '' },
  series: { value: '' },
  number: { value: '' },
  whoIssue: { value: '' },
  dateIssue: { value: '' },
  SMS: { value: false },
};

const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;

const dateValidator = (value) => {
  if (!value) {
    return true; // Пустое значение считается корректным
  }
  return dateFormat.test(value);
};



const selects = {
  doctor: ['Иванов', 'Захаров', 'Чернышева'],
  clientGroup: ['VIP', 'Проблемные', 'ОМС'],
  docTypes: ['Паспорт', 'Свидетельство о рождении', 'Вод.удостоверение']
}



export default {
  name: 'App',

  components: {
    FormInput,
    FormSelect,
    FormInputDate,
  },
  data() {
    return {
      formLabels,
      selects,
      formSubmited: false,
      notificationCreateActive: false,
      notificationErrorActive: false,
    }
  },
  methods: {
    updateValue(event) {
      this.formLabels[event.name].value = event.value;

      if (this.$v.formLabels[event.name]?.$invalid && this.formSubmited && (event.name !== 'phone')) {
        this.$set(this.formLabels[event.name], 'errorMessage', 'Это поле обязательно для заполнения');
      }
      else {
        this.$set(this.formLabels[event.name], 'errorMessage', undefined);
      }

    },
    updatePhone(oldValue, newValue) {
      if (newValue.length === 0) {
        return '7';
      }
      if (newValue.length > 11) {
        return oldValue
      }
      return isNaN(newValue) ? oldValue : newValue
    },
    updateBirthDay(e) {
      this.formLabels.birthDate.value = e.value;
      if (!e.focus) {
        if (e.value.length < 3 && this.formSubmited === true) {
          this.$set(this.formLabels.birthDate, 'errorMessage', 'Это поле обязательно для заполнения')
          return;
        }
        if (this.$v.formLabels.birthDate.value.$invalid) {
          this.$set(this.formLabels.birthDate, 'errorMessage', 'Заполните дату полностью')
        }
      }
      else {
        this.$set(this.formLabels.birthDate, 'errorMessage', undefined)
      }

    },
    updateDocTypes(value) {
      this.formLabels.docType.value = value;
      if (this.$v.formLabels.docType.$invalid && this.formSubmited) {
        this.$set(this.formLabels.docType, 'errorMessage', 'Это поле обязательно для заполнения');
      }
      else {
        this.$set(this.formLabels.docType, 'errorMessage', undefined);
      }
    },
    updateDoctor(value) {
      this.formLabels.doctor.value = value;
    },
    updateDateIssue(e) {
      this.formLabels.dateIssue.value = e.value;
      if (!e.focus) {
        if (e.value.length < 3 && this.formSubmited === true) {
          this.$set(this.formLabels.dateIssue, 'errorMessage', 'Это поле обязательно для заполнения')
          return;
        }
        if (this.$v.formLabels.dateIssue.value.$invalid) {
          this.$set(this.formLabels.dateIssue, 'errorMessage', 'Заполните дату полностью')
        }
      }
      else {
        this.$set(this.formLabels.dateIssue, 'errorMessage', undefined)
      }
    },
    formSubmit() {
      this.formSubmited = true;

      if (this.$v.$invalid) {
        if (this.$v.formLabels.surname.$invalid) {
          this.$set(this.formLabels.surname, 'errorMessage', 'Это поле обязательно для заполнения');
        }
        if (this.$v.formLabels.name.$invalid) {
          this.$set(this.formLabels.name, 'errorMessage', 'Это поле обязательно для заполнения');
        }
        if (this.$v.formLabels.clientGroup.$invalid) {
          this.$set(this.formLabels.clientGroup, 'errorMessage', 'Это поле обязательно для заполнения');
        }
        if (this.$v.formLabels.city.$invalid) {
          this.$set(this.formLabels.city, 'errorMessage', 'Это поле обязательно для заполнения')
        }
        if (this.$v.formLabels.docType.$invalid) {
          this.$set(this.formLabels.docType, 'errorMessage', 'Это поле обязательно для заполнения')
        }
        if (this.$v.formLabels.dateIssue.$invalid) {
          this.$set(this.formLabels.dateIssue, 'errorMessage', 'Это поле обязательно для заполнения')
        }
        if (this.$v.formLabels.birthDate.$invalid && formLabels.birthDate.value.length < 3) {
          this.$set(this.formLabels.birthDate, 'errorMessage', 'Это поле обязательно для заполнения')
        }
        if (this.$v.formLabels.phone.$invalid) {
          this.$set(this.formLabels.phone, 'errorMessage', this.formLabels.phone.value.length === 1 ? 'Это поле обязательно для заполнения' : 'Неверный формат')
        }

        this.notificationErrorActive = true;

        let timer = setTimeout(() => {
          this.notificationErrorActive = false;
          clearTimeout(timer);
        }, 5000)
      }
      else {
        this.notificationCreateActive = true;
        let timer = setTimeout(() => {
          this.notificationCreateActive = false;
          clearTimeout(timer);
        }, 5000)

      }

    },
    updateGroupClient(value) {
      this.formLabels.clientGroup.value = value;
      if (this.$v.formLabels.clientGroup.$invalid && this.formSubmited) {
        this.$set(this.formLabels.clientGroup, 'errorMessage', 'Это поле обязательно для заполнения');
      }
      else {
        this.$set(this.formLabels.clientGroup, 'errorMessage', undefined);
      }
    },
    focusPhone(value) {
      if (this.formLabels.phone.value.length > 1 && this.$v.formLabels.phone.$invalid && !value) {
        this.$set(this.formLabels.phone, 'errorMessage', 'Неверный формат')
      }
      else {
        this.$set(this.formLabels.phone, 'errorMessage', null)
      }
      console.log(this.formLabels.phone.value)
    },
    updateCheckbox() {
      
      this.$set(this.formLabels.SMS, 'value', !this.formLabels.SMS.value)
    }
  },
  validations: {
    formLabels: {
      surname: {
        value: { required }
      },
      name: {
        value: { required }
      },
      phone: {
        value: { required, minLength: minLength(11) },
      },
      clientGroup: {
        value: { required }
      },
      city: {
        value: { required }
      },
      docType: {
        value: { required }
      },
      birthDate: {
        value: { required, dateValidator }
      },
      dateIssue: {
        value: { required, dateValidator }
      }

    }
  },

}
</script>

<style lang="scss">
@use "./assets/index.scss";
@import "./assets/variables.scss";

.container__input {
  margin: 10px 0 0 0;

  &:first-of-type {
    margin: 0;
  }
}

.form__header {
  font-weight: 700;
  margin: 20px 0 0 0;
}

.form__address {
  margin: 10px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width:767px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 424px) {
    grid-template-columns: 1fr;
  }
}

.form__container-button {
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;

  button {
    border-radius: 8px;
    color: white;
    background: $blueColor;
    width: 311px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
}

.notification {
  position: fixed;
  top: 20px;
  right: 10px;
  width: 200px;
  background: rgb(7, 162, 7);
  color: white;
  border-radius: 8px;
  min-height: 45px;
  padding: 10px;
  z-index: 1;
  display: flex;
  align-items: center;
  transform: translateY(-150%);
  transition: 0.5s;

  &.active {
    transform: translateY(0%);
  }

  &.error {
    background: rgb(231, 54, 54);
  }

}

#app {
  background-image: url("./assets/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0 0 0;
  font-weight: 500;
  cursor: pointer;

  input {
    width: auto;
    display: none;
  }

  span {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid $grayColor;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s;

    &.active {
      border: 0;
      background: $blueColor;
      
    }
  }
}
</style>
