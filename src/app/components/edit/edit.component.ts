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
  @Input() selected_meme;
  @Input() show_converted_meme;
  converted_meme;
  top_text: string;
  bottom_text: string;
  ngOnInit() {
  }

  generateMeme(){
    const data = new FormData();
    data.append('template_id', this.selected_meme.id);
    data.append('username', environment.uname);
    data.append('password', environment.pwd);
    data.append('text0', this.top_text);
    data.append('text1', this.bottom_text);

  this.generate_service.generateMeme(data).subscribe(res => {
    console.log('Results ' + JSON.stringify(res));
    this.converted_meme = res['data'];
    this.show_converted_meme = true;
  })
  }

  isValid(){
    if(this.bottom_text && this.top_text){
      return true;
    }
  }
}
