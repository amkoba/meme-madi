import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('editMeme') editMeme;
  ngOnInit() {
    this.getAllMemes();
  }

  getAllMemes() {
    this.list_service.getAllMemes().subscribe(res => {
      this.memes = res['data']['memes'];
      this.memes = this.memes.filter( meme => {
        return meme.box_count <= 2;
      })
      this.selected_meme = this.memes[0];
      this.editMeme.initSelectedMeme(this.selected_meme);
    })
  }

  selectMeme(meme){
    this.show_converted_meme = false;
    this.selected_meme = meme;
    this.editMeme.initSelectedMeme(this.selected_meme);
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
