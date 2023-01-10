interface ICard{
    id:number,
    label: string,
    content: string,
    image: string,
    date:any 
  }
 
     export const cards:ICard[]=[
    {
      id:1,
      label: '«Увидел поддоны с сахаром и решил: надо брать!» Белорусы показали, чем закупились на волне ажиотажа',
      content: 'Вы же видели новость про жителя Слуцка, который до подорожания успел купить 700 пачек сахара? Если учесть, что цена на сахар выросла примерно на 70 копеек, мужчина одним махом сэкономил 490 рублей. В обычной жизни такое количество можно растянуть минимум на 3 года. Мы нашли других запасливых белорусов и узнали, чем они закупались на волне ажиотажа.',
      image: 'https://w-dog.ru/wallpapers/9/15/458745441613494/vajoming-ssha-grand-teton-nacionalnyj-park-snejk-river-grand-titon-nacionalnyj-park-zakat-oblaka-vecher-gory-pole-cvety-zelen-les-derevya-sosny.jpg',
      date: new Date().toLocaleDateString(),
  
    }, 
    {
      id:2,
      label: '«Альфа-Банк» предупредил о частичном отключении карт в полночь. Что надо делать прямо сейчас?',
      image: 'https://w-dog.ru/wallpapers/9/15/458745441613494/vajoming-ssha-grand-teton-nacionalnyj-park-snejk-river-grand-titon-nacionalnyj-park-zakat-oblaka-vecher-gory-pole-cvety-zelen-les-derevya-sosny.jpg',
      content:'5 мая может произойти частичное отключение карт Visa и Mastercard белорусского «Альфа-Банка», информирует корпоративный телеграм-канал. И поясняет: все из-за позиции американских банков. Далее следуют инструкции, как действовать уже сегодня.',
      date: new Date().toLocaleDateString(),
  
    }, 
    {
      id:3,
      label: 'Гаттузо, «Челси», Шевченко. Минчанин собрал классную коллекцию футболок, почти ничего не потратив',
      image: 'https://c.wallhere.com/photos/22/27/2560x1600_px_landscape_nature-1077192.jpg!d',
      content:'Наш сегодняшний герой Алексей Ходневич по детству увлекался футболками. Правда, если у большинства пацанов этот интерес постепенно выветрился, то у него превратился в настоящее хобби. Буквально за несколько лет он собрал огромную коллекцию оригинальных маек, практически на них не потратившись. Как ему это удалось, какие артефакты в его коллекции самые значимые и что он собирается делать с ней дальше — об этом и не только мы расспросили Алексея.',
      date: new Date().toLocaleDateString(),
  
    }, 
    {
      id:4,
      label: 'Российский суррогат выдавал себя за мороженое из нормального молока. Изгнан из страны',
      image: 'https://imgproxy.onliner.by/UeGQhiFlrxXJLnnNqXa_KHP5Zmf9UQysNo0QenkBGW8/rt:fill/s:480:260/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS80ODhjYjNhZmVk/OWYzNDllZmNlZmNh/N2FhZmRkNTE4Yy5q/cGVn.webp',
      content:'Иногда случается чудо, и поставщиков суррогата гонят с нашего рынка подручными средствами. На этот раз Госстандарт обнаружил российское мороженое, которое состояло из заменителей чуть менее чем полностью. Если верить этикетке, бренд называется «Бодрая корова», продукт производят в российском Белгороде.',
      date: new Date().toLocaleDateString(),
  
    },  
     {
      id:5,
      label: 'Активно «учат» уже и на центральном проспекте Минска. Конфликт попал на видео',
      image: 'https://imgproxy.onliner.by/vE2pM3rITBUlxTd4VfFkYmTIqgaxMdYsdGlHROr2o9I/rt:fill/s:480:260/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS9jMWJhOWYwM2Vh/MDliZmUyMmNlMWUw/Njg0MjA4YjQ0OS5q/cGVn.webp',
      content:'Мы не раз писали про поведение «учителей» на МКАД или второстепенных дорогах — когда обиженные автомобилисты намеренно тормозят перед оппонентом, чтобы «проучить». Причины разные: от занятой крайней левой полосы до перестроения или непропуска.',
      date: new Date().toLocaleDateString(),
  
    },  
     {
      id:6,
      label: 'Доедет ли 30-летний Peugeot 106 до Испании? Опыт минчанина',
      image: 'https://imgproxy.onliner.by/jkXLvjKqnm9PTC9pu9qz7HAnf1NP2aDGQ2yySb6-e48/rt:fill/s:1040:500/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS9hMjE5ZmRlOGNh/MzJiYjg1MGY3YWNh/NmRiN2I4YTIxNy5q/cGVn.webp',
      content:'Недавно автомобильный блогер Дмитрий Новицкий доехал из Минска до Испании на Peugeot 106 1993 года выпуска. За эпоху коронавируса парню надоело сидеть на одном месте, хотелось к морю. Желательно еще не потратив при этом круглую сумму денег. Вместо билетов на самолет он купил дизельный Peugeot, которому скоро 30 лет, подготовил его к путешествию — и поехал. За компанию с собой он взял старшего сына. Дмитрий согласился поделиться историей своего необычного путешествия с читателями Onlíner.',
      date: new Date().toLocaleDateString(),
  
    },  
     {
      id:7,
      label: 'Никнеймы за деньги и три десятка приложений. Какие аналоги запрещенных сервисов разрабатывают в России',
      image: 'https://imgproxy.onliner.by/k9Oi-tIDkU53uC2vqY-sswWtRAPaXr2UgiyxXwYxd4E/rt:fill/s:1040:500/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS9lZGNmOGY1OTM5/NGE5ZTk2NjY5YmQ0/MGRlZWY0N2YxYi5q/cGVn.webp',
      content:'С момента начала военных действий в Украине из России ушли сотни иностранных компаний: некоторые полностью свернули деятельность, другие приостановили ее, а часть передали бразды правления местным юрлицам. Свою лепту внесло и российское правительство, запретив (или «заблокировав») среди прочего работу ряда популярных интернет-сервисов. Не исключено, что список будет постепенно пополняться.',
      date: new Date().toLocaleDateString(),
  
    },   
    {
      id:8,
      label: 'Нервничаете и грустите? У вас может быть зависимость от TikTok',
      image: 'https://imgproxy.onliner.by/lfJhuzcWR0zJiDinMudo-EyMhUobWHgpvn-7cWVi8YU/rt:fill/s:480:260/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS8wNzQ1ZjNlMGZi/YzY2YjQwZjAwYmYx/ZjNhNmZmOGFiYS5q/cGVn.webp',
      content:'Исследователи из Университета Тринидада и Тобаго предположили, что симптомами зависимости от TikTok могут являться нервозность, раздражительность, тревога и сильная грусть, которые проявляются при невозможности зайти в эту популярную соцсеть.',
      date: new Date().toLocaleDateString(),
  
    }, 
      {
      id:9,
      label: 'Крутой этнокомплекс, который строил «Трайпл», продают с аукциона. Вот почем',
      image: 'https://imgproxy.onliner.by/9EhtP_vswANch-lbo8_WrDo69o-AXqQ3Or-IPZO5_N0/rt:fill/s:480:260/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS9mOGNmYTFmNGU1/Y2I2NGZlMjVmOWMw/YTM1NzE4NTY0My5q/cGVn.webp',
      content:'Мы несколько раз писали про этот большой несостоявшийся проект компании «Трайпл» — культурно-этнографический комплекс у трассы М1 в Брестской области. Ему прочили судьбу самого крутого в Беларуси объекта придорожного сервиса, но многое пошло не так. Теперь его продают с аукциона, причем стоимость уже снизили на 60%. Рассказываем, сколько за добро хотят сейчас.',
      date: new Date().toLocaleDateString(),
  
    }, 
     {
      id:10,
      label: '«Слава богу, что не решились». Как и зачем Сталин хотел осушить Каспийское море',
      image: 'https://imgproxy.onliner.by/sJeXsDUBUn8MFuQ4gK-FYA0hcnYaPleidj6ln076NSo/rt:fill/s:1040:500/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS8yNTkzMDJkYTI1/ZjY5ZWRhZDhiMDAz/NDQ2NThiYTYwYS5q/cGVn.webp',
      content:'В Советском Союзе грандиозные проекты такого масштаба, когда «страна в едином порыве» ударно сворачивала горы (часто в буквальном смысле), были нормой. Партия и правительство определяли следующую цель, а народ строил новые города, металлургические комбинаты, нефтехимические комплексы, гигантские гидроэлектростанции, каналы протяженностью в тысячи километров, совершая очередной трудовой подвиг. Но даже на этом фоне одна из идей, рожденных мозгом очередного вождя, поражала своей фантастичностью.',
      date: new Date().toLocaleDateString(),
  
    },  
     {
      id:11,
      label: 'Литва открыта. Обсуждаем визы',
      image: 'https://imgproxy.onliner.by/6EDezmY9jJI4B79fVKNeUcanFI5NW5lDn5nqIzKTqq0/rt:fill/s:1040:500/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbWFpbnBhZ2Uv/Zm9ydW0vb3JpZ2lu/YWwvNjJlNmRhMjdi/ZWE2ZDI1MWEwZGVl/NmQwYzg3MDY5MzQu/anBlZw.webp',
      content:'С 1 мая Литва сняла все ковидные ограничения на въезд в страну. Это значит, что для пересечения границы больше не нужно сдавать ПЦР-тест (даже если вы не были привиты и не переболели COVID-19, заполнять анкету пассажира тоже не требуется). Сделали шенгенскую визу — и вперед. На этой ветке форума обсуждаем визы и поездки к соседям.',
      date: new Date().toLocaleDateString(),
    },  
  ]