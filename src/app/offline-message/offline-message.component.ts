import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-message',
  templateUrl: './offline-message.component.html',
  styleUrls: ['./offline-message.component.css']
})
export class OfflineMessageComponent implements OnInit {
  isOffline: boolean = false;
  constructor() { }

  ngOnInit() {
    this.isOffline = !navigator.onLine;
    // Add event listeners to detect online/offline status changes
    window.addEventListener('online', () => this.isOffline = false);
    window.addEventListener('offline', () => this.isOffline = true);
  }

}
