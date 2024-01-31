<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});

const user = useAuth();
</script>

<template>
  <Container class="">
    <div class="max-w-screen-sm mx-auto">
      <div class="bg-primary/20 rounded-xl p-5 flex flex-col items-center mt-14">
        <div class="-translate-y-14 h-20">
          <div class="h-28 overflow-hidden aspect-square rounded-full border-2 border-primary">
            <img class="w-full" :src="user!.picture_url" alt="" />
          </div>
        </div>
        <ul class="w-full flex flex-col gap-5">
          <ProfileAttribute label="Nama" :value="user!.name" />
          <ProfileAttribute label="Email" :value="user!.email" />
          <ProfileAttribute label="Jenis Kelamin" :value="user!.gender" />
          <ProfileAttribute label="Nomor Telepon" :value="user!.phone" />
          <ProfileAttribute label="Alamat" :value="user!.address" />
        </ul>
      </div>
      <div class="grid md:grid-cols-3 gap-4 mt-6">
        <Button>Edit Profil</Button>
        <Button>Ganti Foto</Button>
        <Button to="/transactions">Daftar Transaksi</Button>
      </div>
    </div>
  </Container>
</template>

<style scoped></style>
