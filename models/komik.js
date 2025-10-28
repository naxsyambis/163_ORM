// models/komik.js
// models digunakan untuk menyimpan definisi tabel database
// config digunakan untuk menyimpan konfigurasi database

module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        penulis: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deskripsi: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'komik',
        timestamps: true,
        freezeTableName: true
    });

    return Komik;
};
