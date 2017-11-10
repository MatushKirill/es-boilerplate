export default class Entity {
    constructor(entity) {
        this.entity = entity;

        this.getEntity = function () {
            return this.entity
        }
    }
};
