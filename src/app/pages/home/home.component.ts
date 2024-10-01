import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products.model';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

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
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: Products[] = [];
  visible: boolean = false;
  disponibilidade: Available[];

  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<newProductForm>({
    name: this._formBuilder.control('', Validators.required),
    description: this._formBuilder.control('', Validators.required),
    value: this._formBuilder.control(0, Validators.required),
    available: this._formBuilder.control(false, Validators.required),
  });
  constructor(private productsService: ProductsService) {
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
      this.products = res;
      console.log(res);
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
        this.products.push(res);
        this.getProducts();
        this.form.reset();
        this.visible = false;
      });
    }
  }
  showDialog() {
    this.visible = true;
  }
}
