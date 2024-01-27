import Direction, { DirectionContentProps } from '@/src/pages/Direction/Direction'

import aboutImg from '@/public/images/abstract-frontend.png'
import mentorImg from '@/public/images/azat.jpg'

import './frontend.scss'

const contentProps: DirectionContentProps = {
  bannerTitle: 'Frontend',
  bannerDesc: 'Вы научитесь создавать сайты и сложные веб приложения. Изучите HTML, CSS, JavaScript, React, Redux - и выполните реальные проекты уже во время обучения.',
  aboutTitle: 'Чем занимаются фронтенд-разработчики',
  aboutText: ['Фронтенд-разработчики создают и оптимизируют пользовательский интерфейс веб-сайтов.', 'Они работают с HTML, CSS и JavaScript для создания визуально привлекательных и функциональных веб-страниц, а также обеспечивают адаптивный дизайн для различных устройств и экранов.', 'Они также интегрируют фронтенд с бэкендом для взаимодействия с сервером и базами данных.', 'Зарплата зависит от профессиональных умений и опыта работы:'],
  aboutList: ['от 45 тыс. до 70 тыс. рублей начинающим специалистам;', 'от 90 тыс. до 200 тыс. на уровне middle (обычно от трех-пяти лет опыта);', 'до 350 тыс. рублей на позиции senior.'],
  aboutImg: aboutImg,
  aboutImgAlt: 'frontend abstract',
  benefitsTitle: 'Преимущества курса',
  benefitsText1: "Низкий порог входа в профессию",
  benefitsText2: 'Широкий выбор вакансий',
  benefitsText3: 'Высокая оплата труда',
  skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Flex box', 'Grid', 'Препроцессоры', 'Телеграмм бот', 'Lazy Loading', 'Nginx', 'Pm2'],
  course: {
    programLeft: [
      'HTML, CSS, JavaScript:', 'Продвинутый JavaScript', 'Node', 'Телеграмм бот', 'ООП',  'Стейт менеджер redux, toolkit', 'Formik Yup', 'Lazy Loading', 'Git'],
    programRight: 
    ['-24 практических занятия', '-Доступ ко всем материалам курса', 'Mobile, desktop first адаптив', 'Препроцессоры', 'Сборщик gulp', 'Промисы', 'Структуры данных', 'Event Loop', 'Телеграмм бот', 'ООП', ''],
    scheduleDuration: ['8 месяцев', '12 месяцев', '15 лет'],
    scheduleDays: ['Пн/Ср/Пт', 'Пн/Вт/Ср/Чт/Пт/Сб', 'Вс'],
    scheduleTime: ['24/7', '10:00 - 22:00', '17:00 - 17:30'],
    mentorText: ['Меня зовут Азат, я являюсь автором курса Meta School. Мой опыт в программировании более 3х лет, работал в американском стартапе, китайской компании Richfit, а также в банке веб разработчиком.', 'Выпустил более 100+ учеников. Мои студенты трудоустроились, как в кыргызские компании, так и в зарубежные.'],
    mentorImg: mentorImg,
    mentorImgAlt: 'Фотография Ментора Азата'
  },
  costPrice: '13000 сом в месяц'
}

const Frontend = () => {

  return (
    <Direction {...contentProps} />
  )
}

export default Frontend