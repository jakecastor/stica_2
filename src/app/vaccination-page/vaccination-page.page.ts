import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-vaccination-page',
  templateUrl: './vaccination-page.page.html',
  styleUrls: ['./vaccination-page.page.scss'],
})
export class VaccinationPagePage implements OnInit {
  students: any;
  isModalOn = false;
  imageSelected = '';
  constructor(private service: ServicesService) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    await this.service.getStudentsFromDB().then(() => {
      this.students = this.service.getStudents();
      console.log(this.students);
    });
  }
  imageClicked(image: string) {
    this.isModalOn = true;
    this.imageSelected = image;
  }
  modalBackgroundClick() {
    this.isModalOn = false;
    this.imageSelected = '';
  }
}
