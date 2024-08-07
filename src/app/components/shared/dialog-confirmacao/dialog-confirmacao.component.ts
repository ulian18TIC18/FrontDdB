import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmacao',
  templateUrl: './dialog-confirmacao.component.html',
  styleUrl: './dialog-confirmacao.component.css'
})
export class DialogConfirmacaoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      titulo: string;
      mensagem: string;
      labelSim: string;
      labelNao: string;
    }
  ) {}

  ngOnInit() {
    if (!this.data.labelSim) {
      this.data.labelSim = 'SIM';
    }

    if (!this.data.labelNao) {
      this.data.labelNao = 'NÃO';
    }
  }

  onClickSim(): void {
    this.dialogRef.close(true);
  }

  onNoClickNao(): void {
    this.dialogRef.close(false);
  }
  
}
