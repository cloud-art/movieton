export const genres = [
    { label: 'Все жанры', value: '' },
    { label: 'Семейные', value: 'семейный' },
    { label: 'Биографии', value: 'биография' },
    { label: 'Боевики', value: 'боевик' },
    { label: 'Вестерны', value: 'вестерн' },
    { label: 'Военные', value: 'военный' },
    { label: 'Детективы', value: 'детектив' },
    { label: 'Детские', value: 'детский' },
    { label: 'Документальные', value: 'документальный' },
    { label: 'Драмы', value: 'драма' },
    { label: 'Исторические', value: 'история' },
    { label: 'Комедии', value: 'комедия' },
    { label: 'Короткометражки', value: 'короткометражка' },
    { label: 'Криминал', value: 'криминал' },
    { label: 'Мелодрамы', value: 'мелодрама' },
    { label: 'Музыкальные', value: 'музыка' },
    { label: 'Мюзиклы', value: 'мюзикл' },
    { label: 'Новости', value: 'новости' },
    { label: 'Приключения', value: 'приключения' },
    { label: 'Спортивные', value: 'спорт' },
    { label: 'Триллеры', value: 'триллер' },
    { label: 'Ужасы', value: 'ужасы' },
    { label: 'Фантастика', value: 'фантастика' },
    { label: 'Фильмы-нуар', value: 'фильм-нуар' },
    { label: 'Фэнтези', value: 'фэнтези' },
]

export const sortBy = [
    {label: 'Рейтингу', value: '1'},
    {label: 'Колличеству комментариев', value: '2'},
]

type DictionaryType = {
    label:string;
    value:string;
}

const currentYear = new Date().getFullYear()

const years:Array<DictionaryType> = []

for (let i = currentYear; i > currentYear - 50; i--){
    years.push({label: i.toString(), value: i.toString()})
}

export default years;