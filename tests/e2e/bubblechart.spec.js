describe('Web - Vizabi e2e test :: Bubble Chart', function() {
    
  var testData = require('../../pageObjects.json');
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;
  browser.manage().window().setSize(1100, 600);

  var baseUrl = 'http://localhost:9000/preview/';
  var baseChartUrl = baseUrl + "bubblechart.html#_width:750&height:650&fullscreen:true&resp-sect:true&info-sect:true&butt-sect:true";
  var EC = protractor.ExpectedConditions;
  testData.forEach( function (data) {

  // Base Selectors

  var buttonPlay = element(by.css(data.All_Global_Loctors.buttonPlay_Locator_CSS));
  var countries = element(by.css(data.bubble_Chart_Loctors.countriesBubblechart_Locator_CSS));
  var buttonList = element(by.css(data.All_Global_Loctors.buttonList_Locator_CSS));

  it('Loading Bubble Chart Page', function() {

    browser.get(baseChartUrl);

    // Check that elements were loaded

    browser.wait(EC.visibilityOf(buttonPlay), 60000, "Chart is not Loaded");

    // Check that Chart was loaded and Ready

    buttonPlay.isDisplayed().then(function(visibility) {
      expect(visibility).toBe(true);
    });

    // Check that country is displaying on Chart
      
    countries.all(by.tagName('circle')).then(function(items) {
      expect(items.length).not.toBe(0);
    });

    // Check that navigate buttons are available
      
    var buttonListAll = buttonList.all(by.tagName('button'));
    var buttonListVisible = buttonList.all(by.tagName('button')).filter(function(element){
      return element.isDisplayed().then(function(visibility) {
        return !!visibility;
      });
    });

    buttonListAll.then(function(items) {
      expect(items.length).toBe(8);
    });

    buttonListVisible.then(function(items) {
      expect(items.length).toBe(6);
    });

  });

//  **************************** BUBBLE CHART ************************************

  var play = element(by.css(data.All_Global_Loctors.play_Locator_CSS));
  var pause = element(by.css(data.All_Global_Loctors.pause_Locator_CSS));
  var slider = element(by.css(data.All_Global_Loctors.slider_Locator_CSS));
  var USABubble = element(by.css(data.bubble_Chart_Loctors.USA_Bubble_Locator_CSS));
  var chinaBubble = element(by.css(data.bubble_Chart_Loctors.China_Bubble_Locator_CSS));

  // If I select China and the United States bubbles and drag the timeslider,
  // we see the trails being left for those two countries.

  it('MakeTrialsDrag', function() {

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    //Clicking USA bubble
    browser.wait(EC.visibilityOf(USABubble), 5000).then(function(){
      browser.actions().mouseMove(USABubble).mouseMove({x:0, y:-15}).click().perform();
    });


    //Clicking China bubble
    browser.wait(EC.visibilityOf(chinaBubble), 5000).then(function(){
      browser.actions().mouseMove(chinaBubble).mouseMove({x:0, y:-30}).click().perform();
    });

    //Clicking play
    browser.wait(EC.visibilityOf(play), 5000).then(function(){
      play.click();
      browser.sleep(5000);
    });

    //Clicking Pause
    browser.wait(EC.visibilityOf(pause), 5000).then(function(){
      pause.click();
    });

    //Getting slider location before drag
    browser.wait(EC.visibilityOf(slider), 5000);
    slider.getLocation().then(function (beforePlaySliderLocation) {
      var beforePlaySliderDivLocation = beforePlaySliderLocation.x;
      //Dragging slider
      browser.driver.actions().dragAndDrop(slider, {x:200, y:5}).click().perform();

      //Getting slider location after drag
      slider.getLocation().then(function (afterPlaySliderLocation) {
        var afterPlaySliderDivLocation = afterPlaySliderLocation.x;
        //Comparing slider locations
        expect(afterPlaySliderDivLocation).toBeGreaterThan(beforePlaySliderDivLocation);
      });
    });
  });

  // If I click on play when I'm on the year 2015, the time slider handle
  // moves,, and the bubbles change position. It pauses automatically when it reached the final year.

  it('Play', function() {

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    // Getting year's 1st digit
    var firstDigit = browser.element(by.css(data.bubble_Chart_Loctors.firstDigitOfYear_Locator_CSS));
    browser.wait(EC.visibilityOf(firstDigit), 5000);
    firstDigit.getText().then(function (firstDigitIntro) {
      var firstDigitText = firstDigitIntro;

      // Comparing the year's 1st digit
      var val1= "2";
      expect(firstDigitText).toBe(val1);

      // Getting year's 2nd digit
      var secondDigit = browser.element(by.css(data.bubble_Chart_Loctors.secondDigitOfYear_Locator_CSS));
      browser.wait(EC.visibilityOf(secondDigit), 5000);
      secondDigit.getText().then(function (secondDigitIntro) {
        var secondDigitText = secondDigitIntro;

        // Comparing the year's 2nd digit
        var val2= "0";
        expect(secondDigitText).toBe(val2);

        // Getting year's 3rd digit
        var thirdDigit = browser.element(by.css(data.bubble_Chart_Loctors.thirdDigitOfYear_Locator_CSS));
        browser.wait(EC.visibilityOf(thirdDigit), 5000);
        thirdDigit.getText().then(function (thirdDigitIntro) {
          var thirdDigitText = thirdDigitIntro;

          // Comparing the year's 3rd digit
          var val3= "1";
          expect(thirdDigitText).toBe(val3);

          // Getting year's 4th digit
          var fourthDigit = browser.element(by.css(data.bubble_Chart_Loctors.fourthDigitOfYear_Locator_CSS));
          browser.wait(EC.visibilityOf(fourthDigit), 5000);
          fourthDigit.getText().then(function (fourthDigitIntro) {
            var fourthDigitText = fourthDigitIntro;

            // Comparing the year's 4th digit
            var val4= "5";
            expect(fourthDigitText).toBe(val4);

            //Getting slider position before play
            slider.getLocation().then(function (beforePlaySliderLocation) {
              var beforePlaySliderDivLocation = beforePlaySliderLocation.x;
              play.click();
              browser.sleep(180000);

              //Getting slider position after play
              slider.getLocation().then(function (afterPlaySliderLocation) {
                var afterPlaySliderDivLocation = afterPlaySliderLocation.x;

                //Comparing drag positions
                expect(afterPlaySliderDivLocation).toBe(beforePlaySliderDivLocation);
              });
            });
          });
        });
      });
    });
  });

  // United states should have 2015: GDP: 53354 $/year/person

  it('GDP', function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    //Hovering USA bubble
    browser.actions().mouseMove(USABubble).mouseMove({x:0,y:-15}).perform();

    // Getting attributes of X axis
    var axis = browser.element(by.css(data.bubble_Chart_Loctors.axis_Locator_CSS));
    browser.wait(EC.visibilityOf(axis), 5000);
    axis.getText().then(function (axisAsParameter) {
      var axisText = axisAsParameter;

      // Comparing gdp
      var findMe = "53.4k";
      expect(axisText.indexOf(findMe) !== -1).toBe(true);
    });
  });

  // User can hover the bubbles with a cursor,
  // the bubbles react to hovering and a tooltip appears, and contains the country name

  it('USAHover', function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    //Hovering USA bubble
    browser.actions().mouseMove(USABubble).mouseMove({x:0, y:-15}).perform();
    browser.sleep(2000);

    // Getting attributes of tooltip
    var tooltip = browser.element(by.css(data.bubble_Chart_Loctors.tooltip_Locator_CSS));
    browser.wait(EC.visibilityOf(tooltip), 5000);
    tooltip.getText().then(function (tooltipAsParameter) {
      var tooltipText = tooltipAsParameter;
      // Comparing the country name
      var findMe = "United States";
      expect(findMe).toBe(tooltipText);
    });
  });

  // There's a data warning to the bottom right

  it('DataWarning', function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    //Clicking Data Warning link
    var warning =element(by.css(data.bubble_Chart_Loctors.warning_Locator_CSS));
    browser.wait(EC.visibilityOf(warning), 5000).then(function(){
      warning.click();
    });

    //Getting text heading from data warning pop up
    var warningTextElememnt =element(by.css(data.bubble_Chart_Loctors.warningTextElememnt_Locator_CSS));
    browser.wait(EC.visibilityOf(warningTextElememnt), 5000);
    warningTextElememnt.getText().then(function (warningTextAsParameter) {
      var warningText = warningTextAsParameter;

      // Comparing the heading text from pop up of data warning
      var findMe = "DATA DOUBTS";
      expect(findMe).toBe(warningText);
    });
  });

  // I can drag the label "United States" and drop it anywhere in the chart area

  it('DragLabel', function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    //Clicking USA bubble
    browser.wait(EC.visibilityOf(USABubble), 5000).then(function(){
      browser.actions().mouseMove(USABubble).mouseMove({x: 0, y: -10}).click().perform();
    });

    //Getting location before dragging label
    var USALabel = element(by.css(data.bubble_Chart_Loctors.USALabel_Locator_CSS));
    USALabel.getLocation().then(function(initialLocation){
      var initialLocationText = initialLocation.x;
      browser.sleep(2000);

      // label drag and drop
      browser.wait(EC.visibilityOf(USALabel), 5000).then(function(){
        browser.actions().mouseMove(USALabel, {x: 0, y: 0}).perform();
        browser.sleep(2000);
        browser.actions().dragAndDrop(USALabel, {x: -300, y:50}).click().perform();
        browser.sleep(2000);
      });

      //Getting location after dragging label
      USALabel.getLocation().then(function(finalLocationText){
        var finlLocationText = finalLocationText.x;

        //Comparing label positions
        expect(initialLocationText).not.toEqual(finlLocationText);
      });
    });
  });

  // I can select and deselect countries using the button "Find" to the right.

  it('Deselect',function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    //Clicking find
    var find =element(by.css(data.bubble_Chart_Loctors.find_Locator_CSS));
    browser.wait(EC.visibilityOf(find), 5000).then(function(){
      find.click();
    });
    // Place Text in Search
    var search =element(by.css(data.bubble_Chart_Loctors.search_Locator_CSS));
    browser.wait(EC.visibilityOf(search), 5000).then(function(){
      search.sendKeys("china");
    });

    // Check China Text Box
    var chinaBubble =element(by.css(data.bubble_Chart_Loctors.chinaBubble_Checkbox_Locator_CSS));
    browser.wait(EC.visibilityOf(chinaBubble), 5000).then(function(){
      chinaBubble.click();
    });
    // Remove Text
    search.clear();

    // Place Text in Search / Find Field
    browser.wait(EC.visibilityOf(search), 5000).then(function(){
      search.sendKeys("united states");
    });

    // Check United States Text Box
    var USABubble =element(by.css(data.bubble_Chart_Loctors.USABubble_Checkbox_Locator_CSS));
    browser.wait(EC.visibilityOf(USABubble), 5000).then(function(){
      USABubble.click();
    });
    // Remove Text
    search.clear();

    //Clicking OK
    var ok =element(by.css(data.bubble_Chart_Loctors.okOfFindPopup_Locator_CSS));
    browser.wait(EC.visibilityOf(ok), 5000).then(function(){
      ok.click();
    });

    // Getting USA opacity value
    var USA =element(by.css(data.bubble_Chart_Loctors.USA_Bubble_Locator_CSS));
    USA.getCssValue('opacity').then(function(USAOpacityAsParameter){
      var USAOpacity = USAOpacityAsParameter;

      // Getting Nigeria Opacity value
      var nga =element(by.css(data.bubble_Chart_Loctors.Nigeria_Bubble_Locator_CSS));
      nga.getCssValue('opacity').then(function(NGAOpacityAsParameter){
        var NGAOpacity = NGAOpacityAsParameter;

        //Clicking find	again to deselect
        browser.wait(EC.visibilityOf(find), 5000).then(function(){
          find.click();
        });
        // Place Text in Search	again to deselect
        browser.wait(EC.visibilityOf(search), 5000).then(function(){
          search.sendKeys("china");
        });

        // Check China Text Box	again to deselect
        browser.wait(EC.visibilityOf(chinaBubble), 5000).then(function(){
          chinaBubble.click();
        });
        // Remove Text
        search.clear();

        // Place Text in Search / Find Field again to deselect
        browser.wait(EC.visibilityOf(search), 5000).then(function(){
          search.sendKeys("united states");
        });

        // Check United States Text Box	again to deselect
        browser.wait(EC.visibilityOf(USABubble), 5000).then(function(){
          USABubble.click();
        });
        // Remove Text
        search.clear();

        //Clicking OK
        browser.wait(EC.visibilityOf(ok), 5000).then(function(){
          ok.click();
        });
        // Comapring Opacities
        expect(NGAOpacity).toBeLessThan(USAOpacity);

      });
    });
  });

  // If I select a country, click "Lock", and drag the time slider or play,
  // all unselected countries stay in place and only the selected one moves

  it('Lock',function(){

     browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    // Selecting Country by giving country name in Find
    var find =element(by.css(data.bubble_Chart_Loctors.find_Locator_CSS));
    browser.wait(EC.visibilityOf(find), 5000).then(function(){
      find.click();
    });

    // Giving country name in Search bar
    var search =element(by.css("#vzb-find-search"));
    browser.wait(EC.visibilityOf(search), 5000).then(function(){
      search.sendKeys("United States");
    });

    // Clicking Check box of USA
    var checkBox =element(by.css(data.bubble_Chart_Loctors.USABubble_Checkbox_Locator_CSS));
    browser.wait(EC.visibilityOf(checkBox), 5000).then(function(){
      checkBox.click();
    });

    // Remove text from search bar
    search.clear();

    // Click OK
    var OK =element(by.css(data.bubble_Chart_Loctors.okOfFindPopup_Locator_CSS));
    browser.wait(EC.visibilityOf(OK), 5000).then(function(){
      OK.click();
    });

    // Click Lock
    var lock =element(by.css(data.bubble_Chart_Loctors.lock_Locator_CSS));
    browser.wait(EC.visibilityOf(lock), 5000).then(function(){
      lock.click();
    });

    // Get co-ordinates of Slider ball
    var circle =element(by.css(data.bubble_Chart_Loctors.circle_Locator_CSS));
    circle.getLocation();

    // Getting USA size before play
    var USA =element(by.css(data.bubble_Chart_Loctors.USA_Bubble_Locator_CSS));
    USA.getAttribute('r').then(function(radius){
      var rad=radius;

      // Click for Play
      play.click();
      browser.sleep(5000);

      //Clicking pause
      pause.click();

      // Getting USA size after play
      USA.getAttribute('r').then(function(finlRadiusParameter){
        var finalRadius=finlRadiusParameter;

        // Comapring sizes
        expect(rad).not.toEqual(finalRadius);
      });
    });
  });

  // I can drag any panel on large screen resolutions if I drag the hand icon

  it('DragPanel',function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    // Selecting size icon
    var sizeIcon =element(by.css(data.bubble_Chart_Loctors.sizeIcon_Locator_CSS));
    browser.wait(EC.visibilityOf(sizeIcon), 5000).then(function(){
      sizeIcon.click();
      browser.sleep(1000);
    });

    //Getting location of the panel before dargging
    var hand =element(by.css(data.bubble_Chart_Loctors.hand_Locator_CSS));
    hand.getLocation().then(function (beforeDrag) {
      var bforDrag = beforeDrag;
      browser.sleep(2000);

      // Dragging the panel
      browser.actions().dragAndDrop(hand, {x:-300,y:40}).perform();
      browser.sleep(1000);

      //Getting location of the panel after dargging
      hand.getLocation().then(function (afterDrag) {
        var aftrDrag = afterDrag;
        browser.sleep(1000);

        //Comparing positions
        expect(bforDrag).not.toEqual(aftrDrag);
      });
    });
  });

  // Clicking color should bring the panel. I can change the color of bubbles
  // to GDP per capita and Child Mortality and Regions

  it('ChangeColor',function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    // Getting USA rgb value before changes
    browser.wait(EC.visibilityOf(USABubble), 5000);
    USABubble.getCssValue('fill').then(function (bforchang) {
      var beforeChange = bforchang;

      // Clicking color icon
      var colorIcon = element(by.css(data.bubble_Chart_Loctors.colorIcon_Locator_CSS));
      browser.wait(EC.visibilityOf(colorIcon), 5000).then(function(){
        colorIcon.click();
      });

      // Clicking dropDown
      var dropDown = element(by.css(data.bubble_Chart_Loctors.dropDownOfColor_Locator_CSS));
      browser.wait(EC.visibilityOf(dropDown), 5000).then(function(){
        dropDown.click();
      });

      // Clicking search bar
      var search = element(by.css(data.bubble_Chart_Loctors.searchOfColors_Locator_CSS));
      browser.wait(EC.visibilityOf(search), 5000).then(function(){
        search.click();
      });
      // Giving GDP in search bar
      search.sendKeys("child mortality rate");
      browser.sleep(3000);

      // Clicking GDP button
      var childMortality = element(by.css(data.bubble_Chart_Loctors.childMotalityRate_Locator_CSS));
      browser.wait(EC.visibilityOf(childMortality), 5000).then(function(){
        childMortality.click();
        browser.sleep(10000);
      });

      //Clicking OK for Color popup button
      var OKcolorButton = element(by.css(data.bubble_Chart_Loctors.OKcolorButton_Locator_CSS));
      browser.wait(EC.visibilityOf(OKcolorButton), 5000).then(function(){
        OKcolorButton.click();
        browser.sleep(3000);
      });

      // Getting USA rgb value after changes
      USABubble.getCssValue('fill').then(function (afterChangParameter) {
        var afterChange = afterChangParameter;

        //Comparing color values
        expect(beforeChange).not.toEqual(afterChange);
      });
    });
  });

  // Clicking the bubble of the United States should select it. The bubble
  // gets full opacity, while the other bubbles get lower opacity.

  it('Opacity',function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    // Clicking the bubble of USA
    browser.wait(EC.visibilityOf(USABubble), 5000).then(function(){
      browser.actions().mouseMove(USABubble).mouseMove({x:0,y:-5}).click().perform();
    });
    browser.sleep(3000);

    // Getting USA opacity value
    USABubble.getCssValue('opacity').then(function(USAOpacityAsParameter){
      var USAOpacity=USAOpacityAsParameter;
      // Getting Nigeria Opacity value
      var nga = element(by.css(data.bubble_Chart_Loctors.Nigeria_Bubble_Locator_CSS));
      nga.getCssValue('opacity').then(function(NGAOpacityAsParameter){
        var NGAOpacity=NGAOpacityAsParameter;
        //Comparing opacities
        expect(USAOpacity).not.toEqual(NGAOpacity);
      });
    });
  });

  // The year appears on the background, un-cropped

  it('Backgroundyear',function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    // Getting year's 1st digit
    var firstDigit = browser.element(by.css(data.bubble_Chart_Loctors.firstDigitOfYear_Locator_CSS));
    browser.wait(EC.visibilityOf(firstDigit), 5000);
    firstDigit.getText().then(function (firstDigitAsParameter) {
      var firstDigitText = firstDigitAsParameter;
      // Comparing the year's 1st digit
      var firstDigitOfYear= "2";
      expect(firstDigitText).toBe(firstDigitOfYear);

      // Getting year's 2nd digit
      var secondDigit = browser.element(by.css(data.bubble_Chart_Loctors.secondDigitOfYear_Locator_CSS));
      browser.wait(EC.visibilityOf(secondDigit), 5000);
      secondDigit.getText().then(function (secondDigitAsParameter) {
        var secondDigitText = secondDigitAsParameter;
        // Comparing the year's 2nd digit
        var secondDigitOfYear= "0";
        expect(secondDigitText).toBe(secondDigitOfYear);

        // Getting year's 3rd digit
        var thirdDigit = browser.element(by.css(data.bubble_Chart_Loctors.thirdDigitOfYear_Locator_CSS));
        browser.wait(EC.visibilityOf(thirdDigit), 5000);
        thirdDigit.getText().then(function (thirdDigitAsParameter) {
          var thirdDigitText = thirdDigitAsParameter;
          // Comparing the year's 3rd digit
          var thirdDigitOfYear= "1";
          expect(thirdDigitText).toBe(thirdDigitOfYear);
          // Getting year's 4th digit
          var fourthDigit = browser.element(by.css(data.bubble_Chart_Loctors.fourthDigitOfYear_Locator_CSS));
          browser.wait(EC.visibilityOf(fourthDigit), 5000);
          fourthDigit.getText().then(function (fourthDigitAsParameter) {
            var fourthDigitText = fourthDigitAsParameter;
            // Comparing the year's 4th digit
            var fourthDigitOfYear= "5";
            expect(fourthDigitText).toBe(fourthDigitOfYear);
          });
        });
      });
    });
  });

  // I can unselect the bubble by clicking on the "x" of the label
  // "United States", or by clicking on the bubble

  it('DeselectByCross',function(){

    browser.get(baseChartUrl);
    browser.refresh();
    browser.wait(EC.visibilityOf(play), 120000 , "Chart is not Loaded");

    // Hovering the US bubble
    browser.actions().mouseMove(USABubble).mouseMove({x:0,y:-10}).click().perform();

    // Unselect country by clicking bubble
    browser.actions().mouseMove(USABubble).mouseMove({x:0,y:-10}).click().perform();

    // Select the US bubble again
    browser.actions().mouseMove(USABubble).mouseMove({x:0,y:-10}).click().perform();

    // Unselect country by click
    var cross = element(by.css(data.bubble_Chart_Loctors.cross_Locator_CSS));
    browser.wait(EC.visibilityOf(play), 5000);
    cross.click();

    // Getting USA opacity value
    USABubble.getCssValue('opacity').then(function(USAOpacityAsParameter){
      var USAOpacity=USAOpacityAsParameter;
        
      //Value for comparing with opacity
      var findMe = 1 ;
        
      //Comparing opacities
      expect(USAOpacity).not.toEqual(findMe);
    });
  });        
 });
});
