module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            nickname: String,
            name: String,
            date_of_birth: String,
            car_model: String,
            course_route: String,
            rival_type: String,
        }, {
            timestamp: true
        }
    );

    schema.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object;
    });

    return mongoose.model("rivals", schema);
}