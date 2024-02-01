import Direction, { DirectionContentProps } from '@/src/pages/Direction/Direction'

import aboutImg from '@/public/images/abstract-backend.png'
import mentorImg from '@/public/images/hero-2.jpg'

const Backend = () => {

  const contentProps: DirectionContentProps = {
    bannerTitle: 'Backend',
    bannerDesc: 'Вы научитесь разрабатывать приложения на C#, охватывая как настольные, так и веб-приложения. Изучите основы .NET Framework и .NET Core, включая ASP.NET для создания веб-сайтов. Вы также научитесь работать с базами данных с использованием Entity Framework и создадите первые проекты для портфолио.',
    bannerBg: 'banner__content-back',
    bannerTitleColor: 'banner__title-back',
    bannerDescColor: 'banner__desc-back',
    advantagesIconBg: 'advantages__icon-back',
    advantagesDesc: 'advantages__desc-back',
    aboutTitle: 'Чем занимаются разработчики на C#',
    aboutText: ['Разработчики на C# занимаются созданием разнообразных приложений, включая настольные, веб-приложения и мобильные приложения на платформе .NET. Они реализуют бэкенд-логику, работают с базами данных, API и интеграцией различных сервисов. Главная задача разработчика на C# - это реализация бизнес-логики и обеспечение стабильной работы приложения.', 'Зарплата разработчиков на C# зависит от сферы, профессиональных навыков и опыта работы. В Москве, согласно данным сайтов по поиску работы, зарплаты могут быть следующими:'],
    aboutList: ['от 60 тыс. до 90 тыс. рублей для начинающих специалистов;', 'от 120 тыс. до 250 тыс. рублей для специалистов уровня middle (обычно от трех-пяти лет опыта);', 'до 400 тыс. рублей и выше для позиции senior.'],
    aboutImg: aboutImg,
    aboutImgAlt: 'frontend abstract',
    benefitsTitle: 'Почему бэкенд разработка?',
    benefitsText1: 'Востребованность на рынке труда',
    benefitsText2: 'Большое количество возможностей для карьерного роста',
    benefitsText3: 'Высокооплачиваемая и стабильная работа',
    skills: ['Net Core', 'ASP.NET Web API', 'MSSQL(T-SQL)', 'PostgreSQL(PL/pgSQL)', 'SQL', 'Entity Framework', 'LINQ', 'Многопоточность, асинхронность', 'Git'],
    skillsItem: 'skills__item-back',
    course: {
      programLeft: [
        'Синтаксис C#', 'Ссылочные и значимые типы, стек, куча', 'ООП, SOLID, DRY, KISS и применение этих парадигм в C#', 'разделение приложения на проекты', '.NET Framework vs .NET Core против .NET vs .NET Standard', 'Компиляция CLR, IL, JIT', 'ORM, Entity Framework Core', 'Базы данных и работа с ними через EF', 'Асинхронность, многопоточность'],
      programRight: 
      ['- Поведенческие, архитектурные паттерны', '- Git, GitHub flow', '- Web API, REST, RESTful API', '- архитектура приложений, MVC, чистая архитектура', '- клиент-серверное взаимодействие', '- авторизация, аутентификация, управление разрешениями на основе ролей', '- лучшие практики в написании бэкенда', '- стандарты безопасности'],
      scheduleDuration: ['8 месяцев'],
      scheduleDays: ['Вт/Чт/Сб'],
      scheduleTime: ['19:00 - 21:30'],
      mentorText: ['Меня зовут Дима и я являюсь разработчиком и менеджером с более, чем 3.5 годами опыта работы как в местных компаниях "Blast Maker", "TimelySoft", "Salyk Service", так и в международных с заказчиками из США "EPAM" и "Akvelon"', 'Получаю удовольствие от преподавания и поэтому уроки всегда на высшем уровне 🔝', 'Выпустил в районе 50 учеников, которые трудоустроились как в кыргызские, так и зарубежные'],
      mentorImg: mentorImg,
      mentorImgAlt: 'фотография ментора Дмитрия',
      courseBg: 'course__grid-back'
    },
    costPrice: '13 000 сом в месяц'
  }

  return (
    <>
      <Direction {...contentProps} />
    </>
  )
}

export default Backend