import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { Question } from '../model/question';
import { AppData } from '../constants/AppData';
import { QuestionService } from '../services/question.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  section: string;
  questions: Question[];
  currentQuestion: Question
  options: string[];
  user = new User();
  isCorrect: boolean = null;
  wrongAttempt: boolean = null;
  timeWarning: boolean = null;
  quizEnd: boolean = null;

  pageIndex: number = 0;
  attempts: number = 3;
  marks: number = 0;
  h: number = 0;
  m: number = 0;
  s: number = 0;

  seconds: Observable<number>;
  timePerQue: Observable<number>;
  timerSubscription: Subscription;
  userName: string = '';

  constructor(private route: ActivatedRoute, private questionService: QuestionService,
              private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.section = params['section'];
      this.userName = params['username'];

      this.questionService.getQuestionsBySection(this.section).subscribe( (data) => {
             this.questions = data;
             this.section = params['section'].charAt(0).toUpperCase() + params['section'].substr(1);
             this.currentQuestion = this.questions[this.pageIndex];
             this.seconds = interval(1000);
             this.timePerQue = this.seconds.pipe(take(31));
             this.startTimer();
      })
      // this.questions = AppData.questions.filter((item) => item.section == this.section.toLowerCase())
    })
  }

  /**
   * @function startTimer
   * @description Function calls for every new question 
   *              to get timing for that question
   */
  startTimer() {
    this.timerSubscription = this.timePerQue.subscribe(n => {
      this.h = Math.floor(n / 3600);
      this.m = Math.floor(n % 3600 / 60);
      this.s = Math.floor(n % 3600 % 60);
      if (this.s == 20) {
        this.timeWarning = true;
        setTimeout(() => {
          this.timeWarning = null;
        }, 1500);
      } else if (this.s == 30) {
        this.loadNextQuestions();
      }
    })
  }

  /**
   * @function checkAnswer
   * @description function used to check answes clicked by user
   * @param selectedAnswer 
   */
  checkAnswer(selectedAnswer: string) {
    selectedAnswer == this.currentQuestion.answer ? this.handleCorrect() : this.handleIncorrect();
  }

  /**
   * @function handleCorrect
   * @description handles the correct answer and move to next question
   */
  handleCorrect() {
    this.isCorrect = true;
    this.marks = this.marks + this.attempts * 5;
    setTimeout(() => {
      this.isCorrect = null;
      this.loadNextQuestions();
    }, 1500);
  }

  /**
   * @function handleIncorrect
   * @description handles the incorrect answer
   *              checks for attempts and if attempts exceeds 3
   *              move to next question
   */
  handleIncorrect() {
    if (this.attempts > 0) {
      if (this.attempts == 1) {
        this.loadNextQuestions();
      } else {
        this.wrongAttempt = true;
        this.attempts--;
        setTimeout(() => {
          this.wrongAttempt = null;
        }, 1500)
      }
    }
  }

  /**
   * @function loadNextQuestions
   * @description loads next question depending upon scenario
   */
  loadNextQuestions() {
    if (this.pageIndex < this.questions.length - 1) {
      this.timerSubscription.unsubscribe();
      this.startTimer();
      this.pageIndex = this.pageIndex + 1;
      this.currentQuestion = this.questions[this.pageIndex];
      this.attempts = 3;
    } else {
      this.quizEnd = true;
      this.saveUserDetails()
    }
  }

  /**
   * @function saveUserDetails
   * @description Send User Details to service
   */
  saveUserDetails(){
      this.user.marks = this.marks;
      this.user.name = this.userName;
      this.user.section = this.section;
      
      this.userService.sendUserDetails(this.user).subscribe((response) => {
        this.router.navigate(['/welcome'])
      })
  }
}