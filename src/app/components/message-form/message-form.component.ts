import { Component, OnInit, Input} from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input('message') message : Message;

  @Input('messages') messages : Message[];

  constructor() { }

  ngOnInit() {
  }

  // Called each time the send button is clicked.
  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.message = new Message('', 'assets/images/user.png');
  }

}
