import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import * as actionsFiltros from 'src/app/filtro/filtro.actions';
import * as actionsTodos from '../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actionsFiltros.filtrosValidos;
  filtros: actionsFiltros.filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
    this.store.subscribe(({filtro, todos}) => {
      this.filtroActual = filtro;
      this.pendientes = todos.filter(todo => !todo.completado).length;
    });
  }

  setFiltro(filtro: actionsFiltros.filtrosValidos): void {
    this.store.dispatch(actionsFiltros.setFiltro({filtro}));
  }

  limpiarCompletados(): void {
    this.store.dispatch(actionsTodos.borarrCompletados());
  }
}
