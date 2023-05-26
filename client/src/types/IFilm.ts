export default interface IFilm {
    id?: number;
    title: string;
    desc: string;
    short_desc: string;
    rating: number;
    duration: number;
    date: Date;
    age_limit: number;
    img: string;
}
