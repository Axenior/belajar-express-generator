const mongoose = require("mongoose");

// Skema Mahasiswa
const mahasiswaSchema = new mongoose.Schema(
  {
    npm: {
      type: String,
      required: true,
      unique: true, // NPM harus unik, tidak boleh duplikat
    },
    nama: {
      type: String,
      required: true, // wajib diisi
    },
    prodi_id: {
      type: mongoose.Schema.Types.ObjectId, // Mencacu pada ID dokumen lain di MongoDB
      ref: "Prodi", // Berelasi dengan model Prodi
      required: true, // wajib diisi
    },
    jenis_kelamin: {
      type: String, // Tipe data String
      enum: ["L", "P"], // Hanya menerima nilai "L" untuk Laki-laki atau "P" untuk Perempuan
      required: true, // wajib diisi
    },
    asal_sekolah: {
      type: String,
      required: true, // wajib diisi
    },
    foto: {
      type: String, // Tipe data string, menyimpan URL atau path file foto
      required: false, // Tidak wajib diisi
    },
  },
  {
    timestamps: true, // Menambahkan kolom createdAt dan updatedAt secara otomatis
  }
);

// Membuat Model Mahasiswa
const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);

// Mengekspor model Mahasiswa agar dapat digunakan di file lain
module.exports = Mahasiswa;
