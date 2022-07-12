export interface IResCarros {
    total:     number;
    carros: ICarros[];
}

export interface ICarros{

    _id?:    string;
    CARRO_PLACA: string;
    CARRO_MODELO: string;
    CARRO_AÑO: number;
    CARRO_COMENTARIO: string;
    Estado?: boolean;
    __v?:    number;
}

