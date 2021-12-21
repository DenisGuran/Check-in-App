export interface Discipline {
    id: number;
    name: string;
    teacherId?: number;
    faculty: string;
    section: string;
    year: number;
    semester: number;
    credits: number;
}
