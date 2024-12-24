<template>
    <div class="etkinlik-talep-formu">
        <form @submit.prevent="submitForm">
            <div class="form-container">
                <h2>Etkinlik Talep Formu</h2>

                <div class="form-group">
                    <label for="konu">Etkinlik Konusu:</label>
                    <input type="text" id="konu" v-model="formData.konu" placeholder="Etkinlik Konusu Giriniz"
                        required />
                </div>

                <div class="form-group">
                    <label for="dosya">Gerekli Belgeler:</label>
                    <input type="file" id="dosya" @change="handleFileUpload" multiple />
                </div>

                <div class="form-group">
                    <label for="aciklama">Açıklama:</label>
                    <textarea id="aciklama" v-model="formData.aciklama" placeholder="Açıklama Giriniz"
                        required></textarea>
                </div>

                <button type="submit" class="submit-button">Talep Et</button>
            </div>

            <p v-if="successMessage" class="success-message">Talep Oluşturuldu</p>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                konu: "",
                dosyalar: [],
                aciklama: ""
            },
            successMessage: false
        };
    },
    methods: {
        handleFileUpload(event) {
            this.formData.dosyalar = Array.from(event.target.files);
        },
        submitForm() {
            console.log("Form Verileri:", this.formData);
            this.successMessage = true;

            // Formu sıfırla
            this.formData = {
                konu: "",
                dosyalar: [],
                aciklama: ""
            };

            setTimeout(() => {
                this.successMessage = false;
            }, 3000);
        }
    }
};
</script>

<style scoped>
.etkinlik-talep-formu {
    max-width: 400px;
    margin: 0 auto;
    border: 2px solid #007bff;
    border-radius: 8px;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
textarea,
input[type="file"] {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

textarea {
    height: 80px;
    resize: none;
}

.submit-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #0056b3;
}

.success-message {
    text-align: center;
    margin-top: 20px;
    color: green;
    font-weight: bold;
}
</style>