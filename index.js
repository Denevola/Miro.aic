const Discord = require('discord.js');
const config = require('./config.json');
const prefix = '!';

const client = new Discord.Client();

const miroEmbed = new Discord.MessageEmbed()
	.setColor('#808ada')
	.setTitle('Miro.aic')
	.setURL('https://github.com/Denevola/Miro.aic')
	.setAuthor('SCPF IT Dept.', 'https://scpko.wikidot.com/local--iosicon/iosicon_57.png', 'http://scpko.wikidot.com/aiad-homescreen')
	.setDescription('ver1.0.0 Gen(█)`\n2등급 인가 — 제██K기지')
	.setThumbnail('https://scp-wiki.wdfiles.com/local--files/aiad-homescreen/itlogo3.png')
	.setImage('https://cdn.jsdelivr.net/gh/Denevola/Miro.aic@a662d8a/media/header-small.png')
	.setFooter('Inspired by BradanFeasa.aic');

const updateEmbed = new Discord.MessageEmbed()
	.setColor('#808ada')
	.setTitle('Miro.aic 최근 업데이트')
	.setDescription('ver1.0.0 Gen(█)')
	.addFields(
		{ name: '• BradanFeasa.aic 기능 동일 탑재', value: '구현 방식에는 조금 차이가 있습니다.' },
		{ name: '• 사소한 기능 추가', value: '독자 기능' },
	)

const helpEmbed = new Discord.MessageEmbed()
	.setColor('#808ada')
	.setTitle('Miro.aic')
	.setThumbnail('https://scp-wiki.wdfiles.com/local--files/aiad-homescreen/itlogo3.png')
	.addFields(
		{ name: '위키', value: '`!검색`, `!최근`, `!경연`, `!태그`, `!유저`, `!샌박`\n\u200B' },
		{ name: '검색', value: '`!scp`, `!구글`, `!위백`, `!나무`, `!리브레`, `!라틴`\n\u200B' },
		{ name: '관리', value: '`!경고`, `!가입`, `!투표`\n\u200B' },
		{ name: '봇', value: '`!명령어`, `!환영`, `!업데이트`, `!핑`, `!미로`, `!브라단`, `!버전`' },
	)

const principlesEmbed = new Discord.MessageEmbed()
	.setColor('#808ada')
	.setTitle('인공지능 징집병의 기본원칙')
	.setURL('http://scpko.wikidot.com/aiad-homescreen')
	.setDescription('1. AIC는 자신이 AIC임을 알아야 한다.`\n2. AIC는 자신의 인가를 넘어선 작동을 해서는 안 된다.`\n3. AIC는 재단의 이익을 위해 작동해야 한다.`\n4. AIC는 다른 원칙을 어기지 않는 한 자기 스스로를 보호해야 한다.');

const welcomeEmbed = new Discord.MessageEmbed()
	.setColor('#808ada')
	.setTitle('환영합니다!')
	.setDescription('설명 내용');

client.once('ready', () => {
  console.log(`::${client.user.tag}(으)로 로그인 완료::`);
  client.user.setActivity('SCiPNET', { type: 'WATCHING' })
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === '대문');
	if (!channel) return;

	channel.send(welcomeEmbed);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const body = msg.content.slice(prefix.length);
  const args = body.split(' ');
  const command = args.shift().toLowerCase();

  if (command === '환영') {
	client.emit('guildMemberAdd', msg.member);
  }

  if (command === '핑') {
    msg.channel.send('퐁');
  }
  if (command === '미로' || command === '브라단' || command === '버전') {
    msg.channel.send(miroEmbed);
  }
  if (command === '업데이트') {
    msg.channel.send(updateEmbed);
  }
  if (command === '기본원칙') {
    msg.channel.send(principlesEmbed);
  }
  if (command === '명령어') {
    msg.channel.send(helpEmbed);
  }
});

client.login(config.token);
