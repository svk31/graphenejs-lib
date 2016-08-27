var assert = require("assert");
var {Apis, ChainConfig} = require("graphenejs-ws");
var { FetchChain, ChainStore } = require("../../lib/chain");

var coreAsset;

describe("ChainStore", () => {

    // Connect once for all tests
    before(function() {
        return Apis.instance("wss://bitshares.openledger.info/ws").init_promise.then(function (result) {
            coreAsset = result[0].network.core_asset;
            ChainStore.init();
        });
    });

    // Unsubscribe everything after each test
    afterEach(function() {
        ChainStore.subscribers = new Set();
        ChainStore.clearCache();
    });

    after(function() {
        ChainConfig.reset();
    });

    describe("Subscriptions", function() {

        it("Asset not found", function() {
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    console.log("chainstore sub");
                    assert(ChainStore.getAsset("NOTFOUND") === null)
                    resolve()
                })
                assert(ChainStore.getAsset("NOTFOUND") === undefined)
            })
        })

        it("Asset by name", function() {
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    assert(ChainStore.getAsset(coreAsset) != null)
                    resolve()
                })
                assert(ChainStore.getAsset(coreAsset) === undefined)
            })
        })

        it("Asset by id", function() {
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    assert(ChainStore.getAsset("1.3.0") != null)
                    resolve()
                })
                assert(ChainStore.getAsset("1.3.0") === undefined)
            })
        })

        it("Object by id", function() {
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    assert(ChainStore.getAsset("2.0.0") != null)
                    resolve()
                })
                assert(ChainStore.getAsset("2.0.0") === undefined)
            })
        })


    })
        //     ChainStore.getAccount("not found")
        //
        //     ChainStore.unsubscribe(cb)
        //     // return FetchChain("getAccount", "notfound")
        //     let cb = res => console.log('res',res)
        //     // })
        // })


})
