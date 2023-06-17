import {Component, OnInit} from '@angular/core';
import {IProductTypeSelect} from "../../../interface/products";
import {WomenService} from "../../../services/women/women.service";
import {ManService} from "../../../services/man/man.service";
import {NodeManService} from "../../../services/node/nodeMan.service";
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit{
  files!: TreeNode[];
  selectedFiles!: TreeNode[];

  constructor(private nodeService: NodeManService) { }

  ngOnInit() {
    this.nodeService.getFiles().then((data) => (this.files = data));
  }


  changeProductType(ev:  {ev: Event, value: IProductTypeSelect}): void {

  }
}

