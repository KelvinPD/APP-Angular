import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule, NgxMaskDirective],
  providers: [provideNgxMask()]
})
export class AppComponent {
  contacts = [
    { name: 'João Silva', phone: '(11) 98765-4321', cpf: '123.456.789-01' },
    { name: 'Maria Santos', phone: '(11) 91234-5678', cpf: '987.654.321-00' }
  ];
  

  newContactName = '';
  newContactPhone = '';
  newCPF = '';

  message: string = '';

  addContact() {
    if (this.newContactName.trim() && this.newContactPhone.trim() && this.newCPF.trim()) {
      this.contacts.push({
        name: this.newContactName.trim(),
        phone: this.newContactPhone.trim(),
        cpf: this.newCPF.trim()
      });
      this.newContactName = '';
      this.newContactPhone = '';
      this.newCPF = '';
  
      this.message = 'Contato adicionado com sucesso!';
      setTimeout(() => (this.message = ''), 3000);
    }
  }
  
  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }
}
