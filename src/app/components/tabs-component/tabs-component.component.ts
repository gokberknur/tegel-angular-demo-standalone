import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-tabs-component',
    templateUrl: './tabs-component.component.html',
    styleUrls: ['./tabs-component.component.css'],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TabsComponentComponent implements AfterViewInit {
  selectedIndex: number = 0;

  @ViewChild('tabs', { static: true }) tabsRef: ElementRef | undefined;

  ngAfterViewInit() {
    if (this.tabsRef) {
      const tabs = this.tabsRef.nativeElement;
      tabs.addEventListener('tdsChange', (event: any) => {
        const selectedTabIndex = event.detail.selectedTabIndex;
        this.selectedIndex = selectedTabIndex;
        console.log(this.selectedIndex);
      });
    }
  }
}
