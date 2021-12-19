module.exports = {
    //This is what will be shown inside Discord Bot Agent
    name: "Event Message",

    //Place the mods authors here, you can add other authors like this: ["user", "user2"]
    author: ["koki1019"],

    isEvent: true,

    //Set an event category so other mod creators can create custom mods for your event
    SetEventCategory: "customevent",

    //Place the description of this mod here
    description: "Example Mod",

    //Place the verison of this mod here
    version: "1.0.0",

    //Category the mod can be found in
    category: "Message",

    //This will be executed when the bot is first started
    startup: function (DBA) {
        console.log("Custom event");
    },

    //Place the mod here
    execute: function (DBA, mods) {
        DBA.bot.on("interactionCreate", i => {
            if (!i.isButton()) return;

            i.reply("button click");

            DBA.saveVariable("author.username", i.user.username);
            DBA.saveVariable("author.id", i.user.id);
            DBA.saveVariable("author.tag", i.user.tag);
            DBA.saveVariable("author.avatar", i.user.avatarURL({ dynamic: true }));

            DBA.saveVariable("commandChannel.id", i.message.channel.id);
            DBA.saveVariable("commandChannel.name", i.message.channel.name);
            DBA.saveVariable("commandChannel.pos", i.message.channel.position);
            DBA.saveVariable("commandChannel.type", i.message.channel.type);

            DBA.saveVariable("guild.id", i.message.guild.id);
            DBA.saveVariable("guild.icon", i.message.guild.icon);
            DBA.saveVariable("guild.name", i.message.guild.name);
            DBA.saveVariable("guild.members", i.message.guild.memberCount);

            DBA.saveVariable("message.content", i.message.content);
            DBA.saveVariable("message.id", i.message.id);

            for (const mod in mods) {
                const variables = DBA.modVars[mods[mod].name];
                mods[mod].execute(DBA, variables, message);
            }
        });
    },
};
