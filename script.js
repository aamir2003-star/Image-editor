let filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
//   exposure: {
//     value: 100,
//     min: 0,
//     max: 200,
//     unit: "%",
//   },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  grayScale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};
const imageCanvas = document.querySelector("#Image-holder");
const imgInput = document.querySelector("#image-input")
const filterContainer = document.querySelector(".filter");
const canvasCtx = imageCanvas.getContext("2d");
const divBottm = document.querySelector(".bottom")
const resetBtn = document.querySelector("#reset-btn")
const downloadBtn = document.querySelector("#download-btn")
const presetsContainer = document.querySelector('.presets')
const clearBtn = document.querySelector("#clear-btn")
const placeholder = document.querySelector('.placeholder')
let file = null
let image = null
function createFilterElements(name, unit = "%", min, max, value) {
  const div2 = document.createElement("div");
  div2.classList.add("filters");
  const label = document.createElement("label");
  label.innerHTML = name;
  const input = document.createElement("input");
  input.type = "range";
  input.id = name;
  input.min = min;
  input.max = max;
  input.value = value;
  div2.appendChild(label);
  div2.appendChild(input);
  input.addEventListener("input", (e)=>{
    filters[name].value = e.target.value
    applyFilters()
  })
  return div2;
}
function createFilter(){
Object.keys(filters).forEach((key) => {
  const filter = filters[key];
  const filterElements = createFilterElements(
    key,
    filter.unit,
    filter.min,
    filter.max,
    filter.value
  );
  filterContainer.appendChild(filterElements);
});
}

createFilter()
imgInput.addEventListener("change", (e)=>{
    file = e.target.files[0]
    const img = new Image()
    const placeholder = document.querySelector(".placeholder")
    imageCanvas.style.display ="block"
    placeholder.style.display = "none"
    img.src = URL.createObjectURL(file)
    img.onload = ()=>{
        image = img
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        canvasCtx.drawImage(img,0,0)
    }

})

function applyFilters(){
    canvasCtx.clearRect(0,0,imageCanvas.width, imageCanvas.height)
    canvasCtx.filter = `brightness(${filters.brightness.value}${filters.brightness.unit}) contrast(${filters.contrast.value}${filters.contrast.unit}) saturate(${filters.saturation.value}${filters.saturation.unit}) hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit}) blur(${filters.blur.value}${filters.blur.unit}) grayscale(${filters.grayScale.value}${filters.grayScale.unit}) sepia(${filters.sepia.value}${filters.sepia.unit}) opacity(${filters.opacity.value}${filters.opacity.unit}) invert(${filters.invert.value}${filters.invert.unit})`.trim()
    canvasCtx.drawImage(image, 0,0)
}

resetBtn.addEventListener("click",()=>{
   filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
//   exposure: {
//     value: 100,
//     min: 0,
//     max: 200,
//     unit: "%",
//   },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  grayScale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};
  applyFilters()
  filterContainer.innerHTML = ""
  createFilter()
})

downloadBtn.addEventListener("click",()=>{
  const link = document.createElement("a")
  link.download = "edited-image.png"
  link.href = imageCanvas.toDataURL()
  link.click()
})


//some presets for easy image editing
const presets = {
  neonGlow: {
    brightness: 120,
    contrast: 140,
    saturation: 170,
    hueRotation: 300,
    blur: 1,
    grayScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  moodyDark: {
    brightness: 85,
    contrast: 140,
    saturation: 90,
    hueRotation: 0,
    blur: 0,
    grayScale: 10,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  pastelSoft: {
    brightness: 115,
    contrast: 90,
    saturation: 110,
    hueRotation: 340,
    blur: 1,
    grayScale: 0,
    sepia: 5,
    opacity: 100,
    invert: 0,
  },

  cinematicTealOrange: {
    brightness: 105,
    contrast: 135,
    saturation: 120,
    hueRotation: 190,
    blur: 0,
    grayScale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },

  fadedMemory: {
    brightness: 100,
    contrast: 85,
    saturation: 70,
    hueRotation: 5,
    blur: 0,
    grayScale: 15,
    sepia: 25,
    opacity: 100,
    invert: 0,
  },
  softGlow: {
    brightness: 110,
    contrast: 105,
    saturation: 120,
    hueRotation: 0,
    blur: 1,
    grayScale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },

  cyberpunk: {
    brightness: 115,
    contrast: 130,
    saturation: 160,
    hueRotation: 270,
    blur: 0,
    grayScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  oldSchool: {
    brightness: 95,
    contrast: 110,
    saturation: 80,
    hueRotation: 0,
    blur: 0,
    grayScale: 20,
    sepia: 40,
    opacity: 100,
    invert: 0,
  },

  blackAndWhite: {
    brightness: 100,
    contrast: 120,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayScale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  vintageWarm: {
    brightness: 105,
    contrast: 110,
    saturation: 90,
    hueRotation: 10,
    blur: 0,
    grayScale: 0,
    sepia: 35,
    opacity: 100,
    invert: 0,
  },

  coolFade: {
    brightness: 95,
    contrast: 100,
    saturation: 85,
    hueRotation: 200,
    blur: 0,
    grayScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  dramatic: {
    brightness: 90,
    contrast: 150,
    saturation: 110,
    hueRotation: 0,
    blur: 0,
    grayScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  dreamy: {
    brightness: 120,
    contrast: 90,
    saturation: 130,
    hueRotation: 15,
    blur: 2,
    grayScale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },
};


 Object.keys(presets).forEach(preset => {
  const btn = document.createElement('button');
  btn.textContent = preset;
  btn.classList.add('btn');
  presetsContainer.appendChild(btn);

  btn.addEventListener('click', () => {
    const contPreset = presets[preset];
    Object.keys(contPreset).forEach(filterName => {
      filters[filterName].value = contPreset[filterName];
    });
    applyFilters();
    filterContainer.innerHTML = '';
    createFilter();
  });
});

clearBtn.addEventListener("click", ()=>{
  imageCanvas.style.display = "none"
  placeholder.style.display ="block"
})

