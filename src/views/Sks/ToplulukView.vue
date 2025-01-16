<template>
    <div class="dashboard-container">
        <!-- Modern Gradient Header -->


        <b-container fluid>
            <b-row>
                <!-- Left Side - Community Info -->
                <b-col md="6" class="mb-4">
                    <ToplulukBilgileri />
                </b-col>

                <!-- Center - Student Management System -->
                <b-col md="6" class="mb-4" style="margin-top: 13px;">
                    <b-card no-body class="modern-card h-100">
                        <b-card-header class="bg-gradient-primary">
                            <h3 class="mb-0 text-white d-flex align-items-center">
                                <i class="fas fa-users-cog mr-2"></i>
                                Öğrenci Yönetim Sistemi
                            </h3>
                        </b-card-header>
                        <b-card-body class="px-4">
                            <!-- Members Table -->
                            <div class="mb-5">
                                <h4  class="mb-3 d-flex align-items-center" style="margin-top: 20px;">
                                    <i class="fas fa-user-graduate mr-2 text-primary"></i>
                                    Üyeler
                                </h4>
                                <b-table striped hover :items="members" :fields="memberFields" responsive
                                    class="modern-table">
                                    <template #cell(actions)="row">
                                        <b-button size="sm" variant="danger-soft" @click="removeMember(row.item)"
                                            class="btn-icon">
                                            <i class="fas fa-trash-alt"></i>
                                        </b-button>
                                    </template>
                                </b-table>
                            </div>

                            <!-- Member Requests -->
                            <div>
                                <h4 class="mb-3 d-flex align-items-center">
                                    <i class="fas fa-user-plus mr-2 text-success"></i>
                                    Üye Talepleri
                                </h4>
                                <b-table striped hover :items="memberRequests" :fields="requestFields" responsive
                                    class="modern-table">
                                    <template #cell(actions)="row">
                                        <b-button-group>
                                            <b-button size="sm" variant="success-soft" @click="approveMember(row.item)"
                                                class="btn-icon mr-2">
                                                <i class="fas fa-check"></i>
                                            </b-button>
                                            <b-button size="sm" variant="danger-soft" @click="rejectMember(row.item)"
                                                class="btn-icon">
                                                <i class="fas fa-times"></i>
                                            </b-button>
                                        </b-button-group>
                                    </template>
                                </b-table>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Right Side - Activities -->

            </b-row>
            <b-row @click="EtkinlikGit">
                <b-col>
                    <Etkinlik />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import ToplulukBilgileri from '@/components/Sks/ToplulukBilgileriSks.vue'
import Etkinlik from '@/components/Sks/EtkinlikSks.vue'

export default {
    name: 'CommunityDashboard',
    components: {
        ToplulukBilgileri,
        Etkinlik
    },
    data() {
        return {
            memberFields: [
                { key: 'studentId', label: 'Öğrenci No' },
                { key: 'firstName', label: 'Adı' },
                { key: 'lastName', label: 'Soyadı' },
                { key: 'actions', label: '' }
            ],
            requestFields: [
                { key: 'studentId', label: 'Öğrenci No' },
                { key: 'firstName', label: 'Adı' },
                { key: 'lastName', label: 'Soyadı' },
                { key: 'actions', label: '' }
            ],
            members: [
                { studentId: '1001', firstName: 'Ali', lastName: 'Yılmaz' },
                { studentId: '1002', firstName: 'Mehmet', lastName: 'Kaya' }
            ],
            memberRequests: [
                { studentId: '2001', firstName: 'Ayşe', lastName: 'Demir' },
                { studentId: '2002', firstName: 'Fatma', lastName: 'Yıldız' }
            ]
        }
    },
    methods: {
        removeMember(member) {
            this.members = this.members.filter(m => m.studentId !== member.studentId)
        },
        approveMember(member) {
            this.members.push(member)
            this.memberRequests = this.memberRequests.filter(m => m.studentId !== member.studentId)
        },
        rejectMember(member) {
            this.memberRequests = this.memberRequests.filter(m => m.studentId !== member.studentId)
        },
        EtkinlikGit() {
            this.$router.push('/EtkinlikSks')
        }
    }
}
</script>

<style scoped>
.dashboard-container {
    min-height: 100vh;
    background-color: #f8f9fa;
}

.modern-header {
    background: linear-gradient(135deg, #6B73FF 0%, #000DFF 100%);
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.modern-card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
}

.modern-card:hover {
    transform: translateY(-5px);
}

.bg-gradient-primary {
    background: linear-gradient(135deg, #6B73FF 0%, #000DFF 100%);
    border-radius: 15px 15px 0 0;
    padding: 1.5rem;
}

.modern-table {
    border-radius: 10px;
    overflow: hidden;
}

.modern-table thead th {
    background-color: #f8f9fa;
    border-top: none;
    color: #6B73FF;
    font-weight: 600;
}

.btn-icon {
    width: 32px;
    height: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.btn-success-soft {
    background-color: rgba(40, 199, 111, 0.1);
    color: #28c76f;
    border: none;
}

.btn-danger-soft {
    background-color: rgba(234, 84, 85, 0.1);
    color: #ea5455;
    border: none;
}

.btn-success-soft:hover {
    background-color: #28c76f;
    color: white;
}

.btn-danger-soft:hover {
    background-color: #ea5455;
    color: white;
}

h3,
h4 {
    color: #2c3e50;
    font-weight: 600;
}

.text-primary {
    color: #6B73FF !important;
}

.text-success {
    color: #28c76f !important;
}

@media (max-width: 992px) {
    .modern-card {
        margin-bottom: 2rem;
    }
}
</style>