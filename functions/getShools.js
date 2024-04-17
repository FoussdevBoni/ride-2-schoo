import axios from 'axios';
import { getAdmins } from '../utils/api';

export async function getSchoolsFromAdmins() {
    try {
        const response = await axios.get(getAdmins);
        const adminsData = response.data;

        if (adminsData && adminsData.admins) {
            const admins = adminsData.admins;
            console.log(admins)
            const schools = admins.filter(admin => admin.role === 2);
            return schools;
        } else {
            throw new Error("Impossible de récupérer les données des administrateurs.");
        }
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération des écoles:", error);
        throw error;
    }
}
