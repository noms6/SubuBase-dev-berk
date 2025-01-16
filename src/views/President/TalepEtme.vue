<template>
    <div class="form-container">
        <div class="form-header">
            <div class="header-icon">📝</div>
            <h2>Etkinlik Talep Formu</h2>
            <div class="header-decoration"></div>
        </div>

        <form @submit.prevent="submitForm" class="animated-form">
            <div class="form-group">
                <label>
                    <span class="label-icon">📌</span>
                    Etkinlik Konusu:
                </label>
                <input type="text" v-model="formData.subject" class="form-control"
                    placeholder="Etkinlik konusunu giriniz...">
                <div class="input-focus-effect"></div>
            </div>

            <div class="form-group">
                <label>
                    <span class="label-icon">📎</span>
                    Gerekli Belgeler:
                </label>
                <div class="file-upload">
                    <input type="file" @change="handleFileUpload" class="form-control" id="file-input">
                    <label for="file-input" class="file-label">
                        <span class="file-icon">📂</span>
                        <span class="file-text">Dosya Seç</span>
                        <span class="file-hint">veya sürükle bırak</span>
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>
                    <span class="label-icon">✏️</span>
                    Açıklama:
                </label>
                <textarea v-model="formData.description" class="form-control" rows="4"
                    placeholder="Açıklamanızı buraya yazın..."></textarea>
                <div class="input-focus-effect"></div>
            </div>

            <button type="submit" class="submit-btn">
                <span class="btn-icon">✨</span>
                <span class="btn-text">Talep Et</span>
                <div class="btn-shine"></div>
            </button>
        </form>

        <transition name="fade">
            <div v-if="submitted" class="success-message">
                <span class="success-icon">✓</span>
                <span>Talep Oluşturuldu</span>
                <div class="success-confetti"></div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ActivityRequestForm',
    data() {
        return {
            formData: {
                subject: '',
                files: null,
                description: ''
            },
            submitted: false
        }
    },
    methods: {
        handleFileUpload(event) {
            this.formData.files = event.target.files[0]
        },
        submitForm() {
            this.submitted = true
            setTimeout(() => {
                this.submitted = false
                this.formData = {
                    subject: '',
                    files: null,
                    description: ''
                }
            }, 3000)
        }
    }
}
</script>

<style scoped>
.form-container {
    width: 100%;
    margin: 0 auto;
    padding: 40px;
    border-radius: 24px;
    background: linear-gradient(145deg, #ffffff, #f8f9fa);
    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.1),
        0 1px 8px rgba(0, 0, 0, 0.05);
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
    position: relative;
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
    padding-bottom: 15px;
    font-weight: 600;
}

.header-decoration {
    height: 4px;
    width: 60px;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    margin: 0 auto;
    border-radius: 2px;
    position: relative;
}

.header-decoration::before,
.header-decoration::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4facfe;
    top: -2px;
}

.header-decoration::before {
    left: -4px;
}

.header-decoration::after {
    right: -4px;
}

.form-group {
    margin-bottom: 30px;
    position: relative;
}

.label-icon {
    margin-right: 8px;
    font-size: 1.1em;
}

label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #34495e;
    font-size: 1rem;
    display: flex;
    align-items: center;
}

.form-control {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    box-sizing: border-box;
    transition: all 0.3s ease;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.9);
}

.form-control:focus {
    border-color: #4facfe;
    box-shadow: 0 0 0 4px rgba(79, 172, 254, 0.1);
    outline: none;
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

textarea.form-control {
    resize: vertical;
    min-height: 120px;
}

.submit-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(45deg, #4facfe, #00f2fe);
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 172, 254, 0.3);
}

.submit-btn:active {
    transform: translateY(0);
}

.btn-icon {
    font-size: 1.2em;
}

.btn-shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent);
    transform: rotate(45deg);
    transition: 0.5s;
}

.submit-btn:hover .btn-shine {
    left: 100%;
}

.success-message {
    text-align: center;
    margin-top: 20px;
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

::placeholder {
    color: #95a5a6;
    opacity: 0.7;
}

.input-focus-effect {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    transition: 0.3s;
    transform: translateX(-50%);
}

.form-control:focus+.input-focus-effect {
    width: 100%;
}

@keyframes shine {
    0% {
        transform: translateX(-100%) rotate(45deg);
    }

    100% {
        transform: translateX(100%) rotate(45deg);
    }
}
</style>