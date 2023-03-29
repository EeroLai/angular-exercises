import { Component } from '@angular/core';
import { getUser } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  //example
  test = getUser(1);
}
