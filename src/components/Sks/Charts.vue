<template>
    <div class="status-card">
        <div class="status-item" v-for="(item, index) in metrics" :key="'metric-' + index">
            <div class="status-icon" :style="{ color: item.color }">
                <i :class="item.icon"></i>
            </div>
            <div class="status-text">
                <p class="status-value" :style="{ color: item.color }">{{ item.value }}</p>
                <p class="status-label">
                    <span>{{ item.label }}</span>
                </p>
            </div>
        </div>

        <div class="chart-container">
            <canvas id="statusChart"></canvas>
        </div>

        <button @click="downloadExcel" class="download-btn">
            Talepleri İndir
        </button>
    </div>
</template>

<script>
import { saveAs } from "file-saver";
import XLSX from "xlsx";
import { Chart } from "chart.js";

export default {
    name: "CommunityEventStatus",
    data() {
        return {
            metrics: [
                { value: 10, label: "Toplam Yapılan Etkinlik", icon: "fas fa-calendar-check", color: "#28a745" },
                { value: 15, label: "Toplam Topluluk", icon: "fas fa-users", color: "#007bff" },
                { value: 50, label: "Toplam Onaylanan Talep", icon: "fas fa-thumbs-up", color: "#33CC00" },
                { value: 5, label: "Toplam Reddedilen Talep", icon: "fas fa-thumbs-down", color: "#CC3333" },
                { value: 200, label: "Toplam Topluluk Üye Sayısı", icon: "fas fa-user-friends", color: "#17a2b8" },
                { value: 20, label: "Toplam Reddedilen Üye Sayısı", icon: "fas fa-user-slash", color: "#6c757d" },
            ],
        };
    },
    methods: {
        downloadExcel() {
            try {
                const worksheet = XLSX.utils.json_to_sheet(
                    this.metrics.map(item => ({
                        "Değer": item.value,
                        "Etiket": item.label,
                    }))
                );

                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "Talepler ve Metrikler");

                const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
                const data = new Blob([excelBuffer], { type: "application/octet-stream" });
                saveAs(data, "talepler_ve_metrikler.xlsx");

                alert("Excel dosyası başarıyla indirildi!");
            } catch (error) {
                console.error("Excel dosyası indirilemedi:", error);
                alert("Bir hata oluştu. Lütfen tekrar deneyin.");
            }
        },
        renderChart() {
    const ctx = document.getElementById("statusChart").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: this.metrics.slice(2, 4).map(item => item.label),
            datasets: [
                {
                    data: this.metrics.slice(2, 4).map(item => item.value),
                    backgroundColor: this.metrics.slice(2, 4).map(item => item.color),
                    borderColor: this.metrics.slice(2, 4).map(item => item.color),
                    borderWidth: 2,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                    labels: {
                        font: {
                            size: 16,
                        },
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ": " + tooltipItem.raw;
                        },
                    },
                },
            },
            animation: {
                duration: 1500,
            },
        },
    });
},

    },
    mounted() {
        this.renderChart();
    },
};
</script>

<style scoped>
.status-card {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.status-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.status-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.status-icon {
    font-size: 2rem;
    margin-right: 10px;
}

.status-text {
    text-align: left;
}

.status-value {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
}

.status-label {
    font-size: 0.9rem;
    color: #6c757d;
    margin: 0;
}

.status-label span {
    font-weight: bold;
}

.download-btn {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.download-btn:hover {
    background-color: #0056b3;
}

.chart-container {
    margin-top: 20px;
    padding: 20px;
}
</style>
