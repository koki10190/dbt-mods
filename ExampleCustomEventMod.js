module.exports = {
    //This is what will be shown inside Discord Bot Agent
    name: "Send Event Message",

    //Place the mods authors here, you can add other authors like this: ["user", "user2"]
    author: ["koki1019"],

    isEventMod: true,

    //The event category that this mod will be executed in, IT MUST BE THE SAME AS THE EVENTS "SetCategory:"" KEY!
    EventCategory: "customevent",

    //Place the description of this mod here
    description: "Example Mod",

    //Place the verison of this mod here
    version: "1.0.0",

    //Category the mod can be found in
    category: "Message",

    //Place the HTML to show inside of Discord Bot Agent
    html: function (data) {
        return `
        <label>Message E</label><br>
        <input class="input-field" id="msg" value="" name="msg">
        <a onclick="openVar('msg')" class="var-btn">INSERT VARIABLE</a>
        `;
    },

    //This will be executed when the bot is first started
    startup: function (DBA) {
        console.log("Custom event mod");
    },

    //Place the mod here
    execute: function (DBA, info, message) {
        const variabled = DBA.var(info.msg.value);

        message.channel.send(variabled);
    },
};
