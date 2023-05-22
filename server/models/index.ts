import sequelize from "../db";
import { DataTypes } from "sequelize";

module models {
    export const User = sequelize.define('user', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        username: {type: DataTypes.STRING, unique: true, allowNull: false},
        email: {type: DataTypes.STRING, unique: true, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false},
        name: {type: DataTypes.STRING, allowNull: false},
        surname: {type: DataTypes.STRING, allowNull: false},
        role: {type: DataTypes.STRING, defaultValue: "USER", allowNull: false},
    })
    
    export const Film = sequelize.define('film', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: DataTypes.STRING, unique: true, allowNull: false},
        desc: {type: DataTypes.TEXT, allowNull: false},
        short_desc: {type: DataTypes.STRING, allowNull: false},
        rating: {type: DataTypes.FLOAT, allowNull: false},
        duration: {type: DataTypes.INTEGER, allowNull: false},
        date: {type: DataTypes.DATE, allowNull: false},
        age_limit: {type: DataTypes.INTEGER, allowNull: false},
        img: {type: DataTypes.STRING, allowNull: false},
    })
    
    export const Review = sequelize.define('review', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: DataTypes.STRING, allowNull: false},
        positive: {type: DataTypes.TEXT, allowNull: false},
        negative: {type: DataTypes.TEXT, allowNull: false},
    })
    
    export const Comment = sequelize.define('comment', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        text: {type: DataTypes.STRING, allowNull: false},
    })
    
    export const Star = sequelize.define('star', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        star: {type: DataTypes.INTEGER, allowNull: false},
    })
    
    export const Favourites = sequelize.define('favourites', {})
    
    export const Genre = sequelize.define('genre', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: DataTypes.STRING, unique: true, allowNull: false},
    })
    
    export const FilmGenres = sequelize.define('film_genres', {})
    
    export const Person = sequelize.define('person', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false},
        surname: {type: DataTypes.STRING, allowNull: false},
        birthday: {type: DataTypes.DATE, allowNull: false}, 
    })
    
    export const Writers = sequelize.define('writers', {})
    
    export const Actors = sequelize.define('actors', {})
    
    export const Activity = sequelize.define('activity', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: DataTypes.STRING, unique: true, allowNull: false}, 
    })
    
    export const PersonActivity = sequelize.define('person_activity', {})
    Film.hasMany(Review)
    Review.belongsTo(Film)
    
    Film.hasMany(Comment)
    Comment.belongsTo(Film)
    
    Film.hasMany(Star)
    Star.belongsTo(Film)
    
    Film.hasMany(Favourites)
    Favourites.belongsTo(Film)
    
    Film.belongsToMany(Genre, {through: FilmGenres, as: 'genres'},)
    Genre.belongsToMany(Film, {through: FilmGenres, as: 'Films'})
    
    Film.belongsToMany(Person, {through: Writers})
    Person.belongsToMany(Film, {through: Writers})
    
    Film.belongsToMany(Person, {through: Actors})
    Person.belongsToMany(Film, {through: Actors})
    
    User.hasMany(Review)
    Review.belongsTo(User)
    
    User.hasMany(Comment)
    Comment.belongsTo(User)
    
    User.hasMany(Star)
    Star.belongsTo(User)
    
    User.hasMany(Favourites)
    Favourites.belongsTo(User)
    
    Person.belongsToMany(Activity, {through: PersonActivity})
    Activity.belongsToMany(Person, {through: PersonActivity})    
}

export default models