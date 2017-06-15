import { Component, OnInit } from "@angular/core";
import {MistralService} from "../../engines/mistral/mistral.service";
import {Execution} from "../../shared/models/execution";

@Component({
  selector: 'cf-executions-list',
  templateUrl: './executions-list.component.html',
  styleUrls: ['./executions-list.component.scss']
})
export class ExecutionsListComponent implements OnInit {
  executions: Execution[] = [];

  constructor(private service: MistralService) { }

  ngOnInit() {
    this.service.executions().subscribe(executions => this.executions = executions);
  }

}