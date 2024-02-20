import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hikam',
  templateUrl: './hikam.component.html',
  styleUrls: ['./hikam.component.css']
})
export class HikamComponent implements OnInit {
  meals = [
    { name: '', description: '', photoUrl: 'assets/24.jpg', videoUrl: 'https://www.youtube.com/embed/F_qyzYJkkxA', showVideo: false },
    { name: '', description: '', photoUrl: 'assets/23.jpg', videoUrl: 'https://www.youtube.com/embed/I9Q6W38-Q0g', showVideo: false },
    { name: '', description: '', photoUrl: 'assets/25.jpg', videoUrl: 'https://www.youtube.com/embed/h-xgC0SzdNs', showVideo: false },
    { name: '', description: '', photoUrl: 'assets/28.png', videoUrl: 'https://www.youtube.com/embed/k8LFjsfYYDk0', showVideo: false },
    { name: '', description: '', photoUrl: '', videoUrl: 'https://www.youtube.com/watch?v=cNdHF4dHSEg', showVideo: false },
    { name: ' ', description: ' ', photoUrl: '', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=qXdo5s8mnGc', showVideo: false },
    { name: '', description: '', photoUrl: '', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=y6h6F-yI3yE', showVideo: false },
    { name: '', description: '', photoUrl: '', videoUrl: 'https://www.youtube.com/watch?v=uZCaAnnmrBQ', showVideo: false },

  ];


  ngOnInit(): void {
    
  }

  toggleVideo(meal: any) {
    meal.showVideo = !meal.showVideo;
  }
}
