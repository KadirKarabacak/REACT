# <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="40" height="40" /> `REACT`

Bu depoda toplu olarak "React" ile yaptığım tüm çalışmalarımı ve bilgi birikimimi tutuyorum.

## ⚒ **Öncelikle kurulum ile başlayalım. Sonuçta herşey bununla başlıyor.**

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="20" height="20" /><a href="https://create-react-app.dev/">`Create-react-app`</a>

-   Bir React projesi oluşturmak için her zaman cmd komut satırına girip **"create-react-app@latest"** komutunu kullanarak ve yanına proje ismimizi vererek bir React proje dosyası oluşturuyoruz.
-   Gerçek dünya projelerinde her zaman **"Vite"** kullanmalıyız çünkü **"performans ve topluluk desteği"** bakımından Create-react-app'den daha popüler. Ama öğrenmek amaçlı create-react-app hala kullanılabilir.

### <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png" width="20" height="20"><a href="https://vitejs.dev/">`Vite`</a>

-   Bir Vite projesi kurulumu içinse **"npm create vite@latest"** komutunu kullanarak onay verdikten sonra proje ismimizi yazıyoruz. Daha sonra kullanacağımız teknoloji seçimini yapıp o teknolojiye özel bir template alıyoruz. Vite **"bağımlılıkları otomatik yüklemez"**. Bu nedenle proje dosyamıza girip bağımlılıklarımızı manuel olarak yüklemeliyiz. Create-react-app'deki index.js dosyası yerine main.jsx dosyamız mevcut. Aynı şekilde app.js yerine de App.jsx. Projemizi başlatmak içinse npm start yerine **"npm run dev"** komutunu kullanıyoruz.

### `<a href="https://nextjs.org/"> NextJS </a>`

-   Bir NextJS projesi oluşturmak için **"npx create-next-app@latest nameOfProject"** komutunu kullanarak projemizi oluşturuyoruz.

### ⚙ Vite Projelerine <a href="https://eslint.org/">`Eslint`</a> kurulumu ve ayarları

-   Şuanda Vite projeleri eslint eklentisi ile birlikte geliyor ki bu durum çok önemli. Fakat olası bir durumda gelmediğini varsayarsak şunları yaparak kurabiliriz.
-   **npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev** ve yükleme tamamlandıktan sonra **.eslintrc.json veya .eslintrc.cjs** isminde bir dosya oluşturup ayarlarımızı uygulayabiliriz.
-   { "extends": "react-app" }
-   Daha sonra vite.config dosyamıza girip **import eslint from "vite-plugin-eslint"** yapıyoruz.
-   Son adım olarak plugins dizisine eslint importumuzu ekliyoruz.

### 🎨 `React Stil Opsiyonları`

-   **"Inline"** olarak JSX içerisinde style prop'u kullanarak yapabiliriz.
-   **"Harici bir CSS veya SASS**" dosyası ile className özellikleri oluşturarak yapabiliriz. Fakat bu durum bütün uygulamayı etkilediği için özellikle **"büyük çaplı projelerde çakışmalar"** yaşamak mümkündür.
-   <a href="https://github.com/css-modules/css-modules">**"CSS Modules"**</a> her bir bileşen için harici bir css dosyası oluşturmamızı sağlar, böylece çakışmalar önlenir ve sadece o bileşene özgü stiller oluşturabiliriz. Creat-react-app ve vite içerisinde otomatik olarak gelir. Sadece element yazarak "ul,li,div" gibi stilleme yapamayız. Yaparsak yine tüm proje için geçerli olur. ClassName koşulu zorunludur.
-   **"CSS-in-JS"** dediğimiz yöntem ile yeni bir component oluşturarak stilleme yapabiliriz.
-   **"Utility-first CSS"** dediğimiz yapıya uygun olarak <a href="https://tailwindcss.com/docs/installation">**"Tailwindcss"**</a> kullanarak JSX içerisinde <a href="https://getbootstrap.com/">Bootstrap</a>'te olduğu gibi sabit className'ler ile yapabiliriz.
-   Alternatif olarak hiç CSS yazmadan bazı arayüz kütüphaneleri olan **"<a href="https://mui.com/">MUI</a>, <a href="https://chakra-ui.com/">Chakra UI</a>, <a href="https://mantine.dev/">Mantine"</a>** gibi hazır component yapısı sunan kütüphaneleri kullanabiliriz.

### 🌫 `Tailwind CSS`

-   Tailwind kurulumu için **<a href= "https://tailwindcss.com/docs/guides/vite?ref=jonas.io"> Tailwind Installation</a>**
-   Eğer yoksa sonrasında VS Code içerisinde **tailwindcss eklentisini** yükleyelim. Böylece verdiğimiz class özelliklerinin ne ifade ettiğini görebiliriz ve **otomatik tamamlama** elde ederiz.
-   Aynı şekilde daha düzenli bir görünüm için **tailwind prettier extension** yükleyebiliriz. **<a href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss">Tailwind Prettier Extension </a>**
-   **<a href="https://tailwindcss.com/docs/responsive-design"> Tailwind Responsive Design</a>**

## 🖌 `Styled Components`

-   Setup 👉 **npm i styled-components**, sonra import **styled** from styled-components.
-   Kullanımı 👉 **const H1 = styled.h1`CSS`** örneğin. Bu kod bir component döndürür.
-   Aynı componenti birden fazla yerde kullanıp h1 dışında bir element insertlemek istersek component'e **as** prop'u vererek h2-h3 veya herhangi bir html elementini yazabiliriz.
-   Styled components bizlere JS dosyalarımız içerisinde CSS yazmamıza olanak verir.
-   Styled components **sadece o component**'e özgüdür. Çakışmaları CSS.modules'de olduğu gibi engeller.
-   Daha kolay bir kullanım için VS Code içerisinde **styled-components eklentisini** de yüklemeliyiz. Otomatik tamamlama vb özellikler sağlıyor.
-   Aynı zamanda styled components ile oluşturduğumuz bir component her türlü prop'u alabilir. Örneğin bir button onclick propu aldığında içerisine önceki gibi tekrar bir button html elementi oluşturmamıza gerek kalmaz.
-   **Global CSS özellikleri** belirtmek için ise styles klasörümüz altında **GlobalStyles.js** dosyası oluşturup, içerisinde **createGlobalStyle``** fonksiyonunu çağırarak içerisine tüm CSS kodlarımızı yazabiliriz.
-   👉 **const GlobalStyles = createGlobalStyle``** ve sonrasında export default GlobalStyles
-   Template literals kullandığımız için içerisinde **Javascript mod'a** geçip kondisyonel stilleme yapabiliriz.
-   Her component için default bir prop belirtebiliriz. 👉 **Component.defaultProps = { ... }** gibi.
-   Aynı zamanda bir kütüphane aracılığı ile aldığımız componentleri stillendirmek için ise **styled(NavLink)** gibi direkt bir component verebiliriz.

### 💻 `Render'lama`

-   Bir **"component"** basitçe kullanıcı arayüzünü oluşturan lego parçalarına benzetilebilir. Her zaman büyük harfle başlamalıdır **[ function Header( ) ]**
-   JSX bir component'in içerisinden döndürdüğümüz **"HTML benzeri"** bir yapıdır. İçerisinde **"JS ve CSS"** kullanmamıza olanak sağlar.
-   **Kondisyonel renderlama**" bir koşula bağlı olarak bir DOM elementini veya bir component'i gizleyip gösterebilir. State değişimine bağlı olarak arayüzde farklı görünümler oluştururuz.
-   Birden fazla bileşen renderlamak istediğimizde döngüler kullanırız. Örneğin .map() methodu React'ta birçok noktada kullanılır.
-   Döngüler kullanarak renderladığımız bileşenlere **"key özelliği**" vermemiz gerekir. Key özelliği **"yeri ve içeriği değişmeyen**" elemanların tekrar tekrar renderlanmasını engeller ve **"performansı arttırır**".
-   **"React Fragment**" olarak adlandırdığımız yapı JSX'te bir parent element yerine birden fazla kardeş element renderlamak istediğimizde bu elementleri çevreleyen bir parent oluşturur. Yeni bir **"div oluşturmaktan kaçınmak**" istediğimizde tercihimizdir. [ <>, </> ]
-   **"Component composition**", bizim çok fazla prop kaydırma gerektiren durumlarda imdadımıza yetişir. Alt componentleri ana component'in açılış ve kapanış tag'leri içine taşırız ve children prop'u vererek içeriğini tamamen taşımasına olanak sağlarız. Aynı zamanda parent component'in yeniden kullanılabilirliği adına mükemmel bir adımdır. Genel olarak "**Prop Drilling**" adı verdiğimiz durumdan kaçınmamızı sağlar.
-   "**Component, Instance ve Element**" arasındaki farklar; Component tamamiyle bir bileşendir. Instance componentlerin çoğaltılmış örnekleridir ve aynı özellikleri barındırır. Element tamamen DOM ile ilgilidir, HTML'de kullandığımız yapılar birer elementtir.
-   Dışarıdan aldığımız bir değişkeni değiştirmek, HTTP çağırıları gibi durumlar kodumuzda yan efektler oluşturur ve bu durum renderlamada kaçınmamız gereken durumlardan biridir.
-   "**Pure function**" dediğimiz fonksiyon türü hiçbir yan etkiye sahip olmaz. Verilen değer, çıkan değer ile aynıdır.

#### 🔴 `Renderlama mantığında bazı katı kurallar vardır.`

-   **HTTP çağırıları** yapamazsınız.
-   **Zamanlayıcılar** başlatamazsınız.
-   **DOM API**'ını direkt kullanamazsınız.
-   **Obje veya değişkenleri** mutate edemezsiniz.
-   **State güncellemesi ve ref güncellemesi** yapamazsınız. Program sonsuz döngüye girer.
-   Side effectler sadece **handler fonksiyonlar** içerisinde izin verilir. Bunun dışında birde **useEffect hook**'u dahilinde kullanabiliriz.

### ℹ `Prop'lar`

-   Proplar basitçe **parent componentten child component**'lere iletilebilen değişkenlerdir. Aynı anda birden fazla componentte kullanılması gereken değişkenler için kullanılır. Kod içindeki karmaşıklığı azaltmak adına props.anything demek yerine componente dahil ederken {anything} destructure yaparak alırız.
-   **Proplar değiştirilemez**. Sadece okunur. "Readonly".
-   **Children prop** rendering kısmında da belirtildiği gibi component composition gibi durumlarda işlevseldir.
-   **Prop drilling** Parent component'lerden child component'lere veri akışını ifade eder.
-   **Bir prop olarak bir elementi** child elemente gönderebiliriz. Çok kullanışlı olduğu söylenemez. Child prop'una alternatif olarak gösterilir.
-   **Diğer geliştiricilerin** kullanımı için olabildiğince **"esnek ve yeniden kullanılabilir**" componentler yazmak önemlidir. Aynı zamanda diğer projelerinize de dahil edebilirsiniz. **"Harici state, proptypes**" gibi durumlara hakim olmalısınız.
-   **"Key prop'u Diffing algoritmasına**" bir bileşenin benzersiz (unique) olduğunu belirtir.
-   **Key prop'u** listelerde state'i dağılmadan tutabilmek veya tamamen state'i sıfırlamak için kullanılabilir.

### ♦ `State'ler`

-   👉 **const [count, setCount] = useState(0)** Count bizim ekranda göstereceğimiz değer, setCount arka planda tıklama veya farklı etkilerle count değerini güncelleyen fonksiyon, ve 0 ise count'ımızın başlangıç değeridir.
-   Önceki state'e bağlı olarak yeni bir state türetilmesi istenen durumlarda " **setCount((anything)=> anything+1)** " gibi callback fonksiyonları içerisinde güncelleme yapmalıyız. State asenkron şekilde işlediğinden callback fonksiyon içerisinde çağırmaz isek state hep aynı kalır.
-   useState gibi farklı React hook'ları da mevcuttur. Bunlardan bazıları useEffect, useReducer vb. useEffect componentin dışarıyla olan iletişimini kontrol eder örneğin HTTP request. İlerleyen süreçte useEffect yerine "**React Query**" kullanarak HTTP isteklerini kullanacağız. useReducer ise useState'e bir alternatiftir. Her değişmesi istediğimiz durum için bir useState oluşturmak yerine tamamını useReducer içerisinde güncelleyebiliriz.
-   Hook'ları asla bir **kondisyona bağlı** yazmamalıyız. Globalde **erken return'ler** yapmamalıyız. Tüm hookların fiber tree adı verdiğimiz ağaçta bir yeri vardır. Kondisyonel olarak bunun değişmesi programı bozar.
-   Kontrol edilmiş elementler olarak adlandırdığımız yapılar form elemanlarıdır. Input, select, range vb. elementleri kontrolümüze alıp her girilen değeri hafızaya kaydetmesini ve ekrana göstermesini sağlayabiliriz.
-   State Management kavramı ne zaman yeni bir state oluşturmamız, ne zaman türetilmiş state'ler kullanmamız ve bir state'in nereye konumlandırmamız gerektiğini ifade eder.
-   Derived State ( Türetilmiş durum ) bir state değişkenine bağlı olarak türetilmiş sabit değişkendir. Bazı durumlarda yeni bir state üretmek yerine varolan'dan yenilerini türetmemizi sağlar.
-   State Lifting kavramı child componentlerden birisinde oluşturduğumuz bir state'i gerektiğinde birden fazla sibling(kardeş) component'e dağıtmak için en yakın parent elemente taşımak anlamına gelir.
-   State Group Batching ifadesi, bir handler fonksiyon içerisinde birden fazla gerçekleşen state güncellemesini tek bir güncelleme gibi görüp programımıza performans kazandıran bir terim ve uygulamadır. React@18 ve üzerinde geçerlidir.

### 🤏 `Use Reducer`

-   👉 **const [state, dispatch] = useReducer( reducer, initialState )**
-   State oluşturmak için alternatif bir yoldur. useState'e göre anlaması ve uygulaması birazdaha zordur. Karışık state'ler, "**birbirleri ile ilişkili**" state'ler ve birden fazla state güncellemesi gereken durumlar için idealdir.
-   İlişkili state parçalarını bir "**obje**" içerisinde tutar.
-   useReducer state update'lemek için gerekli tüm mantığı içerisinde barındıran bir "**reducer fonksiyona**" ihtiyaç duyar. State mantığını component'lerden ayırır.
-   "**Reducer**" fonksiyon bir pure fonksiyondur, anlık state'i ve action özelliğini alıp yeni state'i çevirir.
-   Genellikle reducer fonksiyon içerisinde bir "**switch-case**" yöntemi kullanılır.
-   "**action özelliği**" state'in nasıl güncelleneceğini belirtir.
-   dispatch fonksiyonu state güncellemelerini tetiklemek için kullanılır. reducer fonksiyona actions özelliğini gönderir.

### 📦 `Ref'ler`

-   Refler bir kutu gibidir ve mount ve re-render'lar arasında değişmez. State'in renderlardan etkilenmeyen versiyonu gibi görebiliriz. Elementlere class vermeden seçmemizi sağlar.

### ⚔ `Event Handler'lar`

-   Bir event gerçekleştiğinde çalıştırılırlar.
-   Side Effect'ler oluştururken tercih edilen bir yöntemdir. Bunun yanı sıra useEffect çok daha efektiftir.

### ✨ `Use Effect'ler`

-   Bir component sayfaya mount'landığında [ Yani başlangıçta ] ve sonraki re-render'larda çalışır ( "**Bağlılık dizisine verdiğiniz değerlere göre değişir**" ).
-   Bağımlılık dizisi olmadan, React effect'i ne zaman çalıştıracağını bilmez.
-   Effect içinde kullanılan her state değişkeni ve prop bağımlılık dizisine eklenmelidir. Aksi taktirde çalışmaz.
-   Olabildiğince bağımlılık dizisine bir "**Obje veya Dizi**" vermekten kaçınmalıyız. Çünkü Javascript'te hiçbir obje birbiri ile aynı değildir ve useEffect içerisinde her seferinde yeniden oluşturulup programı sonsuz döngüye sokar.
-   Bir component'i harici bir sistem ile senkronize tutmaya yarar. Örneğin API çağırıları.
-   UseEffect bir eventlistener'a benzer. Bağımlılık dizisindekilerin değişmesini gözlemler. Her değişimde tekrar tekrar çalışır.
-   Sadece başlangıçta çalışır. ( "**initial render**" )
-   [ x,y,z ] başlangıçta, x,y ve z her güncellendiğinde çalışır.
-   Bağımlılık dizisi olmazsa programda değişen herşey tekrar tekrar çalışmasına sebep olur. Performans için berbat bir durum. ⛔
-   Cleanup fonksiyonu sideEffect'leri temizlemek için kullanılır ve performansı arttırmaya yardımcı olur.

### ↗↖ `Router ( Yönlendirici )`

-   Router oluşturmak için öncelikle **"BrowserRouter"**, daha sonra **"Routes"** ve son olarak her bir gezinim için bir **"Route"** oluşturmalıyız. Kullanıldıkları konuma Eslint'i kızdırmamak için hepsini import etmeliyiz.
-   Her Route'ın bir **path** propu ve bir **element** prop'u olmalıdır. Yani hangi path'de hangi elementin görünmesini istediğimizi belirtiyoruz.
-   Nested router kullanmak için açılış ve kapanış tagleri arasına yeni Router'lar oluşturabiliriz. Child router'lara parent'in path'ini vermemize gerek yoktur.
-   Daha sonra bu child Router'ları gerçek anlamda gösterebilmek için **"Outlet"** component'ini görünmesini istediğimiz konuma import edip yerleştirmeliyiz.
-   **"Index Route"** bize hiçbir child Route o index ile eşleşmiyorken default olarak bir child Route göstermemize olanak sağlar. Index Route'u kullanmak için yeni bir child Route oluştup prop olarak **"index"** vermemiz ve renderlamak istediğimiz element'i yazmamız yeterli. Bu durumda path prop'u önemsizdir. Aynı özelliği projemizin **HomePage** sayfası içinde kullanabiliriz.
-   Router ile farklı URL'leri farklı kullanıcı arayüzü görünümleri ile eşleştiriyoruz.
-   Bu durum kullancılara tarayıcı URL'ini kullanarak uygulamanın farklı arayüzleri arasında gezinim sağlıyor.
-   Kullanıcı arayüzünü anlık tarayıcı URL'i ile **senkronize** tutuyor.
-   **Single Page Applications** [ Tek sayfa uygulamalar ] oluşturmamıza olanak veriyor.
-   Aynı zamanda React Routes'a gelişmiş bir Tab Component olarak da bakabiliriz.
-   URL kullanıcı arayüzü state'ini saklamak için mükemmel olabilir. Bazı durumlarda useState yerine kullanılabilir. Bu durumlardan bazıları açılır/kapanır paneller, seçili liste elemanı, liste sıralaması, uygulanmış filtreler vb. Bir E-commerce sitesinde bir eşyaya renk, ebat veya farklı filtreler uygulayıp bir arkadaşınızla paylaştığınızı düşünebilirsiniz. Bu durumda URL içinde state tutmak faydalıdır, çünkü paylaşılan URL tam olarak seçilen filtreleri içerisinde barındırır.
-   State'i global alanda saklamanın en kolay yoludur URL'ler. Tüm component'lerin erişimi vardır.
-   URL state'i bilgiyi bir sayfadan diğerine geçirmek için iyi bir yoldur.
-   Belirli bir zamanda yapılan sayfa işaretlemelerini paylaşmayı ve daha sonrasında tam olarak o noktaya erişmeyi mümkün kılar.
-   3 parçadan oluşur. 1.'si "**path**" daha önce Router'lara tanımladığımız gibi. 2.'si **"params"** yani parametreler. 3.'sü ise **"query string"** yani sorgulardır.
-   _Parametre_'leri kullanabilmek için 3 aşamaya ihtiyacımız var. Öncelikle yeni bir **Route oluştururuz**, sonra bu Route'a **link veririz** ve bu Route içerisinde **useParams() aracılığı ile** URL'den gelen state'i okuruz.
-   URL'deki query strings( sorgu dizileri )'i ise **useSearchParam** ile okuyabilir ve kullanabiliriz.
-   "**Programmatic Navigation**" (Programlı gezinme) kullanıcı herhangi bir link'e tıklama yapmadan kullanıcıyı yeni bir URL'e götürme işlemidir. Bu durumun en yaygın kullanım alanı **form submit**'tir.
-   Bir başka Router hook'u ise "**useNavigate()**", bu hook basitçe bir fonksiyon döndürür ve bu fonksiyonu kullanarak bir etkileşime bağlı dilediğiniz path'e gidebilirsiniz. const navigate = useNavigate() -> navigate("form") örneğin. Veya navigate(-1) bir adım geri gelmemizi sağlar.
-   Aynı zamanda daha declarative bir yol olan **<"Navigate"/>** componentini "to" özelliği ile kullanabiliriz.
-   **<"Navigate"/>** componentinin "**replace**" özelliğin geçmişte geriye gitmemizi sağlar.

### ↪ `Router v6.4 İçin Yeni Kullanım`

-   Router bağımlılığımızı yükledikten sonra **createBrowserRouter()** fonksiyonumuzu App.jsx içerisinde alıyoruz.
-   Bu fonksiyona bir **dizi [ ]** vererek içerisinde **her bir route** için bir obje oluşturup **path ve element** özelliklerini ekliyoruz.
-   Daha sonra **createBrowserRouter** fonksiyonunu **router** değişkenimize atayıp JSX içerisinde **RouterProvider** döndürüp prop olarak **router={ router }** veriyoruz.
-   React Router v6.4'ün bize sağladığı bir diğer özellik ise **data fetching** veya **data loading**.

### ↪ `Router Loader`

-   Bize **sadece o sayfaya gidildiğinde** data fetch yapmamızı sağlayan bir yapıdır.
-   Bu yapı useEffect'te olduğu gibi **( önce component renderlanması ve sonra veri yakalanması )** değil, component renderlanması ve veri yakalanması **aynı anda** yapılır.
-   3 Adımda oluşturulur.
-   İlk adım bir **Loader** oluşturmamız ve içerisinden istediğimiz veriyi **return** etmemiz gerek.
-   İkinci adım oluşturulan **loader'ı yayma ( Provide )**. Oluşturduğumuz loader'ı **export** edip Route'ları oluşturduğumuz **App.jsx'te** verinin yakalanmasını istediğimiz sayfaya **loader prop'u** ekleyerek loaderımızı yazıyoruz.
-   Üçüncü adım veriyi kullanma. Yaydığımız veriyi, o sayfanın component'ine giderek içerisinde **useLoaderData()** fonksiyonu kullanarak verilerimizi alıp bir değişkene atıyoruz. Ve artık verilerimize sadece sayfaya gidildiğinde sahibiz.
-   Aynı zamanda error durumu için herbir Route'a **errorElement** belirleyebilir ve bu element içerisinde **useRouteError()** fonksiyonu ile hatayı ele alabiliriz.

### ↪ `Router Action`

-   Action yöntemini kullanmak için submit için kullandığımız form elementini react-router'dan gelen **"Form"** elementine çeviriyoruz ve method özelliğine **"POST"** veriyoruz.
-   Aynı dosya içerisinde **async bir "action"** fonksiyonu oluşturuyoruz ve parametre olarak **{ request, params }** alıyoruz. İhtiyacımıza göre kullanabiliriz.
-   👉 **const formData = await request.formData** kod satırı ile request'imiz içerisinden form bilgilerimizi alıyoruz. Form içerisinde **input alanları** olduğunda gereklidir.
-   👉 **const data = Object.fromEntries(formData)** kod satırıyla verimizi bir **objeye çeviriyoruz** ve verimizi döndürüyoruz.
-   Ne zaman bir API'a **PATCH** isteği gönderen bir action oluştursak, React-router **re-validation( yeniden-doğrulama )** adı verilen bir duruma sahiptir. Verinin **action'a bağlı olarak değiştiğini** bilir ve arka planda otomatik olarak **re-fetch( yeniden-veri yakalaması )** yapar ve bu yeni veriler ile sayfayı **tekrar renderlar**.
-   Bu işlemi 👉 **<"fetcher.Form"> { Button etc.. } </"fetcher.Form">** ile yaptığımız için React-Router bunu anlıyor.

### ➡ `TanStack Router`

-   TanStack router'ı react-router ile karşılaştırdığımızda görebileceğimiz en büyük avantajlarından birisi **typesafe** olmasıdır. Olmayan bir route yazdığınızda TypeScript sizi uyarır ve bir hata olduğunu belirtir.
-   TanStack router hem File-Based Routing hemde Code-Based Routing için destek sunar. Bu konuda detaylı bilgi için <a href="https://tanstack.com/router/latest/docs/framework/react/guide/route-trees">linke</a> gidebilirsin.
-   Installation ⏬
    ```js
    npm install @tanstack/router
    npm install --save-dev @tanstack/router-vite-plugin
    ```
-   Vite plugin otomatik olarak routes dosyasını oluşturur.
-   Daha sonra **vite.config.ts** dosyamız bu şekilde görünmelidir

    ```js
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

    export default defineConfig({
        plugins: [react(), TanStackRouterVite()],
    });
    ```

-   Bir sonraki adımda **\_\_root.tsx** dosyamız içerisinde tüm route'larımız için bir root route'ı Outlet componentimiz ile oluşturuyoruz.

    ```js
    import { Outlet, createRootRoute } from "@tanstack/react-router";

    export const Route = createRootRoute({
        component: () => <Outlet />,
    });
    ```

-   Şimdi route'larımız tanımlıdır fakat React bunu henüz bilmiyor. Dolayısıyla bir provider'a ihtiyacımız var. Bu noktada **App.tsx** dosyamıza gidip içeriğini aşağıdaki gibi güncelliyoruz

    ```js
    import './App.css';
    import { RouterProvider, createRouter } from '@tanstack/react-router';
    import { routeTree } from './routeTree.gen';

    const router = createRouter({ routeTree });

    declare module '@tanstack/react-router' {
      interface Register {
      router: typeof router;
      }
    }

    function App() {
      return <RouterProvider router={router} />;
    }

    export default App;
    ```

-   Bununla birlikte tüm route'larımız aktif bir şekilde çalışacaktır. Bu noktada route'larımız arasında gezinim için ihtiyacımız olan şey **Link** component'idir. `<Link to="/">Home</Link>`. Kullanımı react-router ile aynıdır.
-   Tüm işlevselliğimiz apaçık bir şekilde çalışmaktadır. Şimdi bulunduğumuz sayfayı belirten bir stilleme için Link componentimize activeProps prop'u vererek aktif durumda stilleme yapabiliriz.
    ```js
    <Link to="/" activeProps={{ style: { fontWeight: "bold" } }}>
        Home
    </Link>
    ```
-   Bu özelliğin yanısıra custom bir active state için şu şekilde bir kullanım da mevcuttur.
    ```js
    <Link to="/profile">
        {({ isActive }) => <>Profile {isActive && "Active"}</>}
    </Link>
    ```

### 🧷 `Custom Hooks`

-   React'ta bir custom hook birden fazla built-in hook kullanan bir javascript fonksiyonudur. [ useState, useEffect, vb. ]
-   Custom hook'lar React component'leri arasında mantığı ayırmak ve paylaşmak için bir yol sunarak daha temiz kod, gelişmiş organizasyon ve üretkenlik sağlar.
-   Bir custom hook oluştururken uyulması gereken bazı kurallar vardır.
-   Custom hook isimleri her zaman "use" ile başlamalıdır.
-   Bir custom hook'un ana amacı yeniden kullanılabilirliktir ve proje boyunca birden fazla component içerisinde kullanılır.
-   Custom hook'lar bir JSX içermez ve yeniden renderlamalara sebep olmaz. Mantık ve state düzenlemeye yararlar, arayüz tanımlamazlar.

### 🌟 `Context API`

-   Birden fazla **derinlikte bulunan child componentlere** state geçirmek ve kullanmak istediğimizde bu state'i kullanmayacağımız componentler üzerinden geçirerek **kod kirliliği ve hantal bir yapı** oluşturmak yerine **direkt kullanmak istediğimiz child component'e** bu state'i vermemizi sağlayan yapıdır.
-   Basitçe **Prop Drilling** problemimize net bir çözümdür.
-   Ne zaman provider aracılığı ile ilettiğimiz **state güncellenirse**, bu değeri kullanan child componentler'de yeniden renderlanır.
-   State'imizi uygulamamızın baştan sonuna globalde yayınlar.
-   3 Aşamadan oluşur.
-   İlk aşama **createContext( )** kullanarak geçireceğimiz propların isminde bir provider oluşturmak. Örn. 👉 "**const Posts = createContext()**". createContext bir **component** döndürür, bu sebeple değişken ismimiz büyük olmalıdır.
-   İkinci aşama JSX'imizi "**Posts.Provider**" componenti ile sarmak ve **value prop'una** geçirmek istediğimiz tüm propları yazmak.
-   Üçüncü ve son aşama Consumers (Tüketiciler) provider tarafından yayınlanan "**context değerini okuyan**" tüm componentlerde import etme.

### <img src="https://techstack-generator.vercel.app/redux-icon.svg" alt="icon" width="40" height="40" /> `Redux`

-   Redux "**Global state düzenlemesi**" yapmamızı sağlayan bir 3rd party kütüphanedir.
-   Tüm global state, "**tek bir global erişilebilir yerdedir**", actions kullanarak (useReducer'da olduğu gibi) güncellemesi kolaydır.
-   Konsept olarak "**Context API ve useReducer'ı**" birlikte kullanmaya benzer.
-   Globalde güncellenen bir state'i kullanan tüm bileşenler yeniden renderlanır.
-   İki farklı versiyonu vardır. Classic Redux ve Modern Redux Toolkit.
-   Yapıyı oluşturmaya öncelikle "**initialState**" objemizi belirterek başlıyoruz. Sonrasında yine bir "**reducer fonksiyon**" oluşturuyoruz ve parametre olarak "**state ile action'ımızı**" veriyoruz.
-   useReducer'dan farklı olarak "**state'imizi default olarak initialState'e**" eşitliyoruz. Yine switch/case yapımızı oluşturup durumları ele alıyoruz. Default olarak bir error yazmak yerine başlangıç state'imizin kendisini döndürüyoruz.
-   Redux'tan "**createStore**" fonksiyonunu import ediyoruz ve oluşturduğumuz reducer'ı bu fonksiyona parametre olarak veriyoruz. "**const store = createStore(reducer)**". Daha sonrasında her "**state güncellemesinde store objesinden dispatch fonksiyonumuzu**" okuyoruz ve useReducer'da olduğu gibi güncelliyoruz.
-   Fakat aslında Redux'ta "**Action Creators**" dediğimiz yapıyı kullanarak güncelleme işini manuel yapmak yerine otomatikleştiriyoruz.
-   Oluşturacağımız birden fazla Reducer fonksiyonu bir araya getirmek için bir Root reducer oluşturup bu değişken üzerinde "**combineReducers**" fonksiyonunu çağırabiliriz.
-   const rootReducer = combineReducers"**({ account: accountReducer, customer: customerReducer });**"
-   Kombine ettiğimiz reducerları "**createStore()**" fonksiyonuna argüman olarak verebilir ve kullanabiliriz.
-   Oluşturduğumuz yapıyı projemize bağlamak için "**npm i react-redux**" paketini indiriyoruz.
-   İndirdiğimiz paketten "**{ Provider }**" component'ini import ediyoruz ve uygulamamızı bu component ile sarıyoruz. Aynı Context API'da olduğu gibi Provider'a bir prop olarak oluşturduğumuz store yapısını veriyoruz.
-   Basitçe, Redux'tan alacağımız değerler için "**useSelector()**", dispatch fonksiyonu için "**useDispatch()**", oluşturduğumuz reducer'ları combinlemek için "**combineReducers()**" ve yeni bir store oluşturmak için "**createStore()**"
-   Asenkron işlemleri direkt reducer içinde yapamayız, çünkü "**reducer fonksiyonlar pure**" fonksiyonlardır.
-   Asenkron bir işlemi component içerisinde yapıp dispatch için kullanabiliriz, fakat bu da çok ideal değildir.
-   Bu noktada "**MiddleWare**" adı verilen bir yardımcımız var. Dispatch yapıldıktan sonra, güncellenen state direkt store'a gitmek yerine bir ara birime uğrar. Burası "**Redux Thunks**" olarak isimlendirilir ve 3rd party bir pakettir. Asenkron tüm işlemler için Thunks kullanacağız.
-   İlk adım yükleme -> "**npm i redux-thunk**"
-   İkinci adım store içerisinde oluşturma -> "**const store = createStore(rootReducer, applyMiddleware(thunk));**"
-   Üçüncü adım **Action Creator** içerisinde kullanma.

### <img src="https://techstack-generator.vercel.app/redux-icon.svg" alt="icon" width="40" height="40" /> `Redux Geliştirici Araçları (DevTools)`

-   Geliştirici araçları için google üzerinden redux-devtools'u indireceğiz.
-   Daha sonra terminal içerisinde redux-devtools-extension yükleyeceğiz.
-   Bu eklentinin bize sağladığı bir fonksiyon olan {composeWithDevTools}'u import edeceğiz.
-   Ve son olarak applyMiddleware fonksiyonumuzu composeWithDevTools ile sarıyoruz. (Kullanımı bu şekilde)

### <img src="https://techstack-generator.vercel.app/redux-icon.svg" alt="icon" width="40" height="40" /> `Redux Toolkit`

-   Yükleme için 👉 **npm i @reduxjs/toolkit**
-   Daha önce oluşturduğumuz **createStore()** yerine **configureStore()** fonksiyonunu kullanacağız.
-   **configureStore()** otomatik şekilde reducer'larımızı **kombine** eder, **thunk middleware** ekler ve **devtools'u** oluşturur.
-   Redux kodu yazmanın daha **modern ve tercih edilen** yoludur.
-   Redux'un **en iyi uygulamalarını(En doğru şekilde)** kullanmaya zorlayan fikir odaklı bir yaklaşımdır.
-   Aynı sonuca **daha az kod** yazarak erişebilmemizi sağlar.
-   İlk olarak **reducer içerisinde state'i değiştiren** kod yazabiliriz. (Arka planda **Immer** isimli bir kütüphane tarafından immutable olarak çevirilir)
-   İkincisi Action Creator'larımız **otomatik** olarak oluşturulur.
-   Üçüncüsü ise **otomatik olarak thunk middleware ve devtools** setup'u yapılır.
-   ReduxToolkit ile oluşturduğumuz Action Creator'lar sadece **tek bir argüman alır**.
-   Bunu düzeltmek için Action Creator içerisinde creator isminden hemen sonra : { } içerisinde bir **prepare(parametreler)** fonksiyonu oluşturup bu prepare fonksiyonu içerisinde bir obje döndürmeliyiz.
-   Aynı zamanda bir **sideEffect** içeren bir durum oluşturmak için yine **prepare( )** fonksiyonundan faydalanıp bu fonksiyon içinde oluşturmalıyız. Direk olarak reducer içerisinde **yapamayız**.
-   Reducer'ımızda action creatorlerimiz içerisinde **verilerimizi manipule edebiliriz**. Arka planda tüm bunlar manipule edilmeyen bir kod yapısına çeviriliyor.
-   👉 **state.cart.push(action.payload)**
-   **useFetcher( )** bir başka sayfadaki veriyi o sayfaya gitmeden de kullanabilmemizi sağlayan bir fonksiyondur.
-   👉 **const fetcher = useFetcher( )**
-   Daha sonra bu fetcher'ı kullanabilmek için **fetcher.load( '/menu' )** bilgiyi almak istediğimiz route'ı yazıyoruz ve veri **fetcher içerisinde** saklanmış oluyor.
-   **Fetcher**'da navigation gibi farklı durum verilerine sahiptir. **"idle", "loading"** etc.
-   Toolkit kullanımı ile bir "**Thunk**" oluşturmak ve kullanmak istersek **createAsyncThunk()** fonksiyonuna başvurmalıyız. Bu fonksiyon iki argüman alır. Birincisi **action ismi**, ikinci argüman ise **reducer için payload olan** bir asenkron fonksiyon.
-   Daha sonra reducer'larımızı oluşyurduğumuz slice içinde reducers'ın dışında **extraReducers ( builder )** ekleyip ele almak istediğimiz durumları **builder.addCase( )** ile ele alıyoruz.
-   Toolkit kullanımı ile bir "**Thunk**" oluşturmak ve kullanmak istersek **createAsyncThunk()** fonksiyonuna başvurmalıyız. Bu fonksiyon iki argüman alır. Birincisi **action ismi**, ikinci argüman ise **reducer için payload olan** bir asenkron fonksiyon.
-   Daha sonra reducer'larımızı oluşturduğumuz slice içinde reducers'ın dışında **extraReducers ( builder )** ekleyip ele almak istediğimiz durumları **builder.addCase( )** ile ele alıyoruz.

### 💫 `React Query`

-   Setup 👉 **npm i @tanstack/react-query**
-   Kullanımı **ContextAPI veya Redux-Toolkit** ile benzerdir.
-   İlk adım olarak bir değişken oluşturup **new QueryClient( {} )** fonksiyonunu çağırıyoruz ve istersek içerisine options yazabiliriz.
-   👉 **const queryClient = new QueryClient( { } )**
-   Aynı zamanda kendi geliştiri kiti vardır. Yüklemek için 👉 **npm i @tanstack/react-query/devtools**
-   Oluşturduğumuz queryClient'i başka bir dosyada kullanmak için **useQueryClient( )** fonksiyonunu çağırabiliriz.
-   Verimizi mutsayona uğratmak, birşeyler eklemek yada silmek istediğimizde **useMutation( )** fonksiyonunu kullanıyoruz. Bu fonksiyon içerisinde **mutationFn, mutationKey, onSuccess, onError** gibi farklı özellikleri kullanabiliriz.
-   Mutasyona uğratma başarılı olduğunda onSuccess fonksiyonu içerisinde **queryClient.invalidateQueries(" databaseTablomuzunIsmi ")** kullanarak arayüzümüzü değişimden etkilendikten hemen sonra yeniden renderlayabiliriz.
-   React-Query güçlü bir **remote-state** düzenlemesi sağlayan kütüphanedir.
-   Çoğu özelliği bakımından **daha az kod** yazmamızı sağlar.
-   Yakaladığı verileri cache'e alır, bu sayede aynı verileri farklı component'ler üzerinde kullanabilmemize olanak sağlar ve gereksiz refetch yapmaz.
-   Otomatik olarak bize **"loading" ve "error"** durumlarını verir.
-   Otomatik refetch sayesinde durumu senkronize tutar. Aynı anda açık birden fazla uygulama olduğunda hepsinde aynı anda etki gösterir.
-   **Pre-fetching** özelliği vardır. Ekranda gösterilmeden önce de diğer verileri yakalar. Örneğin pagination. Sadece o anki sayfayı değil, diğer tüm sayfaları yakalar.
-   **Remote state'i güncellemek** kolaydır.
-   Offline desteği vardır. Bir kere cache'e alındıktan sonra kullanıcı interneti olmadığı durumda bile uygulamanın alanlarına erişim sağlayabilir.

### 🕳 `React Portal`

-   React Portal, bize **parent component'in dışında** biryerde ( DOM Tree üzerinde istediğimiz biryerde ) elementin **asıl yerini bozmadan** ( React Component Tree üzerinde yeri değişmeden ) renderlama yapabilmemizi sağlar.
-   React Portal kullanmamızın asıl sebeplerinden birisi de **yeniden kullanılan componentlerin** bazı yerlerde parent'tan aldığı **CSS overflow hidden** özelliğinden etkilenip modal içeriğinin tamamen görünmemesi hatalarını engellemek içindir.
-   Diğer tüm elementlerin üzerinde durmasını istediğimiz durumlar için kullanılır. Örneğin **Modal Pencereleri, Tool Tips, Menüler vb.**
-   Kullanımı oldukça basit olup, bir component içerisinde JSX return etmek yerine return'den hemen sonra **createPortal()** fonksiyonunu çağırıp **ilk arguman olarak JSX** kodumuz, ikinci argüman olarak **nerede render etmek** istediğimizi belirtiyoruz.

### ⚡ `Tek Sayfa Uygulamalar [ SPA ]`

-   Uygulama baştan sona client (tarayıcı) tarafında çalıştırılır.
-   Farklı URL'ler farklı görünümlerle(components) ilişkilidir.
-   Sayfa asla yeniden yüklenmez.
-   Normal bir masaüstü veya mobil uygulama gibi hissettirir.

### 👨‍💻 `Sahte Giriş (Fake Login) ve Kullanıcı Doğrulaması (User Authentatication)`

-   Sahte bir giriş oluşturmak için 3 aşamamız mevut.
-   İlk aşamada kullanıcının e-mail ve şifresini bir giriş formundan alıyoruz, API uç noktası ile e-mail ve şifrenin doğruluğunu kontrol ediyoruz.
-   İkinci aşamada, kimlik bilgileri eğer doğruysa kullanıcının uygulamaya girişine izin veriyoruz ve kullanıcı objesini state'imizde kaydediyoruz.
-   Üçüncü ve son aşama olarak uygulamamızı doğrulamasız ve yanlış bilgi girilmiş durumlardan korumamız gerekiyor.

### 🟥 `API Cağırıları ve Hata yakalama`

-   Her zaman API çağırıları try ve catch blokları içerisinde yapmalısınız.
-   Hataları ele almak ve ekranda göstermek için yeni bir state oluşturmalısınız. const[error, setError]= useState("") gibi.
-   Kondisyonel renderlama bu noktada çok önemlidir. Eğer bir hata varsa ekranda anlamlı mesajlar göstermelisiniz. Yukarıdaki örnekten yola çıkarak error değişkenini ekrana yazdırabilirsiniz.
-   Her zaman response.ok özelliğini kontrol etmeli ve bir hata varsa ekrana yazdırmalısınız.

### ⚡ `Performans ve Optimizasyon ☄`

-   3 aşamadan oluşan bir takip listemiz olabilir.
-   Birinci olarak Boşa harcanan render'ları engelleme (Prevent Wasted Renders). Bu aşamada kullanabileceklerimiz memo, useMemo, useCallback ve elementleri child olarak yada prop olarak aktarma olabilir. Bu optimizasyonu uygulayabilmek için bileşenlerin ne zaman yeniden renderlandığını bilmemiz gerekir.
-   İkinci aşama uygulama hızını ve duyarlılığını iyileştirme. Bu noktada da useMemo, useCallback ve daha modern bir araç olan useTransition kullanılabilir.
-   Üçüncü aşama ise dosya boyutu düşürme, bunun için de 3rd party paketler, kod bölme (code splitting) ve tembel yükleme (lazy loading) özellikleri uygulanabilir.
-   Yavaş çalışan bir componenti "Children" prop'u ile extract edip children konumuna koyarsak parent renderlarından etkilenmez, bu da optimizasyonu arttırır.

### 🧠 `memo Fonksiyonu`

-   Bu fonksiyon tamamiyle optimizasyon amaçlı olup, Parent component yeniden renderlandığında eğer **child component'de değişen bir prop** yok ise yeniden renderlanmasını engellemek amacıyla vardır. **Sadece proplara** etki edebilir. Yani memoized bir component kendi state'i veya bağlı olduğu bir context değiştiğinde yeniden renderlanmaya devam eder. Bu demek değildir ki her componentimize memo fonksiyonu uygulamalıyız. Sadece bir component çok ağır (yavaş renderlanan) veya çok sık yeniden renderlanan ve hep aynı proplara sahip olan componentler için geçerlidir.
-   Bazı durumlarda bir component memoized olsa bile, parent component'ten aldığımız ve parent içerisinde oluşturulmuş bir obje veya bir fonksiyon, her seferinde parent yeniden renderlandığında tekrar tekrar oluşturulacaktır. Bu da aldığımız prop'un değiştiğine işaret eder ve memo'yu görmezden gelir. ( {} != {} ) Bu noktada aldığımız obje ve fonksiyon propları sabit kılmak için **"useMemo"** ve **"useCallback"** devreye giriyor.
-   Bu durumlar dışında kalan bir istisna var ki o da setter fonksiyonlarımız. Yani useState için oluşturduğumuz setter fonksiyonlar kendiliğinden memoized olarak gelir. Bir prop olarak gönderirken bu fonksiyon hakkında düşünmemiz gerekmez.

### 🔒 `useMemo & useCallback`

-   useMemo ve useCallback fonksiyonları içerisinde bir değer alır ve bu değerler cache'de saklanır. Input'lar değişmediği sürece aynı kalmaya devam ederler. useEffect gibi useMemo ve useCallback'de bir bağımlılık dizisine sahiptir ve ne zaman bir bağımlılık değişirse, değer yeniden oluşturulur.
-   Aynı memo'da olduğu gibi bunları heryere yazmamalı ve sadece şu 3 durumda kullanmalıyız.
-   Birinci durum : Boşa harcanan render'ları engellemek için memo ile birlikte.
-   İkinci durum : Her renderlamada ağır yük gerektiren yeniden hesaplamalardan kaçınmak için.
-   Üçüncü durum : Başka bir hook'un bağımlılık dizisinde kullanılan değerler için. (Örneğin useEffect içinde sonsuz döngüleri engellemek)

### 🪓 `Kod bölme (Code Splitting)`

-   Kod bölme, kodumuzu uzak serverdan tek parça halinde gelen (bundle) JS dosyamızı sayfalarımıza, hatta istersen daha küçük componentlerimize bölmemizi sağlar. Bu sayede tüm sayfayı tek seferde uzun bir yükleme bekleyerek değil, sadece ihtiyaç duyulduğunda daha küçük dosyayı hızlı bir şekilde indirerek kullanıcıya daha iyi bir deneyim sunarız.
-   Kodumuzu bölmek için tüm diğer sayfalarımızı import ettiğimiz App.jsx dosyamıza geçip tüm importlarımızı lazy(()=> import) methodu ile yapıyoruz.
-   Tüm importlarımızı lazy() methoduna çevirdikten sonra tüm sayfalarımızın renderlandığı JSX'imizin çevresini Suspense componenti ile sarıp fallback{} property'si veriyoruz.
-   Bu prop'a bir loader veya bir spinner verebiliriz. Böylece sayfa arka planda indirilirken kullanıcıya birşeyler yapıldığı hakkında bilgi veririz.

### 🗃 `Local Storage`

-   Ugulamalarımıza local storage eklemek için useEffect kullanabiliriz. [] boş bir bağımlılık dizisi program her açıldığında local storage'daki kayıtları getirir.

### ⚡ `SUPABASE`

-   <a href="https://supabase.com/">Supa Base </a>
-   Geliştiricilerin kolayca bir back-end Postgres database oluşturmalarına izin veren bir uygulamadır.
-   Otomatik olarak bir database ve bir API oluşturur, böylece kolayca request atıp verilerimizi alabiliriz.
-   Back-end geliştirmeye ihtiyaç duymaz.
-   Hızlı bir başlangıç için harikadır.
-   Sadece bir API olmakla kalmayıp, kolay kullanımlı, kullanıcı güvenliği ve dosya deposu sunar.
-   👉 **npm install --save @supabase/supabase-js**
-   Supabase ile Authentication ele almak için providers Authentication > Providers kısmından provider ayarlayabiliriz. Default olarak email ile giriş yapabilmemizi sağlar. Geliştirme aşaması için confirm e-mail seçeneği kapatılmalıdır.
-   Öncelikle Authentication kısmından yeni bir user oluşturuyoruz. Ve gerekli api çağırısını projemizde yapıp react-query ile ele alıyoruz.
-   Authorization için ise bir **ProtectedRoute** componenti oluşturup **children** propunu alıyoruz ve return ediyoruz. Daha sonra Tüm uygulamamızı içeren **AppLayout componentimizi ProtectedRoute componenti ile sarıyoruz** ve ProtectedRoute içerisinde **kondisyonel** olarak ( Authenticated or Not ) children'i returnleyeceğiz.

### `CONTENT DELIVERY NETWORK [ CDN ]`

-   Bir web sitesinin statik içeriğini ( HTML, CSS, JS, Resimler ) önbelleğe alan ve her kullanıcıya mümkün olduğu kadar yakın bir yerden sunan, dünyanın her yerinde bulunan sunuculardan oluşan bir ağ.

## 🆕 `NEXTJS`

-   NextJS projelerinde bazı sabit dosya isimleri vardır ve bu yapılar ile projemizi oluştururuz.
-   **loading.js** : app folder'ı içerisinde en üst kapsamda bulunan loading sayfası proje içerisinde veri çekme durumlarının tamamında bir loader gösterebilmemizi sağlar. Eğer nested route'lar için farklı bir loader göstermek istiyorsak o route içerisinde bir loading.js dosyası oluşturabilir ve daha spesifik bir loader gösterebiliriz.
-   **layout.js** : app folder'ı içerisinde en üst kapsamda bulunan layout sayfası, sayfalar arası geçişte sidebar, header, navbar gibi değişmeyen ve proje boyunca sabit kalmasını istediğimiz yapıyı oluşturmamızı sağlar.
-   **page.js** : Her bir route içerisinden renderlanacak ve gösterilecek içerik ve işlevselliği oluşturduğumuz sayfalarımızdır.
-   **\_components** : Bir route oluşturmadan tüm komponentlerimizi içerisinde barındırabileceğimiz klasörümüzdür.
-   **\_styles** : Bir route oluşturmadan tüm stillendirme dosyalarımızı barındırabileceğimiz klasörümüzdür.
-   **icon.png** : App folder'ı içerisinde en genel kapsamda tutulan uzantısı fark etmeksizin ismi icon olan resim, browser tab'da gösterilecek favicon'u oluşturur.
-   **\_lib** : Proje boyunca kullandığımız database işlemlerimizi içerisinde tutabileceğimiz klasörümüzdür.
-   **not-found.js** : Kullanıcının araması ile eşleşen bir route bulunamayan durumlar için nextjs'in default olarak gösterdiği 404 hatası yerine gösterebileceğimiz hata mesajını içerir.
-   NextJS font'lar için çok sağlam bir performans optimizasyonu ve gizlilik sağlar ve istediğimiz herhangi bir Google fontunu otomatik olarak self-host yapmamıza izin verir böylece google'dan indirmemize gerek kalmaz.
-   Dilediğimiz fontu "next/font/google" veya local bilgisayarımızdan import edebiliriz. Örnek olarak <a href="https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#google-fonts">buradan inceleyebilirsin</a>

### `CLIENT TARAFLI RENDERLAMA [CSR]`

-   Html sayfası client tarafında derlenir, böylece ilk sayfa yüklemeleri daha yavaş gerçekleşir.
-   İndirilmesi gereken Javascript paketi büyük olabilir.
-   Veriler komponentler mount edildikten sonra yakalanır.
-   Daha fazla etkileşimlidir, sayfa değişimlerinde tam yükleme olmaz.
-   SEO konusu problemli olabilir.
-   SEO'nun önemsiz olduğu yüksek etkileşimli SPA [ Tek sayfa uygulamalar ] için oldukça uygundur. [ Örn. Sadece belirli bir şirket kullanıcılarına hitap eden uygulamalar ]
-   Data Waterfall yani aynı sayfadaki birden fazla komponentin birden fazla ihtiyaç duyduğu verinin database'den arka arkaya indirilmesi durumudur ve projeyi performans açısından olumsuz etkiler.

### `SUNUCU TARAFLI RENDERLAMA [SSR]`

-   HTML sayfası sunucu tarafında derlenir, böylece ilk sayfa yüklemeleri daha hızlıdır.
-   İndirilmesi gereken Javascript paketi daha küçüktür.
-   Veriler HTML render edilmeden önce yakalanır, sayfa derlenir ve client'a gösterilmeye hazır sayfa gönderilir.
-   Daha az etkileşimlidir, sayfa değişimlerinde HTML'in yeniden renderlanması gerektiğinde tam yüklemeye yol açabilir.
-   SEO dostudur, içerik arama motoru tarafından daha hızlı anlaşılır.
-   SEO'nun önemli olduğu içerik bazlı site ve web uygulamaları için uygundur. [ E-ticaret sitesi, bloglar, haber siteleri, marketing vb.]
-   Sunucu tarafında renderlanan komponentler içerisindeki state'leri ve dinamikliği kaybederler, bu dinamikliği geri getirmek için Hydrate kullanılır.
-   NextJs'de server-side renderlama route'ları parçalayarak yapılır. Her bir route static veya dynamic rendering ile renderlanabilir.
-   Aynı zamanda Partial Pre-Rendering bir route'daki bölümleri parça parça static veya dynamic olarak renderlayabilir.
-   Sunucu taraflı renderlama iki kategori altında ele alınabilir. [ Static (SSG - Static Site Generation), Dynamic (SSR - Server Side Rendering)]
-   Geliştiriciler genellikle bir route'ın dynamic yada static olması gerektiğine kendileri karar vermezler. NextJS belirli kondisyonlarda bunu otomatik olarak gerçekleştirir. Bu durumlar; Eğer bir route dynamic route'lara sahipse ( params kullanan bir sayfa ), sayfada searchParams kullanılıyorsa ( /product?quantity=20 ), route'ların server komponentlerinde headers() veya cookies() kullanılıyorsa, route'ların server komponentlerinden cache'lenmemiş bir veri isteği yapıldığında otomatik olarak dynamic rendering kullanılır. Çünkü bunları built zamanında bilmek mümkün değildir, sadece request time'da ulaşılabilirler.
-   #### `Static Rendering`
    -   Static sunucu taraflı renderlama, geliştiricinin deploy ettiği siteyi kullanıcılara tekrar tekrar gönderir.
    -   HTML, built zamanında oluşturulur ve renderlanır. Veya periodik olarak arka tarafta veriyi tekrar tekrar yakalayarak her veri yakalandığında renderlama yapılır.
    -   Veriler sıklıkla değişmediğinde ve kişiye özel oluşturulmadığında kullanışlıdır. (Product sayfası gibi)
    -   NextJS'de default olarak tüm sayfalar static renderlanır ( Bir veri yakalama işlemi olsa bile )
    -   Sayfa/uygulama vercel ile deploy edildiğinde her bir route otomatik olarak bir CDN'de host edilir.
    -   Eğer tüm route'lar static olarak renderlanıyorsa, tüm uygulama SSG olarak export edilebilir.
-   #### `Dynamic Rendering`
    -   Dynamic sunucu taraflı renderlama, herbir kullanıcıya daha spesifik veriler göndermek için her seferinde yeniden oluşturulma amaçlı kullanılır.
    -   HTML request zamanında oluşturulur ve renderlanır. Her bir yeni istek server'a ulaştığında.
    -   Veriler sıklıkla değişiyorsa ve kişiye özel oluşturuluyorsa kullanışlıdır. (Cart sayfası gibi kişiye özel sepet)
    -   Bir route'ı renderlamak request ile ilgili veriye ihtiyaç duyar ( CabinID gibi )
    -   Bir route belirli koşullarda otomatik olarak dynamic'e geçebilir.
    -   Vercel ile deploy edildiğinde her route sunucusuz bir fonksiyona dönüşür.
    -   Bir sayfayı dynamic olarak renderlamaya zorlamanın bazı yolları vardır. Bunlar **export const dynamic = "force dynamic"** page.js'de | **export const revalidate = 0** page.js'de | { cache: "no-store" } route'daki server komponentin bir fetch isteğine eklenerek | **noStore()** bir route'daki herhangi bir server komponentte belirterek.

### 🚿 `HYDRATION`

-   SSR ( Sunucu Taraflı Renderlama ) aşamasında kaybettiğimiz etkileşimi ve eventlerimizi geri eklememize yardımcı olur.
-   React, komponent ağacını client tarafında oluşturur ve sunucu tarafından gelen SSR Dom ile karşılaştırır. Doğru çalışabilmesi için aynı olmalıdırlar.
-   Bazı yaygın Hydration hataları şunlardır: Doğru olmayan HTML element nesting (p içinde div gibi), renderlama için kullanılan farklı veriler, yan etkiler (side effects), vb.

### `ESKI NEXT JS [ PAGES ROUTER ]`

-   2016'dan önceki nextJS sürümüdür. Hala desteklenir ve gelecekte güncelleme alacaktır.
-   Basit ve öğrenmesi çok kolaydır.
-   Arayüzler gibi basit şeyleri uygulaması daha karmaşıktır.
-   Veri yakalamada getStaticProps, getServerSideProps gibi daha çok NextJS'e özel fonksiyonlar kullanır.

### `MODERN NEXT JS [ APP ROUTER ]`

-   NextJS 13.4 (2023)'den itibaren kullanıma açılmıştır. Yeni projeler için Pages router yerine önerilir.
-   React'ın full-stack yapısını uyarlar. Server Side Components, Server Actions, Streaming gibi özellikleri vardır.
-   Veri yakalamada componentler içerisinde fetch() ile kullanılabilir, pages router'a göre daha kolay dır.
-   Arayüzler, yükleyiciler gibi komponentler oluşturmak çok kolaydır.
-   Daha gelişmiş routing sağlar.
-   Daha iyi bir geliştirici deneyimi ve kullanıcı deneyimi sağlar.
-   Caching fazla agresif ve karmaşık olabilir.
-   Öğrenimi daha zordur.

### `CLIENT COMPONENTS - SERVER COMPONENTS`

-   Client components'in stateleri vardır ve hooklar kullanılabilir. Server components'de state yoktur ve hooklar kullanılamazlar.
-   Client components'de state lifting mümkündür. Server komponents bir state'e sahip olamayacağı için state lifting söz konusu değildir.
-   Client components'de prop'lar kullanılabilir. Server komponents'te de kullanılabilir fakat dönüştürülebilir tipte bir veri olmalıdır. Bir fonksiyon veya class olamazlar.
-   Client components'de veri yakalamak için React Query tarzı 3. taraf bir kütüphane kullanılabilir. Server komponentste bu durum komponent içerisinde async await kullanılarak yapılır.
-   Client komponents sadece client komponentleri import edebilir ve kullanabilir. Server komponents ise hem server hem de client komponentleri import edebilir ve kullanabilirler.
-   Client komponents kendi state'i veya parent'ının state'i değiştiğinde yeniden renderlanırlar. Server komponents ise URL her değiştiğinde yeniden renderlanırlar.

### `REACT SERVER COMPONENTS`

-   React server components Client Side Renderlama'nın interactive ve komponentli yapısını alıp Server Side Renderlamanın kolay veri yakalama ve az Javascript dosyası ihtiyacı duymasını birleştirir ve hem etkileşimli hemde yüksek performanslı uygulamalar oluşturmamıza izin verir.
-   Veritabanından veri yakalnmasına ihtiyaç duyan her komponent server komponent'i olmalıdır. Böylece ilk renderımız çok hızlı gerçekleşir.
-   Server components sadece sunucu tarafında renderlanır. Herhangi bir etkileşimi ve state'i yoktur dolayısıyla bir javascript dosyasına ihtiyaç duymazlar.
-   RSC default olarak yeni react uygulamalarında aktif değillerdir. NextJS (App-Router) veya Remix gibi framework'ler ile oluşturulduğunda RSC kullanılabilir.
-   NextJS de oluşturulan her komponent bir Server Komponentidir. Eğer bir komponentin client komponenti olmasını istiyorsak 'use client' direktifini modülün en üstünde belirtmemiz gerekir.
-   #### `OLUMLU YÖNLER`
    -   Fullstack bir projeyi sadece React Komponentleri ve server actions ile oluşturabiliriz.
    -   Hem frontend hemde backend için tek bir kodbase olur.
    -   Daha doğrudan ve daha güvenlidir. API, API keys gibi şeyler yoktur.
    -   Client-server veri yakalama durumunda gerçekleşen waterfall'ları ortadan kaldırır. Tüm veriyi sunucuda yakalar ve client'a tek sayfa halinde gönderir.
    -   Hiçbir JS dosyasına ihtiyaç duymazlar, böylece büyük 3. taraf kütüphanelerini rahatlıkla kullanabilirler.
-   #### `OLUMSUZ YÖNLER`
    -   Daha karmaşık bir React yapısı vardır.
    -   Öğrenilmesi ve anlanması gereken çok daha fazla şey vardır.
    -   Context API gibi yapılar çalışmaz.
    -   Daha fazla karar verilmesi gereken durum vardır. (Örneğin bu client komponenti mi olmalı server komponenti mi?)
    -   Bazı durumlarda bir API oluşturmanız gerekebilir.
    -   Sadece bir framework içerisinde çalışabilir NextJS - Remix gibi

### `RSC vs SSR`

-   React server components Server side rendering ile aynı şey değildir. İkisi farklı teknolojilerdir.
-   Genellikle bir kütüphane aracılığıyla birlikte çalışırlar (NextJS)

### `APP ROUTER`

-   App router'da oluşturduğumuz her bir klasör ismi bir pathname olarak kullanılır ve her klasör içerisinde o pathname ile eşleşen bir page.js modülü oluşturmalıyız.
-   Oluşturduğumuz bir klasör'ün pathname olarak algılanmasından kaçınmak için **\_components** şeklinde bir tanımlama yapabiliriz. Böylece components adında bir path oluşturulmaz.

### `SUSPENSE`

-   Suspense bir built-in react komponentidir. Henüz renderlanmaya hazır olmayan asenkron işlem barındıran komponentleri isole eder ve asenkron işlem tamamlanana kadar bekler. Asenkron işlem devam ederken belirlediğimiz fallback komponenti işlemin devam ettiğini ekranda gösterebilmemizi sağlar.
-   isLoading durumları yerine artık yapılan işlemin henüz devam ettiğini bilmek ve belirtmek için suspense kullanırız.
-   Asenkron bir işlem gerçekleşen sayfanın tamamını suspense etmek yerine sadece gerçekten asenkron işlemin bulunduğu parça arayüzü suspense etmek önemlidir. Böylece halihazırda var olan verilerimiz diğer verilerin gelmesini beklemez. Bunu yapmak için asenkron işlem bulunan komponenti kendi ayrı komponentine extract etmeli ve suspense ile sarmalıyız.

### `DYNAMIC ROUTES`

-   Bir dinamik route oluşturmak için parent klasör içerisinde [ ] köşeli parantezler ile örneğin bir [ cabinId ] isimli klasör ve içerisinde page.js oluşturmamız gerekir.
-   Oluşturulan bu dynamic route oluşturduğumuz klasör isminde params içerisinde bir değişken alır ve bu değer route'ı dinamik yapan değerdir. Dinamik veri yakalamak ve göstermek için kullanabiliriz.
-   Dynamic route'larımıza dynamic bir metadata oluşturmak için **export async function generateMetadata( { params } )** fonksiyonunu kullanabiliriz. Bu fonksiyon page'de olduğu gibi params parametresi alır ve cabinId'ye erişimi vardır. Böylece fonksiyon içerisinde bu id ile yine veri yakalayıp fonksiyon içerisinden önceki gibi bir obje döndürerek title'ını istediğimiz herhangi bir değer olarak setleyebiliriz.
-   Dynamic bir route'ı static olarak exportlamak için NextJS'e mümkün olan tüm dynamic segment ihtimallerini **export async function generateStaticParams()** fonksiyonu ile söyleyebiliriz böylece tüm sayfalarımız static olarak export edilebilir ( SSG ). Tüm uygulamayı SSG olarak export etmek için öncelikle next.config dosyasında **output: "export"** belirtmemiz gerekir. Sornasında npm run build yaparak out adında yeni bir klasör oluşumunu sağlayabilir ve istersek ismini daha genel bir isim olan **dist** yapabiliriz.
-   Tüm uygulamamızı SSG olarak export etmediğimiz durumlarda Vercel dışında bir hosting server'ı ile deploy etmek oldukça zordur. SSG olası tüm hosting serverlarına kolayca deploy edilebilir.
-   SSG ile export edilen projede NextJS'in sunduğumu Image komponenti çalışmaz, dolayısıyla resimlerimiz bozulur. Çünkü Image komponentinin çalışması için arka planda Vercel kendi serverlarını kullanarak resimleri optimize eder ve bu olay arka planda dinamik olarak gerçekleşir. SSG export yaptığımızda bu server tamamen yok olur dolayısıyla resimlerimiz görünmez. Bunu çözmenin 2 yolu vardır. Birincisi Image komponenti yerine img elementi kullanmak ve resimleri optimize etmemeyi tercih etmek, diğer yöntem ise kendi loader'ımızı yapıp farklı bir server kullanarak resimlerimizi optimize etmek ve göstermektir ( Cloudinary ). <a href="https://nextjs.org/docs/pages/building-your-application/deploying/static-exports"> Buradan </a> static export ve image optimization hakkında bilgi alabilirsin.

### `ERROR BOUNDARY IN NEXTJS`

-   Diğer yapılarımızda olduğu error boundary için de bir error.js dosyası oluşturmamız gerekir.
-   Error bountry dosyamız her zaman bir client component olmak zorundadır. Modülümüzün en başında 'use client' komutuyla bu durumu gerçekleştirebiliriz.
-   Oluşturduğumuz error sayfamızın iki parametreye erişimi vardır. {error , reset}.
-   Error parametresi ile hatamızı ekranda gösterebilir, reset fonksiyonu ile ise ekranda bulunabilecek bir buton ile kullanıcının hatanın düzelme ihtimaline karşı tekrar denemesini sağlayabiliriz. Veya kullanıcıyı anasayfamıza yönlendirebiliriz.
-   Error boundary root layoutta gerçekleşen bir hatayı yakalayamaz. Bu hataları da yakalayabilmek için global-error.js isimli bir dosya oluşturmamız gerekir.
-   Error handling için <a href="https://nextjs.org/docs/app/building-your-application/routing/error-handling">buraya gidebilirsin</a>

### `NOT-FOUND PAGE`

-   Not found page kullanıcı projede bulunmayan bir route'a geçmeye çalıştığında gösterilir. NextJS'de covention olarak **not-found.js** olarak dosyamız root klasörümüzde oluşturulur.
-   Bunun dışında manuel olarak not-found sayfasını göstermek istersek **notFound()** fonksiyonunu dilediğimiz yerde next/navigation'dan import ederek not-found sayfasını trigger edebiliriz.
-   Aynı zamanda daha spesifik not-found sayfaları oluşturmak için root klasörde oluşturduğumuzun yanısıra diğer klasörlerimizin içerisinde de not-found sayfası oluşturabiliriz böylece root klasörde oluşturduğumuzun üzerine yazar.

### `PARTIAL PRE-RENDERING`

-   Bu yöntem çoğu sayfanın 100% static yada 100% dynamic olması gerekmediğinden yola çıkılarak bulunmuştur. İki durumun karması olarak anlatılabilir.
-   Örneğin diğer tüm sayfanın static renderlandığı bir durumda sadece header'da login olan kullanıcının ismininin yazması tüm projeyi dynamic olarak çalıştırır. Bunun yerine sadece kullanıcı adının bulunduğu bölgeyi dynamic, diğer tüm projeyi static olarak renderlamak projemize büyük bir performans kazancı sağlar. ( Static renderlama CDN'ler ile çalıştığı için ). Şuan NextJS'de bu özellik bulunmuyor. Fakat gelecekte bir Next versiyonunda bunu kullanmak için yapılması gerekecek şeyler şunlardır.
-   Öncelikle next.config dosyasından PPR (Partial Pre-Rendering) açılmalıdır.
-   Dynamic parçalar (components) Suspense ile sarılmalıdır. Böylece tüm route yerine hangi parçanın dynamic olması gerektiği belirtilecektir.
-   Bu dynamic parçalar yüklenirken gösterilecek static bir fallback bırakmamız gerekecektir.

### 🖊 `Arka planda nasıl çalışır`

-   Imperetive(Zorunlu) ve Declarative(Bildirimsel) arasındaki fark VanillaJS ve React farkında gözle görülmektedir. VanillaJS'de bir çok eylemi bizzat siz yapmanız gerekir. Fakat React'ta ne yapması istediğinizi söyler ve gerisini ona bırakırsınız.
-   React'ta veri akışı tek yönlüdür. Parent'tan child'a. Böylelikle birçok problemin önüne geçilir, karmaşıklıklar azaltılır. [ Ayrıca Angular iki yönlü data akışı sağlar. ]
-   React Devtools bir geliştirme aracıdır. Chrome aracılığı ile de ulaşabileceğiniz bu eklenti program süresinde component tree, states ve birçok durumu etraflıca kontrol edebilmenizi sağlar. 💙
-   Aynı zamanda yine React Devtools projenizi optimize etmenizi sağlayan Profiler sekmesine sahiptir.
-   Her component için bir dosya oluşturmak büyük karmaşıklıkların önüne geçer. Her zaman bu metodolojiyi uygulayın.
-   Reconciler yani Fiber basitçe geçmiş state ve güncellenmiş state'i karşılaştırıp değişen durumlar için render yapıp değişmeyenleri sabit bırakır.
-   Event Propagation ve Event Delegation kavramları bir eventin gerçekleşme süreci ile ilgilidir. Ne zaman dökümanda bir evet gerçekleşse, event dökümanın en üst düzeyindeki parent elementten eventin gerçekleştiği noktaya kadar yolculuk yapar ve eventi bulur. Aksi takdirde eventin nerede gerçekleştiğini bilmenin bir yolu yoktur. Bu yüzden eventi bir üst parent'a taşıyıp altındaki tüm elemanlar için gerçekleşmesini sağlayabiliriz.
-   Event'in nerede gerçekleştiğini bulmak adına başlayan bu süreç Capturing Phase(Yakalama aşaması) ve bulduktan sonra Bubbling Phase(Kabarcıklanma aşaması) olarak tanımlanır.
-   React bir kütüphanedir(library), bir çerçeve(framework) değildir. Çünkü bir çerçeve bünyesinde ihtiyacınız olan tüm geliştirme araçlarını barındırır. Bir kütüphane istediğiniz geliştirme aracını tamamen kendi istediğinize göre seçmenize ve kullanmanıza izin verir.

### `Daha fazla 3rd-Party React kütüphanesi 👇`

-   Routing için ▶ **React Router / React Location / NextJS**
-   HTTP requests ▶ **fetch() / Axios**
-   Uzaktan Durum Yönetimi ▶ **React Query / SWR / Apollo**
-   Küresel Durum Yönetimi ▶ **Context API / Redux / Zustand**
-   Şekillendirme ▶ **CSS Modules / Styled Components / Tailwind CSS**
-   Form Düzenleme ▶ **React Hook Form / Formik**
-   Animasyonlar - Transitions ▶ **Motion / React Spring**
-   Arayüz bileşenleri ▶ **Chakra / Mantine**

### 📜 `React Hakkında Pratik Özetler` <img style="width: 25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207">✍

### **⏳ Render'lama Hakkında**

-   Renderlama tamamen component fonksiyonlarını çağırma ve hangi elementlerin eklenmesi, silinmesi veya güncellenmesi gerektiğinin kontrolü ile ilgilidir. DOM'a herhangi birşey yazmaz.
-   Bir component instance renderlandığında yada yeniden renderlandığında fonksiyon tekrar tekrar çağırılır.
-   Ne zaman bir component instance yeniden renderlansa tüm child'ları da renderlanabilir. Bu hepsinin kesinlikle güncelleneceği anlamına gelmez. İki render arasında sadece değişim yaşayan child'lar yeniden renderlanır.
-   DOM, commit phase denen aşamada güncellenir, ama React tarafından değil. Renderlayıcı olarak da isimlendirilen ReactDOM tarafından. Bu durum, projelerimize neden her zaman hem React hem de ReactDOM'u eklediğimizi açıklıyor.

### 🆚 ` Diffing ( Farklılaşan )`

-   Diffing, React'ın hangi DOM elementlerinin eklenmesi veya değiştirilmesi hakkında karar vermesini sağlar. Eğer renderlar arasında bir React elementi Fiber Tree'de aynı pozisyonda duruyorsa bu component ve state'i sabit kalır. Eğer element değiştiyse veya farklı bir pozisyondaysa element ve state yok edilir.

### `Error Boundaries`

-   👉 **npm i react-error-boundary**
-   Bu paket bize react ile renderlama aşamasında yaşadığımız hataları ele almamız ve ekranda **kullanıcıya birşeylerin yanlış gittiğini** gösterebilmemizi sağlar.
-   Tüm projemizi render yaptığımız dosyamızda **ErrorBoundary** componentine sarmamız gerekir.
-   Prop olarak bir **Fallback componenti** alır, hata durumunda göstereceğimiz componentimizi içerisine yazacağız.
-   Kullanıcıya geri gidebilmesi için bir buton oluşturabiliriz ve bu butonun çalışması için **ErrorBoundary componentine onReset** prop'u vermeliyiz.
-   Sonrasında Fallback componentimiz içerisinde **resetErrorBoundary** isimli bir prop alabilir ve bu prop'u butonumuza verebiliriz.

### ⌨ `React ile yaptığım bazı Codesandbox pratikleri` ⏬

-   <a href="https://t.ly/_9303">📆 Date Counter </a>
-   <a href="https://t.ly/qxh5X">📕 Small Exam with State</a>
-   <a href="https://t.ly/dq3vf">🃏 User card and List Rendering</a>
-   <a href="https://t.ly/wYSUl">📜 Accordions</a>
-   <a href="https://t.ly/mkXpt">💰 Bill Calculator </a>
-   <a href="https://t.ly/BX59P">🅰 Reusable-Flexible Text Expander Component</a>
-   <a href="https://t.ly/H3LuI">💲 Currency-Converter </a>
-   <a href="https://t.ly/LI6sf">🏦 useReducer Bank </a>

### `Cypress Test`

-   context() ve describe() aynıdır, specify() ve it() aynıdır. Kullanıma göre istediğimizi seçebiliriz. <a href="https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests?utm_source=Binary%3A+Launchpad&utm_medium=Docs+Menu&utm_content=Organizing+Tests#Test-Structure"> Buradan incele </a>
-   Aynı şekilde Mocha tarafından sunulan bazı hooklar'a da <a href="https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests?utm_source=Binary%3A+Launchpad&utm_medium=Docs+Menu&utm_content=Organizing+Tests#Hooks"> buradan bakabilirsin </a>
-   Excluding & Including test, yani test ekleme veya test çıkarma tek seferde tek bir test yapmamıza olanak verir. <a href="https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests?utm_source=Binary%3A+Launchpad&utm_medium=Docs+Menu&utm_content=Organizing+Tests#Excluding-and-Including-Tests"> Buradan incele </a>
-   Özellikle materialUI veya benzeri harici componentler ile çalıştığım projelerde data-test-id prop'u geçersiz kılınabiliyor. Bu sebeple data-test-id yerine name özelliğini kullanarak test yapabilirsin.

### 💬 `Commit Examples`

-   feat: add new feature
-   fix: fix bug
-   docs: update README.md
-   style: fix formatting
-   refactor: refactor code
-   perf: improve performance
-   chore: update dependencies
-   revert: revert to commit 123456

### `Peer Legacy Deps Hatası`

-   Eğer projede bu hatayı alıyorsak düzeltmek için şu komutu terminalde uygulayabiliriz.
-   👉 **npm config set legacy-peer-deps true**
-   Böylelikle hata almadan devam edebiliriz.
-   Netlify deploy'unda hata alırsan deploy aşamasında en aşağıdan bir environment variable oluşturup key = NPM_FLAGS ve value = --legacy-peer-deps vererek düzelmesini sağlayabilirsin
