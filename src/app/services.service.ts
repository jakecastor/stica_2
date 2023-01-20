import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { alertController } from '@ionic/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  rooms: string[] = [];
  studentCount: object[] = [];
  students: object[] = [];

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {}
  async getStudentsFromDB() {
    this.students = [];
    await this.http
      .get('https://myfirebase-eb932-default-rtdb.firebaseio.com/users.json')
      .subscribe((res) => {
        let entries = Object.entries(res);
        let data = entries.map(([key, val]) => this.students.push(val));
      });
  }
  getStudents() {
    return this.students;
  }
  async getRoomsFromDB() {
    this.rooms = [];
    await this.http
      .get(
        'https://myfirebase-eb932-default-rtdb.firebaseio.com/roomnumbers.json'
      )
      .subscribe((res) => {
        for (let data in res) {
          this.rooms.push(data);
        }
      });
  }
  getRooms() {
    return this.rooms;
  }
  async createRoom(id: String) {
    await this.http
      .put(
        `https://myfirebase-eb932-default-rtdb.firebaseio.com/roomnumbers/${id}.json`,
        { roomNumber: id }
      )
      .subscribe(async () => {
        await this.getRoomsFromDB();
        console.log('roomCreated');
        const alert = await this.alertController.create({
          message: 'Room Created!',
          buttons: [
            {
              text: 'Okay',
            },
          ],
        });
      });
  }
  async getStudentCountTodayFromDB() {
    console.log('hotdog');
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, '0');
    }

    function formatDate(date: Date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('-');
    }
    const date = new Date();
    const dateNow = formatDate(date);
    const roomNumbers: string[] = this.rooms;
    console.log(dateNow);
    console.log(roomNumbers.length);
    console.log(roomNumbers);

    for (let room of roomNumbers) {
      await this.http
        .get(
          `https://myfirebase-eb932-default-rtdb.firebaseio.com/qrdata/rooms/${room}/${dateNow}.json`
        )
        .subscribe((res) => {
          console.log(res);
          for (let data in res) {
            console.log(data);
            this.studentCount.push({ roomNumber: room, data });
            console.log(this.studentCount);
          }
        });
    }
  }
}
