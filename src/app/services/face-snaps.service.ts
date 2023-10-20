import { HttpClient } from '@angular/common/http';
import { FaceSnap } from './../models/face-snap.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  
  constructor(private http: HttpClient) {}


  faceSnaps: FaceSnap[] = [];
       

      getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }
    

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
      }
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unSnap'): void {
       // const faceSnap = this.getFaceSnapById(faceSnapId);
       // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
  }