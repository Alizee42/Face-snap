import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


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
    this.faceSnapsService.snapFaceSnapById(FaceSnapId, 'snap');
    this.buttonText = 'Oops, unSnap!';
  } else {
    this.faceSnapsService.snapFaceSnapById(FaceSnapId, 'unSnap');
    this.buttonText = 'Oh Snap!'
  }
}
 
}
