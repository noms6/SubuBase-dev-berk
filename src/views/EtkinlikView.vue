<template>
    <div id="app">
        <EventDisplay v-if="!isEditing" :eventName="event.name" :eventDate="event.date"
            :participationStatus="event.status" :requirements="event.requirements" @edit-event="toggleEditMode"
            @complete-event="markEventAsComplete" />
        <EventEdit v-else :eventName="event.name" :eventDate="event.date" :participationLimit="event.limit"
            :requirements="event.requirements" @save-event="updateEvent" />
    </div>
</template>

<script>
import EventDisplay from "../components/President/EventDisplay.vue";
import EventEdit from "../components/President/EventEdit.vue";

export default {
    components: {
        EventDisplay,
        EventEdit,
    },
    data() {
        return {
            isEditing: false,
            event: {
                name: "Yazılım Geliştirme Atölyesi",
                date: "2024-12-15",
                status: "10/20",
                limit: "20",
                requirements: [
                    "Yazılım geliştirme ile ilgili temel bilgi",
                    "İlgili programlama dilinde deneyim",
                    "Etkinliğe aktif katılım",
                ],
            },
        };
    },
    methods: {
        toggleEditMode() {
            this.isEditing = !this.isEditing;
        },
        updateEvent(updatedEvent) {
            this.event = {
                ...this.event,
                ...updatedEvent,
            };
            this.isEditing = false;
        },
        markEventAsComplete() {
            alert(`"${this.event.name}" etkinliği tamamlandı!`);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: 20px;
}
</style>