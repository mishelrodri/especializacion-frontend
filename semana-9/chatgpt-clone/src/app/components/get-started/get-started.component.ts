import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  constructor() { }

  examplesButtons = [
    '"Explain quantum computing in simple terms" →',
    '"Got any creative ideas for a 10 year old’s birthday?" →',
    '"How do I make an HTTP request in Javascript?" →'
  ]

  capabilities = [
    'what user said earlier in the conversation',
    'Allows user to provide follow-up corrections',
    'Trained to decline inappropriate requests'
  ]

  limitations = [
    'May occasionally generate incorrect information',
    'May occasionally produce harmful instructions or biased content',
    'Limited knowledge of world and events after 2021'
  ]

  ngOnInit(): void {
  }

}
