const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*ᴇsᴛᴇ ɢʀᴜᴘᴏ ᴇs ᴀᴄᴛɪᴠᴏ✨ :3*`, m);
  m.reply(`*[ 🚨 ʀᴇᴠɪsᴀɴᴅᴏ ɪɴᴀᴄᴛɪᴠᴏs 🚨 ]*\n\n*ɢʀᴜᴘᴏ:* ${await conn.getName(m.chat)}\n*ᴍɪᴇᴍʙʀᴏs ᴅᴇʟ ɢʀᴜᴘᴏ:* ${sum}\n\n*[ ‼️ʟɪsᴛᴀ ᴅᴇ ɪɴᴀᴄᴛɪᴠᴏs ‼️ ]*\n${sider.map((v) => '  🔪😵 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ɴᴏᴛᴀ: ᴇʟ ʙᴏᴛ ɪɴɪᴄɪᴀ ᴇʟ ᴄᴏɴᴛᴇᴏ ᴅᴇ ᴍᴇɴsᴀᴊᴇs ᴀᴘᴀʀᴛɪʀ ᴅᴇ ϙᴜᴇ sᴇ ᴀᴄᴛɪᴠᴏ ᴇɴ ᴇsᴛᴇ ɢʀᴜᴘᴏ*`, null, {mentions: sider});
};
handler.command = /^(INACTIVOS|inactivos|sider|dead)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
