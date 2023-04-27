import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private readonly _productService: ProductsService;
  public products?: MatTableDataSource<Product>;
  // public products$?: Observable<Product[]>;

  public columnNames = ['name', 'price'];
  public selectedProduct: Product | undefined;
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  public constructor(productService: ProductsService) {
    this._productService = productService;
  }

  private getProducts(): void {
    this._productService.getProducts().subscribe((products) => {
      this.products = new MatTableDataSource(products);
      this.products.sort = this.sort;
      this.products.paginator = this.paginator;
    });
  }

  // private getProducts(): void {
  //   this.products$ = this._productService.getProducts();
  // }

  public ngOnInit(): void {
    this.getProducts();
  }

  public onAdd(product: Product) {
    this.products?.data.push(product);
  }

  public onDelete() {
    var filteredData = this.products?.data.filter(
      (product) => product.id != this.selectedProduct?.id
    );
    this.products = new MatTableDataSource(filteredData);
    this.selectedProduct = undefined;
  }
}
