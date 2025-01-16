<template>
  <div class="notification-container">
    <div class="notification-box">
      <h3 class="notification-title">Etkinlikler</h3>
      <div class="timeline-wrapper">
        <app-timeline>
           <!-- Sayılı Etkinlik -->
           <app-timeline-item variant="primary" @click="goToSpecialEvent">
            <div class="timeline-header">
              <h6>Sayılı Etkinlik</h6>
              <small class="text-muted">Bugün, 14:00</small>
            </div>
            <p class="timeline-content">Sadece sınırlı kontenjanla katılabilirsiniz!</p>
            <div class="document-preview">
              <i class="fas fa-calendar-alt document-icon"></i>
              <span>Sayılı Etkinlik Detayları</span>
            </div>
          </app-timeline-item>
          <!-- Ödeme Yapılan Fatura -->
          <app-timeline-item>
            <div class="timeline-header">
              <h6>12 Fatura Ödendi</h6>
              <small class="text-muted">12 dakika önce</small>
            </div>
            <p class="timeline-content">Şirket adına faturalar ödendi.</p>
            <div class="document-preview">
              <i class="fas fa-file-pdf document-icon"></i>
              <span>fatura.pdf</span>
            </div>
          </app-timeline-item>
          

          <!-- Müşteri Toplantısı -->
          <app-timeline-item variant="secondary">
            <div class="timeline-header">
              <h6>Müşteri Toplantısı</h6>
              <small class="text-muted">45 dakika önce</small>
            </div>
            <p class="timeline-content">John ile @10:15'te proje toplantısı.</p>
            <profile-card name="John Doe" role="Infibeam CEO" />
          </app-timeline-item>

          <!-- Finansal Rapor -->
          <app-timeline-item variant="success">
            <div class="timeline-header">
              <h6>Finansal Rapor</h6>
              <small class="text-muted">2 saat önce</small>
            </div>
            <p class="timeline-content">
              Finansal raporları okumak için aşağıdaki düğmeyi tıklayın.
            </p>
            <financial-report :show-report.sync="showFinancialReport" :reports="financialReports" />
          </app-timeline-item>

          <!-- Röportaj Planlaması -->
          <app-timeline-item variant="warning">
            <div class="timeline-header">
              <h6>Röportaj Planlaması</h6>
              <small class="text-muted">03:00 PM</small>
            </div>
            <p class="timeline-content">
              Katy Turner ile geliştirici işi için röportaj yapılacak.
            </p>
            <interview-card :candidate="{ name: 'Katy Turner', position: 'Javascript Developer' }" />
          </app-timeline-item>
        </app-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BImg,
  BAvatar,
  BMedia,
  BButton,
  BCollapse,
  VBToggle,
  BListGroup,
  BListGroupItem,
  BAvatarGroup,
  BBadge,
  VBTooltip,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    AppTimeline,
    AppTimelineItem,
    BImg,
    BMedia,
    BAvatar,
    BButton,
    BCollapse,
    BListGroup,
    BListGroupItem,
    BAvatarGroup,
    BBadge,
  },
  directives: { 'b-toggle': VBToggle, 'b-tooltip': VBTooltip, Ripple },
  data() {
    return {
      showFinancialReport: false,
      financialReports: ["Rapor 1", "Rapor 2", "Rapor 3"],
    };
  },
  methods: {
    goToSpecialEvent() {
      this.$router.push('/special-event');
    },
  },
};
</script>

<style scoped>
.notification-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
  height: 100%;
  max-height: 90vh;
}

.notification-box {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.notification-title {
  margin: 0;
  padding: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #5e5873;
  text-align: center;
  border-bottom: 1px solid #ebe9f1;
}

.timeline-wrapper {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
}

.timeline-wrapper::-webkit-scrollbar {
  width: 6px;
}

.timeline-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.timeline-wrapper::-webkit-scrollbar-thumb {
  background: #c3c3c3;
  border-radius: 3px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.timeline-header h6 {
  margin: 0;
  font-weight: bold;
  color: #5e5873;
}

.text-muted {
  color: #b9b9c3;
  font-size: 0.875rem;
}

.timeline-content {
  color: #6e6b7b;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.document-preview {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8f8f8;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.document-icon {
  color: #7367f0;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .notification-container {
    padding: 1rem;
  }

  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
