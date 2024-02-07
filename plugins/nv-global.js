import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m, {conn}) {
  const chat = global.db.data.chats[m.chat];

  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup && !chat.isBanned && !m.fromMe) {
    const join = `*< UNE UN BOT A TU GRUPO />*\n\n*—◉ Hola @${m.sender.split('@')[0]}, si deseas solicitar un Bot para tu grupo usa el comando #join mas el enlace de tu grupo.*\n\n*—◉ Ejemplo:*\n*◉ #join* https://chat.whatsapp.com/LjJbmdO0qSDEKgB60qivZj`.trim();
    this.sendMessage(m.chat, {text: join.trim(), mentions: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": global.imagen6, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://www.atom.bio/theshadowbrokers-team`}}}, {quoted: m});
  }

  if (/^Bienvenido|bienvenidos|bienvenida|Bienvenida$/i.test(m.text) && !chat.isBanned) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/welcome.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  if (!chat.isBanned && m.text.match(/(navidad|Navidad|NAVIDAD|FELIZ NAVIDAD|feliz navidad|Feliz navidad|Feliz Navidad)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/navidad.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(viernes|Viernes)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/viernes.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  if (!chat.isBanned && m.text.match(/(bot|goku|Goku|GOKU)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Todo bien.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  if (!chat.isBanned && m.text.match(/(bañate|banate|Bañate|cochino|sucio)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Bañate.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

if (!chat.isBanned && m.text.match(/(novio|Novio|Mi amor goku)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Hola.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  if (!chat.isBanned && m.text.match(/(buenos dias|Buenos dias)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/buenosdias.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  if (!chat.isBanned && m.text.match(/(te amo|Te amo)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Teamo.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  if (!chat.isBanned && m.text.match(/(robar|robo|kill)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/mmds.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  if (!chat.isBanned && m.text.match(/(triste|Triste|toste|tiste)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/triste.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  if (!chat.isBanned && m.text.match(/(no llores|toma)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Toma.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  if (!chat.isBanned && m.text.match(/(Completos|completos)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/bapu.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  
  
  return !0;
};
export default handler;
