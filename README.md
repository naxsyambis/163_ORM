
---

## 🧩 Endpoint API

| Method | Endpoint        | Deskripsi                           | Contoh Tangkapan Layar |
|:-------|:----------------|:------------------------------------|:------------------------|
| **POST** | `/komik`        | Menambahkan data komik baru.        | ![POST](./ss/post.png)  |
| **GET**  | `/komik`        | Menampilkan seluruh data komik.     | ![GET](./ss/get.png)    |
| **PUT**  | `/komik/:id`    | Mengubah data komik berdasarkan ID. | ![PUT](./ss/put.png)    |
| **DELETE** | `/komik/:id`  | Menghapus data komik berdasarkan ID.| ![DELETE](./ss/delete.png) |

---

## 💾 Contoh Struktur Data Komik

```json
{
  "judul": "One Piece",
  "penulis": "Eiichiro Oda",
  "deskripsi": "Petualangan Luffy dan kru bajak laut Topi Jerami."
}
