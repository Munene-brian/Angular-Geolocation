import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Google map Intergration';
  @ViewChild('search')
  public searchElementRef: ElementRef | undefined;

  public zoom:number | undefined;
  public lat:number | any;
  public long:number | undefined;
  public latlongs:any = [];
  public latlong:any = [];
  public searchcontrol: FormControl | any;

  constructor(private mapApiLoader: MapsAPILoader,
    private ngZone:NgZone){

  }
  ngOnInit(): void {
    this.zoom = 10;
    this.lat = 98.231
    this.long = -23.90
    this.searchcontrol = new FormControl();

    this.mapApiLoader.load().then(()=>{
      const autoComp = new google.maps.places.Autocomplete(this.searchElementRef?.nativeElement,{
        types:[],
        componentRestrictions:{'country':'KE'}
      });
      autoComp.addListener('place_changed', ()=>{this.ngZone.run(()=>{
        const place: google.maps.places.PlaceResult = autoComp.getPlace();
        if(place.geometry === undefined || place.geometry === null){
          return;
        }
        const latlong = {
          latitude : place.geometry.location.lat,
          longitude: place.geometry.location.lng
        };
        this.latlongs.push(latlong);
        this.searchcontrol?.reset();
      })})
    })
  }

  setcurrentPosition(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.lat = position.coords.latitude,
        this.long = position.coords.longitude,
        this.zoom = 10
      })
    }
  }
}
