
var saveRemoveButton = 0;
var saveUpLayerButton = 0;
var saveDownLayerButton = 0;
var saveButton = 0;
var saveRect = 0;
var saveRoundRect = 0;
var saveTittle = 0;
var saveSubTittle = 0;
var saveParagraph = 0;
var saveLink = 0;
var saveCheckBox = 0;
var saveRadioButton = 0;
var saveComboBox = 0;
var saveTextField = 0;
var saveImage = 0;
var saveVScroll = 0;
var saveHScroll = 0;
var saveAnchor = 0;

function update(activeAnchor) {
	var group = activeAnchor.getParent();
	
	var topLeft = group.find('.topLeft')[0];
	var topRight = group.find('.topRight')[0];
	var bottomRight = group.find('.bottomRight')[0];
	var bottomLeft = group.find('.bottomLeft')[0];
	var image = group.find('.image')[0];
	
	var removeButton = group.find('.removeButton')[0];
	var upLayerButton = group.find('.upLayerButton')[0];
	var downLayerButton = group.find('.downLayerButton')[0];
	var buttonText = group.find('.buttonText')[0];
	var checkBoxText = group.find('.checkBoxText')[0];
	
	var anchorX = activeAnchor.x();
	var anchorY = activeAnchor.y();
	
	// update anchor positions
	switch (activeAnchor.name()) {
		case 'topLeft':
		topRight.y(anchorY);
		bottomLeft.x(anchorX);
		if(checkBoxText){
			removeButton.x(topRight.x() + checkBoxText.width());
			removeButton.y(topRight.y());
		}else if(buttonText){
			removeButton.x(topRight.x() - 12);
			removeButton.y(topRight.y() + 5);
		}else{
			removeButton.x(topRight.x() - 20);
			removeButton.y(topRight.y() + 5);
		}
		if(upLayerButton){
			if(buttonText){
				upLayerButton.x(topRight.x() - 21);
				upLayerButton.y(topRight.y() + 5);
			}else{
				upLayerButton.x(topRight.x() - 52);
				upLayerButton.y(topRight.y() + 5);
			}
		}
		if(downLayerButton){
			if(buttonText){
				downLayerButton.x(topRight.x() - 30);
				downLayerButton.y(topRight.y() + 5);
			}else{
				downLayerButton.x(topRight.x() - 36);
				downLayerButton.y(topRight.y() + 5);
			}
		}
		if(buttonText){
			buttonText.x(topLeft.x());
			buttonText.width(topRight.x() - topLeft.x());
		}
		break;
		case 'topRight':
		topLeft.y(anchorY);
		bottomRight.x(anchorX);
		if(checkBoxText){
			removeButton.x(topRight.x() + checkBoxText.width());
			removeButton.y(topRight.y());
		}else if(buttonText){
			removeButton.x(topRight.x() - 12);
			removeButton.y(topRight.y() + 5);
		}else{
			removeButton.x(topRight.x() - 20);
			removeButton.y(topRight.y() + 5);
		}
		if(upLayerButton){
			if(buttonText){
				upLayerButton.x(topRight.x() - 21);
				upLayerButton.y(topRight.y() + 5);
			}else{
				upLayerButton.x(topRight.x() - 52);
				upLayerButton.y(topRight.y() + 5);
			}
		}
		if(downLayerButton){
			if(buttonText){
				downLayerButton.x(topRight.x() - 30);
				downLayerButton.y(topRight.y() + 5);
			}else{
				downLayerButton.x(topRight.x() - 36);
				downLayerButton.y(topRight.y() + 5);
			}
		}
		if(buttonText){
			buttonText.x(topLeft.x());
			buttonText.width(topRight.x() - topLeft.x());
		}
		break;
		case 'bottomRight':
		bottomLeft.y(anchorY);
		topRight.x(anchorX);
		if(checkBoxText){
			removeButton.x(topRight.x() + checkBoxText.width());
			removeButton.y(topRight.y());
		}else if(buttonText){
			removeButton.x(topRight.x() - 12);
			removeButton.y(topRight.y() + 5);
		}else{
			removeButton.x(topRight.x() - 20);
			removeButton.y(topRight.y() + 5);
		}
		if(upLayerButton){
			if(buttonText){
				upLayerButton.x(topRight.x() - 21);
				upLayerButton.y(topRight.y() + 5);
			}else{
				upLayerButton.x(topRight.x() - 52);
				upLayerButton.y(topRight.y() + 5);
			}
		}
		if(downLayerButton){
			if(buttonText){
				downLayerButton.x(topRight.x() - 30);
				downLayerButton.y(topRight.y() + 5);
			}else{
				downLayerButton.x(topRight.x() - 36);
				downLayerButton.y(topRight.y() + 5);
			}
		}
		if(buttonText){
			buttonText.x(topLeft.x());
			buttonText.width(topRight.x() - topLeft.x());
		}
		break;
		case 'bottomLeft':
		bottomRight.y(anchorY);
		topLeft.x(anchorX);
		if(buttonText){
			buttonText.x(topLeft.x());
			buttonText.width(topRight.x() - topLeft.x());
		}
		break;
	}
	
	image.setPosition(topLeft.getPosition());
	
	var width = topRight.x() - topLeft.x();
	var height = bottomLeft.y() - topLeft.y();
	if(width && height) {
		image.setSize({width:width, height: height});
	}
}

var stage;
var images;

function addAnchor(group, x, y, name) {
	var stage = group.getStage();
	var layer = group.getLayer();
	
	var anchor = new Kinetic.Circle({
		x: x,
		y: y,
		stroke: '#666',
		fill: '#ddd',
		strokeWidth: 2,
		radius: 3,
		name: name,
		draggable: true,
		dragOnTop: false,
		id: 'anc' + saveAnchor
	});
	
	saveAnchor++;
	
	anchor.on('dragmove', function() {
		update(this);
		layer.draw();
	});
	anchor.on('mousedown touchstart', function() {
		group.setDraggable(false);
		this.moveToTop();
	});
	anchor.on('dragend', function() {
		group.setDraggable(true);
		layer.draw();
	});
	// add hover styling
	anchor.on('mouseover', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'pointer';
		this.setStrokeWidth(4);
		layer.draw();
	});
	anchor.on('mouseout', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'default';
		this.strokeWidth(2);
		layer.draw();
	});
	
	group.add(anchor);
}

function addButtonText(group, x, y, name) {
	var stage = group.getStage();
	var layer = group.getLayer();
	
	var image = group.find('.image')[0];
	
	var buttonText = new Kinetic.Text({
        x: x,
        y: y,
		name: name,
        text: 'Text here',
		width: image.width(),
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        align: 'center',
		id: 'txtbtn' + saveButton
    });
	
	saveButton++; //It's increased here, because the counter is used twice
	
	buttonText.on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
	
	group.add(buttonText);
}

function addCheckBoxText(group, x, y, name) {
	var stage = group.getStage();
	var layer = group.getLayer();
	
	var image = group.find('.image')[0];
	
	var checkBoxText = new Kinetic.Text({
        x: x,
        y: y,
		name: name,
        text: 'Text here',
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        align: 'right',
		id: 'txtchk' + saveCheckBox
    });
	
	saveCheckBox++; //It's increased here, because the counter is used twice
	
	checkBoxText.on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
	
	group.add(checkBoxText);
}

function addRadioButtonText(group, x, y, name) {
	var stage = group.getStage();
	var layer = group.getLayer();
	
	var image = group.find('.image')[0];
	
	var radioButtonText = new Kinetic.Text({
        x: x,
        y: y,
		name: name,
        text: 'Text here',
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        align: 'right',
		id: 'txtrbtn' + saveRadioButton
    });
	
	saveRadioButton++; //It's increased here, because the counter is used twice
	
	radioButtonText.on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
	
	group.add(radioButtonText);
}

function addRemoveButton(group, x, y, name) {
	var removed = false;
	var stage = group.getStage();
	var layer = group.getLayer();
	
	var checkBoxText = group.find('.checkBoxText')[0];
	var radioButtonText = group.find('.radioButtonText')[0];
	var buttonText = group.find('.buttonText')[0];
	var tittle = group.find('.tittle')[0];
	var subTittle = group.find('.subTittle')[0];
	var paragraph = group.find('.paragraph')[0];
	var link = group.find('.link')[0];
	if(checkBoxText || radioButtonText || buttonText || tittle || subTittle || paragraph || link){
		var removeButton = new Kinetic.Image({
			x: x,
			y: y,
			image: images.removeSmall,
			width: 8,
			height: 8,
			name: name,
			draggable: false,
			dragOnTop: false,
			id: 'rb' + saveRemoveButton
		});
	}else{
		var removeButton = new Kinetic.Image({
			x: x,
			y: y,
			image: images.remove,
			width: 16,
			height: 16,
			name: name,
			draggable: false,
			dragOnTop: false,
			id: 'rb' + saveRemoveButton
		});
	}
	
	saveRemoveButton++;
	
	removeButton.on('click', function() {
		removed = true;
		layer.removeChildren();
		stage.draw();
		document.body.style.cursor = 'default';
		reOrderSets();
	});
	
	removeButton.on('mouseover', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'pointer';
		//this.setStrokeWidth(2);
		layer.draw();
	});
	removeButton.on('mouseout', function() {
		if(!removed){
			var layer = this.getLayer();
			document.body.style.cursor = 'default';
			//this.strokeWidth(1);
			layer.draw();
		}
	});
	
	group.add(removeButton);
}

function addSmallRemoveButton(group, x, y, name) {
	var removed = false;
	var stage = group.getStage();
	var layer = group.getLayer();
	
	var removeButton = new Kinetic.Image({
		x: x,
		y: y,
		image: images.removeSmall,
		width: 8,
		height: 8,
		name: name,
		draggable: false,
		dragOnTop: false,
		id: 'rb' + saveRemoveButton
	});
	
	saveRemoveButton++;
	
	removeButton.on('click', function() {
		removed = true;
		layer.removeChildren();
		stage.draw();
		document.body.style.cursor = 'default';
		reOrderSets();
	});
	
	removeButton.on('mouseover', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'pointer';
		//this.setStrokeWidth(2);
		layer.draw();
	});
	removeButton.on('mouseout', function() {
		if(!removed){
			var layer = this.getLayer();
			document.body.style.cursor = 'default';
			//this.strokeWidth(1);
			layer.draw();
		}
	});
	
	group.add(removeButton);
}

function addUpLayerButton(group, x, y, name) {
	var stage = group.getStage();
	var layer = group.getLayer();
	
	var checkBoxText = group.find('.checkBoxText')[0];
	var buttonText = group.find('.buttonText')[0];
	var tittle = group.find('.tittle')[0];
	var subTittle = group.find('.subTittle')[0];
	var paragraph = group.find('.paragraph')[0];
	var link = group.find('.link')[0];
	if(checkBoxText || buttonText || tittle || subTittle || paragraph || link){
		var upLayerButton = new Kinetic.Image({
			x: x,
			y: y,
			image: images.upSmall,
			width: 8,
			height: 8,
			name: name,
			draggable: false,
			dragOnTop: false,
			id: 'ulb' + saveUpLayerButton
		});
	}else{
		var upLayerButton = new Kinetic.Image({
			x: x,
			y: y,
			image: images.up,
			width: 16,
			height: 16,
			name: name,
			draggable: false,
			dragOnTop: false,
			id: 'ulb' + saveUpLayerButton
		});
	}
	
	saveUpLayerButton++;
	
	upLayerButton.on('click', function() {
		layer.moveUp();
		stage.draw();
	});
	upLayerButton.on('mouseover', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'pointer';
		layer.draw();
	});
	upLayerButton.on('mouseout', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'default';
		layer.draw();
	});
	
	group.add(upLayerButton);
}

function addDownLayerButton(group, x, y, name) {
	var stage = group.getStage();
	var layer = group.getLayer();
	
	var checkBoxText = group.find('.checkBoxText')[0];
	var buttonText = group.find('.buttonText')[0];
	var tittle = group.find('.tittle')[0];
	var subTittle = group.find('.subTittle')[0];
	var paragraph = group.find('.paragraph')[0];
	var link = group.find('.link')[0];
	if(checkBoxText || buttonText || tittle || subTittle || paragraph || link){
		var downLayerButton = new Kinetic.Image({
			x: x,
			y: y,
			image: images.downSmall,
			width: 8,
			height: 8,
			name: name,
			draggable: false,
			dragOnTop: false,
			id: 'dlb' + saveDownLayerButton
		});
	}else{
		var downLayerButton = new Kinetic.Image({
			x: x,
			y: y,
			image: images.down,
			width: 16,
			height: 16,
			name: name,
			draggable: false,
			dragOnTop: false,
			id: 'dlb' + saveDownLayerButton
		});
	}
	
	saveDownLayerButton++;
	
	downLayerButton.on('click', function() {
		layer.moveDown();
		stage.draw();
	});
	downLayerButton.on('mouseover', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'pointer';
		layer.draw();
	});
	downLayerButton.on('mouseout', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'default';
		layer.draw();
	});
	
	group.add(downLayerButton);
}

function loadImages(sources, callback) {
	images = {};
	var loadedImages = 0;
	var numImages = 0;
	for(var src in sources) {
		numImages++;
	}
	for(var src in sources) {
		images[src] = new Image();
		images[src].onload = function() {
		if(++loadedImages >= numImages) {
			callback(images);
		}
		};
		images[src].src = sources[src];
	}
}

function initStage(images) {
	stage = new Kinetic.Stage({
		container: 'container',
		width: 600,
		height: 600
	});
	
	/*
	* go ahead and add the groups
	* to the layer and the layer to the
	* stage so that the groups have knowledge
	* of its layer and stage
	*/
	
	stage.draw();
}

var sources = {
	rect: 'img/rect.png',
	roundRect: 'img/roundrect.png',
	button: 'img/button.png',
	checkBox: 'img/checkbox.png',
	radioButton: 'img/radiobutton.png',
	comboBox: 'img/combobox.png',
	textField: 'img/textfield.png',
	image: 'img/image.png',
	vScroll: 'img/vscroll.png',
	hScroll: 'img/hscroll.png',
	remove: 'img/remove.png',
	removeSmall: 'img/removesmall.png',
	up: 'img/up.png',
	upSmall: 'img/upsmall.png',
	down: 'img/down.png',
	downSmall: 'img/downsmall.png'
};
loadImages(sources, initStage);

function addButton(){
	var buttonGroup = new Kinetic.Group({
		x: 100,
		y: 110,
		draggable: true,
		id: 'grbtn' + saveButton
	});
	
	var buttonLayer = new Kinetic.Layer();
	buttonLayer.add(buttonGroup);
	stage.add(buttonLayer);
	
	var buttonImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.button,
		width: 110,
		height: 25,
		name: 'image',
		id: 'btn' + saveButton
	});
	
	// saveButton++; //It's not increased here, because the counter is used twice
	
	buttonGroup.add(buttonImg);
	addAnchor(buttonGroup, 0, 0, 'topLeft');
	addAnchor(buttonGroup, 110, 0, 'topRight');
	addAnchor(buttonGroup, 110, 25, 'bottomRight');
	addAnchor(buttonGroup, 0, 25, 'bottomLeft');
	addButtonText(buttonGroup, 5, 5, 'buttonText');
	addRemoveButton(buttonGroup, buttonImg.getWidth() - 12, 5, 'removeButton');
	addUpLayerButton(buttonGroup, buttonImg.getWidth() - 30, 5, 'upLayerButton');
	addDownLayerButton(buttonGroup, buttonImg.getWidth() - 21, 5, 'downLayerButton');
	
	buttonGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addRect(){
	var rectGroup = new Kinetic.Group({
		x: 270,
		y: 100,
		draggable: true
	});
	var rectLayer = new Kinetic.Layer();
	rectLayer.add(rectGroup);
	stage.add(rectLayer);
	
	var rectImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.rect,
		width: 200,
		height: 138,
		name: 'image',
		id: 'rct' + saveRect
	});
	
	saveRect++;
	
	rectGroup.add(rectImg);
	addAnchor(rectGroup, 0, 0, 'topLeft');
	addAnchor(rectGroup, 200, 0, 'topRight');
	addAnchor(rectGroup, 200, 138, 'bottomRight');
	addAnchor(rectGroup, 0, 138, 'bottomLeft');
	addRemoveButton(rectGroup, rectImg.getWidth() - 20, 5, 'removeButton');
	addUpLayerButton(rectGroup, rectImg.getWidth() - 52, 5, 'upLayerButton');
	addDownLayerButton(rectGroup, rectImg.getWidth() - 36, 5, 'downLayerButton');
	
	rectGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addTextField(){
	var textFieldGroup = new Kinetic.Group({
		x: 220,
		y: 100,
		draggable: true
	});
	var textFieldLayer = new Kinetic.Layer();
	textFieldLayer.add(textFieldGroup);
	stage.add(textFieldLayer);
	
	var textFieldImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.textField,
		width: 160,
		height: 30,
		name: 'image',
		id: 'txtfld' + saveTextField
	});
	
	saveTextField++;
	
	textFieldGroup.add(textFieldImg);
	addAnchor(textFieldGroup, 0, 0, 'topLeft');
	addAnchor(textFieldGroup, 160, 0, 'topRight');
	addAnchor(textFieldGroup, 160, 30, 'bottomRight');
	addAnchor(textFieldGroup, 0, 30, 'bottomLeft');
	addSmallRemoveButton(textFieldGroup, textFieldImg.getWidth() - 20, 5, 'removeButton');
	//addUpLayerButton(textFieldGroup, textFieldImg.getWidth() - 52, 5, 'upLayerButton');
	//addDownLayerButton(textFieldGroup, textFieldImg.getWidth() - 36, 5, 'downLayerButton');
	
	textFieldGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addImage(){
	var imageGroup = new Kinetic.Group({
		x: 120,
		y: 100,
		draggable: true
	});
	var imageLayer = new Kinetic.Layer();
	imageLayer.add(imageGroup);
	stage.add(imageLayer);
	
	var imageImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.image,
		width: 205,
		height: 180,
		name: 'image',
		id: 'img' + saveImage
	});
	
	saveImage++;
	
	imageGroup.add(imageImg);
	addAnchor(imageGroup, 0, 0, 'topLeft');
	addAnchor(imageGroup, 205, 0, 'topRight');
	addAnchor(imageGroup, 205, 180, 'bottomRight');
	addAnchor(imageGroup, 0, 180, 'bottomLeft');
	addRemoveButton(imageGroup, imageImg.getWidth() - 20, 5, 'removeButton');
	addUpLayerButton(imageGroup, imageImg.getWidth() - 52, 5, 'upLayerButton');
	addDownLayerButton(imageGroup, imageImg.getWidth() - 36, 5, 'downLayerButton');
	
	imageGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addVScroll(){
	var vScrollGroup = new Kinetic.Group({
		x: 250,
		y: 100,
		draggable: true
	});
	var vScrollLayer = new Kinetic.Layer();
	vScrollLayer.add(vScrollGroup);
	stage.add(vScrollLayer);
	
	var vScrollImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.vScroll,
		width: 20,
		height: 200,
		name: 'image',
		id: 'vscrl' + saveVScroll
	});
	
	saveVScroll++;
	
	vScrollGroup.add(vScrollImg);
	addAnchor(vScrollGroup, 0, 0, 'topLeft');
	addAnchor(vScrollGroup, 20, 0, 'topRight');
	addAnchor(vScrollGroup, 20, 200, 'bottomRight');
	addAnchor(vScrollGroup, 0, 200, 'bottomLeft');
	addSmallRemoveButton(vScrollGroup, vScrollImg.getWidth() - 20, 5, 'removeButton');
	//addUpLayerButton(vScrollGroup, vScrollImg.getWidth() - 52, 5, 'upLayerButton');
	//addDownLayerButton(vScrollGroup, vScrollImg.getWidth() - 36, 5, 'downLayerButton');
	
	vScrollGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addHScroll(){
	var hScrollGroup = new Kinetic.Group({
		x: 250,
		y: 100,
		draggable: true
	});
	var hScrollLayer = new Kinetic.Layer();
	hScrollLayer.add(hScrollGroup);
	stage.add(hScrollLayer);
	
	var hScrollImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.hScroll,
		width: 200,
		height: 20,
		name: 'image',
		id: 'hscrl' + saveHScroll
	});
	
	saveHScroll++;
	
	hScrollGroup.add(hScrollImg);
	addAnchor(hScrollGroup, 0, 0, 'topLeft');
	addAnchor(hScrollGroup, 200, 0, 'topRight');
	addAnchor(hScrollGroup, 200, 20, 'bottomRight');
	addAnchor(hScrollGroup, 0, 20, 'bottomLeft');
	addSmallRemoveButton(hScrollGroup, hScrollImg.getWidth() - 20, 5, 'removeButton');
	//addUpLayerButton(hScrollGroup, hScrollImg.getWidth() - 52, 5, 'upLayerButton');
	//addDownLayerButton(hScrollGroup, hScrollImg.getWidth() - 36, 5, 'downLayerButton');
	
	hScrollGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addRoundRect(){
	var roundRectGroup = new Kinetic.Group({
		x: 270,
		y: 100,
		draggable: true
	});
	var roundRectLayer = new Kinetic.Layer();
	roundRectLayer.add(roundRectGroup);
	stage.add(roundRectLayer);
	
	var roundRectImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.roundRect,
		width: 200,
		height: 138,
		name: 'image',
		id: 'rorct' + saveRoundRect
	});
	
	saveRoundRect++;
	
	roundRectGroup.add(roundRectImg);
	addAnchor(roundRectGroup, 0, 0, 'topLeft');
	addAnchor(roundRectGroup, 200, 0, 'topRight');
	addAnchor(roundRectGroup, 200, 138, 'bottomRight');
	addAnchor(roundRectGroup, 0, 138, 'bottomLeft');
	addRemoveButton(roundRectGroup, roundRectImg.getWidth() - 20, 5, 'removeButton');
	addUpLayerButton(roundRectGroup, roundRectImg.getWidth() - 52, 5, 'upLayerButton');
	addDownLayerButton(roundRectGroup, roundRectImg.getWidth() - 36, 5, 'downLayerButton');
	
	roundRectGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addTittle() {
	var tittleGroup = new Kinetic.Group({
		x: 50,
		y: 50,
		draggable: true
	});
	var tittleLayer = new Kinetic.Layer();
	tittleLayer.add(tittleGroup);
	stage.add(tittleLayer);
	
	var tittle = new Kinetic.Text({
        x: 0,
        y: 0,
		name: 'tittle',
        text: 'Tittle',
        fontSize: 38,
        fontFamily: 'Calibri',
        fill: '#555',
        align: 'center',
		width: 370,
		id: 'ttl' + saveTittle
    });
	
	tittle.on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
	
	saveTittle++;
	tittleGroup.add(tittle);
	
	addRemoveButton(tittleGroup, tittle.width() - 12, 5, 'removeButton');
	addUpLayerButton(tittleGroup, tittle.width() - 30, 5, 'upLayerButton');
	addDownLayerButton(tittleGroup, tittle.width() - 21, 5, 'downLayerButton');
	
	tittleGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addSubTittle() {
	var subTittleGroup = new Kinetic.Group({
		x: 50,
		y: 50,
		draggable: true
	});
	var subTittleLayer = new Kinetic.Layer();
	subTittleLayer.add(subTittleGroup);
	stage.add(subTittleLayer);
	
	var subTittle = new Kinetic.Text({
        x: 0,
        y: 0,
		name: 'subTittle',
        text: 'Sub Tittle',
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: '#555',
        align: 'center',
		width: 370,
		id: 'sttl' + saveSubTittle
    });
	
	subTittle.on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
	
	saveSubTittle++;
	subTittleGroup.add(subTittle);
	
	addRemoveButton(subTittleGroup, subTittle.width() - 12, 5, 'removeButton');
	addUpLayerButton(subTittleGroup, subTittle.width() - 30, 5, 'upLayerButton');
	addDownLayerButton(subTittleGroup, subTittle.width() - 21, 5, 'downLayerButton');
	
	subTittleGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addParagraph() {
	var paragraphGroup = new Kinetic.Group({
		x: 50,
		y: 50,
		draggable: true
	});
	var paragraphLayer = new Kinetic.Layer();
	paragraphLayer.add(paragraphGroup);
	stage.add(paragraphLayer);
	
	var paragraph = new Kinetic.Text({
        x: 0,
        y: 0,
		name: 'paragraph',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        fontSize: 12,
        fontFamily: 'Calibri',
        fill: '#555',
        align: 'left',
		width: 250,
		id: 'prg' + saveParagraph
    });
	
	paragraph.on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
	
	saveParagraph++;
	paragraphGroup.add(paragraph);
	
	addRemoveButton(paragraphGroup, paragraph.width() - 12, 5, 'removeButton');
	addUpLayerButton(paragraphGroup, paragraph.width() - 30, 5, 'upLayerButton');
	addDownLayerButton(paragraphGroup, paragraph.width() - 21, 5, 'downLayerButton');
	
	paragraphGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addLink() {
	var linkGroup = new Kinetic.Group({
		x: 50,
		y: 50,
		draggable: true
	});
	var linkLayer = new Kinetic.Layer();
	linkLayer.add(linkGroup);
	stage.add(linkLayer);
	
	var link = new Kinetic.Text({
        x: 0,
        y: 0,
		name: 'link',
        text: 'www.google.com',
        fontSize: 14,
        fontFamily: 'Calibri',
        fill: '#00F',
        align: 'left',
		width: 250,
		id: 'lnk' + saveLink
    });
	
	saveLink++;
	linkGroup.add(link);
	
	link.on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
	
	addRemoveButton(linkGroup, link.width() - 12, 5, 'removeButton');
	addUpLayerButton(linkGroup, link.width() - 30, 5, 'upLayerButton');
	addDownLayerButton(linkGroup, link.width() - 21, 5, 'downLayerButton');
	
	linkGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addCheckBox(){
	var checkBoxGroup = new Kinetic.Group({
		x: 270,
		y: 100,
		draggable: true
	});
	var checkBoxLayer = new Kinetic.Layer();
	checkBoxLayer.add(checkBoxGroup);
	stage.add(checkBoxLayer);
	
	var checkBoxImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.checkBox,
		width: 20,
		height: 20,
		name: 'image',
		id: 'chk' + saveCheckBox
	});
	
	checkBoxGroup.add(checkBoxImg);
	//addAnchor(checkBoxGroup, 0, 0, 'topLeft');
	//addAnchor(checkBoxGroup, 0, 20, 'bottomLeft');
	//addAnchor(checkBoxGroup, 20, 0, 'topRight');
	//addAnchor(checkBoxGroup, 20, 20, 'bottomRight');
	addCheckBoxText(checkBoxGroup, checkBoxImg.getWidth() + 5, 0, 'checkBoxText');
	var checkBoxText = checkBoxGroup.find('.checkBoxText')[0];
	addRemoveButton(checkBoxGroup, checkBoxImg.getWidth() + checkBoxText.width() + 15, 0, 'removeButton');
	
	checkBoxGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addRadioButton(){
	var radioButtonGroup = new Kinetic.Group({
		x: 250,
		y: 100,
		draggable: true
	});
	var radioButtonLayer = new Kinetic.Layer();
	radioButtonLayer.add(radioButtonGroup);
	stage.add(radioButtonLayer);
	
	var radioButtonImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.radioButton,
		width: 20,
		height: 20,
		name: 'image',
		id: 'rbtn' + saveRadioButton
	});
	
	radioButtonGroup.add(radioButtonImg);
	//addAnchor(radioButtonGroup, 0, 0, 'topLeft');
	//addAnchor(radioButtonGroup, 0, 20, 'bottomLeft');
	//addAnchor(radioButtonGroup, 20, 0, 'topRight');
	//addAnchor(radioButtonGroup, 20, 20, 'bottomRight');
	addRadioButtonText(radioButtonGroup, radioButtonImg.getWidth() + 5, 0, 'radioButtonText');
	var radioButtonText = radioButtonGroup.find('.radioButtonText')[0];
	addRemoveButton(radioButtonGroup, radioButtonImg.getWidth() + radioButtonText.width() + 15, 0, 'removeButton');
	
	radioButtonGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function addComboBox(){
	var comboBoxGroup = new Kinetic.Group({
		x: 100,
		y: 120,
		draggable: true,
		id: 'grcbx' + saveComboBox
	});
	
	var buttonLayer = new Kinetic.Layer();
	buttonLayer.add(comboBoxGroup);
	stage.add(buttonLayer);
	
	var comboBoxImg = new Kinetic.Image({
		x: 0,
		y: 0,
		image: images.comboBox,
		width: 110,
		height: 30,
		name: 'image',
		id: 'cbx' + saveComboBox
	});
	
	saveComboBox++;
	
	comboBoxGroup.add(comboBoxImg);
	addAnchor(comboBoxGroup, 0, 0, 'topLeft');
	addAnchor(comboBoxGroup, 110, 0, 'topRight');
	addAnchor(comboBoxGroup, 110, 30, 'bottomRight');
	addAnchor(comboBoxGroup, 0, 30, 'bottomLeft');
	addSmallRemoveButton(comboBoxGroup, comboBoxImg.getWidth() - 12, 5, 'removeButton');
	//addUpLayerButton(comboBoxGroup, comboBoxImg.getWidth() - 30, 0, 'upLayerButton');
	//addDownLayerButton(comboBoxGroup, comboBoxImg.getWidth() - 21, 0, 'downLayerButton');
	
	comboBoxGroup.on('dragstart', function() {
		this.moveToTop();
	});
	
	stage.draw();
}

function saveState(){
	var json = stage.toJSON();
	console.log(json);
}

function loadState(){
	if (typeof String.prototype.startsWith != 'function') {
		// see below for better implementation!
		String.prototype.startsWith = function (str){
			return this.indexOf(str) == 0;
		};
	}
	
	var countRemoveButton = 0;
	var countUpLayerButton = 0;
	var countDownLayerButton = 0;
	var countButton = 0;
	var countRect = 0;
	var countRoundRect = 0;
	var countTittle = 0;
	var countSubTittle = 0;
	var countParagraph = 0;
	var countLink = 0;
	var countCheckBox = 0;
	var countRadioButton = 0;
	var countComboBox = 0;
	var countTextField = 0;
	var countImage = 0;
	var countVScroll = 0;
	var countHScroll = 0;
	var countAnchor = 0;
	
	//Here is where the json file must be loaded
	var json = '{"attrs":{"width":600,"height":600},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":10,"y":9,"draggable":true},"className":"Group","children":[{"attrs":{"width":584,"height":386,"name":"image","id":"rct0"},"className":"Image"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc0"},"className":"Circle"},{"attrs":{"x":584,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc1"},"className":"Circle"},{"attrs":{"y":386,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc2"},"className":"Circle"},{"attrs":{"x":564,"y":5,"width":16,"height":16,"name":"removeButton","dragOnTop":false,"id":"rb0"},"className":"Image"},{"attrs":{"x":532,"y":5,"width":16,"height":16,"name":"upLayerButton","dragOnTop":false,"id":"ulb0"},"className":"Image"},{"attrs":{"x":548,"y":5,"width":16,"height":16,"name":"downLayerButton","dragOnTop":false,"id":"dlb0"},"className":"Image"},{"attrs":{"x":584,"y":386,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc3"},"className":"Circle"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":42,"y":17,"draggable":true},"className":"Group","children":[{"attrs":{"name":"tittle","text":"Tittle","fontSize":38,"fontFamily":"Calibri","fill":"#555","align":"center","width":370,"id":"ttl0","height":"auto"},"className":"Text"},{"attrs":{"x":358,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb1"},"className":"Image"},{"attrs":{"x":340,"y":5,"name":"upLayerButton","dragOnTop":false,"id":"ulb1"},"className":"Image"},{"attrs":{"x":349,"y":5,"name":"downLayerButton","dragOnTop":false,"id":"dlb1"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":43,"y":51,"draggable":true},"className":"Group","children":[{"attrs":{"name":"tittle","text":"ttl3","fontSize":38,"fontFamily":"Calibri","fill":"#555","align":"center","width":370,"id":"ttl1","height":"auto"},"className":"Text"},{"attrs":{"x":358,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb2"},"className":"Image"},{"attrs":{"x":340,"y":5,"name":"upLayerButton","dragOnTop":false,"id":"ulb2"},"className":"Image"},{"attrs":{"x":349,"y":5,"name":"downLayerButton","dragOnTop":false,"id":"dlb2"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":53,"y":88,"draggable":true},"className":"Group","children":[{"attrs":{"name":"subTittle","text":"Sub Tittle","fontSize":20,"fontFamily":"Calibri","fill":"#555","align":"center","width":370,"id":"sttl0","height":"auto"},"className":"Text"},{"attrs":{"x":358,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb3"},"className":"Image"},{"attrs":{"x":340,"y":5,"name":"upLayerButton","dragOnTop":false,"id":"ulb3"},"className":"Image"},{"attrs":{"x":349,"y":5,"name":"downLayerButton","dragOnTop":false,"id":"dlb3"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":369,"y":131,"draggable":true},"className":"Group","children":[{"attrs":{"x":-102,"width":302,"height":243,"name":"image","id":"rorct0"},"className":"Image"},{"attrs":{"x":-102,"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc4"},"className":"Circle"},{"attrs":{"x":200,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc5"},"className":"Circle"},{"attrs":{"x":200,"y":243,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc6"},"className":"Circle"},{"attrs":{"x":180,"y":5,"width":16,"height":16,"name":"removeButton","dragOnTop":false,"id":"rb4"},"className":"Image"},{"attrs":{"x":148,"y":5,"width":16,"height":16,"name":"upLayerButton","dragOnTop":false,"id":"ulb4"},"className":"Image"},{"attrs":{"x":164,"y":5,"width":16,"height":16,"name":"downLayerButton","dragOnTop":false,"id":"dlb4"},"className":"Image"},{"attrs":{"x":-102,"y":243,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc7"},"className":"Circle"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":333,"y":158,"draggable":true},"className":"Group","children":[{"attrs":{"x":116,"y":98,"width":89,"height":82,"name":"image","id":"img0"},"className":"Image"},{"attrs":{"x":205,"y":98,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc8"},"className":"Circle"},{"attrs":{"x":205,"y":180,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc9"},"className":"Circle"},{"attrs":{"x":116,"y":180,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc10"},"className":"Circle"},{"attrs":{"x":185,"y":103,"width":16,"height":16,"name":"removeButton","dragOnTop":false,"id":"rb5"},"className":"Image"},{"attrs":{"x":153,"y":103,"width":16,"height":16,"name":"upLayerButton","dragOnTop":false,"id":"ulb5"},"className":"Image"},{"attrs":{"x":169,"y":103,"width":16,"height":16,"name":"downLayerButton","dragOnTop":false,"id":"dlb5"},"className":"Image"},{"attrs":{"x":116,"y":98,"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc11"},"className":"Circle"}]}]},{"attrs":{},"className":"Layer","children":[]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":67,"y":189,"draggable":true},"className":"Group","children":[{"attrs":{"y":84,"width":138,"height":96,"name":"image","id":"img1"},"className":"Image"},{"attrs":{"y":84,"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc12"},"className":"Circle"},{"attrs":{"x":138,"y":180,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc13"},"className":"Circle"},{"attrs":{"y":180,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc14"},"className":"Circle"},{"attrs":{"x":118,"y":89,"width":16,"height":16,"name":"removeButton","dragOnTop":false,"id":"rb6"},"className":"Image"},{"attrs":{"x":86,"y":89,"width":16,"height":16,"name":"upLayerButton","dragOnTop":false,"id":"ulb6"},"className":"Image"},{"attrs":{"x":102,"y":89,"width":16,"height":16,"name":"downLayerButton","dragOnTop":false,"id":"dlb6"},"className":"Image"},{"attrs":{"x":138,"y":84,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc15"},"className":"Circle"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":284,"y":301,"draggable":true},"className":"Group","children":[{"attrs":{"name":"image","id":"txtfld0"},"className":"Image"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc16"},"className":"Circle"},{"attrs":{"x":160,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc17"},"className":"Circle"},{"attrs":{"x":160,"y":30,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc18"},"className":"Circle"},{"attrs":{"y":30,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc19"},"className":"Circle"},{"attrs":{"x":140,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb7"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":541,"y":155,"draggable":true},"className":"Group","children":[{"attrs":{"width":20,"height":200,"name":"image","id":"vscrl0"},"className":"Image"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc20"},"className":"Circle"},{"attrs":{"x":20,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc21"},"className":"Circle"},{"attrs":{"x":20,"y":200,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc22"},"className":"Circle"},{"attrs":{"y":200,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc23"},"className":"Circle"},{"attrs":{"y":5,"name":"removeButton","dragOnTop":false,"id":"rb8"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":315,"y":350,"draggable":true},"className":"Group","children":[{"attrs":{"width":200,"height":20,"name":"image","id":"hscrl0"},"className":"Image"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc24"},"className":"Circle"},{"attrs":{"x":200,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc25"},"className":"Circle"},{"attrs":{"x":200,"y":20,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc26"},"className":"Circle"},{"attrs":{"y":20,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc27"},"className":"Circle"},{"attrs":{"x":180,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb9"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":290,"y":236,"draggable":true},"className":"Group","children":[{"attrs":{"width":20,"height":20,"name":"image","id":"rbtn0"},"className":"Image"},{"attrs":{"x":25,"name":"radioButtonText","text":"first","fontSize":18,"fontFamily":"Calibri","fill":"#555","align":"right","id":"txtrbtn0","width":"auto","height":"auto"},"className":"Text"},{"attrs":{"x":104.2666015625,"name":"removeButton","dragOnTop":false,"id":"rb10"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":297,"y":260,"draggable":true},"className":"Group","children":[{"attrs":{"width":20,"height":20,"name":"image","id":"rbtn1"},"className":"Image"},{"attrs":{"x":25,"name":"radioButtonText","text":"third","fontSize":18,"fontFamily":"Calibri","fill":"#555","align":"right","id":"txtrbtn1","width":"auto","height":"auto"},"className":"Text"},{"attrs":{"x":104.2666015625,"name":"removeButton","dragOnTop":false,"id":"rb11"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":288,"y":189,"draggable":true,"id":"grcbx0"},"className":"Group","children":[{"attrs":{"width":110,"height":30,"name":"image","id":"cbx0"},"className":"Image"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc28"},"className":"Circle"},{"attrs":{"x":110,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc29"},"className":"Circle"},{"attrs":{"x":110,"y":30,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc30"},"className":"Circle"},{"attrs":{"y":30,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc31"},"className":"Circle"},{"attrs":{"x":98,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb12"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":93,"y":130,"draggable":true},"className":"Group","children":[{"attrs":{"width":20,"height":20,"name":"image","id":"chk0"},"className":"Image"},{"attrs":{"x":25,"name":"checkBoxText","text":"first","fontSize":18,"fontFamily":"Calibri","fill":"#555","align":"right","id":"txtchk0","width":"auto","height":"auto"},"className":"Text"},{"attrs":{"x":104.2666015625,"name":"removeButton","dragOnTop":false,"id":"rb13"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":92,"y":155,"draggable":true},"className":"Group","children":[{"attrs":{"width":20,"height":20,"name":"image","id":"chk1"},"className":"Image"},{"attrs":{"x":25,"name":"checkBoxText","text":"second","fontSize":18,"fontFamily":"Calibri","fill":"#555","align":"right","id":"txtchk1","width":"auto","height":"auto"},"className":"Text"},{"attrs":{"x":104.2666015625,"name":"removeButton","dragOnTop":false,"id":"rb14"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":93,"y":182,"draggable":true},"className":"Group","children":[{"attrs":{"width":20,"height":20,"name":"image","id":"chk2"},"className":"Image"},{"attrs":{"x":25,"name":"checkBoxText","text":"4","fontSize":18,"fontFamily":"Calibri","fill":"#555","align":"right","id":"txtchk2","width":"auto","height":"auto"},"className":"Text"},{"attrs":{"x":104.2666015625,"name":"removeButton","dragOnTop":false,"id":"rb15"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":56,"y":39,"draggable":true,"id":"grbtn0"},"className":"Group","children":[{"attrs":{"width":110,"height":25,"name":"image","id":"btn0"},"className":"Image"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc32"},"className":"Circle"},{"attrs":{"x":110,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc33"},"className":"Circle"},{"attrs":{"x":110,"y":25,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc34"},"className":"Circle"},{"attrs":{"y":25,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc35"},"className":"Circle"},{"attrs":{"x":5,"y":5,"name":"buttonText","text":"Text here","width":110,"fontSize":18,"fontFamily":"Calibri","fill":"#555","align":"center","id":"txtbtn0","height":"auto"},"className":"Text"},{"attrs":{"x":98,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb16"},"className":"Image"},{"attrs":{"x":80,"y":5,"name":"upLayerButton","dragOnTop":false,"id":"ulb7"},"className":"Image"},{"attrs":{"x":89,"y":5,"name":"downLayerButton","dragOnTop":false,"id":"dlb7"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":61,"y":81,"draggable":true,"id":"grbtn1"},"className":"Group","children":[{"attrs":{"width":110,"height":25,"name":"image","id":"btn1"},"className":"Image"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc36"},"className":"Circle"},{"attrs":{"x":110,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc37"},"className":"Circle"},{"attrs":{"x":110,"y":25,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc38"},"className":"Circle"},{"attrs":{"y":25,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc39"},"className":"Circle"},{"attrs":{"x":5,"y":5,"name":"buttonText","text":"second","width":110,"fontSize":18,"fontFamily":"Calibri","fill":"#555","align":"center","id":"txtbtn1","height":"auto"},"className":"Text"},{"attrs":{"x":98,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb17"},"className":"Image"},{"attrs":{"x":80,"y":5,"name":"upLayerButton","dragOnTop":false,"id":"ulb8"},"className":"Image"},{"attrs":{"x":89,"y":5,"name":"downLayerButton","dragOnTop":false,"id":"dlb8"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":457,"y":78,"draggable":true,"id":"grbtn3"},"className":"Group","children":[{"attrs":{"width":110,"height":25,"name":"image","id":"btn2"},"className":"Image"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":3,"name":"topLeft","draggable":true,"dragOnTop":false,"id":"anc40"},"className":"Circle"},{"attrs":{"x":110,"stroke":"#666","fill":"#ddd","radius":3,"name":"topRight","draggable":true,"dragOnTop":false,"id":"anc41"},"className":"Circle"},{"attrs":{"x":110,"y":25,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomRight","draggable":true,"dragOnTop":false,"id":"anc42"},"className":"Circle"},{"attrs":{"y":25,"stroke":"#666","fill":"#ddd","radius":3,"name":"bottomLeft","draggable":true,"dragOnTop":false,"id":"anc43"},"className":"Circle"},{"attrs":{"x":5,"y":5,"name":"buttonText","text":"fourth","width":110,"fontSize":18,"fontFamily":"Calibri","fill":"#555","align":"center","id":"txtbtn2","height":"auto"},"className":"Text"},{"attrs":{"x":98,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb18"},"className":"Image"},{"attrs":{"x":80,"y":5,"name":"upLayerButton","dragOnTop":false,"id":"ulb9"},"className":"Image"},{"attrs":{"x":89,"y":5,"name":"downLayerButton","dragOnTop":false,"id":"dlb9"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":28,"y":209,"draggable":true},"className":"Group","children":[{"attrs":{"name":"paragraph","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","fontFamily":"Calibri","fill":"#555","width":250,"id":"prg0","height":"auto"},"className":"Text"},{"attrs":{"x":238,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb19"},"className":"Image"},{"attrs":{"x":220,"y":5,"name":"upLayerButton","dragOnTop":false,"id":"ulb10"},"className":"Image"},{"attrs":{"x":229,"y":5,"name":"downLayerButton","dragOnTop":false,"id":"dlb10"},"className":"Image"}]}]},{"attrs":{},"className":"Layer","children":[{"attrs":{"x":452,"y":31,"draggable":true},"className":"Group","children":[{"attrs":{"name":"link","text":"www.google.com","fontSize":14,"fontFamily":"Calibri","fill":"#00F","width":250,"id":"lnk0","height":"auto"},"className":"Text"},{"attrs":{"x":238,"y":5,"name":"removeButton","dragOnTop":false,"id":"rb20"},"className":"Image"},{"attrs":{"x":220,"y":5,"name":"upLayerButton","dragOnTop":false,"id":"ulb11"},"className":"Image"},{"attrs":{"x":229,"y":5,"name":"downLayerButton","dragOnTop":false,"id":"dlb11"},"className":"Image"}]}]}]}';
	
	stage = Kinetic.Node.create(json, 'container');
	var children = stage.getChildren();
	
	//I count how many elements we have on each group to ask json the IDs
	for(var ch = 0; ch < children.length; ch++){
		var group = children[ch].getChildren();
		for(var g = 0; g < group.length; g++){
			var elements = group[g].getChildren();
			for(var e = 0; e < elements.length; e++){
				var currentElement = elements[e].name();
				if(elements[e].name() == 'removeButton'){
					countRemoveButton++;
				}else if(elements[e].name() == 'upLayerButton'){
					countUpLayerButton++;
				}else if(elements[e].name() == 'downLayerButton'){
					countDownLayerButton++;
				}else if(elements[e].id().startsWith('ttl')){
					countTittle++;
				}else if(elements[e].id().startsWith('sttl')){
					countSubTittle++;
				}else if(elements[e].id().startsWith('prg')){
					countParagraph++;
				}else if(elements[e].id().startsWith('lnk')){
					countLink++;
				}else if(elements[e].id().startsWith('cbx')){
					countComboBox++;
				}else if(elements[e].id().startsWith('txtfld')){
					countTextField++;
				}else if(elements[e].id().startsWith('img')){
					countImage++;
				}else if(elements[e].id().startsWith('vscrl')){
					countVScroll++;
				}else if(elements[e].id().startsWith('hscrl')){
					countHScroll++;
				}else if(elements[e].name() == 'image'){
					if(elements[e].id().startsWith('btn')){
						countButton++;
					}else if(elements[e].id().startsWith('rct')){
						countRect++;
					}else if(elements[e].id().startsWith('rorct')){
						countRoundRect++;
					}else if(elements[e].id().startsWith('chk')){
						countCheckBox++;
					}else if(elements[e].id().startsWith('rbtn')){
						countRadioButton++;
					}
				}else if(elements[e].name() == 'topLeft' || elements[e].name() == 'topRight' || elements[e].name() == 'bottomRight' || elements[e].name() == 'bottomLeft'){
					countAnchor++;
				}
			}
		}
	}
	
	saveRemoveButton = countRemoveButton;
	saveUpLayerButton = countUpLayerButton;
	saveDownLayerButton = countDownLayerButton;
	saveButton = countButton;
	saveRect = countRect;
	saveRoundRect = countRoundRect;
	saveTittle = countTittle;
	saveSubTittle = countSubTittle;
	saveParagraph = countParagraph;
	saveLink = countLink;
	saveCheckBox = countCheckBox;
	saveRadioButton = countRadioButton;
	saveComboBox = countComboBox;
	saveTextField = countTextField;
	saveImage = countImage;
	saveVScroll = countVScroll;
	saveHScroll = countHScroll;
	saveAnchor = countAnchor;
	
	//Loading each type of element
	for(var c = 0; c < countButton; c++){
		loadButton(c);
	}
	for(var c = 0; c < countRect; c++){
		loadRect(c);
	}
	for(var c = 0; c < countRoundRect; c++){
		loadRoundRect(c);
	}
	for(var c = 0; c < countTittle; c++){
		loadTittle(c);
	}
	for(var c = 0; c < countSubTittle; c++){
		loadSubTittle(c);
	}
	for(var c = 0; c < countParagraph; c++){
		loadParagraph(c);
	}
	for(var c = 0; c < countLink; c++){
		loadLink(c);
	}
	for(var c = 0; c < countCheckBox; c++){
		loadCheckBox(c);
	}
	for(var c = 0; c < countRadioButton; c++){
		loadRadioButton(c);
	}
	for(var c = 0; c < countComboBox; c++){
		loadComboBox(c);
	}
	for(var c = 0; c < countTextField; c++){
		loadTextField(c);
	}
	for(var c = 0; c < countImage; c++){
		loadImage(c);
	}
	for(var c = 0; c < countVScroll; c++){
		loadVScroll(c);
	}
	for(var c = 0; c < countHScroll; c++){
		loadHScroll(c);
	}
	for(var c = 0; c < countRemoveButton; c++){
		loadRemoveButton(c);
	}
	for(var c = 0; c < countUpLayerButton; c++){
		loadUpLayerButton(c);
	}
	for(var c = 0; c < countDownLayerButton; c++){
		loadDownLayerButton(c);
	}
	
	//Must be the last loop, after all elements loaded
	for(var c = 0; c < countAnchor; c++){
		loadAnchor(c, countButton);
	}
}

function loadButton(countButton){
	var imageObj = new Image();
	var identifyer = '#btn' + countButton;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/button.png';
	
	var textIdentifyer = '#txtbtn' + countButton;
	stage.get(textIdentifyer)[0].on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
}

function loadRect(countRect){
	var imageObj = new Image();
	var identifyer = '#rct' + countRect;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/rect.png';
}

function loadRoundRect(countRoundRect){
	var imageObj = new Image();
	var identifyer = '#rorct' + countRoundRect;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/roundrect.png';
}

function loadTittle(countTittle){
	var identifyer = '#ttl' + countTittle;

	stage.get(identifyer)[0].on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
}

function loadSubTittle(countSubTittle){
	var identifyer = '#sttl' + countSubTittle;

	stage.get(identifyer)[0].on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
}

function loadParagraph(countParagraph){
	var identifyer = '#prg' + countParagraph;

	stage.get(identifyer)[0].on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
}

function loadLink(countLink){
	var identifyer = '#lnk' + countLink;

	stage.get(identifyer)[0].on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
}

function loadCheckBox(countCheckBox){
	var imageObj = new Image();
	var identifyer = '#chk' + countCheckBox;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/checkBox.png';
	
	var textIdentifyer = '#txtchk' + countCheckBox;
	stage.get(textIdentifyer)[0].on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
}

function loadRadioButton(countRadioButton){
	var imageObj = new Image();
	var identifyer = '#rbtn' + countRadioButton;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/radioButton.png';
	
	var textIdentifyer = '#txtrbtn' + countRadioButton;
	stage.get(textIdentifyer)[0].on('click', function(evt) {
		this.setText(prompt('New Text:'));
		stage.draw(); //redraw the layer containing the TextField
	});
}

function loadComboBox(countComboBox){
	var imageObj = new Image();
	var identifyer = '#cbx' + countComboBox;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/combobox.png';
}

function loadTextField(countTextField){
	var imageObj = new Image();
	var identifyer = '#txtfld' + countTextField;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/textfield.png';
}

function loadImage(countImage){
	var imageObj = new Image();
	var identifyer = '#img' + countImage;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/image.png';
}

function loadVScroll(countVScroll){
	var imageObj = new Image();
	var identifyer = '#vscrl' + countVScroll;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/vscroll.png';
}

function loadHScroll(countHScroll){
	var imageObj = new Image();
	var identifyer = '#hscrl' + countHScroll;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/hscroll.png';
}

function loadRemoveButton(countRemoveButton){
	var imageObj = new Image();
	var identifyer = '#rb' + countRemoveButton;
	var layer = stage.get(identifyer)[0].getLayer();
	var removed = false;
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/removeSmall.png';
	
	stage.get(identifyer)[0].on('click', function() {
		var removed = true;
		layer.removeChildren();
		stage.draw();
    });
}

function loadUpLayerButton(countUpLayerButton){
	var imageObj = new Image();
	var identifyer = '#ulb' + countUpLayerButton;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/upSmall.png';
	
	stage.get(identifyer)[0].on('click', function() {
		layer.moveUp();
		stage.draw();
    });
}

function loadDownLayerButton(countDownLayerButton){
	var imageObj = new Image();
	var identifyer = '#dlb' + countDownLayerButton;
	var layer = stage.get(identifyer)[0].getLayer();
	
	imageObj.onload = function() {
		stage.get(identifyer)[0].image(imageObj);
		stage.draw();
	};
	imageObj.src = 'img/downSmall.png';
	
	stage.get(identifyer)[0].on('click', function() {
		layer.moveDown();
		stage.draw();
    });
}

function loadAnchor(countAnchor){
	var identifyer = '#anc' + countAnchor;
	var anchor = stage.get(identifyer)[0];
	
	//GROUP
	//var groupIdentifyer = '#grbtn0';
	//var group = stage.get(groupIdentifyer)[0]; //Gets the group for the button
	//GROUP
	
	var layer = anchor.getLayer();
	//stage.get(identifyer).on('dragmove', function() {
	anchor.on('dragmove', function() {
		update(this);
		layer.draw();
	});
	/*anchor.on('mousedown touchstart', function() {
		group.setDraggable(false);
		this.moveToTop();
	});
	anchor.on('dragend', function() {
		group.setDraggable(true);
		layer.draw();
	});*/
	// add hover styling
	anchor.on('mouseover', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'pointer';
		this.setStrokeWidth(4);
		layer.draw();
	});
	anchor.on('mouseout', function() {
		var layer = this.getLayer();
		document.body.style.cursor = 'default';
		this.strokeWidth(2);
		layer.draw();
	});
}

function reOrderSets(){
	if (typeof String.prototype.startsWith != 'function') {
		String.prototype.startsWith = function (str){
			return this.indexOf(str) == 0;
		};
	}
	
	var countRemoveButton = 0;
	var countUpLayerButton = 0;
	var countDownLayerButton = 0;
	var countButton = 0;
	var countRect = 0;
	var countRoundRect = 0;
	var countTittle = 0;
	var countSubTittle = 0;
	var countParagraph = 0;
	var countLink = 0;
	var countCheckBox = 0;
	var countRadioButton = 0;
	var countComboBox = 0;
	var countTextField = 0;
	var countImage = 0;
	var countVScroll = 0;
	var countHScroll = 0;
	var countAnchor = 0;
	
	var children = stage.getChildren();
	
	for(var ch = 0; ch < children.length; ch++){
		var group = children[ch].getChildren();
		for(var g = 0; g < group.length; g++){
			var elements = group[g].getChildren();
			for(var e = 0; e < elements.length; e++){
				var currentElement = elements[e].name();
				if(elements[e].name() == 'removeButton'){
					elements[e].setId('rb' + countRemoveButton);
					countRemoveButton++;
				}else if(elements[e].name() == 'upLayerButton'){
					elements[e].setId('ulb' + countUpLayerButton);
					countUpLayerButton++;
				}else if(elements[e].name() == 'downLayerButton'){
					elements[e].setId('dlb' + countDownLayerButton);
					countDownLayerButton++;
				}else if(elements[e].id().startsWith('ttl')){
					elements[e].setId('ttl' + countTittle);
					countTittle++;
				}else if(elements[e].id().startsWith('sttl')){
					elements[e].setId('sttl' + countSubTittle);
					countSubTittle++;
				}else if(elements[e].id().startsWith('prg')){
					elements[e].setId('prg' + countParagraph);
					countParagraph++;
				}else if(elements[e].id().startsWith('lnk')){
					elements[e].setId('lnk' + countLink);
					countLink++;
				}else if(elements[e].id().startsWith('cbx')){
					elements[e].setId('cbx' + countComboBox);
					countComboBox++;
				}else if(elements[e].id().startsWith('txtfld')){
					elements[e].setId('txtfld' + countTextField);
					countTextField++;
				}else if(elements[e].id().startsWith('img')){
					elements[e].setId('img' + countImage);
					countImage++;
				}else if(elements[e].id().startsWith('vscrl')){
					elements[e].setId('vscrl' + countVScroll);
					countVScroll++;
				}else if(elements[e].id().startsWith('hscrl')){
					elements[e].setId('hscrl' + countHScroll);
					countHScroll++;
				}else if(elements[e].name() == 'image'){
					if(elements[e].id().startsWith('btn')){
						elements[e].setId('btn' + countButton);
						//countButton++;
					}else if(elements[e].id().startsWith('rct')){
						elements[e].setId('rct' + countRect);
						//countRect++;
					}else if(elements[e].id().startsWith('rorct')){
						elements[e].setId('rorct' + countRoundRect);
						//countRoundRect++;
					}else if(elements[e].id().startsWith('chk')){
						elements[e].setId('chk' + countCheckBox);
						//countCheckBox++;
					}else if(elements[e].id().startsWith('rbtn')){
						elements[e].setId('rbtn' + countRadioButton);
						//countRadioButton++;
					}
				}else if(elements[e].name() == 'topLeft' || elements[e].name() == 'topRight' || elements[e].name() == 'bottomRight' || elements[e].name() == 'bottomLeft'){
					elements[e].setId('anc' + countAnchor);
					countAnchor++;
				}else if(elements[e].id().startsWith('txtbtn')){
					elements[e].setId('txtbtn' + countButton);
					countButton++;
				}else if(elements[e].id().startsWith('txtchk')){
					elements[e].setId('txtchk' + countCheckBox);
					countCheckBox++;
				}else if(elements[e].id().startsWith('txtrbtn')){
					elements[e].setId('txtrbtn' + countRadioButton);
					countRadioButton++;
				}
			}
		}
	}
	
	//if(saveRemoveButton != countRemoveButton){
		saveRemoveButton = countRemoveButton;
	//}
	saveUpLayerButton = countUpLayerButton;
	saveDownLayerButton = countDownLayerButton;
	saveButton = countButton;
	saveRect = countRect;
	saveRoundRect = countRoundRect;
	saveTittle = countTittle;
	saveSubTittle = countSubTittle;
	saveParagraph = countParagraph;
	saveLink = countLink;
	saveCheckBox = countCheckBox;
	saveRadioButton = countRadioButton;
	saveComboBox = countComboBox;
	saveTextField = countTextField;
	saveImage = countImage;
	saveVScroll = countVScroll;
	saveHScroll = countHScroll;
	saveAnchor = countAnchor;
}

function exportImage(){
	/*
     * since the stage toDataURL() method is asynchronous, we need
     * to provide a callback
     */
    stage.toDataURL({
		callback: function(dataUrl) {
			/*
			 * here you can do anything you like with the data url.
			 * In this tutorial we'll just open the url with the browser
			 * so that you can see the result as an image
			 */
			//var win = window.open(dataUrl, '_blank');
            //win.focus();
            window.open(dataUrl);
		}
	});
}