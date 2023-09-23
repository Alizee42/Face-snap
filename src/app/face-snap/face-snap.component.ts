import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private FaceSnapsService: FaceSnapsService) {}

  ngOnInit() {

    this.buttonText = ' Oh Snap!';
  }

onSnap() {
  if (this.buttonText === 'Oh Snap!') {
    this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.buttonText = 'Oops, unSnap!';
  } else {
    this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unSnap');
    this.buttonText = 'Oh Snap!'
  }
}
}