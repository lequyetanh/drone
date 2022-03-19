/**
 * class for drone entity
 */
export class Drone {
  id: number;
  droneName: string;
  serialNo: string;
  manufacturerId: number;
  maxWeightPackageDelivery: number;
  maxSpeed: number;
  maxHeight: number;
  status: string;
  position: Array<string>;
  idUser: number;
  package: Array<Object>;
  port: string;

  constructor(
    droneName?: string,
    serialNo?: string,
    manufacturerId?: number,
    maxWeightPackageDelivery?: number,
    maxSpeed?: number,
    maxHeight?: number,
    status?: string,
    position?: Array<string>,
    idUser?: number,
    Package?: Array<Object>,
    port?: string,
  ) {
    this.droneName = droneName;
    this.serialNo = serialNo;
    this.manufacturerId = manufacturerId;
    this.maxWeightPackageDelivery = maxWeightPackageDelivery;
    this.maxSpeed = maxSpeed;
    this.maxHeight = maxHeight;
    this.status = status;
    this.position = position;
    this.idUser = idUser;
    this.package = Package;
    this.port = port;
  }
}
