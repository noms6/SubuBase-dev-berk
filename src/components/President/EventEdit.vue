<template>
    <div class="d-flex a">
        <div class="content-box text-center shadow-lg bg-white">
            <h2 class="text-primary display-4 mb-2">Etkinliği Düzenle</h2>
            <form @submit.prevent="saveChanges" class="edit-form">
                <div class="form-group">
                    <label>
                        <strong>Etkinlik Adı:</strong>
                        <input v-model="editableEventName" type="text" class="form-control" required />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        <strong>Etkinlik Tarihi:</strong>
                        <input v-model="editableEventDate" type="date" class="form-control" required />
                    </label>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" v-model="isParticipationLimitChecked" /> Katılım Sınırı Belirle
                    </label>
                    <div v-if="isParticipationLimitChecked">
                        <label>
                            <strong>Katılım Sınırı:</strong>
                            <input v-model="editableParticipationLimit" type="number" class="form-control" required
                                min="1" />
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label>
                        <strong>Etkinlik Gereksinimleri:</strong>
                        <textarea v-model="editableRequirements" class="form-control" rows="4" required></textarea>
                    </label>
                </div>
                <div class="button-group">
                    <button type="submit" class="btn-save">Kaydet</button>
                    <button type="button" class="btn-cancel" @click="cancelEdit" to="/etkinlik">İptal</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        eventName: String,
        eventDate: String,
        participationLimit: String,
        requirements: Array,
    },
    data() {
        return {
            editableEventName: this.eventName,
            editableEventDate: this.eventDate,
            editableParticipationLimit: this.participationLimit,
            editableRequirements: this.requirements.join("\n"),
            isParticipationLimitChecked: false, // Katılım sınırı checkbox durumunu kontrol eder
        };
    },
    methods: {
        saveChanges() {
            this.$emit("save-event", {
                eventName: this.editableEventName,
                eventDate: this.editableEventDate,
                participationLimit: this.isParticipationLimitChecked ? this.editableParticipationLimit : null,
                requirements: this.editableRequirements.split("\n").filter(req => req.trim()),
            });
        },
        cancelEdit() {
            // Sayfayı yenilemeden, URL'yi güncelleyip sonuna parametre ekleme
            this.$router.push({ path: '/etkinlik', query: { canceled: true } });

            // Eğer sayfanın tam olarak yenilenmesini istiyorsanız
            window.location.reload();
        },
       
    },
};
</script>

<style scoped>
.a {
    height: 73vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    /* Taşma durumunda içeriğin görünmesini sağlar */
}

.content-box {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: 100%;
    /* Sayfa genişliğini tam olarak alacak şekilde ayarlandı */
    min-width: 300px;
    /* Minimum genişlik değeri */
    max-width: 1200px;
    /* Maksimum genişlik değeri */
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    overflow-y: auto;
    /* İçerik fazla olursa kaydırma çubuğu ekler */
}

.edit-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    /* Boşlukları biraz daha daraltalım */
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    /* Boşlukları daha da küçültelim */
    text-align: left;
}

h2 {
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    /* Başlık boyutu küçük ekranlarda daha küçük */
    color: #2c3e50;
    font-weight: 700;
    text-align: left;
    margin-bottom: 0.5rem;
    /* Başlık ile altındaki öğeler arasındaki boşluğu kısaltalım */
}

label {
    font-size: clamp(1.0rem, 2.5vw, 1.2rem);
    color: #34495e;
    margin-bottom: 0.25rem;
    /* Label ile input arasındaki boşluğu azaltalım */
}

.form-control {
    width: 100%;
    padding: 0.6rem;
    /* İçerik paddingini biraz daha daraltalım */
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-control:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

textarea.form-control {
    resize: vertical;
    min-height: 100px;
    /* Daha küçük bir min-height verelim */
    font-size: 1rem;
}

.button-group {
    display: flex;
    gap: 0.75rem;
    /* Butonlar arasındaki boşluğu küçültelim */
    justify-content: center;
    margin-top: 0.5rem;
    /* Butonları biraz yukarıya taşıdık */
}

.btn-save,
.btn-cancel {
    font-size: clamp(1.0rem, 2vw, 1.2rem);
    font-weight: bold;
    padding: 8px 16px;
    /* Buton içindeki paddingi biraz daha daraltalım */
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.btn-save {
    background-color: #27ae60;
    color: white;
}

.btn-save:hover {
    background-color: #218c74;
    transform: scale(1.05);
}

.btn-cancel {
    background-color: #e74c3c;
    color: white;
}

.btn-cancel:hover {
    background-color: #c0392b;
    transform: scale(1.05);
}
</style>
