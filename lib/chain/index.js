var ChainStore = require("./src/ChainStore");
var TransactionBuilder  = require("./src/TransactionBuilder");

module.exports = {
    ChainStore: ChainStore,
    TransactionBuilder: TransactionBuilder,
    FetchChainObjects: ChainStore.FetchChainObjects,

    ChainTypes: require("./src/ChainTypes"),
    ObjectId: require("./src/ObjectId"),
    NumberUtils: require("./src/NumberUtils"),
    TransactionHelper: require("./src/TransactionHelper"),
    ChainValidation: require("./src/ChainValidation"),
    EmitterInstance: require("./src/EmitterInstance"),
    Login: require("./src/AccountLogin"),

    /** Helper function for FetchChainObjects */
    FetchChain: ChainStore.FetchChain

}
