<template>
  <div class="auth-wrapper">
    <div class="animated-bg"></div>
    <b-row class="m-0 justify-content-center align-items-center min-vh-100 w-100">
      <b-col lg="5" md="8" sm="11" class="auth-form-container px-4 py-5">
        <div class="text-center mb-4">
          <img src="https://www.subu.edu.tr/sites/logo/LOGO2024.png" alt="SUBU Logo" class="logo-img mb-4" />
          <h2 class="title-gradient">
            <br />
            Topluluk Giriş Ekranı
          </h2>
        </div>

        <validation-observer ref="loginForm" v-slot="{ handleSubmit }">
          <b-form @submit.prevent="handleSubmit(onSubmit)" class="login-form">
            <validation-provider name="Öğrenci Numarası" rules="required|numeric|min:11" v-slot="{ errors }">
              <b-form-group label="Öğrenci Numarası" class="form-group-custom">
                <b-input-group class="input-group-custom">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class="fas fa-user"></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="form.studentNumber" placeholder="12345678901" :state="errors.length === 0" trim
                    class="custom-input" />
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </b-form-group>
            </validation-provider>

            <validation-provider name="Şifre" rules="required|min:6" v-slot="{ errors }">
              <b-form-group class="form-group-custom">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <label>Şifre</label>
                  <b-link class="forgot-password">Parolamı Unuttum</b-link>
                </div>
                <b-input-group class="input-group-custom">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class="fas fa-lock"></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input v-model="form.password" :type="showPassword ? 'text' : 'password'"
                    placeholder="••••••••" :state="errors.length === 0" class="custom-input" />
                  <b-input-group-append>
                    <b-button @click="showPassword = !showPassword" class="password-toggle">
                      <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </b-form-group>
            </validation-provider>

            <b-form-group class="remember-me-group">
              <b-form-checkbox v-model="form.rememberMe" class="remember-me">
                Beni Hatırla
              </b-form-checkbox>
            </b-form-group>

            <b-button type="submit" variant="primary" class="login-button w-100" :disabled="loading">
              <b-spinner small v-if="loading"></b-spinner>
              <span>{{ loading ? 'Giriş yapılıyor...' : 'Giriş Yap' }}</span>
            </b-button>
          </b-form>
        </validation-observer>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        studentNumber: '',
        password: '',
        rememberMe: false
      },
      showPassword: false,
      loading: false
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1500))
        this.$bvToast.toast('Başarıyla giriş yapıldı!', {
          title: 'Başarılı',
          variant: 'success',
          solid: true
        })
      } catch (error) {
        this.$bvToast.toast('Giriş yapılırken bir hata oluştu!', {
          title: 'Hata',
          variant: 'danger',
          solid: true
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
.auth-wrapper {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://media.university.com.tr/wp-content/uploads/2022/03/130_Sakarya-Uygulamali-Bilimler-University_Campus.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
      rgba(33, 147, 176, 0.3),
      rgba(109, 213, 237, 0.3),
      rgba(33, 147, 176, 0.3));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.auth-form-container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  animation: slideIn 0.5s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  /* Card padding azaltıldı */
  width: 100%;
  max-width: 500px;
  /* Maksimum genişlik ayarlandı */
}

.login-form {
  padding: 0.5rem;
}

.logo-img {
  max-width: 180px;
  height: auto;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

.title-gradient {
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: normal;
  /* Kelimeler alt alta yazılacak */
  line-height: 1.2;

}

.form-group-custom {
  margin-bottom: 1.5rem;

  label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
}

.input-group-custom {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:focus-within {
    box-shadow: 0 4px 12px rgba(33, 147, 176, 0.15);
  }
}

.input-group-text {
  background: #f8f9fa;
  border: none;
  color: #2193b0;
  padding: 0.75rem 1rem;
}

.custom-input {
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background: #f8f9fa;

  &:focus {
    background: #ffffff;
    box-shadow: none;
  }
}

.password-toggle {
  background: #f8f9fa;
  border: none;
  color: #2193b0;
  padding: 0 1rem;

  &:hover {
    background: #e9ecef;
    color: #1a7289;
  }
}

.forgot-password {
  font-size: 0.875rem;
  color: #2193b0;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #6dd5ed;
    text-decoration: none;
  }
}

.remember-me-group {
  margin: 1.5rem 0;
}

.remember-me {
  font-size: 0.875rem;
  color: #2c3e50;

  .custom-control-label {
    &::before {
      border-radius: 4px;
      border-color: #2193b0;
    }
  }
}

.login-button {
  padding: 0.75rem;
  background: linear-gradient(45deg, #2193b0, #6dd5ed);
  border: none;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 147, 176, 0.3);
    background: linear-gradient(45deg, #1c7f99, #5bc1d9);
  }

  &:disabled {
    background: linear-gradient(45deg, #a8a8a8, #cccccc);
    cursor: not-allowed;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .auth-form-container {
    margin: 1rem;
    padding: 1.5rem !important;
  }

  .title-gradient {
    font-size: 1.25rem;
  }

  .login-button {
    padding: 0.6rem;
  }
}
</style>
