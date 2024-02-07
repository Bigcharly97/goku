let handler = async (m, { command, text }) => m.reply(`
ㅤ
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['iniciales <texto>?']
handler.tags = ['kerang']
handler.command = /^espacio|EJM$/i
export default handler
