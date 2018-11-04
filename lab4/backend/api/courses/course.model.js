const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const ObjId = mongoose.Types.ObjectId;
const ModelName = "Course"

const objSchema = new Schema({
    name: { type: String, default: ""},
    lecturer: { type: String, default: ""}
});

objSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
objSchema.set('toJSON', {
    virtuals: true
});

objSchema.findById = function (cb) {
    return this.model(ModelName).findOne({ id: this.id }, cb);
};

const Model = mongoose.model(ModelName, objSchema);

exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        Model
            .findById(id)
            .exec((err, obj) => {
                if (err) return reject(err);
                if (!obj) return reject();
                obj = cleanObject(obj);
                return resolve(obj);
            })
    })
}

exports.findByIdRaw = (id) => {
    return new Promise((resolve, reject) => {
        Model
            .findById(id)
            .exec((err, obj) => {
                if (err) return reject(err);
                if (!obj) return reject();
                obj = cleanObject(obj);
                return resolve(obj);
            })
    })
}

exports.create = (data) => {
    delete data.id;
    const obj = new Model(data);
    return obj.save();
};

exports.listAll = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Model.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, objs) {
                if (err) {
                    reject(err);
                } else {
                    objs = objs.map(cleanObject)
                    resolve(objs);
                }
            })
    });
};

exports.patchByID = (id, data) => {
    return new Promise((resolve, reject) => {
        Model.findById(id, (err, obj) => {
            if (err) reject(err);
            if (!obj) return reject();

            for (let i in data) {
                obj[i] = data[i];
            }
            obj.save(function (err, updatedObj) {
                if (err) return reject(err);
                updatedObj = cleanObject(updatedObj);
                return resolve(updatedObj);
            });
        });
    })

};

exports.removeById = (id) => {
    return new Promise((resolve, reject) => {
        Model.findById(id, function (err, obj) {
            if (err) return reject(err);
            if (!obj) return reject();

            Model.deleteOne({ _id: id }, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(obj);
                }
            });
        });
    });
};

function cleanObject(obj) {
    obj = obj.toJSON()
    delete obj._id;
    delete obj.__v;
    return obj
}