## 1. Design Pattren - Depedency Injection

### 1.1 kenapa menggunakan depedency injection ?

karena dapat membantu mengelola ketergantungan antar modul. Biasanya, modul di Node.js diimplementasikan sebagai fungsi yang membutuhkan satu atau beberapa objek. Penggunaan Depedency Injection memungkinkan objek-objek ini untuk disediakan dari luar modul, yang memungkinkan modul untuk lebih fleksibel dan mudah diuji.

Selain itu juga, memungkinkan untuk memisahkan logika aplikasi dari detail teknis implementasi seperti mengakses/mengelola data dari database. Dengan cara ini, modul dapat lebih fokus pada tugas utama mereka dan lebih mudah buat di maintenance.

Secara umum, penggunaan depedency injection dapat membantu untuk memperbaiki kualitas dan fleksibilitas kode program. Ini dapat membantu menghindari beberapa masalah yang terkait dengan ketergantungan antar modul dan membuat aplikasi yang dibuat menjadi lebih mudah dipelihara dan dikembangkan.

pada intinya adalah proses pemisahan komponen berdasarkan tanggung jawab masing- masing dengan tujuan menjadi lebih mudah dibaca.