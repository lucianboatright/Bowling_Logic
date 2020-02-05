describe("FrameView",function(){

  describe("#render", function(){

    it("Return an html from single frame", function(){

      var frame = new Frame();
      frame.bowl(7)
      var frameView = new.FrameView(frame);

      var html = frameview.render();

      expect(html.find('.frame_score')).toContainText('7')
    })
  })
})