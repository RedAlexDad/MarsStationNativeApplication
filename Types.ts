// Услуга - географический объект
export interface GeographicalObject {
    id: number;
    feature: string;
    type: string;
    size: number;
    describe: string;
    photo: string;
    status: boolean;
}