import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { tap } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  customerId!: string;
  customer!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get('id')!;

    this.customer = this.db
      .collection('customers')
      .doc<any>(this.customerId)
      .valueChanges()
      .pipe(
        tap(cust =>
          this.seo.generateTags({
            title: cust.name,
            description: cust.bio,
            image: cust.image,
          })
        )
      );
  }
}