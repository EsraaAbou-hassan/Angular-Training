import { Component, OnInit ,Input} from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  categories:any;
  @Input('category')category:string='';

  constructor(private CategoryService:CategoryService) {
    CategoryService.getCategory().subscribe(pro=>{
      this.categories =pro.map(item => {
            return {
              key: item.key,
              ...(item.payload.val() ) as any[]
            };
      });
    });
   }

  ngOnInit(): void {
  }

}
