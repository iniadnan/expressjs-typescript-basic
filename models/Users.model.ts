import { Model, DataType, Table, Column, Default } from "sequelize-typescript";
import { generateRandomStringNumber } from "../helpers/randomString";

@Table({ tableName: "users" })
class Users extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: generateRandomStringNumber(60),
  })
  id!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;
}

export default Users;
