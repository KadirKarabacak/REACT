# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30" /> REACT

Bu depoda toplu olarak "React" ile yaptığım tüm işlerimi tutuyorum.

## 🖊 Şimdiye kadar neler öğrendim?

### ⚒ Öncelikle kurulum ile başlayalım. Sonuçta herşey bununla başlıyor.

#### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="20" height="20" /> Create-react-app

- Bir React projesi oluşturmak için her zaman cmd komut satırına girip **"create-react-app@latest"** komutunu kullanarak ve yanına proje ismimizi vererek bir React proje dosyası oluşturuyoruz.
- Gerçek dünya projelerinde her zaman **"Vite"** kullanmalıyız çünkü **"performans ve topluluk desteği"** bakımından Create-react-app'den daha popüler. Ama öğrenmek amaçlı create-react-app hala kullanılabilir.

#### <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png" style="width: 20px"> Vite

- Bir Vite projesi kurulumu içinse **"npm create vite@latest"** komutunu kullanarak onay verdikten sonra proje ismimizi yazıyoruz. Daha sonra kullanacağımız teknoloji seçimini yapıp o teknolojiye özel bir template alıyoruz. Vite **"bağımlılıkları otomatik yüklemez"**. Bu nedenle proje dosyamıza girip bağımlılıklarımızı manuel olarak yüklemeliyiz. Create-react-app'deki index.js dosyası yerine main.jsx dosyamız mevcut. Aynı şekilde app.js yerine de App.jsx. Projemizi başlatmak içinse npm start yerine **"npm run dev"** komutunu kullanıyoruz.

#### ⚙ Olası durumlar için Vite Projelerine **"Eslint"** kurulumu ve ayarları

- Şuanda Vite projeleri eslint eklentisi ile birlikte geliyor ki bu durum çok önemli. Fakat olası bir durumda gelmediğini varsayarsak şunları yaparak kurabiliriz.
- **npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev** ve yükleme tamamlandıktan sonra **.eslintrc.json veya .eslintrc.cjs** isminde bir dosya oluşturup ayarlarımızı uygulayabiliriz.
- {
- "extends": "react-app"
- }
- Daha sonra vite.config dosyamıza girip **import eslint from "vite-plugin-eslint"** yapıyoruz.
- Son adım olarak plugins dizisine eslint importumuzu ekliyoruz.

### 🎨 React Stil Opsiyonları

- **"İnline"** olarak JSX içerisinde style prop'u kullanarak yapabiliriz.
- **"Harici bir CSS veya SASS**" dosyası ile className özellikleri oluşturarak yapabiliriz. Fakat bu durum bütün uygulamayı etkilediği için özellikle **"büyük çaplı projelerde çakışmalar"** yaşamak mümkündür.
- **"CSS Modules"** her bir bileşen için harici bir css dosyası oluşturmamızı sağlar, böylece çakışmalar önlenir ve sadece o bileşene özgü stiller oluşturabiliriz. Creat-react-app ve vite içerisinde otomatik olarak gelir. Sadece element yazarak "ul,li,div" gibi stilleme yapamayız. Yaparsak yine tüm proje için geçerli olur. ClassName koşulu zorunludur.
- **"CSS-in-JS"** dediğimiz yöntem ile yeni bir component oluşturarak stilleme yapabiliriz.
- **"Utility-first CSS"** dediğimiz yapıya uygun olarak **"Tailwindcss"** kullanarak JSX içerisinde Bootstrap'te olduğu gibi sabit className'ler ile yapabiliriz.
- Alternatif olarak hiç CSS yazmadan bazı arayüz kütüphaneleri olan **"MUI, Chakra UI, Mantine"** gibi hazır component yapısı sunan kütüphaneleri kullanabiliriz.

### 💻 Render'lama

- Bir **"component"** basitçe kullanıcı arayüzünü oluşturan lego parçalarına benzetilebilir. Her zaman büyük harfle başlamalıdır **[ function Header() ]**
- JSX bir component'in içerisinden döndürdüğümüz **"HTML benzeri"** bir yapıdır. İçerisinde **"JS ve CSS"** kullanmamıza olanak sağlar.
- **"Kondisyonel renderlama**" bir koşula bağlı olarak bir DOM elementini veya bir component'i gizleyip gösterebilir. State değişimine bağlı olarak arayüzde farklı görünümler oluştururuz.
- Birden fazla bileşen renderlamak istediğimizde döngüler kullanırız. Örneğin .map() methodu React'ta birçok noktada kullanılır.
- Döngüler kullanarak renderladığımız bileşenlere **"key özelliği**" vermemiz gerekir. Key özelliği **"yeri ve içeriği değişmeyen**" elemanların tekrar tekrar renderlanmasını engeller ve **"performansı arttırır**".
- **"React Fragment**" olarak adlandırdığımız yapı JSX'te bir parent element yerine birden fazla kardeş element renderlamak istediğimizde bu elementleri çevreleyen bir parent oluşturur. Yeni bir **"div oluşturmaktan kaçınmak**" istediğimizde tercihimizdir. [ <>, </> ]
- **"Component composition**", bizim çok fazla prop kaydırma gerektiren durumlarda imdadımıza yetişir. Alt componentleri ana component'in açılış ve kapanış tag'leri içine taşırız ve children prop'u vererek içeriğini tamamen taşımasına olanak sağlarız. Aynı zamanda parent component'in yeniden kullanılabilirliği adına mükemmel bir adımdır. Genel olarak _Prop Drilling_ adı verdiğimiz durumdan kaçınmamızı sağlar.
- _Component, Instance ve Element_ arasındaki farklar; Component tamamiyle bir bileşendir. Instance componentlerin çoğaltılmış örnekleridir ve aynı özellikleri barındırır. Element tamamen DOM ile ilgilidir, HTML'de kullandığımız yapılar birer elementtir.
- Dışarıdan aldığımız bir değişkeni değiştirmek, HTTP çağırıları gibi durumlar kodumuzda yan efektler oluşturur ve bu durum renderlamada kaçınmamız gereken durumlardan biridir.
- _Pure function_ dediğimiz fonksiyon türü hiçbir yan etkiye sahip olmaz. Verilen değer, çıkan değer ile aynıdır.

#### 🔴 Renderlama mantığında bazı katı kurallar vardır.

- **HTTP çağırıları** yapamazsınız.
- **Zamanlayıcılar** başlatamazsınız.
- **DOM API**'ını direkt kullanamazsınız.
- **Obje veya değişkenleri** mutate edemezsiniz.
- **State güncellemesi ve ref güncellemesi** yapamazsınız. Program sonsuz döngüye girer.
- Side effectler sadece **handler fonksiyonlar** içerisinde izin verilir. Bunun dışında birde **useEffect hook**'u dahilinde kullanabiliriz.

### ℹ Prop'lar

- Proplar basitçe **parent componentten child component**'lere iletilebilen değişkenlerdir. Aynı anda birden fazla componentte kullanılması gereken değişkenler için kullanılır. Kod içindeki karmaşıklığı azaltmak adına props.anything demek yerine componente dahil ederken {anything} destructure yaparak alırız.
- **Proplar değiştirilemez**. Sadece okunur. "Readonly".
- **Children prop** rendering kısmında da belirtildiği gibi component composition gibi durumlarda işlevseldir.
- **Prop drilling** Parent component'lerden child component'lere veri akışını ifade eder.
- **Bir prop olarak bir elementi** child elemente gönderebiliriz. Çok kullanışlı olduğu söylenemez. Child prop'una alternatif olarak gösterilir.
- **Diğer geliştiricilerin** kullanımı için olabildiğince _esnek ve yeniden kullanılabilir_ componentler yazmak önemlidir. Aynı zamanda diğer projelerinize de dahil edebilirsiniz. _Harici state, proptypes_ gibi durumlara hakim olmalısınız.
- _Key prop'u Diffing algoritmasına_ bir bileşenin benzersiz (unique) olduğunu belirtir.
- _Key prop'u_ liste itemlarında state'i dağılmadan tutabilmek veya tamamen state'i sıfırlamak için kullanılabilir.

### ♦ State'ler

- const [count, setCount] = useState(0) -- Bir state örneğidir. count bizim ekranda göstereceğimiz değer, setCount arka planda tıklama farklı etkilerle count değerini güncelleyen fonksiyon, ve 0 ise count'ımızın başlangıç değeridir.
- Önceki state'e bağlı olarak yeni bir state türetilmesi istenen durumlarda _setCount((anything)=> anything+1)_ gibi callback fonksiyonları içerisinde güncelleme yapmalıyız. State asenkron şekilde işlediğinden callback fonksiyon içerisinde çağırmaz isek state hep aynı kalır.
- useState gibi farklı React hook'ları da mevcuttur. Bunlardan bazıları useEffect, useReducer vb. useEffect componentin dışarıyla olan iletişimini kontrol eder örneğin HTTP request. useReducer ise useState'e bir alternatiftir. Her değişmesi istediğimiz durum için bir useState oluşturmak yerine tamamını useReducer içerisinde güncelleyebiliriz.
- Hook'ları asla bir kondisyona bağlı yazmamalıyız. Globalde erken return'ler yapmamalıyız. Tüm hookların fiber tree adı verdiğimiz ağaçta bir yeri vardır. Kondisyonel olarak bunun değişmesi programı bozar.
- Kontrol edilmiş elementler olarak adlandırdığımız yapılar form elemanlarıdır. Input, select, range vb. elementleri kontrolümüze alıp her girilen değeri hafızaya kaydetmesini ve ekrana göstermesini sağlayabiliriz.
- State Management kavramı ne zaman yeni bir state oluşturmamız, ne zaman türetilmiş state'ler kullanmamız ve bir state'in nereye konumlandırmamız gerektiğini ifade eder.
- Derived State ( Türetilmiş durum ) bir state değişkenine bağlı olarak türetilmiş sabit değişkendir. Bazı durumlarda yeni bir state üretmek yerine varolan'dan yenilerini türetmemizi sağlar.
- State Lifting kavramı child componentlerden birisinde oluşturduğumuz bir state'i gerektiğinde birden fazla sibling(kardeş) component'e dağıtmak için en yakın parent elemente taşımak anlamına gelir.
- State Group Batching ifadesi, bir handler fonksiyon içerisinde birden fazla gerçekleşen state güncellemesini tek bir güncelleme gibi görüp programımıza performans kazandıran bir terim ve uygulamadır. React@18 ve üzerinde geçerlidir.

### 🤏 Use Reducer

- Bir useReducer örneği 👉 const [state, dispatch] = useReducer(reducer, initialState)
- State oluşturmak için alternatif bir yoldur. useState'e göre anlaması ve uygulaması birazdaha zordur. Karışık state'ler, _birbirleri ile ilişkili_ state'ler ve birden fazla state güncellemesi gereken durumlar için idealdir.
- İlişkili state parçalarını bir _obje_ içerisinde tutar.
- useReducer state update'lemek için gerekli tüm mantığı içerisinde barındıran bir _reducer fonksiyona_ ihtiyaç duyar. State mantığını component'lerden ayırır.
- _Reducer_ fonksiyon bir pure fonksiyondur, anlık state'i ve action özelliğini alıp yeni state'i çevirir.
- Genellikle reducer fonksiyon içerisinde bir _switch-case_ yöntemi kullanılır.
- _action özelliği_ state'in nasıl güncelleneceğini belirtir.
- dispatch fonksiyonu state güncellemelerini tetiklemek için kullanılır. reducer fonkksiyona actions özelliğini gönderir.

### ↗↖ Router ( Yönlendirici )

- Router oluşturmak için öncelikle **"BrowserRouter"**, daha sonra **"Routes"** ve son olarak her bir gezinim için bir **"Route"** oluşturmalıyız. Kullanıldıkları konuma Eslint'i kızdırmamak için hepsini import etmeliyiz.
- Her Route'ın bir **path** propu ve bir **element** prop'u olmalıdır. Yani hangi path'de hangi elementin görünmesini istediğimizi belirtiyoruz.
- Nested router kullanmak için açılış ve kapanış tagleri arasına yeni Router'lar oluşturabiliriz. Child router'lara parent'in path'ini vermemize gerek yoktur.
- Daha sonra bu child Router'ları gerçek anlamda gösterebilmek için **"Outlet"** component'ini görünmesini istediğimiz konuma import edip yerleştirmeliyiz.
- **"Index Route"** bize hiçbir child Route o index ile eşleşmiyorken default olarak bir child Route göstermemize olanak sağlar. Index Route'u kullanmak için yeni bir child Route oluştup prop olarak **"index"** vermemiz ve renderlamak istediğimiz element'i yazmamız yeterli. Bu durumda path prop'u önemsizdir. Aynı özelliği projemizin **HomePage** sayfası içinde kullanabiliriz.
- Router ile farklı URL'leri farklı kullanıcı arayüzü görünümleri ile eşleştiriyoruz.
- Bu durum kullancılara tarayıcı URL'ini kullanarak uygulamanın farklı arayüzleri arasında gezinim sağlıyor.
- Kullanıcı arayüzünü anlık tarayıcı URL'i ile **senkronize** tutuyor.
- **Single Page Applications** [ Tek sayfa uygulamalar ] oluşturmamıza olanak veriyor.
- Aynı zamanda React Routes'a gelişmiş bir Tab Component olarak da bakabiliriz.
- URL kullanıcı arayüzü state'ini saklamak için mükemmel olabilir. Bazı durumlarda useState yerine kullanılabilir. Bu durumlardan bazıları açılır/kapanır paneller, seçili liste elemanı, liste sıralaması, uygulanmış filtreler vb. Bir E-commerce sitesinde bir eşyaya renk, ebat veya farklı filtreler uygulayıp bir arkadaşınızla paylaştığınızı düşünebilirsiniz. Bu durumda URL içinde state tutmak faydalıdır, çünkü paylaşılan URL tam olarak seçilen filtreleri içerisinde barındırır.
- State'i global alanda saklamanın en kolay yoludur URL'ler. Tüm component'lerin erişimi vardır.
- URL state'i bilgiyi bir sayfadan diğerine geçirmek için iyi bir yoldur.
- Belirli bir zamanda yapılan sayfa işaretlemelerini paylaşmayı ve daha sonrasında tam olarak o noktaya erişmeyi mümkün kılar.
- 3 parçadan oluşur. 1.'si _path_ daha önce Router'lara tanımladığımız gibi. 2.'si **"params"** yani parametreler. 3.'sü ise **"query string"** yani sorgulardır.
- _Parametre_'leri kullanabilmek için 3 aşamaya ihtiyacımız var. Öncelikle yeni bir **Route oluştururuz**, sonra bu Route'a **link veririz** ve bu Route içerisinde **useParams() aracılığı ile** URL'den gelen state'i okuruz.
- URL'deki query strings( sorgu dizileri )'i ise **useSearchParam** ile okuyabilir ve kullanabiliriz.
- _Programmatic Navigation_ (Programlı gezinme) kullanıcı herhangi bir link'e tıklama yapmadan kullanıcıyı yeni bir URL'e götürme işlemidir. Bu durumun en yaygın kullanım alanı **form submit**'tir.
- Bir başka Router hook'u ise _useNavigate()_, bu hook basitçe bir fonksiyon döndürür ve bu fonksiyonu kullanarak bir etkileşime bağlı dilediğiniz path'e gidebilirsiniz. const navigate = useNavigate() -> navigate("form") örneğin. Veya navigate(-1) bir adım geri gelmemizi sağlar.
- Aynı zamanda daha declarative bir yol olan <"Navigate"/> componentini "to" özelliği ile kullanabiliriz.
- <"Navigate"/> componentinin "replace" özelliğin geçmişte geriye gitmemizi sağlar.

### 🌟 Context API

- Birden fazla derinlikte bulunan child componentlere state geçirmek ve kullanmak istediğimizde bu state'i kullanmayacağımız componentler üzerinden geçerek kod kirliliği ve hantal bir yapı oluşturmak yerine direkt kullanmak istediğimiz child component'e bu state'i vermemizi sağlayan yapıdır.
- Basitçe Prop Drilling problemimize net bir çözümdür.
- Ne zaman provider aracılığı ile ilettiğimiz state güncellenirse, bu değeri kullanan child componentler'de yeniden renderlanır.
- State'imizi uygulamamızın baştan sonuna globalde yayınlar.
- 3 Aşamadan oluşur.
- İlk aşama createContext() kullanarak geçireceğimiz propların isminde bir provider oluşturmak. Örn _const Posts = createContext()_. createContext bir component döndürür, bu sebeple değişken ismimiz büyük olmalıdır.
- İkinci aşama JSX'imizi Posts.Provider componenti ile sarmak ve value prop'una geçirmek istediğimiz tüm propları yazmak.
- Üçüncü ve son aşama Consumers (Tüketiciler) provider tarafından yayınlanan context değerini okuyan tüm componentlerdir.

### 🗺 Projelerde kullanmak isteyebileceğimiz Leaflet (Map) kütüphanesi

- Basitçe **"npm i react-leaflet leaflet"** komutu ile hem react hem normal leaflet kütüphanesini projemize dahil ediyoruz.
- Daha sonra CSS dosyamıza @import **"https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"** leaflet'in CSS işlevselliğini eklememiz gerekiyor.
- Son olarak React içinde render yapabilmek adına **"https://react-leaflet.js.org/"** sitesinden alacağımız MapContainer, TileLayer, Marker ve Popup componentlerini içeren komut satırlarını kopyalayıp projemize dahil ediyoruz.

### ⚡ Tek Sayfa Uygulamalar [ SPA ]

- Uygulama baştan sona client (tarayıcı) tarafında çalıştırılır.
- Farklı URL'ler farklı görünümlerle(components) ilişkilidir.
- Sayfa asla yeniden yüklenmez.
- Normal bir masaüstü veya mobil uygulama gibi hissettirir.
- Gerekli olan ekstra bilgiler bir web API'ı tarafından sağlanabilir.

### Sahte Giriş (Fake Login) ve Kullanıcı Doğrulaması (User Authentatication)

- Sahte bir giriş oluşturmak için 3 aşamamız mevut.
- İlk aşamada kullanıcının e-mail ve şifresini bir giriş formundan alıyoruz, API uç noktası ile e-mail ve şifrenin doğruluğunu kontrol ediyoruz.
- İkinci aşamada, kimlik bilgileri eğer doğruysa kullanıcının uygulamaya girişine izin veriyoruz ve kullanıcı objesini state'imizde kaydediyoruz.
- Üçüncü ve son aşama olarak uygulamamızı doğrulamasız ve yanlış bilgi girilmiş durumlardan korumamız gerekiyor.

### 📦 Ref'ler

- Refler bir kutu gibidir ve mount ve re-render'lar arasında değişmez. State'in renderlardan etkilenmeyen versiyonu gibi görebiliriz. Elementlere class vermeden seçmemizi sağlar.

### ✨ Side Effect'ler

- Side effect bir React componentinin (bileşeninin) bu bileşen dışındaki bir dünyayla etkileşim kurması sonucu oluşur. Yine HTTP request'lerini örnek verebiliriz.

### ⚔ Event Handler'lar

- Bir event gerçekleştiğinde çalıştırılırlar.
- Side Effect'ler oluştururken tercih edilen bir yöntemdir. Bunun yanı sıra useEffect çok daha efektiftir.

### ✨ Use Effect'ler

- Bir component sayfaya mount'landığında [ Yani başlangıçta ] ve sonraki re-render'larda çalışır ( _Bağlılık dizisine verdiğiniz değerlere göre değişir_ ).
- Bağımlılık dizisi olmadan, React effect'i ne zaman çalıştıracağını bilmez.
- Effect içinde kullanılan her state değişkeni ve prop bağımlılık dizisine eklenmelidir. Aksi taktirde çalışmaz.
- Bir component'i harici bir sistem ile senkronize tutmaya yarar. Örneğin API çağırıları.
- UseEffect bir eventlistener'a benzer. Bağımlılık dizisindekilerin değişmesini gözlemler. Her değişimde tekrar tekrar çalışır.
- [] Sadece başlangıçta çalışır. _( initial render )_, [ x,y,z ] başlangıçta, x,y ve z her güncellendiğinde çalışır. Bağımlılık dizisi olmazsa programda değişen herşey tekrar tekrar çalışmasına sebep olur. Performans için berbat bir durum. ⛔
- Cleanup fonksiyonu sideEffect'leri temizlemek için kullanılır ve performansı arttırmaya yardımcı olur.

### 🟥 API Cağırıları ve Hata yakalama

- Her zaman API çağırıları try ve catch blokları içerisinde yapmalısınız.
- Hataları ele almak ve ekranda göstermek için yeni bir state oluşturmalısınız. const[error, setError]= useState("") gibi.
- Kondisyonel renderlama bu noktada çok önemlidir. Eğer bir hata varsa ekranda anlamlı mesajlar göstermelisiniz. Yukarıdaki örnekten yola çıkarak error değişkenini ekrana yazdırabilirsiniz.
- Her zaman response.ok özelliğini kontrol etmeli ve bir hata varsa ekrana yazdırmalısınız.

### ⚡ Performans ve Optimizasyon ☄

- 3 aşamadan oluşan bir takip listemiz olabilir.
- Birinci olarak Boşa harcanan render'ları engelleme (Prevent Wasted Renders). Bu aşamada kullanabileceklerimiz memo, useMemo, useCallback ve elementleri child olarak yada prop olarak aktarma olabilir. Bu optimizasyonu uygulayabilmek için bileşenlerin ne zaman yeniden renderlandığını bilmemiz gerekir.
- İkinci aşama uygulama hızını ve duyarlılığını iyileştirme. Bu noktada da useMemo, useCallback ve daha modern bir araç olan useTransition kullanılabilir.
- Üçüncü aşama ise dosya boyutu düşürme, bunun için de 3rd party paketler, kod bölme (code splitting) ve tembel yükleme (lazy loading) özellikleri uygulanabilir.
- Yavaş çalışan bir componenti "Children" prop'u ile extract edip children konumuna koyarsak parent renderlarından etkilenmez, bu da optimizasyonu arttırır.

#### "memo" Fonksiyonu

- Bu fonksiyon tamamiyle optimizasyon amaçlı olup, Parent component yeniden renderlandığında eğer **child component'de değişen bir prop** yok ise yeniden renderlanmasını engellemek amacıyla vardır. **Sadece proplara** etki edebilir. Yani memoized bir component kendi state'i veya bağlı olduğu bir context değiştiğinde yeniden renderlanmaya devam eder. Bu demek değildir ki her componentimize memo fonksiyonu uygulamalıyız. Sadece bir component çok ağır (yavaş renderlanan) veya çok sık yeniden renderlanan ve hep aynı proplara sahip olan componentler için geçerlidir.
- Bazı durumlarda bir component memoized olsa bile, parent component'ten aldığımız ve parent içerisinde oluşturulmuş bir obje veya bir fonksiyon, her seferinde parent yeniden renderlandığında tekrar tekrar oluşturulacaktır. Bu da aldığımız prop'un değiştiğine işaret eder ve memo'yu görmezden gelir. ( {} != {} ) Bu noktada aldığımız obje ve fonksiyon propları sabit kılmak için **"useMemo"** ve **"useCallback"** devreye giriyor.
- Bu durumlar dışında kalan bir istisna var ki o da setter fonksiyonlarımız. Yani useState için oluşturduğumuz setter fonksiyonlar kendiliğinden memoized olarak gelir. Bir prop olarak gönderirken bu fonksiyon hakkında düşünmemiz gerekmez.

### useMemo & useCallback

- useMemo ve useCallback fonksiyonları içerisinde bir değer alır ve bu değerler cache'de saklanır. Input'lar değişmediği sürece aynı kalmaya devam ederler. useEffect gibi useMemo ve useCallback'de bir bağımlılık dizisine sahiptir ve ne zaman bir bağımlılık değişirse, değer yeniden oluşturulur.
- Aynı memo'da olduğu gibi bunları heryere yazmamalı ve sadece şu 3 durumda kullanmalıyız.
- Birinci durum : Boşa harcanan render'ları engellemek için memo ile birlikte.
- İkinci durum : Her renderlamada ağır yük gerektiren yeniden hesaplamalardan kaçınmak için.
- Üçüncü durum : Başka bir hook'un bağımlılık dizisinde kullanılan değerler için. (Örneğin useEffect içinde sonsuz döngüleri engellemek)

### 🗃 Local Storage

- Ugulamalarımıza local storage eklemek için useEffect kullanabiliriz. [] boş bir bağımlılık dizisi program her açıldığında local storage'daki kayıtları getirir.

### 🖊 Arka planda nasıl çalışır & Bazı değerli bilgiler

- Imperetive(Zorunlu) ve Declarative(Bildirimsel) arasındaki fark VanillaJS ve React farkında gözle görülmektedir. VanillaJS'de bir çok eylemi bizzat siz yapmanız gerekir. Fakat React'ta ne yapması istediğinizi söyler ve gerisini ona bırakırsınız.
- React'ta veri akışı tek yönlüdür. Parent'tan child'a. Böylelikle birçok problemin önüne geçilir, karmaşıklıklar azaltılır. [ Ayrıca Angular iki yönlü data akışı sağlar. ]
- React Devtools bir geliştirme aracıdır. Chrome aracılığı ile de ulaşabileceğiniz bu eklenti program süresinde component tree, states ve birçok durumu etraflıca kontrol edebilmenizi sağlar. 💙
- Aynı zamanda yine React Devtools projenizi optimize etmenizi sağlayan Profiler sekmesine sahiptir.
- Her component için bir dosya oluşturmak büyük karmaşıklıkların önüne geçer. Her zaman bu metodolojiyi uygulayın.
- Reconciler yani Fiber basitçe geçmiş state ve güncellenmiş state'i karşılaştırıp değişen durumlar için render yapıp değişmeyenleri sabit bırakır.
- Event Propagation ve Event Delegation kavramları bir eventin gerçekleşme süreci ile ilgilidir. Ne zaman dökümanda bir evet gerçekleşse, event dökümanın en üst düzeyindeki parent elementten eventin gerçekleştiği noktaya kadar yolculuk yapar ve eventi bulur. Aksi takdirde eventin nerede gerçekleştiğini bilmenin bir yolu yoktur. Bu yüzden eventi bir üst parent'a taşıyıp altındaki tüm elemanlar için gerçekleşmesini sağlayabiliriz.
- Event'in nerede gerçekleştiğini bulmak adına başlayan bu süreç Capturing Phase(Yakalama aşaması) ve bulduktan sonra Bubbling Phase(Kabarcıklanma aşaması) olarak tanımlanır.
- React bir kütüphanedir(library), bir çerçeve(framework) değildir. Çünkü bir çerçeve bünyesinde ihtiyacınız olan tüm geliştirme araçlarını barındırır. Bir kütüphane istediğiniz geliştirme aracını tamamen kendi istediğinize göre seçmenize ve kullanmanıza izin verir.

### Daha fazla 3rd-Party React kütüphanesi 👇

- Routing için ▶ **React Router / React Location**
- HTTP requests ▶ **fetch() / Axios**
- Uzaktan Durum Yönetimi ▶ **React Query / SWR / Apollo**
- Küresel Durum Yönetimi ▶ **Context API / Redux / Zustand**
- Şekillendirme ▶ **CSS Modules / Styled Components / Tailwind CSS**
- Form Düzenleme ▶ **React Hook Form / Formik**
- Animasyonlar - Transitions ▶ **Motion / React Spring**
- Arayüz bileşenleri ▶ **Chakra / Mantine**

### 📜 React Hakkında Pratik Özetler <img style="width: 25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207">✍

#### 🧩 Component'ler Hakkında

- Bir component bir şema gibidir. Arayüzün bir parçasını oluşturmak için vardır
- Ne zaman bir component kullansak React bir component instance oluşturur ve bu instance props,state ve daha fazlasını içerebilir.
- Asla bir component içerisinde ikinci bir component tanımlama! Bunu yapmak içerdeki componenti her zaman yeniden renderlar. Bu da parent'i tekrar renderlar. React nested component'i her zaman yeni olarak görür. Performans açısından berbattır.

#### ⏳ Render'lama Hakkında

- Renderlama tamamen component fonksiyonlarını çağırma ve hangi elementlerin eklenmesi, silinmesi veya güncellenmesi gerektiğinin kontrolü ile ilgilidir. DOM'a herhangi birşey yazmaz.
- Bir component instance renderlandığında yada yeniden renderlandığında fonksiyon tekrar tekrar çağırılır.
- Ne zaman bir component instance yeniden renderlansa tüm child'ları da renderlanabilir. Bu hepsinin kesinlikle güncelleneceği anlamına gelmez. İki render arasında sadece değişim yaşayan child'lar yeniden renderlanır.
- DOM, commit phase denen aşamada güncellenir, ama React tarafından değil. Renderlayıcı olarak da isimlendirilen ReactDOM tarafından. Bu durum, projelerimize neden her zaman hem React hem de ReactDOM'u eklediğimizi açıklıyor.

#### 🆚 Diffing ( Farklılaşan )

- Diffing, React'ın hangi DOM elementlerinin eklenmesi veya değiştirilmesi hakkında karar vermesini sağlar. Eğer renderlar arasında bir React elementi Fiber Tree'de aynı pozisyonda duruyorsa bu component ve state'i sabit kalır. Eğer element değiştiyse veya farklı bir pozisyondaysa element ve state yok edilir.

### ⌨ React ile yaptığım bazı **Codesandbox** pratikleri ⏬

- <a href="https://t.ly/_9303">📆 Date Counter </a>
- <a href="https://t.ly/qxh5X">📕 Small Exam with State</a>
- <a href="https://t.ly/dq3vf">🃏 User card and List Rendering</a>
- <a href="https://t.ly/wYSUl">📜 Accordions</a>
- <a href="https://t.ly/mkXpt">💰 Bill Calculator </a>
- <a href="https://t.ly/BX59P">🅰 Reusable-Flexible Text Expander Component</a>
- <a href="https://t.ly/H3LuI">💲 Currency-Converter </a>
- <a href="https://t.ly/LI6sf">🏦 useReducer Bank </a>

# <p align=center> 🔴🔷🟩 ENGLISH 🟩🔷🔴 </p>

# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30" /> REACT

In this repository, I keep all my work done with "React" in bulk.

## 🖊 What have I learned so far ?

### ⚒ Setup

- How to install and use **Create-React-App** [ In real projects always use **Vite <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png" style="width: 25px">** for better performance and comminity support, but for learning Create-React-App is still ok ].

### 💻 Rendering

- What is a **Component** and how could i declare it.
- What is **JSX** and how can i use.
- What is **conditional rendering** and how can i use [ **Ternary Operator**, **Short Circuiting** ].
- How to render multiple components at once using loops. [ .map() forexample ]
- What is **React fragment** and how can i use [ Instead of element blocks like "Div" simply use <> and </> ].
- What is **component composition** and how i can use. [ { children } to make component reusable. And also fix **Prop Drilling** ]
- What is the difference between **Component**, **Instance** and the **Element**.
- When u have multiple child elements of the same type always use **Key** prop for rendering performance. So they are not recreated by **Diffing Algorithm**.
- What is **SideEffect** and why i should avoid it on rendering. [ Examples Mutating external variable, HTTP requests, writing to DOM ]
- What is **Pure Function**and why it has no **Side Effects**. [ Does not change any variable outside its scope, given the same input returns same input. ]
- What is the **Rules of Render Logic**. [ Components must be pure, no side effects ]

#### 🔴 So in render logic;

- Do NOT perform network request. ( API Calls )
- Do NOT start timers.
- Do NOT directly use the DOM API.
- Do NOT mutate objects or variables.
- Do NOT update state ( or refs ): [ This will create an infinite loop ]
- Side effects are allowed in **Event Handler Functions** [ Also a special hook to register side effects **useEffect**]

### ℹ Props

- What is **props** and how can i use [ For DRY prensiple immediately **destructure** props object ].
- Why props are **immutable** [ Readonly ].
- What is **children** props, and how can i use them.
- What is **prop drilling**, and how could i do that. [ Passing data through parent components nested components ]
- How to **passing elements** as a prop [ Alternative to children prop ]
- How to make a component really reusable, creating **external state** and more flexible components for **consumers**.
- What is **propTypes** and how can i implement it to my components. [ To do this use TypeScript instead of JavaScript ]
- What is **Key** prop and what it does. [ Special prop that i use to tell the **Diffing Algorithm** that element is unique ]
- When should i use **Key** prop. [ In lists to keep state without destroyed, and the reset state ]

### ♦ State

- What is **useState()** and how to use it.
- Why should i use a **callback function** into useState setter function.
- What is **React Hooks** and how to use them. [ Forexample useState, useReducer, useEffect ]
- Why should i _never define any hook conditionally_ or never do _early return on global_ situation. **[ Hooks are has order from FiberTree, it must never change ]**
- One component has one state and isolated from other components.
- What is **Controlled Elements**, why and how i gonna use them. [ When working with forms ]
- What is State Management **[ Deciding when to create state, types of state and how data flows through the App]**
- What is **State Lifting** and when should i use it.
- Whats the difference between **Local and Global** state, and why i need to always start with **Local State**
- What is **State Update Batching**, and why it is important. [ Grouping setStates into one function and only rendering one time for performance. "Available on React@18" ]
- Why should i avoid to setState in render logic. [ In fetch or top level of code it makes million re-renders. *useEffect* comes to play. ]

#### 📦 Refs

- What are refs and when i need to use it. _[ Creating a variable stays same between renders ]_

#### ✨ Side Effects

- What is effect [ *Interaction between a React component and the world outside the component*].
- What is the differance between _Event Handlers_ and _useEffect_.

#### Event Handlers

- Executed when the _corresponding event_ happens.
- Used to _React_ to an event.
- _Preferred way_ of creating side effects.

#### Use Effect

- Executed after the components mounts( _initial render_ ) And after subsequent re-renders ( _according to dependency array_ ).
- Without dependency array, _React doesn't know_ when to run the effect.
- Every _state variable and prop_ used inside the effect, must be included in dependency array.
- Used to keep a component synchronized with some external system ( _API calls_ )
- useEffect is like an eventlistener that is listening for dependency to change. When a dependency is changes, it will execute the effect again.
- [] Runs only on mount _( initial render )_, [ x,y,z ] mount and re-render triggered _by updating x,y or z_, no dependency array is simply updating on _everytime something change_. ( Usually Bad⛔ )
- What is the _Cleanup function_ and when i should use it. [ to clear side effects when mount or unmount ]

#### Use Reducer

-

#### API Calls and Error Handling

- Always wrap API calls into _try and catch blocks_.
- To handle errors and _display them into UI_ use state.
- Conditionally rendering is important at this point. If there is an error, u have to _display meaningful messages_ into UI.
- Always check _response.ok_ property to handle error.

#### Local Storage

- A way to implement local storage into our applications, _we can simply use useEffect_.

### 🖊 Information & Behind The Scenes

- What is the difference between **Imperetive** and **Declarative**. [ Vanilla JS vs React ]
- What are React frameworks. **[ NextJS, Remix ]**
- Why does React use **one-way** data flow. [ Also Angular has **two-way** data flow. ]
- What is **SSR [ Server-Side Rendering ]**, **CSR [ Client-Side Rendering ]** and **SPA [ Single-Page Application ]**.
- What is **React Dev Tools** and how can i use.
- What is the **Thinking in React** [ Break UI into components, component tree, build static version (without state), think about state and establish data flow. ]
- What is **Redux** and when i need to use it. [ Global State Management ]
- Why should I organize my files into **one file** for **each component**. [ To avoid a big mess ]
- How components are displayed on the screen and how renders are triggered. [ Initial render of app and when state is updated ]
- What is **Reconciler [ Fiber ]** and how does it work. [ Simply comparing last state and updated state of DOM, then applying renders on only changes. ]
- What is the difference between **React Element Tree [ Called Virtual DOM aswell ] ** and **Fiber Tree**.
- What is **Event Propagation and Event Delegation**.
- How React handles events behind the scenes. **[ Capturing Phase and Bubbling Phase ]**
- What is **Synthetic Events**.
- What is the differance about **Event Handlers** between Vanilla JS and React.
- Why we call React is a **Library**.
- What are Frameworks built on top of React. **[ Next.js / Remix / Gatsby ]**

#### 3rd-Party React Libraries 👇

- For Routing ▶ **React Router / React Location**
- HTTP request ▶ **fetch() / Axios**
- Remote State Management ▶ **React Query / SWR / Apollo**
- Global State Management ▶ **Context API / Redux / Zustand**
- Styling ▶ **CSS Modules / Styled Components / Tailwind CSS**
- Form Management ▶ **React Hook Form / Formik**
- Animations - Transitions ▶ **Motion / React Spring**
- UI Components ▶ **Chakra / Mantine**

### Practical Summaries About React <img style="width: 25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207">✍

#### About Components

- A component is like a _blueprint_ for a piece of UI that will eventually exist on the screen.
- When we "use" a component, _React creates a component instance_ containing props, state, and more.
- A component instance, when rendered, will return a _React element_.
- Never declare a _new component inside another_ component! Doing so will re-create the _nested component every time_ the parent component re-renders. React will always see the _nested component as new_.

#### About State

- _Multiple state updates_ inside an event handler function are _batched_, so they happen all at once, causing _only one re-render_. This means we can not access a state variable _immediately after updating_ it. **State updates are asynchronous**. Since React@18, batching also happens in _timeouts, promises and native event handlers_.

#### About Rendering

- Rendering only means _calling component functions_ and calculating what DOM element need to be inserted, deleted or updated. It has _nothing to do with writing to DOM_.
- Each time a component instance is rendered and re-rendered, the _function is called_ again.
- Only the initial app render and state updates can cause a render which happens _entire the application_, not just one single component.
- When a component instance gets re-rendered, _all its children_ will get re-rendered as well. This doesn't mean that all children will get updated in the DOM. Thanks to _reconciliation_, which checks _which elements have actually changed_ between two renders.
- The DOM is updated in the _commit phase_, but not by React! By a _renderer_ called _ReactDOM_. That's why we always need to _include both libraries_ in a React web app project.

#### Diffing

- Diffing is how React decides which DOM elements need to be _added or modified_. If between renders, a certain React element stays at the _same position_ in the element tree( Fiber Tree ), the corresponding DOM element and component state will stay same. If the element _changed to a different position, or if it's a different element type_, the DOM element and state will be destroyed.

#### Key Prop

- When a key _stays the same_ across renders, the element is kept in the DOM. This is why we need to use keys in _lists_. When we _change the key_ between renders, the DOM element will be destroyed and rebuilt. We use this as a trick to _reset state_.

## ⌨ My **Codesandbox** practices about React ⏬

- <a href="https://t.ly/_9303">📆 Date Counter </a>
- <a href="https://t.ly/qxh5X">📕 Small Exam with State</a>
- <a href="https://t.ly/dq3vf">🃏 User card and List Rendering</a>
- <a href="https://t.ly/wYSUl">📜 Accordions</a>
- <a href="https://t.ly/mkXpt">💰 Bill Calculator </a>
- <a href="https://t.ly/BX59P">🅰 Reusable-Flexible Text Expander Component</a>
- <a href="https://t.ly/H3LuI">💲 Currency-Converter </a>
