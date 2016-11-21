import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fght-footer',
  template: `
            <footer class="mdl-mini-footer">
                <div class="mdl-mini-footer__left-section">
                    <div class="mdl-logo">Le footer #FGHT</div>
                </div>
                <div class="mdl-mini-footer__right-section">
                    <ul class="mdl-mini-footer__link-list">
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">En savoir plus</a></li>
                    </ul>
                </div>
            </footer> `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
