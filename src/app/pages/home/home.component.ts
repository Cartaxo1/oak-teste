import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products.model';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';

interface newProductForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  value: FormControl<number | null>;
  available: FormControl<boolean | null>;
}

interface Available {
  value: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimengModule, ReactiveFormsModule],
  providers: [MessageService, ProductsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: Products[] = [];
  visible: boolean = false;
  disponibilidade: Available[];
  isLoading: boolean = false;

  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<newProductForm>({
    name: this._formBuilder.control('', Validators.required),
    description: this._formBuilder.control('', Validators.required),
    value: this._formBuilder.control(0, Validators.required),
    available: this._formBuilder.control(false, Validators.required),
  });

  constructor(
    private productsService: ProductsService,
    private messageService: MessageService,
    private productService: ProductsService
  ) {
    this.disponibilidade = [
      { value: 'true', label: 'Disponível' },
      { value: 'false', label: 'Indisponível' },
    ];
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((res) => {
      this.isLoading = true;
      this.products = res;
      console.log(res);
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  addProduct() {
    if (this.form.valid) {


      const product: Products = {
        name: this.form.value.name || '',
        description: this.form.value.description || '',
        value: this.form.value.value || 0,
        available: this.form.value.available || false,
      };
      this.productsService.addProduct(product).subscribe((res) => {
        this.isLoading = true;
        this.products.push(res);
        this.getProducts();
        this.showSuccess();
        this.isLoading = false;
        this.form.reset();
        this.visible = false;
      });
    }
  }
  showDialog() {
    this.visible = true;
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Successo',
      detail: 'Produto adicionado com sucesso!',
    });
  }
}
