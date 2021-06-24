import { Component, OnInit } from '@angular/core';
import { AwesomeService } from 'src/app/services/awesome.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  awesomes!: any;

  constructor(private awesomeService: AwesomeService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.awesomeService.getListAwesome().subscribe({
      next: (res) => {
        this.awesomes = res;
        console.log(this.awesomes);
        this.awesomes.forEach((awesome:any) => {

          awesome.id;

        });

      }
    });
  }

}
