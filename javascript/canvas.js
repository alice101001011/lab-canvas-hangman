class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById("hangman");
    this.context = this.canvas.getContext("2d");

    this.secretWord = secretWord;
    console.log(this.secretWord);
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.fillStyle = "black";
      this.context.fillRect(500 + i * 50, 600, 30, 2);
    }
  }

  writeCorrectLetter(index) {
    this.context.fillStyle = "black";
    this.context.font = "30px Helvetica";
    this.context.fillText(this.secretWord[index], 500 + index * 50, 590);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.fillStyle = "red";
    this.context.font = "30px Helvetica";
    this.context.fillText(letter, 1200 - errorsLeft * 50 - 260, 500);
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    /*  if (errorsLeft === 9) {
      this.context.fillStyle = "black";
      this.context.moveTo(100, 550);
        this.context.lineTo(50, 600);
        this.context.stroke();
    } else if (errorsLeft === 8) {
      this.context.moveTo(50, 600);
        this.context.lineTo(150, 600);
        this.context.stroke();
    } else if (errorsLeft === 7) {
      this.context.moveTo(150, 600);
        this.context.lineTo(100, 550);
        this.context.stroke();
    } else if (errorsLeft === 6) {
      this.context.moveTo(100, 550);
        this.context.lineTo(100, 100);
        this.context.stroke();
    } else if (errorsLeft === 5) {
      this.context.moveTo(100, 100);
        this.context.lineTo(300, 100);
        this.context.stroke();
    } else if (errorsLeft === 4) {
      this.context.moveTo(300, 100);
        this.context.lineTo(300, 200);
        this.context.stroke();
    } else if (errorsLeft === 3) {
        this.context.beginPath();
        this.context.arc(300, 250, 50, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
    } else if (errorsLeft === 2) {
        this.context.moveTo(300, 300);
        this.context.lineTo(300, 450);
        this.context.stroke();
    } else if (errorsLeft === 1) {
        this.context.moveTo(300, 450);
        this.context.lineTo(260, 500);
        this.context.stroke();
    } else if (errorsLeft === 0) {
          this.context.moveTo(300, 450);
            this.context.lineTo(340, 500);
            this.context.stroke();
          }  */

    // this seemed like the right time for a switch statement – looks a lot cleaner

    switch (errorsLeft) {
      case 9:
        this.context.moveTo(100, 550);
        this.context.lineTo(50, 600);
        this.context.stroke();
        break;
      case 8:
        this.context.moveTo(50, 600);
        this.context.lineTo(150, 600);
        this.context.stroke();
        break;
      case 7:
        this.context.moveTo(150, 600);
        this.context.lineTo(100, 550);
        this.context.stroke();
        break;
      case 6:
        this.context.moveTo(100, 550);
        this.context.lineTo(100, 100);
        this.context.stroke();
        break;
      case 5:
        this.context.moveTo(100, 100);
        this.context.lineTo(300, 100);
        this.context.stroke();
        break;
      case 4:
        this.context.moveTo(300, 100);
        this.context.lineTo(300, 200);
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath();
        this.context.arc(300, 250, 50, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        this.context.moveTo(300, 300);
        this.context.lineTo(300, 450);
        this.context.stroke();
        break;
      case 1:
        this.context.moveTo(300, 450);
        this.context.lineTo(260, 500);
        this.context.stroke();
        break;
      case 0:
        this.context.moveTo(300, 450);
        this.context.lineTo(340, 500);
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    const youLostImage = new Image();
    youLostImage.src = "../images/gameover.png";
    this.context.drawImage(youLostImage, 480, 50);
  }

  winner() {
    const youWonImage = new Image();
    youWonImage.src = "../images/awesome.png";
    this.context.drawImage(youWonImage, 480, 50, 436, 309);
  }
}
