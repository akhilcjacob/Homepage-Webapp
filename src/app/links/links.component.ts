import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  link: Link = {
	id: 'http://resume.akhilcjacob.com',
	name: 'resume'
  }
  constructor() { }

  ngOnInit() {
  }

}
