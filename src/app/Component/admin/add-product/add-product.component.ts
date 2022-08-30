import { Component,OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators,AbstractControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductService } from 'src/app/Service/product.service';
import { Router ,ActivatedRoute} from '@angular/router';
import {  Observable ,Subscription,take} from 'rxjs';
import { IProduct } from 'src/app/Model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnDestroy {
  categories$:any;
  product:any={title:'',category:'',image:'',price:0};
  id:any;

subscription:any;

  // selectedFile:any;
  AddProductForm:FormGroup= new FormGroup({
    title: new FormControl(''),
    price: new FormControl(0),
    category: new FormControl(''),
    image: new FormControl('')
  })
  constructor(cat :CategoryService,private productService:ProductService,
    private fb:FormBuilder,private router:Router,private route:ActivatedRoute) {
     cat.getCategory().subscribe(pro=>{
      this.categories$ =pro.map(item => {
            return {
              key: item.key,
              ...(item.payload.val() ) as any[]
            };
      });
    });
  this.id=this.route.snapshot.paramMap.get('id')
  if(this.id)
    this.subscription= this.productService.getProduct(this.id).pipe(take(1)).subscribe(pro=>this.product=pro);


  this.AddProductForm=this.fb.group({
   title:    ['',Validators.required],
    price:    [0,[Validators.required, Validators.min(0)]],
    category: ['',Validators.required],
    image:    ['',[Validators.required,CustomValidators.url]]
  })
  }
  // onFileSelected(event:any){
  //    this.selectedFile=<File>event.target.files[0];
  // }
   save(product:any){
  //  const fdata=new FormData();
  //   fdata.append('images',this.selectedFile);
  this.productService.addProduct(product);

   }
   ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
   update(){
      this.productService.updateProduct(this.product,this.id);
      this.product=null;

   }
   delete(){
    let con=confirm("Are you sure to delete this product ");
    if(!con) return
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/admin/products']);

  }
   get f(): { [key: string]: AbstractControl } {
    return this.AddProductForm.controls;
  }


}
