export const genres = [
    { label: 'Все жанры', value: '' },
    { label: 'Драмы', value: '1' },
    { label: 'Ужасы', value: '2' },
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