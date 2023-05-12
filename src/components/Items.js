import Home from '../pages/Home';
import Characters from '../pages/Characters';
import Story from '../pages/Story';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import HogwartsLegacy from '../assets/hlwallpaper.jpg';
import WarnerBros from '../assets/wb.jpg'
import Shop from '../assets/shop.jpg'
import Train from '../assets/train.jpg'
import HarryPotter from '../assets/characters/Harry_Potter.jpg'
import RonaldWeasley from '../assets/characters/Ronald_Weasley.webp'
import HermioneGranger from '../assets/characters/Hermione_Granger.webp'
import AlbusDumbledore from '../assets/characters/Dumbledore.png'
import Voldemort from '../assets/characters/Voldemort.jpg'
import RubeusHagrid from '../assets/characters/Hagrid.png'



export const pages = [
    { name: 'Kezdőlap', path: '/', menubar: true, element: <Home /> },
    { name: 'Szereplők', path: '/characters', menubar: true, element: <Characters />, },
    { name: 'Történet', path: '/story', menubar: true, element: <Story />, },
    { name: 'Kapcsolat', path: '/contact', menubar: true, element: <Contact />, },
    { name: 'NotFound', path: '*', menubar: false, element: <NotFound />, }
];

export const SocialMedia = [
    { name: "Facebook", href: "https://facebook.com", icon: 'facebook' },
    { name: "Instagram", href: "https://instagram.com", icon: 'instagram' },
    { name: "Twitter", href: "https://twitter.com", icon: 'twitter' },
];

export const Slides = [
    {
        image: HogwartsLegacy,
        title: "Hogwarts Legacy",
        text: "Lépj be a Roxfort Varázslóiskola ajtaján, és feltárul előtted a legendás Harry Potter univerzum a WB Games új, nyílt világú kalandjátékában! A Hogwarts Legacy az 1800-as években játszódik, jóval a regények eseményei előtt, ahol egy vadonatúj történet részese lehetsz, mint a varázslóiskola egyik tanulója. Éld át az iskolai élet mindennapjait, sajátítsd el a mágia fortélyait, és deríts fel egy sötét titkot, amely egy nagyon veszélyes küldetéshez vezet. Minden feladat során új képességeket szerezhetsz, de döntéseket is kell hoznod, amelyek befolyásolják, kinek az oldalán állsz.",
        link: "https://www.hogwartslegacy.com/en-us/purchase",
        button: "Rendeld meg most!"
    },
    {
        image: WarnerBros,
        title: "Warner Bros. Studio",
        text: "Élje át a varázslatot - nézze meg, hol kelt életre a Harry Potter mozifilmsorozat ezen a Harry Potter-múzeumba és a Warner Bros. stúdióba vezető túrán! Feltárul a Titkok Kamrája: mindent megtudhat arról, hogy mi zajlott a színfalak mögött, és hogyan készült ez a nyolc varázslatos film - kellékek, jelmezek, díszletek, effektek - minden, amire csak kíváncsi lehet. Kötelező élmény a Harry Potter-rajongók minden korosztálya számára! A helyszíni jegyek általában hamar elfogynak - foglalja le jegyét még ma!",
        link: "https://www.wbstudiotour.co.uk/",
        button: "Jegyfoglalás!"
    },
    {
        image: Shop,
        title: "Harry Potter Shop",
        text: "Nézz körül a Harry Potter hivatalos webshopján, ahol rengeteg exkluzív termékek várnak rád! Tartozz bármelyik házba, itt mindent megtalálsz! Rengeteg pálca várja, hogy a megfelelő varázslóra ill. boszorkányra találhasson! ",
        link: "https://harrypottershop.co.uk/",
        button: "Ugrás a webshopra!"
    },
    {
        image: Train,
        title: "Roxfort Expressz",
        text: "Utazz el skóciába és élvezd a Jacobite gőzvonatot, azaz a Roxfort Expresszt, melyre akár már te is jegyet válthatsz! Az út Skóciából, Fort Williamből (Skócia nyugati partja) indul és egészen Mallaig közlekedik 42 kilóméteren át, útba ejtve számos Harry Potter rajongók által már jól ismert helyet.",
        link: "https://localhost:3000/train",
         button: "Ugrás a Roxfort Expressz!"
    },

]

export const Actors = [

    {
        image: HarryPotter,
        name: "Harry Potter",
        actor: "Daniel Radcliff",
        text: "A sorozat cím-, egyszersmind főszereplője. Félvér varázsló, mert bár apja, James ősi varázslócsalád sarja, anyja, Lily mugli családban született. Egyéves korában elveszti szüleit, ettől kezdve anyai nagynénje és annak szélsőségesen mágiaellenes családja neveli. Tizenegy éves korában megtudja, hogy varázsló. A Roxfortba kerül, azon belül pedig a Griffendél házba – ahová általában a bátor szívűek. Fokozatosan ismerkedik meg a varázsvilággal, újra meg újra szembekerül szülei gyilkosával, Voldemorttal, aki csecsemőkorában őt is meg akarta ölni. Végig tehertétel számára közismertsége: sokáig „a kis túlélő”-nek nevezik, idővel pedig mint „a Kiválasztott”-at emlegetik, mert tőle várják, hogy a varázsvilágot egyszer s mindenkorra megszabadítsa Voldemort rémuralmától. Pedig voltaképpen meglehetősen átlagos fiú: sovány, szemüveges, a tanulással hadilábon áll. Azonban vitathatatlanul hű barát, képes különbséget tenni jó és rossz között és – minden szenvedése dacára – képes szeretni. Ez utóbbi tulajdonsága a legerősebb fegyvere a Voldemort elleni küzdelemben."
    },
    {
        image: RonaldWeasley,
        name: "Ronald Weasley",
        actor: "Rupert Grint",
        text: "Harry legjobb barátja, az aranyvérű, ámde szegény Weasley család hatodik gyermeke. Apja minisztériumi hivatalnok, anyja háztartásbeli. Vörös hajú (mint családjában mindenki), langaléta, szeplős fiú. Nem túl jó tanuló. Egész élete bátyjai árnyékában telik, akik között akad iskolaelső, legendás hírű kviddicsjátékos, diákprefektus – és nem mellesleg Fred és George, a hóhányó (ám osztatlan népszerűségnek örvendő) ikerpár. Ron elsődleges életcélja, hogy kitörjön a középszerűségből, és végre önmagáért ismerjék és szeressék. E célját nem könnyíti meg, hogy állandóan a híres Harry Potter társaságában mutatkozik, s a rivalizálás időnként beárnyékolja barátságukat.",
    },
    {
        image: HermioneGranger,
        name: "Hermione Granger",
        actor: "Emma Watson",
        text: "Harry másik legjobb barátja. Mugli származású: mindkét szülője fogorvos. Hosszú, göndör haja van, a kelleténél valamivel nagyobb fogai, és kicsit görnyedt válla – leginkább a könyvekkel állandóan kitömött táskája miatt. Hermione ugyanis minden könyvet elolvas, ami a keze ügyébe kerül. Kitűnő tanuló, a vizsgáin többnyire százhúsz százalékos eredményt produkál. Okoskodása, tudálékossága és kényszeres szabálykövetése miatt sokan nem kedvelik – kezdetben Harry és Ron is viszolyognak tőle. Azonban hármuk barátsága jó hatással van rá, s bár a törvényt továbbra is tiszteli, rigorozitása lényegesen alábbhagy. Okossága, szorgalmas könyvtárbújása sokszor kisegíti hármójukat a bajból.",
    },
    {
        image: AlbusDumbledore,
        name: "Albus Dumbledore",
        actor: "",
        text: "A történet nagy részében a Roxfort igazgatója. Megjelenését tekintve olyan, mint „a varázsló”: több mint százéves, hosszú, ősz haja és szakálla van, csillagokkal díszített talárt, félhold alakú szemüveget és varázslósüveget hord. Kivételesen nagy tudású, emellett nagy bölcsességű, derűs ember. Többször kérték, hogy vállalja el a mágiaügyi miniszterséget, de ő egyrészt elkötelezte magát a tanítás mellett, másrészt félt a hatalomtól. Harry legfőbb segítője, pártfogója – voltaképpen apja helyett is apja. A történet első felében az olvasó megszokja, hogy az egyes kötetek végén minden rendbe jön, mert Dumbledore – mint afféle deus ex machina – mindent helyre tesz. Annál döbbenetesebb azzal szembesülni, hogy bizonyos helyzetek megoldásához Dumbledore varázstudománya is kevésnek bizonyul: ő is hoz hibás döntéseket – és hogy ez a szinte emberfeletti lény valójában nagyon is emberi tulajdonságokkal rendelkezik. Voltaképpen Dumbledore az egyetlen ember, akitől Voldemort fél.",
    },
    {
        image: Voldemort,
        name: "Voldemort (Tom Marvolo Riddle",
        actor: "Ralph Fiennes",
        text: "A negatív hős, a gonosz varázsló, aki világuralomra tör, s eközben mindenre képes. Számos hívet szerez magának, mert azt hirdeti, hogy felszabadítja a varázslótársadalmat a mugli elnyomás alól, s a varázslóknak nem kell többé rejtőzködniük. A varázslótársadalmat pedig egyszer s mindenkorra megtisztítja a mugli szennytől: az aranyvérű varázslók fognak uralkodni. E program már csak azért is visszás, mert maga Voldemort is félvér: anyai ágon Mardekár Malazár leszármazottja, apai ágon azonban mugli. Voldemort árvaházban nevelkedett, és mélyen megrázta, hogy anyja belehalt a szülésbe. Sokáig úgy hitte, a varázserőt apai ágon kellett örökölnie, mert ha anyja boszorkány lett volna, akkor nyilván nem halt volna meg. Hatalma növekedésével rengeteg varázsló, dementor és élőhalott áll át hozzá, a mugli világban varázslat segítségével rengeteg balesetet és természeti katasztrófát idéz elő, s a Harry Pottert védő rendszereket a Mágiaügyi Minisztériumon keresztül próbálja meg térdre kényszeríteni. Voldemort egyetlen tényleges célja önnön halhatatlansága, s ezért a legsötétebb, leggonoszabb mágiától sem riad vissza. Valóban közelebb kerül a halhatatlansághoz, mint korábban bárki. Lelkét gyilkosságok elkövetésével feldarabolja és tárgyakba rejti. Összesen 7 ilyen tárgy, vagyis horcrux van. Amikor a csecsemő Harryre szórt gyilkos átka visszapattan rá, iszonyatos fájdalmak közepette foszlik semmivé minden ereje, kiszakad testéből – de életben marad. Ettől kezdve egyetlen célja, hogy újra testet öltsön és leszámoljon Harry Potterrel."
    },
    {
        image: RubeusHagrid,
        name: "Rubeus Hagrid",
        actor: "Robbie Coltrane",
        text: "a Roxfort kulcs- és háztájőrzője (mellékállásban vadőr), később a legendás lények gondozása tantárgy oktatója. Megjelenését tekintve kétszer akkora, mint egy átlagos ember: vagyis félóriás.Kukafedél-nagyságú tenyere, hatalmas, bozontos haja és szakálla – valamint arany szíve van."
    },
]