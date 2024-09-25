
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  users = [
    { name: 'Usuario 1', image: './assets/images/png-transparent-black-cat-kitten-cats-mammal-cat-like-mammal-animals-thumbnail.png' },
    { name: 'Usuario 2', image: './assets/images/png-transparent-british-shorthair-american-shorthair-kitten-chartreux-persian-cat-cats-mammal-cat-like-mammal-animals-thumbnail.png' },
    { name: 'Usuario 3', image: './assets/images/png-transparent-brown-cat-keeping-cats-mouse-dog-kitten-cats-mammal-animals-cat-like-mammal-thumbnail.png' },
    { name: 'Usuario 4', image: './assets/images/png-transparent-cat-food-kitten-pet-dog-food-cats-mammal-food-cat-like-mammal-thumbnail.png' },
    { name: 'Usuario 5', image: './assets/images/png-transparent-cat-kitten-cats-mammal-animals-cat-like-mammal-thumbnail.png' },
    { name: 'Usuario 6', image: './assets/images/png-transparent-grumpy-cat-kitten-cats-animals-cat-like-mammal-carnivoran-thumbnail.png' },
    { name: 'Usuario 7', image: './assets/images/png-transparent-kitten-cat-giant-panda-two-cats-white-mammal-animals-thumbnail.png' },
  ];

  communityPosts = [
    { userName: 'Usuario 1', userImage: './assets/images/png-transparent-kitten-graphy-cat-birthday-cake-cats-hat-cat-like-mammal-animals-thumbnail.png', text: 'Esta es una conversación de ejemplo en la comunidad.' },
    { userName: 'Usuario 2', userImage: './assets/images/png-transparent-sphynx-cat-oriental-shorthair-kitten-dog-allergy-to-cats-kitten-mammal-cat-like-mammal-animals-thumbnail.png', text: 'Hola a todos, ¿cómo están?' },
  ];

  moreCommunityPosts = [
    { userName: 'Usuario 3', userImage: './assets/images/png-transparent-wildcat-kitten-pet-dog-cats-cat-like-mammal-animals-carnivoran-thumbnail.png', text: '¿Alguien ha visto las nuevas actualizaciones?' },
    { userName: 'Usuario 4', userImage: './assets/images/png-transparent-tabby-cat-kitten-cats-mammal-animals-cat-like-mammal-thumbnail.png', text: 'Sí, son geniales, ¡me encanta el nuevo diseño!' },
    { userName: 'Usuario 5', userImage: './assets/images/png-transparent-kitten-cat-giant-panda-two-cats-white-mammal-animals-thumbnail.png', text: '¿Cuándo será el próximo evento de la comunidad?' },
    { userName: 'Usuario 6', userImage: './assets/images/png-transparent-black-cat-kitten-cats-mammal-cat-like-mammal-animals-thumbnail.png', text: 'Espero que pronto, el último evento fue increíble.' },
    { userName: 'Usuario 7', userImage: './assets/images/png-transparent-kitten-graphy-cat-birthday-cake-cats-hat-cat-like-mammal-animals-thumbnail.png', text: 'He estado trabajando en un nuevo proyecto, ¿alguien quiere colaborar?' },
    { userName: 'Usuario 8', userImage: './assets/images/png-transparent-black-cat-kitten-cats-mammal-cat-like-mammal-animals-thumbnail.png', text: 'Me encantaría colaborar, ¿de qué trata tu proyecto?' },
  ];

  constructor() {}
}