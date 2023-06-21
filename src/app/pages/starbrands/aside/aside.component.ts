import {Component, OnInit} from '@angular/core';
import {IProductTypeSelect} from "../../../interface/products";
import {NodeManService} from "../../../services/node/nodeMan.service";
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit{
  files!: TreeNode[];
  selectedFiles!: TreeNode<any> | TreeNode<any>[];

  constructor(private nodeService: NodeManService) { }

  ngOnInit() {
    this.nodeService.getFiles().then((data) => (this.files = data));
  }


  changeProductType(ev:  {ev: Event, value: IProductTypeSelect}): void {

  }
}

