module.exports = {
    //This is what will be shown inside Discord Bot Agent
    name: "Custom Mod",

    //Place the mods authors here, you can add other authors like this: ["user", "user2"]
    author: ["koki1019"],

    //Place the description of this mod here
    description: "Example Mod",

    //Place the verison of this mod here
    version: "1.0.0",

    //Category the mod can be found in
    category: "Message",

    //This will be executed when the bot is first started
    startup: function (DBA) {
        console.log("This logs when the bot starts");
    },

    //Place the mod here
    execute: function (DBA, info, message, args) {},
};
