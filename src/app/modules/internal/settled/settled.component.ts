import { Component, OnInit } from '@angular/core';
import { SettledModule } from 'src/app/models/settled.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { SettledService } from 'src/app/services/settled/settled.service';

@Component({
  selector: 'app-settled',
  templateUrl: './settled.component.html',
  styleUrls: ['./settled.component.scss']
})
export class SettledComponent implements OnInit {
  constructor (
    private serviceApi: ApiService,
    private serviceSettled: SettledService,
  ) {}

  settledData: SettledModule[] = [];

  ngOnInit(): void {
    this.getSelect();
  }

  getSelect() {
    this.serviceSettled.getSelect().subscribe({
      next: (response: any) => {
        console.log(response);
        // Mapea los datos del servicio al formato esperado
        this.settledData = response.result.map((item: any) => ({
          idRole: parseInt(item.id_role, 10),
          name: item.name,
        }));
        console.log(this.settledData);
        this.getTable();
      },
      error: (err: any) => console.error(err),
      complete: () => (false),
    });
  }

  getTable() {
    
  }
}
