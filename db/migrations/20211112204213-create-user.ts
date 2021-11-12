import { DataTypes, QueryInterface, UUIDV4 } from 'sequelize';
export async function up(q: QueryInterface){
    await q.createTable('users', {
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
          },
          created_at: {
              type: DataTypes.DATE,
              allowNull: false
          },
          updated_at: {
              type: DataTypes.DATE,
              allowNull: false
          }
      })
}