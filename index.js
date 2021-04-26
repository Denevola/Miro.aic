const { Client, Intents } = require('discord.js');
const config = require('./config.json');
const prefix = '!';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`::${client.user.tag}(으)로 로그인 완료::`);
  client.user.setActivity('SCiPNET', { type: 'WATCHING' })
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const body = msg.content.slice(prefix.length);
  const args = body.split(' ');
  const command = args.shift().toLowerCase();

  if (command === '핑') {
    msg.channel.send('퐁');
  }
  if (command === '미로' || command === '브라단' || command === '버전') {
    msg.channel.send('Miro.aic — ver1.0.0 Gen(█)\n2등급 인가 — 제██K기지');
  }
});

client.login(config.token);
