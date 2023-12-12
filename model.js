import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}







// async function getFullName() {
  
//   // TODO: Implement this method
  
//   const human = await Human.findAll()

//   return console.log(human);
// }

// getFullName();










Human.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    fname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    lname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },

    {
      sequelize: db
    }

)

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()
Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    humanId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    species: {
      type: DataTypes.STRING,
      allowNull: false
    },

    birthYear: {
      type: DataTypes.INTEGER
    }
  },

  {
    sequelize: db
  }

)




// TODO: Define Relationships -> the Human to Animal relationships & assign foriegn keys
Human.hasOne(Animal, {foreignKey: 'humanId'})      
Animal.belongsTo(Human, {foreignKey: 'humanId'}) 




// Create all tables (drop if already exist)
db.sync()

// Export db
export default db;



