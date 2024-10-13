import type { QuoteProps } from './Quote'

export const quotes: QuoteProps[] = [
  {
    authorName: 'Lee "leerob" Robinson',
    authorTitle: 'Next.js comm lead, Vercel VP of DX',
    avatar: '/img/avatars/leerob.jpeg',
    link: 'https://twitter.com/leeerob/status/1576929372811849730',
    text: 'Type-safe SQL queries with PlanetScale and Kysely 😍',
  },
  {
    authorName: 'Orta Therox',
    authorTitle: 'Ex-TypeScript team',
    avatar: '/img/avatars/orta.jpeg',
    link: 'https://discord.com/channels/890118421587578920/890118421587578925/1037692748825903114',
    text: "👋 been using Kysely for a few days in Deno and Node, just wanted to say it's been going really well and it feels like a nice abstraction - kudos!",
  },
  {
    authorName: 'Ben Holmes',
    authorTitle: 'Astro SWE',
    avatar: '/img/avatars/benholmes.jpeg',
    link: 'https://twitter.com/BHolmesDev/status/1673715776946143233',
    text: "Kysely I love you, but I still can't spell your name",
  },
  {
    authorName: 'Julius Marminge',
    authorTitle: 'tRPC & create-t3-app core team',
    avatar: '/img/avatars/julius.jpeg',
    link: 'https://twitter.com/jullerino/status/1676687249998598148',
    text: 'Utterly astounded by how Kysely manages to make all of this typesafe. Seems like no matter how complex you get, it can infer it correctly.',
  },
  {
    authorName: 'Shoubhit "nexxel" Dash',
    authorTitle: 'create-t3-app creator',
    avatar: '/img/avatars/nexxel.jpeg',
    link: 'https://twitter.com/nexxeln/status/1676975946606452737',
    text: 'kysely is great btw',
  },
  {
    authorName: 'Tim Griesser',
    authorTitle: 'Knex.js creator, Cypress Staff Eng',
    avatar: '/img/avatars/tgriesser.jpeg',
    link: 'https://github.com/kysely-org/kysely/issues/352#issue-1612115150',
    text: "👋 First just wanted to say this project looks awesome! Pretty close to what I wish Knex was if I started it now, with the affordances of modern TypeScript instead of 10 years ago when we were stuck in ES5 and Promises weren't even really an official language construct yet.",
  },
  {
    authorName: 'Dax "thdxr" Raad',
    authorTitle: 'SST core team',
    avatar: '/img/avatars/daxraad.jpeg',
    link: 'https://twitter.com/thdxr/status/1623136475914043392',
    text: "Kysely is the best written TS codebase I've ever seen",
  },
  {
    authorName: 'Harminder Virk',
    authorTitle: 'AdonisJS creator',
    avatar: '/img/avatars/harminder.jpeg',
    link: 'https://twitter.com/AmanVirk1/status/1666636685583568897',
    text: 'Kysely is great. Keeping an eye on it to see how it evolves in coming months',
  },
  {
    authorName: 'Gal Schlezinger',
    authorTitle: 'fnm creator, Vercel SWE',
    avatar: '/img/avatars/gal.jpeg',
    text: 'Kysely is 🐐',
    link: 'https://twitter.com/galstar/status/1645452990147436546',
  },
  {
    authorName: 'Yusuke "yusukebe" Wada',
    authorTitle: 'Hono creator, Cloudflare DevRel',
    avatar: '/img/avatars/yusuke.jpeg',
    text: 'Kysely is great. D1 will be great. This is great.',
    link: 'https://twitter.com/yusukebe/status/1581775103167066112',
  },
  {
    authorName: '"pilcrow"',
    authorTitle: 'Lucia creator',
    avatar: '/img/avatars/pilcrowonpaper.jpeg',
    text: "Ok, so I'm not a big fan of Drizzle. I don't like how I have to import everything when declaring schemas and queries, and I just prefer the simplicity and the overall API of Kysely.",
    link: 'https://twitter.com/pilcrowonpaper/status/1675135710981165057',
  },
  {
    authorName: 'Theo "t3dotgg" Browne',
    authorTitle: 'Uploadthing creator, Ping.gg CEO',
    avatar: '/img/avatars/theo.jpeg',
    link: 'https://twitter.com/t3dotgg/status/1632949634728599552',
    text: "Planetscale's DatabaseJS combined with Kysely or DrizzleORM is pretty dope to stay on edge",
  },
  {
    authorName: 'Nicholas Griffin',
    authorTitle: 'sqs-consumer maintainer, BBC SWE',
    avatar: '/img/avatars/nicholas.jpeg',
    text: "I don't actually like prisma that much, I prefer Kysely, not an ORM though.",
    link: 'https://twitter.com/ngriffin_uk/status/1599891725404676096',
  },
  {
    authorName: 'R. Alex Anderson',
    authorTitle: 'Thorium Nova creator',
    avatar: '/img/avatars/alexanderson.jpeg',
    link: 'https://twitter.com/ralex1993/status/1677632989260390403',
    text: 'Shout out to Kysely for adding extensive JSDoc comments above the methods. It makes it much easier to figure out how to use it the way I want without having to dig into the docs. (though the docs are vv good too)',
  },
  {
    authorName: 'Ross Coundon',
    authorTitle: 'leadent digital CTO',
    avatar: '/img/avatars/ross.jpeg',
    text: "I particularly like Kysely here, it's a type-safe query builder and as such doesn't enforce the specifics of an ORM on you, therefore I feel, in the medium-to-long term, it'll save you the time and effort of working around ORM-specific and enforced structures/approaches",
    link: 'https://twitter.com/rcoundon/status/1676244054109978624',
  },
  {
    authorName: 'Alberto "gimenete" Gimeno',
    authorTitle: 'Railway SWE',
    avatar: '/img/avatars/alberto.jpeg',
    link: 'https://twitter.com/gimenete/status/1653121152854765569',
    text: "I'm a happy Kysely user. It's great to see that the code I'm writing now can work with serverless PostgreSQL now!",
  },
  {
    authorName: 'Johan Eliasson',
    authorTitle: 'OneLab CTO',
    avatar: '/img/avatars/johan.jpeg',
    link: 'https://twitter.com/elitasson/status/1642090379066449920',
    text: "Instead of Prisma, I'm testing Kysely, Kysely Codegen, and Atlas. Works great.",
  },
  {
    authorName: 'Mehul Mohan',
    authorTitle: 'Codedamn Founder',
    avatar: '/img/avatars/mehul.jpeg',
    text: 'We went with query builder because we did not have more time to waste on ORMs. ORMs might be great but we have the technical capability to pull off just using a query builder. However, we type safety and sanitization for DX and security was a must - hence Kysely.',
    link: 'https://twitter.com/mehulmpt/status/1650480912759685120',
  },
  {
    authorName: 'Sam Cook',
    authorTitle: 'Gamma.io SWE',
    avatar: '/img/avatars/samcook.jpeg',
    link: 'https://twitter.com/sjc5_/status/1623210443874639873',
    text: 'Kysely is amazing.',
  },
  {
    authorName: 'Gannon Hall',
    authorTitle: 'Astro Labs Founder',
    avatar: '/img/avatars/gannon.jpeg',
    link: 'https://twitter.com/gannonh/status/1653109305368018944',
    text: 'Vercel just announced native Postgres support and published Prisma and Kysely templates. I like the DX of Prisma and the type safety of Kysely so I use both via prisma-kysely.',
  },
  {
    authorName: 'Alisson "thelinuxlich" C.Agiani',
    authorTitle: 'Opensourcerer',
    avatar: '/img/avatars/sommelier.jpeg',
    link: 'https://twitter.com/solinvictvs/status/1615549659115655169',
    text: 'Kysely is superior and with each release gets even more awesome',
  },
]