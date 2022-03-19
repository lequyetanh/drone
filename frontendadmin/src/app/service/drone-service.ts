import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Drone } from "../entitys/drone-entity";

@Injectable({
    providedIn: 'root'
  })
export class DroneService {
  droneUrl;
  userUrl;
  droneDb
  constructor(private http: HttpClient) {
    this.droneUrl = "http://localhost:8080/drone/";
    this.userUrl = "https://ecommerce-shop-store.herokuapp.com/user";
    this.droneDb = "https://ecommerce-shop-store.herokuapp.com/drone";
  }

  public save(drone: Drone): Observable<Drone> {
    return this.http.post<Drone>(this.droneUrl, drone);
  }

  public getListDrone(): Observable<Drone[]> {
    return this.http.get<Drone[]>(this.droneDb);
  }

  public delete(id: number){
    return this.http.delete(`${this.droneUrl}${id}`, )
  }

  public getUserFromId(id: number){
    return this.http.get(`${this.userUrl}/detailUser/${id}`, )
  }

  public getDroneFromId(id: number){
    // console.log("runnnnnnnnnnnnnnnnnnnnnnnn")
    return this.http.get(`${this.droneDb}/drone/${id}`, )
  }


  public getAllDroneFree(){
    return this.http.get(`${this.droneDb}/free`, )
  }

  public updateUserFromId(id, user) {
    // console.log(data);
      return this.http.put(`${this.userUrl}/update/${id}`, user);
  }

  public updateDroneFromId(id, drone) {
    // console.log(data);
      return this.http.put(`${this.droneDb}/update/${id}`, drone);
  }


  public createDrone(drone){
    return this.http.post<Drone>(`${this.droneDb}/create`, drone);
  }


  public updateDrone(id, drone) {
    // console.log(data);
      return this.http.put(`${this.droneDb}/update/${id}`, drone);
  }

  public deleteDrone(id: number){
    return this.http.delete(`${this.droneDb}/${id}`, )
  }

}
