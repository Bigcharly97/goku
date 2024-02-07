import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`http://raw.githubusercontent.com/Goku2812/gk20233/master/src/REGLAS_COMPETITIVO.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*ʀᴇɢʟᴀs ᴄᴏᴍᴘᴇᴛɪᴛɪᴠᴏ ғғ*`, m)}
//conn.sendButton(m.chat, "*ʀᴇɢʟᴀs ᴄᴏᴍᴘᴇᴛɪᴛɪᴠᴏ ғғ*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['REGLAS_COMPE']
handler.tags = ['internet']
handler.command = /^(compe)$/i
export default handler
