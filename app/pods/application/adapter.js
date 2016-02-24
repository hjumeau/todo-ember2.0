import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api',
    shouldBackgroundReloadRecord() {
        return false;
    },
    shouldBackgroundReloadAll() {
        return false;
    }
});
