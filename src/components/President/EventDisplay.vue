<template>
    <div @click="editMode = true">
        <h2>Etkinliğe Katılma Talebi</h2>
        <p><strong>Etkinlik Adı:</strong> {{ eventName }}</p>
        <p><strong>Etkinlik Tarihi:</strong> {{ eventDate }}</p>
        <p><strong>Katılım Durumu:</strong> {{ participationStatus }}</p>
        <p><strong>Etkinlik Gereksinimleri:</strong></p>
        <ul>
            <li v-for="requirement in requirements" :key="requirement">{{ requirement }}</li>
        </ul>
        <button @click.stop="completeEvent">Etkinliği Tamamla</button>
    </div>
</template>

<script>
export default {
    props: {
        eventName: String,
        eventDate: String,
        participationStatus: String,
        requirements: Array,
    },
    data() {
        return {
            editMode: false,
        };
    },
    watch: {
        editMode(newValue) {
            if (newValue) {
                this.$emit("edit-event");
            }
        },
    },
    methods: {
        completeEvent() {
            alert("Etkinlik tamamlandı!");
            this.$emit("complete-event");
        },
    },
};
</script>

<style scoped>
div {
    cursor: pointer;
    padding: 16px;
    border-radius: 4px;
    position: relative;
}

div:hover {
    background-color: #f9f9f9;
}

button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 16px;
}

button:hover {
    background-color: #218838;
}
</style>