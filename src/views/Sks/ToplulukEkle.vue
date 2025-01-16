<template>
    <div class="form-container">
        <div class="form-header">
            <div class="header-icon">🌟</div>
            <h2>Topluluk Ekle</h2>
            <div class="header-decoration"></div>
        </div>

        <b-form @submit.prevent="onSubmit" class="form-card animated-form">
            <div class="form-group">
                <label>Topluluğun Adı:</label>
                <b-form-input v-model="form.name" placeholder="Ad giriniz" required></b-form-input>
            </div>

            <div class="form-group">
                <label>Logosu:</label>
                <div class="file-upload">
                    <input type="file" @change="handleFileUpload" accept="image/*" class="form-control-file" />
                    <label for="file-input" class="file-label">
                        <span class="file-icon">📂</span>
                        <span class="file-text">Dosya Seç</span>
                        <span class="file-hint">veya sürükle bırak</span>
                    </label>
                </div>
            </div>

            <b-row>
                <b-col md="6">
                    <div class="form-group">
                        <label>Akademisyen:</label>
                        <b-form-input v-model="form.academician" required placeholder="Ad giriniz"></b-form-input>
                    </div>
                </b-col>
                <b-col md="6">
                    <div class="form-group">
                        <label>Başkan:</label>
                        <b-form-input v-model="form.president" required placeholder="Ad giriniz"></b-form-input>
                    </div>
                </b-col>
            </b-row>

            <div class="form-group">
                <label>Açıklama:</label>
                <b-form-textarea v-model="form.description" placeholder="Açıklama giriniz" rows="4"></b-form-textarea>
            </div>

            <div class="text-center">
                <b-button type="submit" variant="primary" size="lg" :disabled="isSubmitting">
                    Topluluğu Oluştur
                </b-button>
            </div>
        </b-form>

        <transition name="fade">
            <div v-if="showAlert" class="success-message">
                <span class="success-icon">✓</span>
                <span>Topluluk başarıyla oluşturuldu!</span>
                <div class="success-confetti"></div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                logo: null,
                academician: '',
                president: '',
                description: '',
            },
            showAlert: false,
            isSubmitting: false,
        };
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file && file.size <= 2 * 1024 * 1024) {
                this.form.logo = file;
            } else {
                alert('Dosya boyutu 2MB\'dan küçük olmalıdır.');
            }
        },
        onSubmit() {
            this.isSubmitting = true;
            setTimeout(() => {
                this.isSubmitting = false;
                this.showAlert = true;
                setTimeout(() => {
                    this.showAlert = false;
                }, 3000);
            }, 1500);
        },
    },
};
</script>

<style scoped>
.form-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    background: linear-gradient(145deg, #ffffff, #f8f9fa);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.8);
}

.form-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    border-radius: 24px 24px 0 0;
}

.form-header {
    text-align: center;
    margin-bottom: 40px;
}

.header-icon {
    font-size: 48px;
    margin-bottom: 20px;
    animation: bounceIn 1s ease;
}

.form-header h2 {
    color: #2c3e50;
    font-size: 32px;
    margin: 0;
    font-weight: 600;
}

.header-decoration {
    height: 4px;
    width: 60px;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    margin: 0 auto;
    border-radius: 2px;
}

.form-group {
    margin-bottom: 30px;
}

label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #34495e;
    font-size: 1rem;
}

.file-upload {
    position: relative;
}

.file-upload input[type="file"] {
    display: none;
}

.file-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: rgba(79, 172, 254, 0.05);
    border: 2px dashed #4facfe;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.file-label:hover {
    background: rgba(79, 172, 254, 0.1);
    transform: translateY(-2px);
}

.file-icon {
    font-size: 32px;
    margin-bottom: 10px;
}

.file-text {
    font-weight: 500;
    color: #4facfe;
    margin-bottom: 5px;
}

.file-hint {
    font-size: 0.85rem;
    color: #95a5a6;
}

.success-message {
    text-align: center;
    padding: 16px;
    background: linear-gradient(45deg, #00b09b, #96c93d);
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    animation: slideIn 0.5s ease;
    gap: 10px;
    font-size: 1.1rem;
}

.success-icon {
    font-size: 1.4rem;
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

@keyframes bounceIn {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.animated-form {
    animation: formAppear 0.5s ease;
}

@keyframes formAppear {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

b-form-input,
b-form-textarea {
    border-radius: 8px;
    border: 1px solid #ddd;
    padding: 12px;
    font-size: 15px;
    transition: border-color 0.3s ease;
}

b-form-input:focus,
b-form-textarea:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
    outline: none;
}

b-button {
    border-radius: 25px;
    padding: 10px 25px;
    font-size: 18px;
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

b-button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.text-primary {
    color: #007bff;
}
</style>
