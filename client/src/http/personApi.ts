import { $host } from ".";
import { IActivity } from "../types/IPerson";

export const fetchAllActivities = async () => {
    const {data: activity} = await $host.get('api/activity/getAll')
    return activity
}

export const createActivity = async (title: string) => {
    const {data: activity} = await $host.post('api/activity/create', {title})
    return activity
}

export const createPerson = async (name: string, surname: string, birthday: Date, activities: Array<IActivity>) => {
    const activitiesJson = JSON.stringify(activities)
    console.log(activitiesJson)
    const {data: person} = await $host.post('api/person/create', {name, surname, birthday, activities: activitiesJson})
    return person
}

export const fetchAllPersonsByActivity = async (title: string) => {
    const {data: persons} = await $host.get(`api/person/getAllWithActivity?activity=${title}`)
    return persons
}
