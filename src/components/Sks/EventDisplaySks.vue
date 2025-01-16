<template>
    <div class="d-flex a">
        <div class="content-box text-center shadow-lg bg-white">
            <h2 class="text-primary display-4 mb-2">Etkinliğe Katılma Talebi</h2>
            <div class="clickable-content" @click="switchToEdit">
                <p class="mb-2 lead"><strong>Etkinlik Adı:</strong> {{ eventName }}</p>
                <p class="mb-2 lead"><strong>Etkinlik Tarihi:</strong> {{ eventDate }}</p>
                <p class="mb-2 lead"><strong>Katılım Durumu:</strong> {{ participationStatus }}</p>
                <p class="mb-2 lead"><strong>Etkinlik Gereksinimleri:</strong></p>
                <ul class="list-unstyled">
                    <li v-for="requirement in requirements" :key="requirement" class="">{{ requirement }}</li>
                </ul>
            </div>
            <button :disabled="isCompleted" @click.stop="completeEvent" class="btn btn-success btn-lg mb-2">Etkinliği
                Tamamla</button>
        </div>

        <div v-if="isSnackbarVisible" class="snackbar">Etkinlik başarıyla tamamlandı!</div>
    </div>
</template>

<script>
export default {
    props: {
        eventName: {
            type: String,
            required: true,
        },
        eventDate: {
            type: String,
            required: true,
        },
        participationStatus: {
            type: String,
            required: true,
        },
        requirements: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            editMode: false,
            isCompleted: false,
            isSnackbarVisible: false,
        };
    },
    methods: {
        switchToEdit() {
            this.$emit("edit-event");
        },
        
        completeEvent() {
            if (!this.isCompleted) {
                this.isCompleted = true;
                this.isSnackbarVisible = true;
                this.$emit("complete-event");

                setTimeout(() => {
                    this.isSnackbarVisible = false;
                }, 3000);
            }
        },
        switchToCancel() {
            this.$emit("cancel-event");
        },
    },
};
</script>

<style scoped>
.a {
    height: 72vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-box {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: 100%;
    max-width: 1200px;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.clickable-content {
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.clickable-content:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

h2 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: #2c3e50;
    font-weight: 700;
    text-align: left;
}

p,
.list-unstyled {
    font-size: clamp(1.0rem, 2vw, 1.3rem);
    color: #34495e;
    text-align: left;
    margin-bottom: 10px;
}

button {
    align-self: center;
    font-size: clamp(1.0rem, 2vw, 1.3rem);
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    margin-top: 20px;
}

button:hover {
    background-color: #218c74;
    color: white;
    transform: scale(1.05);
}

.snackbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #27ae60;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-size: clamp(1rem, 3vw, 1.2rem);
    animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
    from {
        transform: translate(-50%, -100%);
    }

    to {
        transform: translate(-50%, 0);
    }
}
</style>