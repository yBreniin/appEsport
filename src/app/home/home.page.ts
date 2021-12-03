import { Component } from '@angular/core';
import { Produtos } from '../models/Produtos';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaProdutos: Produtos[] = [];

  constructor(private storageService: StorageService) {}

  async buscarProdutos(){
    this.listaProdutos = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarProdutos();
  }

  async excluirCadastro(id: string){
  await this.storageService.remove(id);
  this.buscarProdutos();
  }

}
