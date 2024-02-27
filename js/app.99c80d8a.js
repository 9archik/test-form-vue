(function(){"use strict";var e={4352:function(e,t,a){var r=a(6848),s=a(6529),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"20px 10px"},attrs:{id:"app"}},[a("form",{staticClass:"container form",staticStyle:{padding:"20px","border-radius":"10px"},on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[a("form-input",{class:"container__input",attrs:{value:"",inputName:"surname",label:"Фамилия",required:!0,errorMessage:e.formLabels.surname.errorMessage,placeholder:"Введите фамилию"},on:{"update-value":e.updateValue}}),a("form-input",{class:"container__input",attrs:{value:"",inputName:"name",label:"Имя",required:!0,errorMessage:e.formLabels.name.errorMessage,placeholder:"Введите имя"},on:{"update-value":e.updateValue}}),a("form-input",{class:"container__input",attrs:{value:"",inputName:"otch",label:"Отчество",errorMessage:e.formLabels.otch.errorMessage,placeholder:"Введите отчество"},on:{"update-value":e.updateValue}}),a("form-input-date",{class:"container__input",attrs:{nameEmit:"update-date-birth",required:!0,errorMessage:e.formLabels.birthDate.errorMessage,label:"Дата рождения"},on:{"update-date-birth":e.updateBirthDay}}),a("form-input",{class:"container__input",attrs:{value:"",inputName:"gender",label:"Пол",errorMessage:e.formLabels.gender.errorMessage,placeholder:"Введите пол"},on:{"update-value":e.updateValue}}),a("form-input",{class:"container__input",attrs:{focusEmitName:"focus-phone",value:"7",required:!0,inputName:"phone",label:"Телефон",errorMessage:e.formLabels.phone.errorMessage,placeholder:"79178752448",inputFunction:e.updatePhone},on:{"focus-phone":e.focusPhone,"update-value":e.updateValue}}),a("form-select",{class:"container__input",attrs:{errorMessage:e.formLabels.clientGroup.errorMessage,nameEmit:"update-group-client",mode:"multi","select-list":e.selects.clientGroup,required:!0,label:"Группа клиентов"},on:{"update-group-client":e.updateGroupClient}}),a("form-select",{class:"container__input",attrs:{nameEmit:"update-doctor",selectList:e.selects.doctor,required:!1,label:"Лечащий врач"},on:{"update-doctor":e.updateDoctor}}),a("label",{staticClass:"checkbox-label"},[a("input",{attrs:{type:"checkbox"},on:{change:e.updateCheckbox}}),a("span",{class:[e.formLabels.SMS.value?"active":""]},[a("svg",{attrs:{width:"10",height:"9",viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M3.14025 7.32731L0.969769 4.69886C0.861844 4.57263 0.717297 4.50278 0.56726 4.50436C0.417222 4.50594 0.273699 4.57882 0.167603 4.7073C0.0615065 4.83578 0.00132542 5.00959 2.16319e-05 5.19128C-0.00128215 5.37298 0.0563956 5.54803 0.160632 5.67872L2.73568 8.79711C2.84299 8.92702 2.98851 9 3.14025 9C3.29198 9 3.4375 8.92702 3.54481 8.79711L9.83937 1.17439C9.9436 1.04369 10.0013 0.868648 9.99998 0.686953C9.99867 0.505257 9.93849 0.331451 9.8324 0.202968C9.7263 0.0744846 9.58278 0.00160508 9.43274 2.61961e-05C9.2827 -0.00155269 9.13815 0.0682955 9.03023 0.194526L3.14025 7.32731Z",fill:"white"}})])]),e._v(" Не отправлять смс ")]),a("div",{staticClass:"form__header"},[e._v("Адрес")]),a("div",{staticClass:"form__address"},[a("form-input",{attrs:{value:"",inputName:"index",label:"Индекс",placeholder:"Индекс"},on:{"update-value":e.updateValue}}),a("form-input",{attrs:{value:"",inputName:"country",label:"Страна",placeholder:"Страна"},on:{"update-value":e.updateValue}}),a("form-input",{attrs:{value:"",inputName:"area",label:"Область",placeholder:"Область"},on:{"update-value":e.updateValue}}),a("form-input",{attrs:{value:"",required:!0,inputName:"city",label:"Город",errorMessage:e.formLabels.city.errorMessage,placeholder:"Город"},on:{"update-value":e.updateValue}}),a("form-input",{attrs:{value:"",inputName:"street",label:"Улица",placeholder:"Улица"},on:{"update-value":e.updateValue}}),a("form-input",{attrs:{value:"",inputName:"home",label:"Дом",placeholder:"Дом"},on:{"update-value":e.updateValue}})],1),a("div",{staticClass:"form__header"},[e._v("Паспорт")]),a("form-select",{class:"container__input",attrs:{nameEmit:"update-doc-types","select-list":e.selects.docTypes,errorMessage:e.formLabels.docType.errorMessage,required:!0,label:"Тип документа"},on:{"update-doc-types":e.updateDocTypes}}),a("form-input",{class:"container__input",attrs:{value:"",inputName:"series",label:"Серия",errorMessage:e.formLabels.otch.errorMessage,placeholder:"Серия"},on:{"update-value":e.updateValue}}),a("form-input",{class:"container__input",attrs:{value:"",inputName:"number",label:"Номер",placeholder:"Номер"},on:{"update-value":e.updateValue}}),a("form-input",{class:"container__input",attrs:{value:"",inputName:"whoIssue",label:"Кем выдан",placeholder:"Кем выдан"},on:{"update-value":e.updateValue}}),a("form-input-date",{class:"container__input",attrs:{nameEmit:"update-date-issue",errorMessage:e.formLabels.dateIssue.errorMessage,required:!0,label:"Дата выдачи"},on:{"update-date-issue":e.updateDateIssue}}),e._m(0)],1),a("div",{staticClass:"notification",class:[e.notificationCreateActive?"active":""]},[e._v(" Клиент создан ")]),a("div",{staticClass:"notification error",class:[e.notificationErrorActive?"active":""],staticStyle:{display:"flex","justify-content":"center"}},[e._v(" Ошибка ")])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form__container-button"},[a("button",{attrs:{type:"submit"}},[e._v("Создать клиента")])])}],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-input"},[a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.label,expression:"label"}],staticClass:"label-text"},[e._v(e._s(e.label)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.required,expression:"required"}]},[e._v("*")])]),a("input",{attrs:{placeholder:e.placeholder,name:e.inputName,type:"text"},domProps:{value:e.inputValue},on:{focus:e.focusInput,blur:e.blurInput,input:e.updateValue}})]),a("div",{staticClass:"error-message"},[e._v(e._s(e.errorMessage))])])},u=[],l={props:{value:{type:String,required:!0},label:{type:String},inputName:{type:String},errorMessage:{type:String},required:{type:Boolean},placeholder:{type:String},inputFunction:{type:Function},focusEmitName:{type:String}},watch:{inputValue(e,t){this.inputFunction&&(this.inputValue=this.inputFunction(t,e))}},data(){return{inputValue:this.value,errorMsg:this.errorMessage}},methods:{updateValue(e){this.inputValue=e.target.value;const t={value:this.inputValue,name:this.inputName};this.$emit("update-value",t)},focusInput(e){this?.focusEmitName&&this.$emit(this.focusEmitName,!0)},blurInput(e){this?.focusEmitName&&this.$emit(this.focusEmitName,!1)}}},c=l,m=a(1656),p=(0,m.A)(c,n,u,!1,null,"56cf7654",null),h=p.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"label-text"},[e._v(e._s(e.label)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.required,expression:"required"}]},[e._v("*")])]),a("label",{staticClass:"select-label"},[a("input",{staticClass:"select-input",attrs:{required:e.required,readonly:""},domProps:{value:e.inputValue},on:{click:function(t){return t.stopPropagation(),e.toggleDropdown.apply(null,arguments)}}}),a("svg",{class:[e.activeSelect?"active":""],attrs:{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0.999999 1L6 6L11 1",stroke:"#b0b0b0","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),a("ul",{class:[e.activeSelect?"active":""]},e._l(e.options,(function(t,r){return a("li",{key:r,class:[e.options[r].active?"active":""],on:{click:function(t){return t.stopPropagation(),e.updateSelect(r)}}},[e._v(e._s(t.text))])})),0)]),a("div",{staticClass:"error-message"},[e._v(" "+e._s(e.errorMessage)+" ")])])},v=[],f=(a(4114),{props:{selectList:{type:Array,required:!0},mode:{type:String},name:{type:String},label:{type:String,required:!0},required:{type:Boolean},nameEmit:{type:String,required:!0},errorMessage:{type:String}},data(){return{options:this.selectList.map((e=>({text:e,active:!1}))),inputValue:"",multiValuesList:[],activeSelect:!1}},methods:{updateSelect(e){if(!this.mode||"one"===this.mode)return this.options=this.options.map(((t,a)=>e!==a?{...t,active:!1}:{...t,active:!t.active})),this.inputValue=this.options[e].active?this.options[e].text:"",this.activeSelect=!this.activeSelect,void this.$emit(this.nameEmit,this.inputValue);if("multi"===this.mode){const t=[];return this.options=this.options.map(((a,r)=>(r!==e?a.active&&t.push(a.text):a.active||t.push(a.text),e!==r?{...a,active:a.active}:{...a,active:!a.active}))),this.inputValue=t.join(", "),this.activeSelect=!this.activeSelect,void this.$emit(this.nameEmit,this.inputValue)}},toggleDropdown(){this.activeSelect=!this.activeSelect},closeDropdown(){this.activeSelect=!1}},created:function(){window.addEventListener("click",this.closeDropdown)},destroyed:function(){window.addEventListener("click",this.closeDropdown)}}),b=f,g=(0,m.A)(b,d,v,!1,null,"75dab0fc",null),y=g.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.label,expression:"label"}],staticClass:"label-text"},[e._v(e._s(e.label)),a("span",{directives:[{name:"show",rawName:"v-show",value:e.required,expression:"required"}]},[e._v("*")])]),a("div",{staticClass:"container-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],attrs:{name:"day",type:"tel",maxlength:"2",placeholder:"ДД"},domProps:{value:e.day},on:{focus:e.focusDate,blur:e.blurDate,input:[function(t){t.target.composing||(e.day=t.target.value)},e.updateDate]}}),a("span",[e._v(".")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],attrs:{name:"month",maxlength:"2",type:"tel",placeholder:"ММ"},domProps:{value:e.month},on:{focus:e.focusDate,blur:e.blurDate,input:[function(t){t.target.composing||(e.month=t.target.value)},e.updateDate]}}),a("span",[e._v(".")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],attrs:{name:"year",maxlength:"4",type:"tel",placeholder:"ГГГГ"},domProps:{value:e.year},on:{focus:e.focusDate,blur:e.blurDate,input:[function(t){t.target.composing||(e.year=t.target.value)},e.updateDate]}}),a("span",[e._v("Г.")])]),a("div",{staticClass:"error-message"},[e._v(e._s(e.errorMessage))])])},$=[],_={props:{label:{type:String},required:{type:Boolean},nameEmit:{type:String,required:!0},errorMessage:{type:String}},data(){return{day:"",month:"",year:"",focus:!1}},methods:{updateDate(e){let t=e.target.value.replace(/[^+\d]/g,"");switch(e.target.name){case"day":(1===Number(this.month)||3===Number(this.month)||5===Number(this.month)||7===Number(this.month)||8===Number(this.month)||Number(this.month)>=10||""===this.month)&&(t=Number(t)>31?"31":t),2===Number(this.month)&&(""===this.year?t=Number(t)>28?"28":t:Number(t)>28&&(t=Number(this.year)%4===0?"29":"28")),4!==Number(this.month)&&6!==Number(this.month)&&9!==Number(this.month)||(t=Number(t)>30?"30":t),this.day=t;break;case"month":t=Number(t)>12?"12":t,this.month=t,Number(this.day)>31&&(1===Number(t)||3===Number(t)||5===Number(t)||7===Number(t)||8===Number(t)||Number(t)>=10)&&(this.day="31"),Number(this.day)>30&&(4!==Number(t)&&6!==Number(t)&&9!==Number(t)&&11!==Number(t)||(this.day="30")),Number(this.day)>28&&2===Number(t)&&(""===this.year?this.day="28":this.day=Number(this.year)%4===0?"29":"28");break;case"year":Number(this.day)>28&&2===Number(this.month)&&(this.day=Number(t)%4===0?"29":"28"),this.year=t;break}},blurDate(e){("day"===e.target.name||"month"===e.target.name)&&e.target.value.length<2&&(this[e.target.name]=Number(e.target.value)>0&&Number(e.target.value)<10?`0${e.target.value}`:e.target.value),this.focus=!1;const t={value:`${this.month}/${this.day}/${this.year}`,focus:this.focus};this.$emit(this.nameEmit,t)},focusDate(e){this.focus=!0;const t={value:`${this.month}/${this.day}/${this.year}`,focus:this.focus};this.$emit(this.nameEmit,t)}}},N=_,w=(0,m.A)(N,L,$,!1,null,"5c829480",null),M=w.exports,S=a(6049);const x={surname:{value:""},name:{value:""},otch:{value:""},gender:{value:""},phone:{value:"7"},birthDate:{value:""},clientGroup:{value:""},doctor:{value:""},index:{value:""},country:{value:""},area:{value:""},city:{value:""},street:{value:""},home:{value:""},docType:{value:""},series:{value:""},number:{value:""},whoIssue:{value:""},dateIssue:{value:""},SMS:{value:!1}},C=/^\d{2}\/\d{2}\/\d{4}$/,D=e=>!e||C.test(e),q={doctor:["Иванов","Захаров","Чернышева"],clientGroup:["VIP","Проблемные","ОМС"],docTypes:["Паспорт","Свидетельство о рождении","Вод.удостоверение"]};var V={name:"App",components:{FormInput:h,FormSelect:y,FormInputDate:M},data(){return{formLabels:x,selects:q,formSubmited:!1,notificationCreateActive:!1,notificationErrorActive:!1}},methods:{updateValue(e){this.formLabels[e.name].value=e.value,this.$v.formLabels[e.name]?.$invalid&&this.formSubmited&&"phone"!==e.name?this.$set(this.formLabels[e.name],"errorMessage","Это поле обязательно для заполнения"):this.$set(this.formLabels[e.name],"errorMessage",void 0)},updatePhone(e,t){return 0===t.length?"7":t.length>11||isNaN(t)?e:t},updateBirthDay(e){if(this.formLabels.birthDate.value=e.value,e.focus)this.$set(this.formLabels.birthDate,"errorMessage",void 0);else{if(e.value.length<3&&!0===this.formSubmited)return void this.$set(this.formLabels.birthDate,"errorMessage","Это поле обязательно для заполнения");this.$v.formLabels.birthDate.value.$invalid&&this.$set(this.formLabels.birthDate,"errorMessage","Заполните дату полностью")}},updateDocTypes(e){this.formLabels.docType.value=e,this.$v.formLabels.docType.$invalid&&this.formSubmited?this.$set(this.formLabels.docType,"errorMessage","Это поле обязательно для заполнения"):this.$set(this.formLabels.docType,"errorMessage",void 0)},updateDoctor(e){this.formLabels.doctor.value=e},updateDateIssue(e){if(this.formLabels.dateIssue.value=e.value,e.focus)this.$set(this.formLabels.dateIssue,"errorMessage",void 0);else{if(e.value.length<3&&!0===this.formSubmited)return void this.$set(this.formLabels.dateIssue,"errorMessage","Это поле обязательно для заполнения");this.$v.formLabels.dateIssue.value.$invalid&&this.$set(this.formLabels.dateIssue,"errorMessage","Заполните дату полностью")}},formSubmit(){if(this.formSubmited=!0,this.$v.$invalid){this.$v.formLabels.surname.$invalid&&this.$set(this.formLabels.surname,"errorMessage","Это поле обязательно для заполнения"),this.$v.formLabels.name.$invalid&&this.$set(this.formLabels.name,"errorMessage","Это поле обязательно для заполнения"),this.$v.formLabels.clientGroup.$invalid&&this.$set(this.formLabels.clientGroup,"errorMessage","Это поле обязательно для заполнения"),this.$v.formLabels.city.$invalid&&this.$set(this.formLabels.city,"errorMessage","Это поле обязательно для заполнения"),this.$v.formLabels.docType.$invalid&&this.$set(this.formLabels.docType,"errorMessage","Это поле обязательно для заполнения"),this.$v.formLabels.dateIssue.$invalid&&this.$set(this.formLabels.dateIssue,"errorMessage","Это поле обязательно для заполнения"),this.$v.formLabels.birthDate.$invalid&&x.birthDate.value.length<3&&this.$set(this.formLabels.birthDate,"errorMessage","Это поле обязательно для заполнения"),this.$v.formLabels.phone.$invalid&&this.$set(this.formLabels.phone,"errorMessage",1===this.formLabels.phone.value.length?"Это поле обязательно для заполнения":"Неверный формат"),this.notificationErrorActive=!0;let e=setTimeout((()=>{this.notificationErrorActive=!1,clearTimeout(e)}),5e3)}else{this.notificationCreateActive=!0;let e=setTimeout((()=>{this.notificationCreateActive=!1,clearTimeout(e)}),5e3)}},updateGroupClient(e){this.formLabels.clientGroup.value=e,this.$v.formLabels.clientGroup.$invalid&&this.formSubmited?this.$set(this.formLabels.clientGroup,"errorMessage","Это поле обязательно для заполнения"):this.$set(this.formLabels.clientGroup,"errorMessage",void 0)},focusPhone(e){this.formLabels.phone.value.length>1&&this.$v.formLabels.phone.$invalid&&!e?this.$set(this.formLabels.phone,"errorMessage","Неверный формат"):this.$set(this.formLabels.phone,"errorMessage",null),console.log(this.formLabels.phone.value)},updateCheckbox(){this.$set(this.formLabels.SMS,"value",!this.formLabels.SMS.value)}},validations:{formLabels:{surname:{value:{required:S.mw}},name:{value:{required:S.mw}},phone:{value:{required:S.mw,minLength:(0,S.Bp)(11)}},clientGroup:{value:{required:S.mw}},city:{value:{required:S.mw}},docType:{value:{required:S.mw}},birthDate:{value:{required:S.mw,dateValidator:D}},dateIssue:{value:{required:S.mw,dateValidator:D}}}}},E=V,k=(0,m.A)(E,i,o,!1,null,null,null),I=k.exports;r.A.use(s.Ay),r.A.config.productionTip=!1,r.A.config.devtools=!0,new r.A({render:e=>e(I)}).$mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,i){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],i=e[c][2];for(var n=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](r[u])}))?r.splice(u--,1):(n=!1,i<o&&(o=i));if(n){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,s,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,o=r[0],n=r[1],u=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(u)var c=u(a)}for(t&&t(r);l<o.length;l++)i=o[l],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},r=self["webpackChunktest"]=self["webpackChunktest"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(4352)}));r=a.O(r)})();
//# sourceMappingURL=app.99c80d8a.js.map