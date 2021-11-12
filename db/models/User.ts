import { Model, UUIDV4, Sequelize, DataTypes, BuildOptions } from 'sequelize';

interface User extends Model {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

type UserStatic = typeof Model & {
  new (values?: Partial<User>, options?: BuildOptions): User
}

export function build(sequelize: Sequelize){
  const User = sequelize.define('user', {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }) as UserStatic;
  return User;
}

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