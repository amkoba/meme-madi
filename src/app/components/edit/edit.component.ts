import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main/main.service';
import { environment } from '../../../environments/environment';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private generate_service: MainService) { }
  @Input() show_converted_meme;
  selected_meme;
  converted_meme;
  top_text: string;
  bottom_text: string;
  box_counts = [];
  ngOnInit() {
   
  }

  generateMeme(){
    const data = new FormData();
    data.append('template_id', this.selected_meme.id);
    data.append('username', environment.uname);
    data.append('password', environment.pwd);
    this.box_counts.forEach((mem_text, index) => {
      data.append('text'+index, mem_text.text);  
    })

  this.generate_service.generateMeme(data).subscribe((res: any) => {
    if(!!res['success']) {
      this.converted_meme = res['data'];
    this.show_converted_meme = true;
    }else {
      alert('Something went wrogn. Please try again')
    }
    
  })
  }

  initSelectedMeme(meme){
    this.box_counts = [];
    this.selected_meme = meme;
    this.show_converted_meme = false;
    for(let i =0; i< this.selected_meme.box_count; i++){
      this.box_counts.push({box_count: this.selected_meme.box_count, placeHolder: 'Text #'+i, text: ''})
    }
  }

  isValid(){
    if(this.bottom_text && this.top_text){
      return true;
    }
  }
}
