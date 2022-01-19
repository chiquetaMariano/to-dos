import db from "../../models";


export default () => {
    db.sequelize.sync().then(() => {
        return db;
    });
};