'use strict';

const hosts = {
    dev: ['localhost'],
    staging: [],
    prod: []
}

export default {
    get() {
        let env, regex;
        for (let e in hosts) {
            for (let h in hosts[e]) {
                regex = new RegExp(hosts[e][h]);
                if (regex.test(window.location.href)) {
                    return e;
                }
            }
        }
    },
    isDev() {
        return this.get() == 'dev';
    },
    isStaging() {
        return this.get() == 'staging';
    },
    isProd() {
        return this.get() == 'prod';
    }
}
