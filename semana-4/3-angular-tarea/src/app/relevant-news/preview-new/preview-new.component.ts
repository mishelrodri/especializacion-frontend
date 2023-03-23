import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-new',
  templateUrl: './preview-new.component.html',
  styleUrls: ['./preview-new.component.scss'],
})
export class PreviewNewComponent {
  @Input() src: string = '';
  @Input() number: string = '';
  @Input() title: string = '';
  @Input() paragraph: string = '';
}
