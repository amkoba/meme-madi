import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main/main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private list_service: MainService) { }
  memes: any = [];
  selected_meme;
  show_converted_meme;
  ngOnInit() {
    this.getAllMemes();
  }

  getAllMemes() {
    this.list_service.getAllMemes().subscribe(res => {
      this.memes = res['data']['memes'];
      this.selected_meme = this.memes[0]
    })
  }

  selectMeme(meme){
    this.show_converted_meme = false;
    this.selected_meme = meme;
  }

}
