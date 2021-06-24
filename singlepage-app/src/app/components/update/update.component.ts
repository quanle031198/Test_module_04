
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { AwesomeService } from './../../services/awesome.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // id!:number;
  // awesome!:any;
  // updateForm!: FormGroup;

  // constructor(private route: ActivatedRoute,private awesomeService: AwesomeService,private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];
  //   this.awesomeService.getAwesome(this.id).subscribe({
  //     next: (res) => {
  //       this.id = res.id;
  //       this.updateForm = this.fb.group({
  //         tag: [res.tag],
  //         url: [res.url],
  //         descriptions: [res.descriptions],
  //       });




  //     }
  //   });
  // }
  // onSubmit(){

  // }
  // delete(){

  // }

  id !: number;
  updateForm !: FormGroup;

  constructor(private awesomeService: AwesomeService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.awesomeService.getAwesome(this.route.snapshot.params.id).subscribe({
      next: (res) => {
        this.id = res.id;
        this.updateForm = this.fb.group({
          tag: [res.tag],
          url: [res.url],
          descriptions: [res.descriptions],
        });
      }
    });
  }

  onSubmit() {
    this.awesomeService.updateAwesome(this.id, this.updateForm.value).subscribe((res) => {
      this.router.navigate(['/']);
    });;
  }

  delete() {
    this.awesomeService.deleteAwesome(this.id).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }

}

