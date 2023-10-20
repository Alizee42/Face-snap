import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = ' Oh Snap!';
    const FaceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(FaceSnapId);

  }

  onSnap(FaceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ =  this.faceSnapsService.snapFaceSnapById(FaceSnapId, 'snap').pipe(
        tap(() => this.buttonText = 'Oops, unSnap!')
      );   
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(FaceSnapId, 'unSnap').pipe(
        tap(() => this.buttonText = 'Oh Snap!')      
      );
    }  
  } 
}
