// Profile Component
// This Component gets current User from Storage using StorageService 
// and show information (username, token, email, roles).

import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Problem } from '../models/problem.model';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  problems?: Problem[];
 
  constructor(private storageService: StorageService) { }
 
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
}

