<template>
  <div class="auth-wrapper auth-v2 d-flex align-items-center justify-content-center">
    <b-row class="auth-inner m-0">
      <!-- Login -->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5 mx-auto"
      >
        <b-col
          sm="8"
          md="6"
          lg="10"
          class="px-xl-2 mx-auto text-center"
        >
          <!-- Logo -->
          <div class="logo-container mb-4">
            <img src="https://www.subu.edu.tr/sites/logo/LOGO2024.png" alt="SUBU Logo" class="img-fluid logo-large" />
          </div>

          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-3 text-white"
          >
            Topluluklara Hoşgeldin
          </b-card-title>

          <!-- Form -->
          <validation-observer ref="loginValidation">
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent
            >
              <!-- Email -->
              <b-form-group
                label="Numara"
                label-for="login-email"
                class="text-left text-white"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false : null"
                    name="login-email"
                    placeholder="12345678098"
                    class="custom-input"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Forgot Password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password" class="text-white">Şifre</label>
                  <b-link :to="{ name: 'auth-forgot-password-v2' }" class="text-white">
                    <small>Parolamı Unuttum</small>
                  </b-link>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                >
                  <b-input-group class="input-group-merge">
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false : null"
                      class="custom-input"
                      :type="passwordFieldType"
                      placeholder="••••••••"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- Remember Me -->
              <b-form-group>
                <b-form-checkbox
                  id="remember-me"
                  v-model="status"
                  name="checkbox-1"
                  class="text-white"
                >
                  Beni hatırla
                </b-form-checkbox>
              </b-form-group>

              <!-- Submit Button -->
              <b-button
                type="submit"
                variant="success"
                block
                class="custom-button"
                @click="validationForm"
              >
                Giriş yap
              </b-button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardTitle, BForm, BButton,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardTitle,
    BForm,
    BButton,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: '',
      userEmail: '',
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    validationForm() {
      this.$refs.loginValidation.validate().then(success => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Giriş Başarılı',
              icon: 'CheckIcon',
              variant: 'success',
            },
          })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';

.auth-wrapper {
  background: url('https://media.university.com.tr/wp-content/uploads/2022/03/130_Sakarya-Uygulamali-Bilimler-University_Campus.jpg') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
}

.auth-bg {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  background-color: rgba(240, 248, 255, 0.75);
  padding: 20px 30px; /* Daha dar padding */
  max-width: 450px;
  margin-top: 50px;
  margin-bottom: 50px;
}



.custom-input {
  font-size: 1.2rem; /* Yazı boyutunu artır */
  height: 50px; /* Yükseklik artırıldı */
  border: 1px solid #6dd5fa ;
  box-shadow: 0 0 5px rgba(0, 191, 255, 0.3);
  transition: all 0.3s ease;
}

.custom-input:focus {
  border-color: #2980b9 ;
  box-shadow: 0 0 8px rgba(0, 191, 255, 0.7);
}

.custom-button {
  font-size: 1.2rem; /* Buton yazı boyutu artırıldı */
  height: 50px; /* Buton yüksekliği artırıldı */
  background-color: #28a745;
  border: none;
  box-shadow: 0 4px 6px rgba(40, 167, 69, 0.3);
  transition: all 0.3s ease;
}

.custom-button:hover {
  background-color: #218838;
  box-shadow: 0 6px 10px rgba(40, 167, 69, 0.5);
}

.b-card-title {
  font-size: 1.8rem; /* Başlık daha büyük */
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: white;
}

.logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0; /* Daha az padding */
}


.logo-large {
  max-width: 250px; /* Logo boyutu */
}
.auth-login-form {
  margin-top: 10px; /* Formu logoya yaklaştır */
}

.b-form-group {
  margin-bottom: 15px; /* Daha az boşluk */
}

#remember-me {
  display: inline-block; /* Checkbox ve yazıyı hizala */
  margin-right: 8px; /* Checkbox ile yazı arasında biraz boşluk */
}

.b-form-checkbox {
  display: flex;
  align-items: center; /* Yazıyı dikeyde checkbox ile hizala */
}

.custom-button {
  margin-top: 15px; /* Butonun yukarıdaki ögelerle mesafesini biraz azalt */
}
.text-muted {
  color: #b8b8b8 
}
</style>
