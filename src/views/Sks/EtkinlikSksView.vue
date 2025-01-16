<template>
    <div id="event-view" class="full-screen">
        <EventDisplay 
            v-if="!isEditing" 
            :eventName="event.name" 
            :eventDate="event.date"
            :participationStatus="event.status" 
            :requirements="event.requirements" 
            @edit-event="toggleEditMode"
            @complete-event="markEventAsComplete" 
        />
        <EventEdit 
            v-else 
            :eventName="event.name" 
            :eventDate="event.date" 
            :participationLimit="event.limit"
            :requirements="event.requirements" 
            @save-event="updateEvent" 
        />
    </div>
</template>

<script>
import EventDisplay from "@/components/Sks/EventDisplaySks.vue";
import EventEdit from "@/components/Sks/EventEditSks.vue";

export default {
    name: "EventView",
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
                    "Etkinliğe aktif katılım sağlamak için zaman ayırmak" 
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

<style scoped>

</style>
