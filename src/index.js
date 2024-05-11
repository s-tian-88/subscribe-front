import { interval } from 'rxjs';
import { ajax } from 'rxjs/ajax'

import './css/style.css';
import Incoming from './components/incoming';
import Message from './components/message';

const incoming = new Incoming(document.body);
incoming.render();

const message = new Message(document.querySelector('.incoming-main'));

const interval$ = interval(10000);

interval$.subscribe(() => {

  ajax({
    url: 'http://localhost:7070/messages/unread'
  })
    .pipe(
    )
    .subscribe({
    next: (res) => {

      const messages = res.response.messages
      messages.forEach(msg => {

        message.render(msg);

      });

    },
    error: () => {

    },
    complete: () => {}
  });

});
