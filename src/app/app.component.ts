import { Component ,OnInit, Optional} from '@angular/core';
import { ProductService } from './services/product.service';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService,ConfirmationService],
  styleUrls: ['./app.component.css','../assets/demo/badges.scss']
})
export class AppComponent implements OnInit {
  title = 'Manage Products';
  productDialog: boolean;

  products;
  submitted: boolean;

  statuses: any[];
  form = new FormGroup({
    id: new FormControl(0),
    nameEn: new FormControl('', Validators.required),
    nameAr: new FormControl('', Validators.required),
    desc: new FormControl(''),
    price: new FormControl({ value: 0 }, [Validators.required, Validators.min(0)]),
    stock: new FormControl({ value: 0 }, [Validators.required, Validators.min(0)]),
  });
  constructor( public productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService
    ,private primengConfig: PrimeNGConfig) {
      this.primengConfig.ripple = true;
  }
  ngOnInit() {
    this.productService.getAll().then(data => this.products = data.result);

  }
  openNew() {
let product={id:0,nameEn:'',nameAr:'',desc:'',price:0,stock:0}
    this.form.patchValue(product)
    this.submitted = false;
    this.productDialog = true;
  }
  editProduct(product) {
    this.form.patchValue(product)
    this.productDialog = true;
  }

  deleteProduct(product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.nameEn + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.delete(product.id).then(res => {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
          this.productService.getAll().then(data => this.products = data.result)
        })
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    if (!this.form.valid)
      return

    if (this.form.controls.id.value > 0) {
      this.productService.edit(this.form.value).then(res => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 })
        this.productService.getAll().then(data => this.products = data.result)
        this.productDialog = false;
      })
    }
    else {
      this.productService.create(this.form.value).then(res => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        this.productService.getAll().then(data => this.products = data.result)
        this.productDialog = false;
      })
    }
  }
}
