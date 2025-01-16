<template>
    <div class="container mt-5">
        <!-- Gelen Talepler -->
        <div class="mb-4">
            <h2>Gelen Talepler</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Ad Soyad</th>
                        <th>Öğrenci Numarası</th>
                        <th>Topluluk Adı</th>
                        <th>Etkinlik Adı</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(req, index) in requests" :key="index">
                        <td>{{ req.name }}</td>
                        <td>{{ req.number }}</td>
                        <td>{{ req.club }}</td>
                        <td>{{ req.event }}</td>
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
            <h2>Onaylanan Talepler</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Ad Soyad</th>
                        <th>Öğrenci Numarası</th>
                        <th>Topluluk Adı</th>
                        <th>Etkinlik Adı <span>{{ participantCount }}</span></th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(req, index) in approvedRequests" :key="index">
                        <td>{{ req.name }}</td>
                        <td>{{ req.number }}</td>
                        <td>{{ req.club }}</td>
                        <td>{{ req.event }}</td>
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
            requests: [
                { name: "Emre Can", number: "987654", club: "Teknoloji Kulübü", event: "Bilim Merkezi Gezisi" },
                { name: "Ayşe Yılmaz", number: "123456", club: "Sanat Kulübü", event: "Resim Çalıştayı" },
                { name: "Fatma Aksoy", number: "654321", club: "Edebiyat Kulübü", event: "Kitap Okuma Etkinliği" },
                { name: "Ahmet Demir", number: "456789", club: "Teknoloji Kulübü", event: "Bilim Merkezi Gezisi" },
                { name: "Ali Veli", number: "111111", club: "Teknoloji Kulübü", event: "Bilim Merkezi Gezisi" }
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
            // Onaylanan talepten silme işlemi
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