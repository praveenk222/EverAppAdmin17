import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SubjectService } from '../../../services/subject.service';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-autoserach',
  standalone:true,
  imports:[AutocompleteLibModule,FormsModule],
  templateUrl: './autoserach.component.html',
  styleUrl: './autoserach.component.css'
})
export class AutoserachComponent implements OnInit{
  items: any[] ;
  data: any[];
  keyword = 'BranchName'
  @Output() itemSelected=new EventEmitter<any>();
  constructor(private dataService: SubjectService) { 
  this.dataService.fetchMasterData(); // Fetch data if null

  }
  selectedItem: any;
  suggestions: any[] ;

 
  ngOnInit(): void {
  this.dataService.data$.subscribe((data:any) => {
    console.log(data.message)
    this.data=data.message;
  });
  }
  selectEvent(item:any) {
    console.log(item)
    this.itemSelected.emit(item);
    // do something with selected item
  }
 

  onChangeSearch(item:any){

  }
  onFocused(e:any) {
    // do something
  }
}
