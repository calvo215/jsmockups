# jsmockups
Application mockups, using JS

Using simple images and the power of canvas in JS, I've created an application to mock simple GUIs. You could import/export your designs to JSON and share them.
This solution is easy to integrate with your projects, thanks to the use of JSON.
When you export, your JSON will be printed in the Web browser console. You could set where to export your files. You could export .PNG images also.

What do you need?
-----------------
Just a text editor and a Web browser

Input example
-------------
```javascript
{
    "attrs": {
        "height": 600,
        "width": 600
    },
    "children": [
        {
            "attrs": {},
            "children": [
                {
                    "attrs": {
                        "draggable": true,
                        "x": 24,
                        "y": 36
                    },
                    "children": [
                        {
                            "attrs": {
                                "height": 318,
                                "id": "rct0",
                                "name": "image",
                                "width": 556
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "draggable": true,
                                "fill": "#ddd",
                                "id": "anc0",
                                "name": "topLeft",
                                "radius": 3,
                                "stroke": "#666"
                            },
                            "className": "Circle"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "draggable": true,
                                "fill": "#ddd",
                                "id": "anc1",
                                "name": "topRight",
                                "radius": 3,
                                "stroke": "#666",
                                "x": 556
                            },
                            "className": "Circle"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "draggable": true,
                                "fill": "#ddd",
                                "id": "anc2",
                                "name": "bottomLeft",
                                "radius": 3,
                                "stroke": "#666",
                                "y": 318
                            },
                            "className": "Circle"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "height": 16,
                                "id": "rb0",
                                "name": "removeButton",
                                "width": 16,
                                "x": 536,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "height": 16,
                                "id": "ulb0",
                                "name": "upLayerButton",
                                "width": 16,
                                "x": 504,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "height": 16,
                                "id": "dlb0",
                                "name": "downLayerButton",
                                "width": 16,
                                "x": 520,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "draggable": true,
                                "fill": "#ddd",
                                "id": "anc3",
                                "name": "bottomRight",
                                "radius": 3,
                                "stroke": "#666",
                                "x": 556,
                                "y": 318
                            },
                            "className": "Circle"
                        }
                    ],
                    "className": "Group"
                }
            ],
            "className": "Layer"
        },
        {
            "attrs": {},
            "children": [
                {
                    "attrs": {
                        "draggable": true,
                        "x": 250,
                        "y": 100
                    },
                    "children": [
                        {
                            "attrs": {
                                "height": 20,
                                "id": "rbtn0",
                                "name": "image",
                                "width": 20
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "align": "right",
                                "fill": "#555",
                                "fontFamily": "Calibri",
                                "fontSize": 18,
                                "height": "auto",
                                "id": "txtrbtn0",
                                "name": "radioButtonText",
                                "text": "Radio 1",
                                "width": "auto",
                                "x": 25
                            },
                            "className": "Text"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "rb1",
                                "name": "removeButton",
                                "x": 102.09999847412109
                            },
                            "className": "Image"
                        }
                    ],
                    "className": "Group"
                }
            ],
            "className": "Layer"
        },
        {
            "attrs": {},
            "children": [
                {
                    "attrs": {
                        "draggable": true,
                        "x": 249,
                        "y": 130
                    },
                    "children": [
                        {
                            "attrs": {
                                "height": 20,
                                "id": "rbtn1",
                                "name": "image",
                                "width": 20
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "align": "right",
                                "fill": "#555",
                                "fontFamily": "Calibri",
                                "fontSize": 18,
                                "height": "auto",
                                "id": "txtrbtn1",
                                "name": "radioButtonText",
                                "text": "Radio 2",
                                "width": "auto",
                                "x": 25
                            },
                            "className": "Text"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "rb2",
                                "name": "removeButton",
                                "x": 102.09999847412109
                            },
                            "className": "Image"
                        }
                    ],
                    "className": "Group"
                }
            ],
            "className": "Layer"
        },
        {
            "attrs": {},
            "children": [
                {
                    "attrs": {
                        "draggable": true,
                        "x": -95,
                        "y": 59
                    },
                    "children": [
                        {
                            "attrs": {
                                "align": "center",
                                "fill": "#555",
                                "fontFamily": "Calibri",
                                "fontSize": 38,
                                "height": "auto",
                                "id": "ttl0",
                                "name": "tittle",
                                "text": "Tittle",
                                "width": 370
                            },
                            "className": "Text"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "rb3",
                                "name": "removeButton",
                                "x": 358,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "ulb1",
                                "name": "upLayerButton",
                                "x": 340,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "dlb1",
                                "name": "downLayerButton",
                                "x": 349,
                                "y": 5
                            },
                            "className": "Image"
                        }
                    ],
                    "className": "Group"
                }
            ],
            "className": "Layer"
        },
        {
            "attrs": {},
            "children": [
                {
                    "attrs": {
                        "draggable": true,
                        "x": 16,
                        "y": 187
                    },
                    "children": [
                        {
                            "attrs": {
                                "align": "center",
                                "fill": "#555",
                                "fontFamily": "Calibri",
                                "fontSize": 20,
                                "height": "auto",
                                "id": "sttl0",
                                "name": "subTittle",
                                "text": "You can set your layer with the arrows",
                                "width": 370
                            },
                            "className": "Text"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "rb4",
                                "name": "removeButton",
                                "x": 358,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "ulb2",
                                "name": "upLayerButton",
                                "x": 340,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "dlb2",
                                "name": "downLayerButton",
                                "x": 349,
                                "y": 5
                            },
                            "className": "Image"
                        }
                    ],
                    "className": "Group"
                }
            ],
            "className": "Layer"
        },
        {
            "attrs": {},
            "children": [],
            "className": "Layer"
        },
        {
            "attrs": {},
            "children": [
                {
                    "attrs": {
                        "draggable": true,
                        "x": 49,
                        "y": 228
                    },
                    "children": [
                        {
                            "attrs": {
                                "fill": "#555",
                                "fontFamily": "Calibri",
                                "height": "auto",
                                "id": "prg1",
                                "name": "paragraph",
                                "text": "The label",
                                "width": 250
                            },
                            "className": "Text"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "rb8",
                                "name": "removeButton",
                                "x": 238,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "ulb4",
                                "name": "upLayerButton",
                                "x": 220,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "dlb4",
                                "name": "downLayerButton",
                                "x": 229,
                                "y": 5
                            },
                            "className": "Image"
                        }
                    ],
                    "className": "Group"
                }
            ],
            "className": "Layer"
        },
        {
            "attrs": {},
            "children": [
                {
                    "attrs": {
                        "draggable": true,
                        "x": 105,
                        "y": 227
                    },
                    "children": [
                        {
                            "attrs": {
                                "height": 21,
                                "id": "txtfld0",
                                "name": "image",
                                "width": 121,
                                "x": 74
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "draggable": true,
                                "fill": "#ddd",
                                "id": "anc4",
                                "name": "topLeft",
                                "radius": 3,
                                "stroke": "#666",
                                "x": 74
                            },
                            "className": "Circle"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "draggable": true,
                                "fill": "#ddd",
                                "id": "anc5",
                                "name": "topRight",
                                "radius": 3,
                                "stroke": "#666",
                                "x": 195
                            },
                            "className": "Circle"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "rb5",
                                "name": "removeButton",
                                "x": 175,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "draggable": true,
                                "fill": "#ddd",
                                "id": "anc7",
                                "name": "bottomLeft",
                                "radius": 3,
                                "stroke": "#666",
                                "x": 74,
                                "y": 21
                            },
                            "className": "Circle"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "draggable": true,
                                "fill": "#ddd",
                                "id": "anc6",
                                "name": "bottomRight",
                                "radius": 3,
                                "stroke": "#666",
                                "x": 195,
                                "y": 21
                            },
                            "className": "Circle"
                        }
                    ],
                    "className": "Group"
                }
            ],
            "className": "Layer"
        },
        {
            "attrs": {},
            "children": [
                {
                    "attrs": {
                        "draggable": true,
                        "x": 317,
                        "y": 224
                    },
                    "children": [
                        {
                            "attrs": {
                                "fill": "#555",
                                "fontFamily": "Calibri",
                                "height": "auto",
                                "id": "prg0",
                                "name": "paragraph",
                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "width": 250
                            },
                            "className": "Text"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "rb6",
                                "name": "removeButton",
                                "x": 238,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "ulb3",
                                "name": "upLayerButton",
                                "x": 220,
                                "y": 5
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "dlb3",
                                "name": "downLayerButton",
                                "x": 229,
                                "y": 5
                            },
                            "className": "Image"
                        }
                    ],
                    "className": "Group"
                }
            ],
            "className": "Layer"
        },
        {
            "attrs": {},
            "children": [
                {
                    "attrs": {
                        "draggable": true,
                        "x": 396,
                        "y": 98
                    },
                    "children": [
                        {
                            "attrs": {
                                "height": 20,
                                "id": "chk0",
                                "name": "image",
                                "width": 20
                            },
                            "className": "Image"
                        },
                        {
                            "attrs": {
                                "align": "right",
                                "fill": "#555",
                                "fontFamily": "Calibri",
                                "fontSize": 18,
                                "height": "auto",
                                "id": "txtchk0",
                                "name": "checkBoxText",
                                "text": "Checbox",
                                "width": "auto",
                                "x": 25
                            },
                            "className": "Text"
                        },
                        {
                            "attrs": {
                                "dragOnTop": false,
                                "id": "rb7",
                                "name": "removeButton",
                                "x": 102.09999847412109
                            },
                            "className": "Image"
                        }
                    ],
                    "className": "Group"
                }
            ],
            "className": "Layer"
        }
    ],
    "className": "Stage"
}
```

What was used?
-------------
 - KineticJS v5.1.0 by Eric Rowell @ericdrowell 
      http://www.kineticjs.com

 - Bootstrap
      http://getbootstrap.com/
