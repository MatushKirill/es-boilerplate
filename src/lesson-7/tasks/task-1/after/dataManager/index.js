'use strict';


import {validator} from '../helper/index'

const data = new Map();

const DataManager =function() {};


DataManager.prototype.getEntities = () => {
    return data.values();
};

DataManager.prototype.getEntityById = (id) => {
    return data.has(id) ? data.get(id) : null;
};

DataManager.prototype.getFirstEntity = () => {

    return data.size === 0 ? null : [...data.values()][0];
};

DataManager.prototype.getLastEntity = () => {
    return data.size === 0 ? null : [...data.values()][data.length - 1];
};

DataManager.prototype.getCount = () => {
    return data.size
};

DataManager.prototype.add = (entity) => {
    validator(entity);
    data.set(data.size, entity);
};

DataManager.prototype.filter = (callback = () => false) => {
    if (typeof callback !== 'function') throw new Error('callback must be a function');
    return  [...data.values()].filter(callback);
};

export {DataManager}



