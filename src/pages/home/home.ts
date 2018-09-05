import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Feed from 'feed-to-json-promise'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dailyReading:any;

  constructor(public navCtrl: NavController) {
    const feed = new Feed()
    feed.load('http://www.usccb.org/bible/readings/rss/index.cfm').then(feed => {
      console.log(feed)
      console.log(feed.items[0].description)
      this.dailyReading = feed.items[0].description
    }).catch(error => {
      console.error(error)
    })


    // feed.load('http://www.usccb.org/bible/readings/rss/index.cfm',
    //        result=> {
    //       this.dailyReading = result
    //     })

  }

}
