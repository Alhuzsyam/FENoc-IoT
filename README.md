# Nocproj

# Tutorial Install Angular CLI 16.2.14 dan Node.js 16.14.2 di Windows

Panduan ini akan membantu kamu menginstal Node.js versi 16.14.2 dan Angular CLI versi 16.2.14 di Windows.

## 1. Menginstal Node.js 16.14.2

### 1.1. Download Node.js
1. Kunjungi [situs resmi Node.js](https://nodejs.org/en/download/releases/).
2. Di halaman tersebut, scroll ke bawah dan cari versi **16.14.2**.
3. Unduh installer untuk Windows yang sesuai dengan arsitektur sistem kamu (x64 atau x86), biasanya file dengan ekstensi `.msi`.

### 1.2. Install Node.js
1. Setelah unduhan selesai, buka file installer yang telah diunduh.
2. Ikuti panduan instalasi, dan pastikan untuk mencentang opsi **Add to PATH** agar Node.js dan npm (Node Package Manager) bisa diakses dari Command Prompt.
3. Klik `Next` hingga instalasi selesai.

### 1.3. Verifikasi Instalasi Node.js
1. Buka Command Prompt (CMD) atau PowerShell.
2. Ketik perintah berikut untuk memverifikasi instalasi Node.js:
   ```bash node -v 
3. Verifikasi juga instalasi npm dengan perintah 
    - npm -v


### 1.4 Install Angular CLI
1. Dengan Node.js terinstal, sekarang kita bisa menginstal Angular CLI.
2. Di CMD atau PowerShell, jalankan perintah berikut untuk menginstal Angular CLI versi 16.2.14 secara global:
    - npm install -g @angular/cli@16.2.14
3. Verifikasi juga instalasi angurlar dengan perintah 
    - ng version
