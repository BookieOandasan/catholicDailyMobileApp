import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Feed from 'feed-to-json-promise'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dailyReading:string;
  dailyReadingTitle:string;
  dailyReadingDate:Date;
  showDailyReading:boolean = false;

  constructor(public navCtrl: NavController) {
    const feed = new Feed()
    feed.load('http://www.usccb.org/bible/readings/rss/index.cfm').then(feed => {
   
      for (let index = 0; index <  feed.items.length; index++) {
        const element =  feed.items[index];
      
        let currentDate:Date = new Date();
        let readingDate:Date = new Date(element.date)
        if(Date.UTC( readingDate.getFullYear(), readingDate.getMonth(), readingDate.getDate()) ==Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())){
            this.dailyReading = feed.items[index].description
            this.dailyReadingTitle = feed.items[index].title;
            this.dailyReadingDate = feed.items[index].date;
            console.log("Daily Reading Date: " + feed.items[index].date);

          if (this.dailyReading==''){this.showDailyReading = false} else{this.showDailyReading = true}
            }
        
      }}).catch(error => {       console.error(error)
    })

  }

}
