import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string ="https://th.bing.com/th/id/OIP.Ihu2B55S_YG9mwUQ5Uo1YwHaE8?pid=ImgDet&rs=1";
  contentTitle: string = "NOTICIA";
  contentDescription: string="NAO TEM NOTICIA NENHUMA";
  constructor() { }

  ngOnInit(): void {
  }

}
