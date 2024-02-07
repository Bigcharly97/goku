let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*┌━━━「 ℙ𝔸ℝ𝔼𝕁𝔸 𝕀𝔻𝔼𝔸𝕃 」━━━*\n*┃“${toM(a)},   Ya es tiempo de que dejes a esa fe@ y te vengas conmigo mailob *\n*┃ᴄᴏɴ ${toM(b)}, haríamos una buena pareja *♥️\n*└━━━━━━「 𝒢ℴ𝓀𝓊 𝒷ℴ𝓉 」━━━━━*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['fp','formarparejas','fp']
handler.group = true
handler.admin = true
export default handler
