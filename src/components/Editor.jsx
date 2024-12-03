import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";

const Editor = () => {
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [shapes, setShapes] = useState([]);
  const [resize, setResize] = useState(false);
  const [selectedShapeId, setSelectedShapeId] = useState(null);

  const canvasRef = useRef(null);

  const handleShapeSelect = (shape) => {
    setSelectedShape(shape);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const addShape = () => {
    if (selectedShape) {
      setShapes([
        ...shapes,
        {
          id: Date.now(),
          shape: selectedShape,
          color: selectedColor,
          x: 100,
          y: 100,
          width: 100,
          height: 100,
        },
      ]);
    }
  };

  const renderShape = (shape, color, width, height) => {
    switch (shape) {
      case "circle":
        return (
          <svg width={width} height={height}>
            <circle cx={width / 2} cy={height / 2} r={width / 2} fill={color} />
          </svg>
        );
      case "square":
        return (
          <svg width={width} height={height}>
            <rect width={width} height={height} fill={color} />
          </svg>
        );
      case "triangle":
        return (
          <svg width={width} height={height}>
            <polygon
              points={`${width / 2},0 ${width},${height} 0,${height}`}
              fill={color}
            />
          </svg>
        );
      case "duck":
        return (
          <svg width={width} height={height} viewBox="0 0 100 100">
            <circle cx="30" cy="40" r="20" fill={color} />
            <ellipse cx="70" cy="40" rx="20" ry="15" fill={color} />
          </svg>
        );
      case "tiger":
        return (
          <svg width={width} height={height} viewBox="0 0 100 100">
            <circle cx="30" cy="40" r="15" fill={color} />
            <circle cx="70" cy="40" r="15" fill={color} />
            <circle cx="50" cy="70" r="20" fill={color} />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleResizeStart = (e, shape) => {
    setResize(shape.id);
  };

  const handleResize = (e) => {
    if (resize) {
      const newWidth = Math.max(e.clientX - resize.x, 50);
      const newHeight = Math.max(e.clientY - resize.y, 50);

      setShapes((prevShapes) =>
        prevShapes.map((s) =>
          s.id === resize ? { ...s, width: newWidth, height: newHeight } : s
        )
      );
    }
  };

  const handleShapeClick = (shapeId) => {
    setSelectedShapeId(shapeId);
    const clickedShape = shapes.find((shape) => shape.id === shapeId);
    setSelectedShape(clickedShape.shape);
  };

  const getSVGCodeForAllShapes = () => {
    let svgContent = "";
    shapes.forEach((shape) => {
      const { shape: shapeType, color, width, height } = shape;
      switch (shapeType) {
        case "circle":
          svgContent += `<circle cx="${width / 2}" cy="${height / 2}" r="${
            width / 2
          }" fill="${color}" />`;
          break;
        case "square":
          svgContent += `<rect width="${width}" height="${height}" fill="${color}" />`;
          break;
        case "triangle":
          svgContent += `<polygon points="${
            width / 2
          },0 ${width},${height} 0,${height}" fill="${color}" />`;
          break;
        case "duck":
          svgContent += `<circle cx="30" cy="40" r="20" fill="${color}" /><ellipse cx="70" cy="40" rx="20" ry="15" fill="${color}" />`;
          break;
        case "tiger":
          svgContent += `<circle cx="30" cy="40" r="15" fill="${color}" /><circle cx="70" cy="40" r="15" fill="${color}" /><circle cx="50" cy="70" r="20" fill="${color}" />`;
          break;
        default:
          break;
      }
    });
    return `<svg width="500" height="500">${svgContent}</svg>`;
  };

  const handleCopyCode = () => {
    const svgCode = getSVGCodeForAllShapes();
    navigator.clipboard.writeText(svgCode).then(() => {
      alert("SVG code copied to clipboard!");
    });
  };

  const previewShapes = () => {
    html2canvas(canvasRef.current, {
      useCORS: true,
      backgroundColor: null,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "shapes.png";
      link.click();
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <div className="w-full md:w-1/4 p-6 bg-white border-r rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Shape Editor</h2>
        <div className="space-y-4">
          <button
            onClick={() => handleShapeSelect("circle")}
            className="w-full p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 transition"
          >
            Circle
          </button>
          <button
            onClick={() => handleShapeSelect("square")}
            className="w-full p-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-400 transition"
          >
            Square
          </button>
          <button
            onClick={() => handleShapeSelect("triangle")}
            className="w-full p-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-400 transition"
          >
            Triangle
          </button>
          <button
            onClick={() => handleShapeSelect("duck")}
            className="w-full p-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition"
          >
            Duck
          </button>
          <button
            onClick={() => handleShapeSelect("tiger")}
            className="w-full p-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-400 transition"
          >
            Tiger
          </button>
        </div>

        <div className="mt-6">
          <label
            htmlFor="color-picker"
            className="block text-sm font-medium mb-2"
          >
            Select Color
          </label>
          <input
            type="color"
            id="color-picker"
            value={selectedColor}
            onChange={handleColorChange}
            className="w-full p-3 border-2 rounded-md"
          />
        </div>

        <button
          onClick={addShape}
          className="w-full p-3 mt-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-400 transition"
        >
          Add Shape
        </button>
      </div>

      <div className="w-full md:w-3/4 p-8 bg-gray-200 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">Canvas</h2>
        <div
          className="relative bg-white border-4 border-dotted border-gray-400 p-4 rounded-lg"
          style={{ height: "500px" }}
          onMouseMove={handleResize}
          ref={canvasRef}
        >
          {shapes.map((shape) => (
            <Draggable
              key={shape.id}
              defaultPosition={{ x: shape.x, y: shape.y }}
            >
              <div
                className="flex justify-center items-center relative cursor-pointer"
                onClick={() => handleShapeClick(shape.id)}
              >
                {renderShape(
                  shape.shape,
                  shape.color,
                  shape.width,
                  shape.height
                )}
                <div
                  onMouseDown={(e) => handleResizeStart(e, shape)}
                  className="absolute bottom-0 right-0 cursor-se-resize bg-blue-500 w-4 h-4 rounded-full"
                />
              </div>
            </Draggable>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4">
          <button
            onClick={previewShapes}
            className="px-6 py-3 mb-4 sm:mb-0 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-400 transition"
          >
            Preview Shapes
          </button>
          <button
            onClick={handleCopyCode}
            className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-400 transition"
          >
            Copy SVG Codes
          </button>
        </div>
      </div>
    </div>
  );
};

// import React, { useState } from "react";
// // import ReactCrop from "react-image-crop";
// // import "react-image-crop/dist/ReactCrop.css";
// // import { useDropzone } from "react-dropzone";
// // import { fabric } from "fabric";
// import html2canvas from "html2canvas";

// const Editor = () => {
//   const [image, setImage] = useState(null);
//   const [crop, setCrop] = useState({ aspect: 1 });
//   const [canvas, setCanvas] = useState(null);
//   const [imageURL, setImageURL] = useState(null);

//   // Image Upload Handler
//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   // Initialize Canvas (fabric.js)
//   const initializeCanvas = (img) => {
//     const newCanvas = new fabric.Canvas("canvas");
//     fabric.Image.fromURL(img, (imageObj) => {
//       newCanvas.setBackgroundImage(
//         imageObj,
//         newCanvas.renderAll.bind(newCanvas),
//         {
//           scaleX: newCanvas.width / imageObj.width,
//           scaleY: newCanvas.height / imageObj.height,
//         }
//       );
//     });
//     setCanvas(newCanvas);
//   };

//   // Handle image crop change
//   const onCropChange = (crop) => {
//     setCrop(crop);
//   };

//   // Handle preview and download
//   const handlePreview = () => {
//     html2canvas(canvas.getElement()).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const link = document.createElement("a");
//       link.href = imgData;
//       link.download = "edited-photo.png";
//       link.click();
//     });
//   };

//   return (
//     <div className="photo-editor">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <div {...useDropzone({ onDrop })} className="dropzone">
//           <p>Drag and drop an image or click to select</p>
//         </div>
//         {image && (
//           <ReactCrop
//             src={image}
//             crop={crop}
//             onChange={onCropChange}
//             onImageLoaded={(img) => initializeCanvas(img)}
//           />
//         )}
//       </div>

//       {image && (
//         <div className="editor-section">
//           <h2>Edit Your Photo</h2>
//           <canvas id="canvas" width="500" height="500"></canvas>
//           <div className="controls">
//             <button onClick={handlePreview}>Preview</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default Editor;

// import React, { useRef, useEffect, useState } from "react";
// import p5 from "p5";

// const Editor = () => {
//   const [image, setImage] = useState(null);
//   const canvasRef = useRef(null);

//   // File upload handler
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   // P5.js Sketch setup
//   useEffect(() => {
//     if (image) {
//       const sketch = (p) => {
//         let img;
//         p.setup = () => {
//           p.createCanvas(500, 500);
//           img = p.loadImage(image);
//         };

//         p.draw = () => {
//           p.background(220);
//           p.image(img, 0, 0, p.width, p.height);
//         };
//       };
//       new p5(sketch, canvasRef.current);
//     }
//   }, [image]);

//   return (
//     <div>
//       <input type="file" onChange={handleFileUpload} />
//       <div ref={canvasRef}></div>
//     </div>
//   );
// };

// export default Editor;
