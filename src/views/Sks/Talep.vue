<template>
    <div class="page1">
        <div class=" ">
            <b-card class="form-card">
                <div class="header-section mb-2">
                    <h2 class="text-primary">Hendek Gezi Talebi</h2>
                    <div class="header-underline"></div>
                </div>

                <b-form @submit.prevent="onSubmit">
                    <b-row>
                        <b-col md="4">
                            <b-form-group label="Ad Soyad" required>
                                <b-form-input v-model="form.fullName" placeholder="Ad Soyad giriniz" readonly
                                    class="custom-input"></b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col md="4">
                            <b-form-group label="Öğrenci Numarası">
                                <b-form-input v-model="form.studentNumber" placeholder="Öğrenci numarası giriniz"
                                    readonly class="custom-input"></b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col md="4">
                            <b-form-group label="Topluluk Adı">
                                <b-form-input v-model="form.clubName" placeholder="Topluluk adı giriniz" readonly
                                    class="custom-input"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <div class="document-section my-4">
                        <h5 class="section-title">Api'den Gelen Belge</h5>
                        <div class="d-flex align-items-center mb-3">
                            <b-button variant="primary" class="download-btn mr-3">
                                <b-icon icon="download" class="mr-2"></b-icon>
                                İndir
                            </b-button>
                            <b-form-group class="mb-0">
                                <b-form-radio-group v-model="form.documentAction" :options="[
                                    { text: 'Onayla', value: 'approve' },
                                    { text: 'Reddet', value: 'reject' }
                                ]" buttons button-variant="outline-primary"
                                    class="custom-radio-group"></b-form-radio-group>
                            </b-form-group>
                        </div>
                    </div>

                    <div class="options-section mb-3">
                        <b-form-group>
                            <b-form-checkbox-group v-model="form.selected" class="custom-checkbox-group">
                                <b-form-checkbox value="announce" class="custom-checkbox">
                                    <span class="checkbox-text">Duyuru At</span>
                                </b-form-checkbox>
                                <b-form-checkbox value="sendToPresident" class="custom-checkbox">
                                    <span class="checkbox-text">Başkana Gönder</span>
                                </b-form-checkbox>
                            </b-form-checkbox-group>
                            <b-form-checkbox v-model="form.showEventCount" class="custom-checkbox mt-3">
                                <span class="checkbox-text">Etkinlik Sayısı Belirle</span>
                            </b-form-checkbox>
                        </b-form-group>
                    </div>

                    <b-collapse :visible="form.showEventCount">
                        <b-form-group label="Etkinlik Sayısı" class="event-count-section">
                            <b-row>
                                <b-col md="6">
                                    <b-form-input v-model="form.eventCount" type="number" min="0" max="100"
                                        placeholder="Etkinlik sayısını giriniz" class="custom-input"></b-form-input>
                                </b-col>
                                
                            </b-row>
                        </b-form-group>
                    </b-collapse>

                    <b-form-group label="Açıklama">
                        <b-form-textarea v-model="form.description" rows="3" placeholder="Açıklama giriniz..."
                            class="custom-textarea"></b-form-textarea>
                    </b-form-group>

                    <div class="text-center mt-4">
                        <b-button type="submit" variant="primary" size="lg" class="submit-btn">
                            Gönder
                            <b-icon icon="arrow-right" class="ml-2"></b-icon>
                        </b-button>
                    </div>
                </b-form>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                fullName: 'Ahmet Yılmaz',
                studentNumber: '123456',
                clubName: 'Bilim Kulübü',
                documentAction: 'approve',
                selected: [],
                showEventCount: false,
                eventCount: 0,
                description: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$bvToast.toast('Form başarıyla gönderildi', {
                title: 'Başarılı',
                variant: 'success',
                solid: true,
                toaster: 'b-toaster-top-right'
            })
        }
    }
}
</script>

<style lang="scss">
.page1{
    width: 100%;
    max-height: 72vh;
}

.form-card {
    border-radius: 20px;
    border: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background: white;
    padding: 2rem;
}

.header-section {
    text-align: center;
    position: relative;

    h2 {
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 0.8rem;
    }

    .header-underline {
        width: 80px;
        height: 4px;
        background: #3498db;
        margin: 0 auto;
        border-radius: 2px;
    }
}

.custom-input {
    border: 2px solid #e9ecef;
    border-radius: 8px;
    padding: 0.6rem;
    transition: all 0.3s ease;
    background-color: #f5f5f5;
}

.custom-input:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
}

.custom-radio-group .btn {
    border-radius: 8px;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border-width: 2px;

    &:not(:disabled):not(.disabled).active {
        background-color: #3498db;
        border-color: #3498db;
    }
}

.custom-checkbox-group {
    display: flex;
    gap: 2rem;
}

.custom-checkbox {
    .checkbox-text {
        font-weight: 500;
        color: #34495e;
    }
}

.custom-textarea {
    border-radius: 10px;
    border: 2px solid #e9ecef;
    resize: none;
    padding: 0.6rem;

    &:focus {
        border-color: #3498db;
        box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
    }
}

.submit-btn {
    padding: 0.9rem 2.5rem;
    font-size: 1rem;
    border-radius: 10px;
    background: #3498db;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);

    &:hover {
        background: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
    }
}

.b-toast {
    .toast-header {
        background-color: #2ecc71;
        color: white;
        border-bottom: none;
    }

    .toast-body {
        background-color: #2ecc71;
        color: white;
    }
}

.collapse-enter-active,
.collapse-leave-active {
    transition: all 0.3s ease;
    max-height: 100px;
    opacity: 1;
    overflow: hidden;
}

.collapse-enter,
.collapse-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>
