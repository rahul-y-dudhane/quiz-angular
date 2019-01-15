import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppData } from '../constants/AppData';
import { Question } from '../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  section: string;
  questions: Question[];
  currentQuestion: Question
  pageIndex: number = 0;
  options: string[];
  isCorrect: boolean = null;
  wrongAttempt: boolean = null;
  attempts: number = 3;
  marks: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.section = params['section'].charAt(0).toUpperCase() + params['section'].substr(1);
      this.questions = AppData.questions.filter((item) => item.section == this.section.toLowerCase())
      this.currentQuestion = this.questions[this.pageIndex];
    })
  }

  checkAnswer(selectedAnswer: string) {
    selectedAnswer == this.currentQuestion.answer ? this.handleCorrect() : this.handleIncorrect();
  }
  handleCorrect() {

    this.isCorrect = true;
    this.marks = this.marks + this.attempts * 5;

    setTimeout(() => {
      this.isCorrect = null;

      if (this.pageIndex < this.questions.length) {

        this.currentQuestion = this.questions[++this.pageIndex];
        this.attempts = 3;
      }
    }, 1500);

  }

  handleIncorrect() {
    if (this.attempts > 0) {

      if (this.attempts == 1) {

        if (this.pageIndex < this.questions.length) {
          this.pageIndex = this.pageIndex + 1;
          this.currentQuestion = this.questions[this.pageIndex];
          this.attempts = 3;
        } else {
          return;
        }

      } else {
        this.wrongAttempt = true;
        this.attempts--;
        setTimeout(() => {
          this.wrongAttempt = null;
        }, 1500)
      }
    }
  }
}
