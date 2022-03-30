import { DataTypes } from 'sequelize';

import dbConnection from '../config/db.js';

const User = dbConnection.define(
    'usuarios',
    {
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        pais: {
            type: DataTypes.STRING(30),
            allowNull: true,
            defaultValue: 'Brasil'
        },
        senha: {
            type: DataTypes.STRING(500),
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        tableName: 'usuarios',
        timestamps: false
    }
);

User.sync();

export default User;
