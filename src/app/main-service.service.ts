import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Stadium {
  id: number;
  title:  String ;
  imgURL:  String ;
  details:  String;
  moreDetails:  String;

  constructor(  id: number, title:  String , imgURL:  String, details:  String, moreDetails:  String) {
    this.title = title;
    this.imgURL = imgURL;
    this.id = id;
    this.details = details;
    this.moreDetails = moreDetails;
  }
}


export class MainService   implements OnInit {
  stadium: Stadium[];



  constructor() {
    this.stadium = [
      new Stadium(1, 'Anfield stadium',
        'https://s3-eu-west-1.amazonaws.com/cmsmedia.thetrainline.com/cms/1399/wembley-stadium.jpg',
        'Anfield Three football stands with red seats filling up with spectators and surrounding a pitch. View from the Kenny Dalglish Stand UEFA 4/4 stars Location Anfield, Liverpool, Merseyside, England Coordinates 53°25′50.98″N 2°57′39.05″WCoordinates: 53°25′50.98″N 2°57′39.05″W Owner Fenway Sports Group Operator Liverpool F.C. Executive suites 64 Capacity 54,074[1] Record attendance 61,905 (Liverpool–Wolverhampton Wanderers, 2 February 1952) Field size 101 metres (110 yd) by 68 metres (74 yd)[2] Surface GrassMaster[3] Construction Built 1884 Opened 1884 Tenants Liverpool F.C. (1892–present) Everton F.C. (1884–1892) Anfield is a football stadium in Anfield, Liverpool',
        'The stadium has four stands: the Spion Kop, the Main Stand, the Kenny Dalglish Stand and Anfield Road.[6] The record attendance of 61,905, was set at a match between Liverpool and Wolverhampton Wanderers in 1952.[5] The ground converted to an all-seater stadium in 1994 as a result of the Taylor Report which reduced its capacity. Two gates at the ground are named after former Liverpool managers: Bill Shankly and Bob Paisley. A statue of Shankly is situated outside the stadium. The ground is 2 miles (3 km) from Liverpool Lime Street railway station. It was proposed in 2002 to replace the stadium with a new one in the adjacent Stanley Park, but after the acquisition of Liverpool F.C. by Fenway Sports Group in 2010 it was made clear this would not happen. Construction for an extension to the Main Stand began on 8 December 2014.[7] This extension increased the stadium capacity to 54,074, making it one of the largest all-seater single stands in European football.[8] There are future plans to expand the Anfield Road Stand which would bring the stadium size to around 61,000. Liverpool F.C. officially opened the new stand to the public on 9 September 2016.'),

      new Stadium(2,
        'Wembley Stadium',
        'https://az702058.vo.msecnd.net/asmvc/images/products/nwea/nfwe_1.jpg',
        'Wembley Stadium is a football stadium in Wembley, London, England, which opened in 2007, on the site of the original Wembley Stadium, which was demolished from 2002–2003.[11][12] The stadium hosts major football matches including home matches of the England national football team, and the FA Cup Final. The stadium is also the temporary home of Premier League football club Tottenham Hotspur until September 2018, while White Hart Lane is being demolished and their new stadium is being constructed',
        'Wembley Stadium is owned by the governing body of English football, the Football Association (the FA), through its subsidiary Wembley National Stadium Ltd (WNSL). The FA headquarters are in the stadium. With 90,000 seats, it is the largest football stadium in England, the largest stadium in the UK and the second-largest stadium in Europe.[13]\n' +
        '\n' +
        'Designed by Populous and Foster and Partners, the stadium is crowned by a 134-metre-high (440 ft) Wembley Arch which serves aesthetically as a landmark across London and structurally with the arch supporting over 75% of the entire roof load.[14] The stadium was built by Australian firm Multiplex at a cost of £798 million (£1.09 billion today).[15][5] Contrary to popular belief,[16] Wembley Stadium does not have a retractable roof which covers the playing surface. Two partially retractable roof structures over the east and west end of the stadium can be opened to allow sunlight and aid pitch growth.\n' +
        '\n' +
        'In addition to England home games and the FA Cup final, the stadium also hosts other major games in English football, including the season-opening FA Community Shield, the League Cup final, the FA Cup semi-finals, the Football League Trophy, the Football League play-offs, the FA Trophy, the FA Vase and the National League play-offs. A UEFA category four stadium, Wembley hosted the 2011 and 2013 UEFA Champions League Finals, and will host both the semi-finals and final of UEFA Euro 2020.[17] The stadium hosted the Gold medal matches at the 2012 Olympic Games football tournament. The stadium also hosts rugby league\'s Challenge Cup final, NFL London Games and music concerts.')
    ];
  }

  ngOnInit() {

  }

  getData() {
    return this.stadium;
  }
  addData(d: any) {
    this.stadium.push(d);
  }
}
