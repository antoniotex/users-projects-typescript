"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const sequelize_1 = require("sequelize");
function build(sequelize) {
    const User = sequelize.define('user', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return User;
}
exports.build = build;
// export = (sequelize: any, DataTypes: any) => {
//   class User extends Model<UserAttributes> implements UserAttributes{
//     id!: string;
//     name!: string;
//     email!: string;
//     password!: string;
//     static associate(models: any) {
//       // define association here
//       User.belongsToMany(models.Project, {
//         through: 'ProjectAssignments'
//       })
//     }
//   };
//   User.init({
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: UUIDV4,
//       allowNull: false,
//       primaryKey: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
