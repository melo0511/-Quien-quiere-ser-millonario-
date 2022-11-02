export class Question{

    constructor(text,choices,answer){
        this.text = text
        this.choices = choices
        this.answer = answer
    }

    correctAnswer(choice){
        return choice === this.answer
    }
}

/////////////////////////////////////////

class posicion{

    index = 0

    constructor(question){
        this.question = question
    }

    getIndex(){
        return this.question[this.question]
    }

    guess(answer){
        this.question++
    }

}