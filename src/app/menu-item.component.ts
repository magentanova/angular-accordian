import { Component, Input } from '@angular/core';
import { MenuItem } from './menuItem';


const height = 100;

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent {
	@Input() menuItem: MenuItem;
	@Input() level: number;
	expanded: boolean = false;

	getHeight(): number {
		const getChildrensHeight = children => {
			if (children.length) {
				return children.reduce((total,child) => total += height, 0);
			};
			return height;
		}
		return height + getChildrensHeight(this.menuItem.children);
	};

	toggleExpand(): void {
		this.expanded = this.expanded ? false : true;
	};
}

