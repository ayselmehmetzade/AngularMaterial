import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Work } from 'src/app/interfaces/work';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
  works: Work[] = [];
  @Output() trainingStart = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.works = [
      { value: 'crunches', viewValue: 'Crunches' },
      { value: 'touch-toes', viewValue: 'Touch Toes' },
      { value: 'side-lunges', viewValue: 'Side Lunges' },
      { value: 'burpees', viewValue: 'Burpees' }
    ];
  }

  onStartTraining(){
    this.trainingStart.emit()
  }
}
