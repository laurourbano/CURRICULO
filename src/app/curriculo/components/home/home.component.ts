import { Component } from '@angular/core';
import { CurriculoService } from 'src/app/curriculo/services/curriculo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {

  jsonData: any;
  redesSociais: any;
  idade: number = 0;
  interesses: string[] = [];

  constructor(private curriculoService: CurriculoService) { }

  getCurriculo() {
    return this.curriculoService.getCurriculo();
  }

  ngOnInit(): void {
    this.getCurriculo().subscribe((data: any) => {
      this.jsonData = data.dadosPessoais;
      this.redesSociais = data.dadosPessoais.redesSociais;
      this.idade = this.curriculoService.calcularIdade(data.dadosPessoais.dataNascimento);
      this.interesses = data.dadosPessoais.interesses;
      console.log(this.jsonData, this.redesSociais, 'idade', this.idade, this.interesses);
    });
  }


}
