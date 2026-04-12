export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  note?: string;
}

export interface MenuCategory {
  title: string;
  price?: string;
  note?: string;
  items: MenuItem[];
}

export const forratter: MenuCategory = {
  title: 'FÖRRÄTTER',
  items: [
    { name: 'VILLANS BRÖD OCH RÖROR', description: 'Villans hembakade bröd. Serveras med skagenröra, laxröra, tzatziki och mojo-rojo.', price: '179 KR', note: 'REK. FÖR 2 PERS' },
    { name: 'CHARKBRICKA', description: 'Kockens val av utvalda ostar och charkuterier. Serveras med kex och marmelad.', price: '249 KR', note: 'REK. FÖR 2 PERS' },
    { name: 'CALAMARI FRITTI', description: 'Friterade bläckfiskringar med aioli', price: '125 KR' },
    { name: 'TARTAR', description: 'Nötinnanlår med senap, kapris, rödbeta, rödlök och äggula.', price: '149 KR' },
    { name: 'SCAMPI', description: 'Fräst scampi med vitlök, chili, tomat, vitt vin & hembakat bröd.', price: '139 KR' },
    { name: 'NYRÖKTA RÄKOR', description: 'Serveras med hembakat bröd och aioli.', price: '139 KR' },
    { name: 'GRATINERAT VITLÖKSBRÖD', description: 'Toppad med ost och serveras med tzatziki-dipp.', price: '75 KR' },
    { name: 'MARINERADE OLIVER', description: 'Serveras med hembakat bröd.', price: '65 KR' },
  ],
};

export const huvudratter: MenuCategory = {
  title: 'VILLANS HUVUDRÄTTER',
  items: [
    { name: 'LAMMFILÉ', description: 'Med broccolini, rödvinssås, mojo-rojo, vitlökssmör, & haricot vertes. Serveras med körsbärstomater, gratäng & husets sallad.', price: '349 KR' },
    { name: 'UGNSBAKAD LAXFILÉ', description: 'Med morotspuré, rotfrukter, vitvinsås, teriyakisås, & sesamfrön. Serveras med körsbärstomater, klyfta potatis, husets sallad samt citronklyfta.', price: '296 KR' },
    { name: 'MOULE FRITES', description: 'Musslor kokta i vitt vin, vitlök, schalottenlök, grädde & chili. Serveras med bröd, aioli, pommes & citronklyfta.', price: '249 KR' },
    { name: 'ROSTAD BLOMKÅL', description: 'Serveras med ärtpuré med smak av vitlök, parmesansås, solroskärnor, körsbärstomater, pommes & husets sallad.', price: '229 KR', note: 'VEGETARISK/VEGAN' },
    { name: 'FISKGRYTA MED SAFFRAN', description: 'Med rotsaker, creme fraiche, vitt vin och fänkål. Toppad med handskalade räkor. Serveras med hembakat bröd, aioli & citronklyfta.', price: '249 KR' },
    { name: 'VILLANS SURF AND TURF', description: 'Oxfilé & vitlöksmarinerad scampi, rödvinssås & pepparsås. Serveras med haricots vertes, körsbärstomater, gratäng & husets sallad.', price: '349 KR' },
    { name: 'KYCKLING PICCATA', description: 'Parmesan- och pankopanerad kycklingfilé med Villans långkokta tomatsås, gratineras med mozzarella. Serveras med körsbärstomater, pommes & husets sallad.', price: '249 KR' },
    { name: 'SKALDJURSBRICKA', description: 'Rökta räkor, Räkor, Kräftor & Havskräftor. Serveras vitlöksbröd, aioli & citronklyfta.', price: '379 KR', note: 'REK. FÖR 2 PERS' },
    { name: 'FLÄSKFILÉ À LA VILLA', description: 'Med rotfrukter, rödvinssås, pepparsås, grillad ananasklyfta. Serveras med körsbärstomater, pommes & husets sallad.', price: '259 KR' },
  ],
};

export const pizzor: MenuCategory = {
  title: 'PIZZOR',
  note: 'Samtliga pizzor serveras med tomatsås och mozzarella',
  items: [
    { name: 'MARGARITA', description: 'Mozzarella.', price: '145 KR' },
    { name: 'MONTE VESUVIO', description: 'Skinka & mozzarella.', price: '169 KR' },
    { name: 'HAWAII', description: 'Skinka, ananas & mozzarella.', price: '169 KR' },
    { name: 'LA BUSSOLA', description: 'Skinka, handskalade räkor & mozzarella.', price: '179 KR' },
    { name: 'PARMA', description: 'Parmaskinka, körsbärstomat, parmesan, mozzarella & ruccola.', price: '179 KR' },
    { name: 'QUATRO FORMAGGI', description: 'Fyra ostar, honung, rosmarin, svartpeppar.', price: '189 KR' },
    { name: 'DA CESARINO', description: 'Kyckling, bacon, körsbärstomat, isbergssallad, parmesan, caesardressing & mozzarella.', price: '189 KR' },
    { name: 'DI MANZO', description: 'Oxfilé, champinjoner, lök, jalapeños, vitlök, bearnaise, mozzarella & ruccola.', price: '199 KR' },
    { name: 'CHEVRE', description: 'Chevreost, soltorkade tomater, paprika, honung, pinjenötter, mozzarella & ruccola.', price: '199 KR' },
    { name: 'FRUTTI DI MARE', description: 'Scampi, blåmusslor, calamari, ruccola & citron.', price: '189 KR' },
  ],
};

export const burgare: MenuCategory = {
  title: 'BURGARE',
  note: 'Serveras med pommes frites, coleslaw och saltgurka',
  items: [
    { name: 'VILLANS HÖGREVSBURGARE', description: 'Burgare med cheddarost, bacon, tryffelmajo, romansallad, färsk tomat och rödlök.', price: '189 KR' },
    { name: 'CHEVREBURGARE', description: 'Dubbelpanerad och friterad getost på brioche med honung- och dijondressing, tomat och rödlök.', price: '189 KR', note: 'VEGETARISK' },
    { name: 'VEGOBURGARE', description: 'Grönsaksburgare på veganskt bröd med vegansk ost, vegomajo, rödlök, romansallad och tomat.', price: '169 KR', note: 'VEGANSK' },
  ],
};

export const pasta: MenuCategory = {
  title: 'PASTA',
  note: 'Samtliga pastarätter serveras med ost- & vitlöksbröd',
  items: [
    { name: 'FRUTTI DI MARE', description: 'Linguine med musslor, scampi, vongole musslor, vitt vin, tomat, vitlök och chili. Toppas med riven parmesan, svartpeppar & ruccola.', price: '239 KR' },
    { name: 'FILETO MANZO', description: 'Krämig oxfilépasta med rigattoni, champinjoner, lök, paprika och vitlök. Toppas med riven parmesan & ruccola.', price: '239 KR' },
    { name: 'ALFREDO', description: 'Rigattoni i en krämig alfredosås med kyckling, lök och paprika. Toppas med riven parmesan & ruccola.', price: '199 KR' },
    { name: 'PESTO PASTA', description: 'Linguine, kronärtskocka, paprika, vitlök & lök. Toppas med riven parmesan & ruccola.', price: '199 KR', note: 'VEGETARISK' },
  ],
};

export const sallader: MenuCategory = {
  title: 'SALLAD',
  price: '199 KR',
  note: 'Samtliga sallader serveras med ost- & vitlöksbröd',
  items: [
    { name: 'CAESARSALLAD', description: 'Romansallad, bacon, rödlök, krutonger, caesardressing och tomat. Toppas med riven parmesan citrondressing.', price: '199 KR', note: 'KYCKLING ELLER RÄKOR' },
    { name: 'CHEVRESALLAD', description: 'Romansallad, Chevreost, picklad rödbeta, tomat, rödlök och valnötter. Serveras med hembakat bröd samt honung- och dijondressing.', price: '199 KR' },
    { name: 'KALLRÖKT LAXSALLAD', description: 'Romansallad, salladslök, kallrökt lax, tomat, rödlök, kokt ägg och citronklyfta. Serveras med dill- och citrondressing.', price: '199 KR' },
  ],
};

export const forBarnen: MenuCategory = {
  title: 'FÖR BARNEN',
  note: 'Samtliga barnrätter gäller endast för barn upp till 12år',
  items: [
    { name: 'HAMBURGARE (90G)', description: 'Med cheddar, pommes & ketchup.', price: '119 KR' },
    { name: 'PANNKAKOR', price: '89 KR' },
    { name: 'MED SYLT OCH GRÄDDE', price: '' },
    { name: 'BARNPIZZA', description: '(Margarita eller Vesuvio).', price: '119 KR' },
  ],
};

export const efterratter: MenuCategory = {
  title: 'EFTERRÄTTER',
  items: [
    { name: 'LIMONCELLO', description: 'Glassbakelse med limoncello, hallonpuré och bär', price: '115 KR' },
    { name: 'CHOKLADFONDANT', description: 'Med vispad grädde, karamell, bär och flingsalt', price: '115 KR' },
    { name: 'KLASSISK CRÈME BRÛLÉE', description: 'Serveras med bär', price: '115 KR' },
    { name: 'TVÅ KULOR GLASS', description: 'Vanilj, hallonsorbet & bär', price: '79 KR' },
  ],
};

export const sides: MenuCategory = {
  title: 'SIDES',
  items: [
    { name: 'SÅS/DIPP', description: 'Rödvinsås, Bearnaisesås, Aioli, Mojo-Rojo, Tyffelmajo, Pepparsås', price: '35 KR' },
    { name: 'ÖVRIGT', description: 'Extra Gratäng 45KR | Extra Pommes Frites 45 KR\nExtra Bröd\nHusets sallad 45KR', price: '' },
  ],
};

export const cocktails: MenuCategory = {
  title: 'COCKTAILS',
  price: '155 KR',
  items: [
    { name: 'STRAWBERRY LEMONADE', description: 'Pink gin, limoncello, citron, jordgubbspuré, soda.' },
    { name: 'PASSION SUNRISE', description: 'Passoa, tequila, lime, hallonpuré, äggvita, passionsfruktsjuice.' },
    { name: 'COCONUT PUNCH', description: 'Malibu, limejuice, sockerlag, ananas- & mangojuice, kokosgrädde.' },
    { name: 'MEXICAN APPLE', description: 'Tequila, sourz apple, limejuice, sprite/7-Up.' },
    { name: 'BLUSHING LYCHEE', description: 'Pink Gin, lychee likör, citronjuice, sockerlag, hallonpuré, sodavatten.' },
    { name: 'SMASHED LIME', description: 'Mörk rom, lime, rörsocker, ginger beer.' },
  ],
};

export const spritz: MenuCategory = {
  title: 'SPRITZ',
  price: '155 KR',
  items: [
    { name: 'CAMPARI SPRITZ', description: 'Campari, cava, sodavatten, apelsin.' },
    { name: 'SARTI SPRITZ', description: 'Sarti rosa, cava, sodavatten, lime.' },
    { name: 'LIMONCELLO SPRITZ', description: 'Limoncello, cava, sodavatten, citron.' },
    { name: 'APEROL SPRITZ', description: 'Aperol, cava, sodavatten, apelsin.' },
  ],
};

export const ginTonics: MenuCategory = {
  title: 'GIN TONICS',
  price: '155 KR',
  items: [
    { name: 'KLASSIKER', description: 'Frank\'s premium dry gin, tonic, citronskiva.' },
    { name: 'ORANGE PASSION', description: 'Passionfruit & orange gin, tonic, apelsinskiva.' },
    { name: 'STRAWBERRY LIME', description: 'Strawberry & lime gin, tonic, jordgubbar.' },
    { name: 'ELDERFLOWER', description: 'Frank\'s premium dry gin, flädertonic, limeskiva.' },
  ],
};

export const sangria: MenuCategory = {
  title: 'SANGRIA',
  price: '399 KR',
  items: [
    { name: 'RÖD SANGRIA', description: 'Rött vin, cognac, sprite/7-Up, apelsinskivor, citronskivor, skivade röda äpplen, kanelstång.' },
    { name: 'VIT SANGRIA', description: 'Vitt vin, fläderlikör, sprite/7-Up, apelsinskivor, limeskivor, honungsmelon, mynta.' },
    { name: 'MOUSSERANDE SANGRIA', description: 'Cava, peachtree, sprite/7-Up, apelsinskivor, persikoskivor, jordgubbar, mynta.' },
  ],
};

export const kaffedrinkar: MenuCategory = {
  title: 'KAFFEDRINKAR',
  price: '155 KR',
  items: [
    { name: 'ESPRESSO MARTINI', description: 'Vaniljvodka, Kahlua, espresso, sockerlag (kall).' },
    { name: 'KAFFE CALYPSO', description: 'Rom, Kahlua, kaffe, grädde.' },
    { name: 'KAFFE KARLSSON', description: 'Baileys, Cointreau, kaffe, grädde.' },
    { name: 'SALT KARAMELL MARTINI', description: 'Baileys, Kahlua, espresso, flingsalt, karamell (kall).' },
    { name: 'IRISH COFFEE', description: 'Tullamore Dew, farinsocker, kaffe, grädde.' },
  ],
};

export const fatol: MenuCategory = {
  title: 'FATÖL',
  items: [
    { name: 'HUSETS LAGER', price: '79 KR' },
    { name: 'HÖGA KUSTEN', price: '85 KR' },
    { name: 'HOLECEK (TJECKISK)', price: '89 KR' },
    { name: 'RICKYS IPA', price: '92 KR' },
    { name: 'GUINNESS PINT', price: '110 KR' },
  ],
};

export const flaskol: MenuCategory = {
  title: 'FLASKÖL',
  items: [
    { name: 'HÖGA KUSTEN (50CL)', price: '98 KR' },
    { name: 'BISHOPS FINGER ALE (50CL)', price: '98 KR' },
    { name: 'MYTHOS LAGER (50CL)', price: '98 KR' },
    { name: 'BROOKLYN EIPA (33CL)', price: '85 KR' },
    { name: 'MARIESTAD (50CL)', price: '110 KR' },
    { name: 'FRIPA (GLUTENFRI) (33CL)', price: '79 KR' },
    { name: 'CORONA (33CL)', price: '79 KR' },
    { name: 'TT MELLANÖL (33CL)', price: '69 KR' },
  ],
};

export const cider: MenuCategory = {
  title: 'CIDER',
  items: [
    { name: 'PÄRON (33cl)', price: '79 KR' },
    { name: 'STRAWBERRY LIME (Fat - 40cl)', price: '85 KR' },
    { name: 'NAKED APPLE (33cl)', price: '79 KR' },
  ],
};

export const alkoholfritt: MenuCategory = {
  title: 'ALKOHOLFRIA DRYCKER',
  items: [
    { name: 'LÄSK 33cl', price: '35 KR' },
    { name: 'ALKOHOLFRI ÖL/CIDER', price: '59 KR' },
    { name: 'ALKOHOLFRI VIN/MOUSSERANDE', price: '72 KR' },
    { name: 'KOLSYRAT VATTEN', price: '35 KR' },
    { name: 'RED BULL', price: '40 KR' },
    { name: 'KAFFE / TE', price: '35 KR' },
    { name: 'MOCKTAIL', price: '85 KR' },
    { name: 'ESPRESSO', price: '35 KR' },
  ],
};

export const whiskey: MenuCategory = {
  title: 'WHISKEY',
  items: [
    { name: 'TULLAMORE DEW', price: '30 KR/CL' },
    { name: 'FAMOUS GROUSE', price: '30 KR/CL' },
    { name: 'MAKERS MARK', price: '32 KR/CL' },
    { name: 'LAPHROAIG', price: '34 KR/CL' },
    { name: 'OBAN 14Y', price: '44 KR/CL' },
  ],
};

export const rom: MenuCategory = {
  title: 'ROM',
  items: [
    { name: 'PLANTATION', price: '30 KR/CL' },
    { name: 'DIPLOMATICO', price: '42 KR/CL' },
    { name: 'PLANTATION PINEAPPLE', price: '33 KR/CL' },
    { name: 'ZACAPA', price: '44 KR/CL' },
  ],
};

export const cognac: MenuCategory = {
  title: 'COGNAC',
  items: [
    { name: 'MARTELL VS', price: '32 KR/CL' },
    { name: 'RÉMY MARTIN VSOP', price: '39 KR/CL' },
    { name: 'MARTELL XO', price: '69 KR/CL' },
    { name: 'CALVADOS BOULARD GRAND SOLAGE', price: '30 KR/CL' },
  ],
};

export const likorer: MenuCategory = {
  title: 'LIKORER',
  items: [
    { name: 'DRAMBUIE, BAILEYS, LIMONCELLO, AMARETTO, COINTREAU M.FL.', price: '32 KR/CL' },
    { name: 'AFTER 8', description: 'Minttu, Creme de Cacao, kaffe.', price: '155 KR' },
  ],
};

export const rodaViner: MenuCategory = {
  title: 'RÖDA VINER',
  items: [
    { name: 'E\'GOT', description: 'Merlot, Sangiovese', price: 'GL.99KR / FL.389KR' },
    { name: 'ZUCCARDI SERIE A MALBEC (ARG)', description: 'Doft: Intensiva toner av mogna röda frukter som plommon och körsbär, med inslag av svartpeppar och choklad.', price: 'GL.135KR / FL.540KR' },
    { name: 'MCGUIGAN ESTATE SHIRAZ (AUS)', description: 'Doft och Smak: Intensiva toner av mörka bär såsom björnbär och plommon, kombinerat med svarta vinbär.', price: 'GL.115KR / FL.425KR' },
    { name: 'CABBIANCA NEBBIOLO (ITA)', description: 'Doft: Svartpeppar, svartvinbär. Smak: Lättare sällskapsvin.', price: 'FL.580KR' },
    { name: 'CAVALIERI REALI RIPASSO SUPERIORE (ITA)', description: 'Doft: Intensiv och fruktig med tydliga inslag av vilda bär, kryddor och en lätt ton av ekfat.', price: 'FL.495KR' },
    { name: 'LES COTILLES PINOT NOIR (FRA)', description: 'Doft: Körsbär, fat. Smak: Fräscht och fylligt.', price: 'FL.620KR' },
    { name: 'BLACK STALLION CABERNET SAUVIGNON (USA)', description: 'Doft: Fruktig och bärig. Smak: Sötare profil, honung, mogna bär.', price: 'FL.695KR' },
    { name: 'CÔTES-DU-RHÔNE (FRA)', description: 'Doft: Fat och mörka bär. Smak: Kryddig med lätt rökighet.', price: 'FL.585KR' },
  ],
};

export const vitaViner: MenuCategory = {
  title: 'VITA VINER',
  items: [
    { name: 'E\'GOT (ITA)', description: 'Trebianno, chardonay', price: 'GL.99KR / FL.389KR' },
    { name: 'GUSTAVE LORENTZ PINOT BLANC (FRA)', description: 'Doft: Blommighet. Smak: Friskt, lätt sötma, melon, päron.', price: 'GL.125KR / FL.500KR' },
    { name: 'MCGUIGAN ESTATE CHARDONAY (AUS)', description: 'Doft och Smak: Friskt och fylligt med tydliga aromer av persika, nektarin och honungsmelon.', price: 'GL.115KR / FL.425KR' },
    { name: 'GUSTAVE LORENTZ RIESLING (FRA)', description: 'Doft: Krispigt grönt äpple. Smak: Frisk syra.', price: 'GL.135KR / FL.540KR' },
    { name: 'SANCERRE SAUVIGNON BLANC (FRA)', description: 'Doft: Frisk melon. Smak: Elegant, lättare sötma.', price: 'FL.660KR' },
    { name: 'LOUIS ROBIN CHABLIS (FRA)', description: 'Doft: Päron och äpple. Smak: Halvtorrt, gröna äpplen.', price: 'FL.620KR' },
  ],
};

export const rose: MenuCategory = {
  title: 'ROSÉ',
  items: [
    { name: 'E\'GOT (ITA)', description: 'Sangiovese', price: 'GL.99KR / FL.389KR' },
    { name: 'MINUIT ROSÉ (FRA)', description: 'Doft: Blommig, päron, fläder. Smak: Elegant och torr.', price: 'FL.549KR' },
  ],
};

export const mousserande: MenuCategory = {
  title: 'MOUSSERANDE',
  items: [
    { name: 'CASTELLBLANC CAVA BRUT (SPA)', description: 'Macabeo', price: 'GL.115KR / FL.485KR' },
    { name: 'MANDOIS BRUT ORIGINE (FRA)', description: 'Doft: Inbjudande toner av gula äpplen, citrus, brioche och en lätt blommighet.', price: 'FL.1125KR' },
  ],
};

export const foodCategories = [
  forratter,
  huvudratter,
  pizzor,
  burgare,
  pasta,
  sallader,
  forBarnen,
  efterratter,
  sides,
];

export const drinkCategories = [
  cocktails,
  spritz,
  ginTonics,
  sangria,
  kaffedrinkar,
];

export const beerCategories = [
  fatol,
  flaskol,
  cider,
  alkoholfritt,
];

export const spiritsCategories = [
  whiskey,
  rom,
  cognac,
  likorer,
];

export const wineCategories = [
  rodaViner,
  vitaViner,
  rose,
  mousserande,
];
