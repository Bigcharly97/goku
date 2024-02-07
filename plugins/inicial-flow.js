let handler = async (m, { command, text }) => m.reply(`
ㅤғʟᴏᴡ
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['iniciales <texto>?']
handler.tags = ['kerang']
handler.command = /^f|flow$/i
export default handler
