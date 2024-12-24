<template>
    <div>
        <h2>Etkinliği düzenle</h2>
        <label>
            Etkinlik Adı:
            <input v-model="editableEventName" type="text" />
        </label>
        <br />
        <label>
            Etkinlik Tarihi:
            <input v-model="editableEventDate" type="date" />
        </label>
        <br />
        <label>
            Katılım Sınırı:
            <input v-model="editableParticipationLimit" type="text" />
        </label>
        <br />
        <label>
            Etkinlik Gereksinimleri:
            <textarea v-model="editableRequirements"></textarea>
        </label>
        <br />
        <button @click="saveChanges">Düzenle</button>
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
        };
    },
    methods: {
        saveChanges() {
            this.$emit("save-event", {
                eventName: this.editableEventName,
                eventDate: this.editableEventDate,
                participationLimit: this.editableParticipationLimit,
                requirements: this.editableRequirements.split("\n"),
            });
        },
    },
};
</script>

<style scoped>
label {
    display: block;
    margin: 8px 0;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>