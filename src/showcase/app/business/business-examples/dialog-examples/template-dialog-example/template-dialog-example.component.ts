import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Dialog } from '@sbb-esta/angular-business/dialog';

@Component({
  selector: 'sbb-template-dialog-example',
  templateUrl: 'template-dialog-example.component.html',
})
export class TemplateDialogExampleComponent {
  @ViewChild('sampleDialogTemplate', { static: true }) sampleDialogTemplate: TemplateRef<any>;

  constructor(public dialog: Dialog) {}

  openDialog() {
    const dialogRef = this.dialog.openDialog(this.sampleDialogTemplate);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
