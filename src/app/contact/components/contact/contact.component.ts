import { Component, OnInit } from '@angular/core';
import { EmployeeData } from 'src/app/core/models/employee.model';
import { GeneratorService } from 'src/app/core/services/generator.service';

const names = ['juan', 'pedro', 'maria', 'ana', 'claudia', 'henry'];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  list1: EmployeeData[] = [];
  list2: EmployeeData[] = [];

  constructor(private generatorService: GeneratorService) { }

  ngOnInit() {
    this.list1 = this.generatorService.generate(names, [10, 20], 10)
    this.list2 = this.generatorService.generate(names, [10, 20], 10)
  }

  addItem(list: EmployeeData[], label: string){    
    list.unshift({
      label : label,
      num : this.generatorService.generateNumber([10,20])
    })
  }
}
