import { Component, OnInit } from '@angular/core';
// semi colons
import { Router }            from '@angular/router';

import { BucketlistService } from '../../bucketlist.service'
import { BucketlistComponent } from '../bucketlist/bucketlist.component'

@Component({
  selector: 'bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css']
})
// ../../../assets/bootstrap/css/bootstrap-theme.min.css
export class BucketlistsComponent implements OnInit {
  bucketlists: any[] = [];
  constructor(private bucketlistService: BucketlistService,
    private router: Router) { }

  ngOnInit() {
    this.getBucketlists();
    // this.items(id):
    
  }

add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bucketlistService.add(name).subscribe(
      // Returns the updated list of all bucketlists
        () => this.getBucketlists());

     
  }

//  Get All bucketlists
  getBucketlists(): void {
    this.bucketlistService.getBucketlists()
      .subscribe(
        bucketlists => this.bucketlists = bucketlists
      )
  }
  
  items(id): void {
    this.router.navigate(['bucketlists/' + id + '/items']);
  }

  delete(bucketlist): void {
    // Delete a bucketlist by its ID
    this.bucketlistService.delete(bucketlist.bucketlist_id).subscribe(
      // Returns the updated list of all bucketlists
        () => this.getBucketlists());

    }

  edit(id): void {
    
    this.router.navigate(['bucketlists/' + id]);
  }
     
}


