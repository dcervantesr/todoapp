import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(x => {
      this.store.dispatch(actions.toggleEditar({id: this.todo.id}));
    });
  }

  editar(): void {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;
    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.texto) { return; }
    this.store.dispatch(actions.editar({id: this.todo.id, texto: this.txtInput.value}));
  }

  borrar(): void {
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }

}
