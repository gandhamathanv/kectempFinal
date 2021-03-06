/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "hostelfor", {
            hostelName: {
                type: DataTypes.STRING,
            },
            gender: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.INTEGER,
            },
            booking: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            timestamps: false,
        }
    );
};