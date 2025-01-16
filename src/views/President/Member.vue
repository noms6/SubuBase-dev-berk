<template>
    <div class="member-list-container">
        <h2 class="page-title">Üye Listesi</h2>

        <!-- Başlıklar -->
        <div class="member-header">
            <span class="a">Adı Soyadı</span>
            <span class="header-item">Numarası</span>
        </div>

        <ul class="member-list">
            <li class="member-item">
                <span class="member-name">
                    <span class="member-first-name">Ali</span>
                    <span class="member-last-name">Veli</span>
                </span>
                <span class="member-number">2012001</span>
            </li>
            <li class="member-item">
                <span class="member-name">
                    <span class="member-first-name">Ayşe</span>
                    <span class="member-last-name">Yılmaz</span>
                </span>
                <span class="member-number">2012002</span>
            </li>
            <li class="member-item">
                <span class="member-name">
                    <span class="member-first-name">Ahmet</span>
                    <span class="member-last-name">Koca</span>
                </span>
                <span class="member-number">2012003</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.member-list-container {
    max-width: 900px;
    margin: 30px auto;
    padding: 25px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.page-title {
    text-align: center;
    font-size: 2.2rem;
    font-weight: bold;
    color: #495057;
    margin-bottom: 25px;
}

.member-header {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: 15px;
    padding: 10px;
    background-color: #f1f3f5;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.a {
    width: 48%;
    text-align: left;
    color: #495057;
    font-size: 1.2rem;
}
.header-item {
    width: 48%;
    text-align: right;
    color: #495057;
    font-size: 1.2rem;
}

.member-list {
    list-style: none;
    padding: 0;
}

.member-item {
    padding: 15px;
    background-color: #f8f9fa;
    margin: 8px 0;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s, transform 0.3s;
}

.member-item:hover {
    background-color: #e9ecef;
    transform: translateY(-3px);
}

.member-number {
    font-size: 1.1rem;
    color: #007bff;
    font-weight: bold;
    width: 40%;
    text-align: right;
}

.member-name {
    font-size: 1.2rem;
    color: #495057;
    font-weight: bold;
    width: 58%;
    display: flex;
    justify-content: flex-start;
}

.member-first-name {
    color: #343a40;
}

.member-last-name {
    margin-left: 8px;
    color: #6c757d;
}

@media (max-width: 768px) {
    .member-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .header-item {
        width: 100%;
        margin-bottom: 10px;
    }

    .member-item {
        flex-direction: column;
        align-items: flex-start;
    }

    .member-number {
        margin-top: 5px;
        text-align: left;
        width: 100%;
    }
}
</style>
