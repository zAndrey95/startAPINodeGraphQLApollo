import DataType from 'sequelize';
import { Model } from '../types/model.model';

export default (sequelize: Model) => {
	const Test = sequelize.define('Test', {
		id: { type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true, allowNull: false, field: 'id' },
        name: { type: DataType.STRING, field: 'name' },
	},{
		tableName: 'test',
		timestamps: false,
	})

	return Test
}
