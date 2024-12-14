
// Membuat kelas custom error yang menyertakan statusCode
class CustomAPIError extends Error {
    constructor(message, statusCode) {
      super(message); // Memanggil constructor bawaan dari kelas Error
      this.statusCode = statusCode; // Menyimpan kode status HTTP
    }
  }
  
  // Helper function untuk membuat instance dari CustomAPIError
  const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);
  };
  
  // Mengekspor kedua komponen agar bisa digunakan di file lain
  module.exports = { createCustomError, CustomAPIError };
  