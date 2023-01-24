import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { getCountFromServer } from 'firebase/firestore';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: string | null = null;
  user:any = {};


  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUser();
    })
  }



  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {

      })
  }
}
