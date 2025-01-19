<template>
    <div class="container mt-5">
        <!-- Etkinlik ve Topluluk Bilgisi -->
        <div class="mb-4 text-center">
            <h2>{{ eventName }}</h2>
            <h4>{{ clubName }}</h4>
        </div>

        <!-- Gelen Talepler -->
        <div class="mb-4">
            <h3>Gelen Talepler</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Ad Soyad</th>
                        <th>Öğrenci Numarası</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(req, index) in requests" :key="index">
                        <td>{{ req.name }}</td>
                        <td>{{ req.number }}</td>
                        <td>
                            <button class="btn btn-success" @click="approveRequest(index)">Onayla</button>
                            <button class="btn btn-danger" @click="rejectRequest(index)">Reddet</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Onaylanan Talepler -->
        <div class="mb-4">
            <h3>Onaylanan Talepler</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Ad Soyad</th>
                        <th>Öğrenci Numarası</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(req, index) in approvedRequests" :key="index">
                        <td>{{ req.name }}</td>
                        <td>{{ req.number }}</td>
                        <td>
                            <button class="btn btn-warning" @click="removeFromApproved(index)">Sil</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="limitMessage" class="alert alert-danger">{{ limitMessage }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            eventName: "Bilim Merkezi Gezisi", // Etkinlik adı
            clubName: "Teknoloji Kulübü", // Topluluk adı
            requests: [
                { name: "Emre Can", number: "987654" },
                { name: "Ayşe Yılmaz", number: "123456" },
                { name: "Fatma Aksoy", number: "654321" },
                { name: "Ahmet Demir", number: "456789" },
                { name: "Ali Veli", number: "111111" }
            ],
            approvedRequests: [],
            maxParticipants: 5,
            limitMessage: '',
        };
    },
    methods: {
        approveRequest(index) {
            if (this.approvedRequests.length >= this.maxParticipants) {
                this.limitMessage = "Etkinlik için katılımcı limiti dolmuştur.";
                return;
            }

            this.limitMessage = ""; // Önceki mesajları temizle
            this.approvedRequests.push(this.requests[index]);
            this.requests.splice(index, 1);
        },
        rejectRequest(index) {
            this.requests.splice(index, 1);
        },
        removeFromApproved(index) {
            this.approvedRequests.splice(index, 1);
        }
    },
    computed: {
        participantCount() {
            return `(${this.approvedRequests.length}/${this.maxParticipants})`;
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: auto;
}

.table {
    width: 100%;
}

.table th,
.table td {
    text-align: center;
    padding: 10px;
}

.btn {
    margin: 5px;
}

.alert {
    margin-top: 20px;
}
</style>
