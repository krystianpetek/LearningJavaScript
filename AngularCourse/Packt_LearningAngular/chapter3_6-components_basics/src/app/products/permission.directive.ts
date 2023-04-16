import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appPermission]',
})
export default class PermissionDirective implements OnInit {
  private currentRole: string = 'agent';
  @Input() public appPermission: string[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private vc: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (this.appPermission.indexOf(this.currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.templateRef);
    }
  }
}
