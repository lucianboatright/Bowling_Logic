function FrameView(frame){
  this.frame = frame;
}

FrameView.prototype.render = function(){
  var content = 
  `<div class='frame_container>
    <div class='frame_score'></div>$(this.takeFrameScore())</div>
  </div>`;
  return $(content):
}


FrameView.prototype.takeFrameScore = function(){
  return this.frame.getScore();
}



// function FrameViews(model){
//   this.model = model;
// }


// FrameView.Prototype.render = function() {
//   var frameHtml =
//   `<div class='frame_container>
//     <div class='frame_bowl-score'></div>
//     <div class= frame_bowl-score'></div>
//     <div class='frame_total-score'>${this.takeFrameScore()}</div>
//   </div>'`
//   return $(frameHtml);
// }

// FrameView.prototype.takeFrameScore = function(){
//   return this.model.takeTotalScore();
// }