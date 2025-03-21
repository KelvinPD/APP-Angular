import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import necessário para *ngFor e *ngIf
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
    { name: 'João Silva', phone: '(11) 98765-4321' },
    { name: 'Maria Santos', phone: '(11) 91234-5678' }
  ];

  newContactName = '';
  newContactPhone = '';

  addContact() {
    if (this.newContactName.trim() && this.newContactPhone.trim()) {
      this.contacts.push({ name: this.newContactName.trim(), phone: this.newContactPhone.trim() });
      this.newContactName = '';
      this.newContactPhone = '';
    }
  }

  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }
}
