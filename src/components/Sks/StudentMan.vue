<template>
    <div class="p-3 border rounded">
        <h3 class="text-success">Öğrenci Yönetim Sistemi</h3>
        <!-- Üyeler -->
        <div class="mb-4">
            <h5>Üyeler:</h5>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Öğrenci Numarası</th>
                        <th>Adı</th>
                        <th>Soyadı</th>
                        <th>İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1001</td>
                        <td>Ali</td>
                        <td>Yılmaz</td>
                        <td><button class="btn btn-danger btn-sm">Sil</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Üye Talepleri -->
        <div>
            <h5>Üye Talepleri:</h5>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Öğrenci Numarası</th>
                        <th>Adı</th>
                        <th>Soyadı</th>
                        <th>İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2001</td>
                        <td>Ayşe</td>
                        <td>Demir</td>
                        <td>
                            <button class="btn btn-primary btn-sm">Ekle</button>
                            <button class="btn btn-danger btn-sm">Sil</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "StudentManagement",
};
</script>

<style scoped>
h3 {
    margin-bottom: 16px;
}
</style>