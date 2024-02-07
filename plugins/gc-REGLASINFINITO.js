import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`http://raw.githubusercontent.com/Goku2812/gk20233/master/src/REGLAS_INFINITO.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*ʀᴇɢʟᴀs ɪɴғɪɴɪᴛᴏ ғғ*`, m)}
//conn.sendButton(m.chat, "*ʀᴇɢʟᴀs ɪɴғɪɴɪᴛᴏ ғғ*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['REGLAS_INFINITO']
handler.tags = ['internet']
handler.command = /^(infinito)$/i
export default handler
