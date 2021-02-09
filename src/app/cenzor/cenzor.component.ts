import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  badWord: string;

  wAmb={
    width: '100%',
    marginBottom: '20px'
  }
  badWordArr: Array<string> = [];
  wrod: string;
  words: Array<string> = [];

  isActiveAlert: boolean;

  alertText: string;

  allBadWords: string = '';

  checkTest: Array<string> = [];

  mainText: string;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {  
    if (this.badWord == undefined || this.badWord == '') {
      this.isActiveAlert = true;
      this.alertText = 'First write bad word!';
    }
    else {
      if (this.allBadWords == '') {
        this.allBadWords += this.badWord;
        this.badWord = '';
      }
      else {
        this.allBadWords += ', ' + this.badWord;
        this.badWord = '';
      }
      this.wrod = this.allBadWords;
      this.words = this.wrod.split(', ');
    }
  }

  reset(): void {
    this.allBadWords = '';
    this.badWord = '';
  }

  close(): void {
    this.isActiveAlert = false;
  }

  cenzor(): void {
    if (this.mainText == undefined || this.mainText == '') {
      this.isActiveAlert = true;
      this.alertText = 'First write some text!';
    }
    else {
      for (let i = 0; i < this.words.length; i++) {
        this.checkTest = this.mainText.split(' ');
        
        for (let j = 0; j < this.checkTest.length; j++) {
          
          if (this.checkTest[j].toLocaleLowerCase() == this.words[i].toLocaleLowerCase() ) {
            let it: string = '';
            for (let q = 1; q <= this.words[i].length; q++) {
              it += '*';
            }

            this.checkTest.splice(j, 1, it);
            this.mainText = '';
            this.mainText = this.checkTest.join(' ');
            console.log(this.checkTest.join(' '));
          }
          if (this.checkTest[j].toLocaleLowerCase() == `${this.words[i].toLocaleLowerCase()},`) {
            let it: string = '';
            for (let q = 1; q <= this.words[i].length; q++) {
              it += '*';
            }
            this.checkTest.splice(j, 1, `${it},`);
            this.mainText = '';
            this.mainText = this.checkTest.join(' ');
          }
        }
      }
    }
  }


}
