import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title,Meta } from '@angular/platform-browser';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service :MovieApiServiceService ,private title :Title ,private meat :Meta) { 
      this.title.setTitle('Search movies - showtime');
      this.meat.updateTag({name:'description',content :'search here like aavatr '})

  }
  
  ngOnInit(): void {
  }
  searchResult : any ;
  searchForm = new FormGroup ({
     'movieName' :new FormControl(null)
  });

  submitForm()
    {
       console.log(this.searchForm.value,'searchform#');
       this.service.getSearchMovie(this.searchForm.value).subscribe((result:any) =>{
          console.log(result);
          this.searchResult = result.results;
       })
    }

}
