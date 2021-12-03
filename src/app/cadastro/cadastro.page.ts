import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produtos } from '../models/Produtos';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  grupo: FormGroup;
  produtos: Produtos = new Produtos();

  constructor(public storage:StorageService, public router: Router, private storageService: StorageService, private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.grupo = this.formBuilder.group({
      nomeProduto: [''],
      quantidade: [''],
      preco: [''],
      id: ['']
    })
  }

  async salvar() {
    this.produtos.nomeProduto = this.grupo.value.nomeProduto;
    this.produtos.quantidade = this.grupo.value.quantidade;
    this.produtos.preco = this.grupo.value.preco;
    this.produtos.id = this.grupo.value.id;
    
    await this.storageService.set(this.produtos.id, this.produtos);
    this.router.navigateByUrl('/home');
  }

}