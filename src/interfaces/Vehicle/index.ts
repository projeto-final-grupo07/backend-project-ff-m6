export interface IVehicleCreate {
  typeOffer: boolean;
  title: string;
  year: string;
  mileage: string;
  price: number;
  describe: string;
  typeVehicles: boolean;
  coverImg: string;
  GalleryImg: IGalleryImg[];
}

export interface IGalleryImg {
  url: string;
}

export interface IVehicleUpdate {
  typeOffer?: boolean;
  title?: string;
  year?: string;
  mileage?: string;
  price?: number;
  describe?: string;
  typeVehicles?: boolean;
  coverImg?: string;
  GalleryImg?: IGalleryImg[];
}
