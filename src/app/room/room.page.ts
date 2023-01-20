import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  rooms: string[] = [];
  qrdata: string = '';
  studentCount: any;

  constructor(
    private service: ServicesService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.service.getRoomsFromDB().then(() => {
      this.rooms = this.service.getRooms();
      setTimeout(() => {
        this.service.getStudentCountTodayFromDB();
      }, 2000);
    });
  }

  createCode() {}

  async createRoom() {
    const alert = await this.alertController.create({
      header: 'Add new room?',
      inputs: [
        {
          label: 'Enter Room Number',
          name: 'roomNum',
          value: 'Enter Here',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel creating new room',
        },
        {
          text: 'Yes',
          role: 'Create new room',
          handler: async (FormData: { roomNum: number }) => {
            this.qrdata = FormData.roomNum.toString();
            const create = await this.loadingCtrl.create({
              message: 'Creating new room...',
              animated: true,
              backdropDismiss: false,
            });
            create.present().then(async () => {
              await this.service
                .createRoom(FormData.roomNum.toString())
                .then(async () => {
                  //upload
                  this.rooms = await this.service.getRooms(); //get from db
                })
                .then(() => {
                  console.log('createTable');

                  this.loadingCtrl.dismiss();
                })
                .then(async () => {
                  const tableCreatedAlert = this.alertController.create({
                    header: 'Room Created',
                    buttons: [
                      {
                        text: 'Okay',
                        handler: () => {
                          this.ionViewWillEnter();
                        },
                      },
                    ],
                  });
                  (await tableCreatedAlert).present();
                });
            });
          },
        },
      ],
    });
    alert.present();
  }
}
