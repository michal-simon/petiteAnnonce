import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'identifiant unique'
    },
    civilite: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: [true, 'Vous un homme ou une femme'],
      comment: 'Civilité'
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      required: [true, 'Quel est votre nom'],
      comment: 'Nom'
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
      required: [true, 'Quel est votre prénom'],
      comment: 'Prénom'
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.civilite} ${this.nom.upperCase()} ${this.prenom}`;
      }
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      required: [true, 'Votre pseudo est requis'],
      comment: 'Pseudo'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      min: 8,
      max: 14,
      comment: 'Mot de passe',
      validate: {
        isPAsswordPattern(v) {
          const match = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(v);
          if (!match) {
            throw new Error('Votre mot de passe ne respecter pas les indications de sécurité');
          }
        }
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      comment: 'État du compte'
    },
    adresse: {
      type: DataTypes.STRING,
      comment: 'Adresse postale'
    },
    codePostal: {
      type: DataTypes.STRING,
      comment: 'Code postale'
    },
    telephone: {
      type: DataTypes.NUMBER,
      validate: {
        isPhone(v) {
          const match = /^(0[1-9]{1}[0-9]{8}|\+?33[1-9][0-9]{8})$/.test(v);
          if (!match) {
            throw new Error('Veuillez indiquer un numéro de téléphone valide');
          }
        }
      },
      comment: 'Téléphone'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Veuillez entrer un email valide'
        }
      },
      comment: 'E-mail'
    },
    //   publications: {
    //     type: Schema.ObjectId,
    //     ref: 'Publication',
    //     comment: 'Liste des annonces publiées'
    //   },
    recommandations: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      comment: 'Recommandation'
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: 'https://www.fillmurray.com/64/64',
      comment: 'Photo'
    }
  });

  /**
* Comparer le mote de passe au hash
* @param {String} givenPassword
* @param {String} hash
*/
  user.comparePassword = async (givenPassword, hash) => {
    await this.bcrypt.compare(givenPassword, hash).then((result) => {
      return result;
    });
  };

  // class User extends Model {
  //   static init(sequelize, DataTypes) {
  //     return super.init(, {
  //       sequelize
  //     });
  //   }
  // }
  user.addHook('beforeCreate', (givenUser) => {
    return bcrypt.hash(givenUser.password, 10).then((hash) => {
      user.password = hash;
    }).catch((err) => {
      throw new Error(err);
    });
  });
};
