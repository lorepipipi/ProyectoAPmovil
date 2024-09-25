import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  users = [
    { image: 'assets/img/user1.jpg', name: 'Usuario 1' },
    { image: 'assets/img/user2.jpg', name: 'Usuario 2' },
    { image: 'assets/img/user3.jpg', name: 'Usuario 3' },
  ];

  communityPosts = [
    {
      userImage: 'assets/img/user1.jpg',
      userName: 'Usuario 1',
      text: 'Esta es una conversación de ejemplo en la comunidad.',
    },
    {
      userImage: 'assets/img/user2.jpg',
      userName: 'Usuario 2',
      text: 'Hola a todos, ¿cómo están?',
    },
  ];

  constructor() { }
}