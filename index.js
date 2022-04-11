var MersenneTwister = require('mersenne-twister');
var paperGen = require('./paper')
var Color = require('color')
var colors = require('./colors')
var shapeCount = 4
var svgns = 'http://www.w3.org/2000/svg'

module.exports = generateIdenticon

var generator
function generateIdenticon(diameter, seed) {
  generator = new MersenneTwister(seed);
  var remainingColors = hueShift(colors.slice(), generator)

  var elements = paperGen(diameter, genColor(remainingColors))
  var container = elements.container

  var svg = document.createElementNS(svgns, 'svg')
  svg.setAttributeNS(null, 'x', '0')
  svg.setAttributeNS(null, 'y', '0')
  svg.setAttributeNS(null, 'width', diameter)
  svg.setAttributeNS(null, 'height', diameter)

  container.appendChild(svg)

  for(var i = 0; i < shapeCount - 1; i++) {
    genShape(remainingColors, diameter, i, shapeCount , svg, 'paper')
  }

  genShape(remainingColors, diameter, 0, shapeCount , svg, 'chia')

  return container
}

function genShape(remainingColors, diameter, i, total, svg, type) {
  var center = diameter / 2
var shape
  if (type=='paper')
  {
    shape = document.createElementNS(svgns, 'rect')
  }
  else{

  shape = document.createElementNS(svgns, 'g')
  shape.innerHTML=`
  <g transform="scale(0.1)">
    <path id="Pawket-2" data-name="Pawket" class="cls-1" d="M108.3,620.024q-13.46-11.2-27.726-11.2h-34.7q-10.378,0-12.647,4.725a14.738,14.738,0,0,0-1.54,4.638,54.834,54.834,0,0,0-.243,6.037v97.125a31.432,31.432,0,0,0,.973,9.1q1.946,6.477,13.3,6.475,10.375,0,12.647-4.725a14.782,14.782,0,0,0,1.54-4.637,54.775,54.775,0,0,0,.243-6.038V701.749H80.413q14.429,0,27.888-11.2a39.957,39.957,0,0,0,10.864-14.612,48.756,48.756,0,0,0,4.215-20.563,49.372,49.372,0,0,0-4.215-20.65,39.863,39.863,0,0,0-10.864-14.7h0Zm-27.726,50.75H60.145V639.8H80.413a15.038,15.038,0,0,1,9.728,3.938q4.7,3.938,4.7,11.637t-4.7,11.55a15.035,15.035,0,0,1-9.566,3.85h0Zm113.984-19.687a22.078,22.078,0,0,0-6.324-3.938,23.663,23.663,0,0,0-10.053-2.1q-14.433,0-26.51,13.738a46.994,46.994,0,0,0-12.079,32.025,47.488,47.488,0,0,0,12,32.112q12,13.827,26.024,13.825t20.024-9.275a9.654,9.654,0,0,0,3.486,6.913q3,2.363,11.837,2.362t11.107-4.55a17.242,17.242,0,0,0,1.378-4.637,54.842,54.842,0,0,0,.243-6.038v-61.25a54.9,54.9,0,0,0-.243-6.037,15.855,15.855,0,0,0-1.46-4.638,6.931,6.931,0,0,0-4.3-3.675,31.238,31.238,0,0,0-9.405-1.05q-11.836,0-12.809,9.8A24.082,24.082,0,0,0,194.559,651.087ZM171.94,680.4a12.724,12.724,0,0,1,10.377-4.9,12.282,12.282,0,0,1,10.215,4.9,16.928,16.928,0,0,1,3.81,10.588A15.819,15.819,0,0,1,192.37,701.4a12.5,12.5,0,0,1-9.972,4.725,13.3,13.3,0,0,1-10.215-4.637,15.082,15.082,0,0,1-4.215-10.413A16.591,16.591,0,0,1,171.94,680.4Zm177.625-36.575q-7.782,0-11.674,11.2L328,684.074q-1.46-3.5-9.566-28l-1.3-2.975a16.426,16.426,0,0,0-4.783-5.6A12.94,12.94,0,0,0,304,644.7q-4.864,0-9.566,5.075a13.868,13.868,0,0,0-3.567,6.125l-9.567,28.35q-8.755-25.9-11.512-32.9a16.681,16.681,0,0,0-1.3-3.062,9.667,9.667,0,0,0-2.837-2.975,8.707,8.707,0,0,0-5.27-1.488,22.376,22.376,0,0,0-8.431,2.275q-9.243,4.029-9.242,11.025a31.145,31.145,0,0,0,1.621,6.825l24.484,64.4a15.811,15.811,0,0,0,4.539,6.213,12.142,12.142,0,0,0,8.432,3.062,11.867,11.867,0,0,0,8.918-4.2,17.964,17.964,0,0,0,2.594-3.675,20.3,20.3,0,0,0,1.378-2.887q0.243-.788,1.135-3.15t4.054-11.9q3.16-9.537,4.783-13.738,8.27,23.8,9.566,27.3l1.3,2.975a15.558,15.558,0,0,0,4.621,6.213,10.864,10.864,0,0,0,7.216,3.062,13.682,13.682,0,0,0,6.161-1.225q5.673-3.15,8.107-10.85l17.836-46.9q1.782-4.9,4.378-11.462t2.594-9.538q0-7.173-10.377-12.075a14.241,14.241,0,0,0-6.486-1.75h0Zm100.2,32.375q6-5.423,6-9.45t-5.27-11.112q-5.271-7.087-9.323-7.088t-9.729,4.725l-1.945,1.4q-2.919,2.625-8.837,8.925t-8.837,8.925V617.049q0-3.321-.162-4.9-0.164-5.25-2.918-7.7-3.246-2.973-11.026-2.975-10.378,0-12.647,4.725a17.123,17.123,0,0,0-1.378,4.638,54.9,54.9,0,0,0-.243,6.037V721.7a54.854,54.854,0,0,0,.243,6.038,17.1,17.1,0,0,0,1.378,4.637q2.268,4.725,12.485,4.725,10.374,0,12.485-4.55a14.775,14.775,0,0,0,1.54-4.637,54.842,54.842,0,0,0,.243-6.038V708.4q4.052,3.5,11.837,11.813t11.512,11.637l1.621,1.225q6.324,5.077,9.891,5.075,4.214,0,9.728-7.35,5.025-7.173,5.027-11.375a7.692,7.692,0,0,0-1.054-3.675,26.665,26.665,0,0,0-5.108-5.6L433.716,690.9Zm105.553-16.1q-10.542-17.148-33.077-17.15-19.784,0-33,13.213t-13.214,35.262A52.9,52.9,0,0,0,486.25,723.1a36.638,36.638,0,0,0,14.511,11.813,48.8,48.8,0,0,0,21.322,4.462q34.536,0,34.536-15.575a20.538,20.538,0,0,0-2.108-8.05q-3.732-7.875-8.918-7.875a15.435,15.435,0,0,0-6.485,1.925l-1.784.7q-5.351,2.1-14.755,2.1a20.121,20.121,0,0,1-10.7-3.325q-5.351-3.323-5.351-8.225h38.428q6,0,10.944-5.162t4.946-15.925a37.651,37.651,0,0,0-5.513-19.863h0Zm-49.129,25.025q0-5.25,5.189-9.887T521.84,670.6q5.266,0,8.107,2.45a8.145,8.145,0,0,1,2.837,6.475q0,5.6-6.161,5.6h-20.43Zm128.5-9.537a14.239,14.239,0,0,0,4.3-1.488q4.377-2.448,4.378-13.475,0-11.2-4.216-13.475a12.408,12.408,0,0,0-4.3-1.662,42.789,42.789,0,0,0-5.513-.263q-3.648,0-10.782.7v-17.15a35.235,35.235,0,0,0-.811-8.925q-2.109-6.471-13.133-6.475-10.379,0-12.485,4.375a11.528,11.528,0,0,0-1.54,4.2,52.105,52.105,0,0,0-.244,5.95v18.025l-5.35-.7a9.491,9.491,0,0,0-6.486,2.275,9.605,9.605,0,0,0-2.27,4.638,47.349,47.349,0,0,0-.811,10.412q0,7.178,2.351,10.15a7.236,7.236,0,0,0,5.919,2.975,39.623,39.623,0,0,0,6.647-.525v25.9q0,19.6,8.756,27.825t25.618,8.225a41.992,41.992,0,0,0,5.432-.262,14.239,14.239,0,0,0,4.3-1.488q4.538-2.448,4.54-13.475,0-9.45-3.729-11.725a11.014,11.014,0,0,0-4.3-1.662,48.785,48.785,0,0,0-5.837-.263q-3.812,0-5.189-2.1t-1.378-6.825v-24.15l10.539,0.7A43.717,43.717,0,0,0,634.69,675.587Z" transform="translate(-0.188 -561)"/>
    <circle id="dot1" class="cls-2" cx="40.391" cy="15.578" r="15.953"/>
    <path id="dot2" class="cls-1" d="M10.418,589.947A13.2,13.2,0,1,1,.494,605.753,13.179,13.179,0,0,1,10.418,589.947Z" transform="translate(-0.188 -561)"/>
    <path id="dot3" class="cls-1" d="M75.927,570.376A13.2,13.2,0,1,1,66,586.182,13.179,13.179,0,0,1,75.927,570.376Z" transform="translate(-0.188 -561)"/>
  </g>
`;
  shape.setAttributeNS(null, 'viewBox', '0 0 100 100')
  }
  shape.setAttributeNS(null, 'x', '0')
  shape.setAttributeNS(null, 'y', '0')
  shape.setAttributeNS(null, 'width', diameter)
  shape.setAttributeNS(null, 'height', diameter)

  var firstRot = generator.random()
  var angle = Math.PI * 2 * firstRot
  var velocity = diameter / total * generator.random() + (i * diameter / total)

  var tx = (Math.cos(angle) * velocity)
  var ty = (Math.sin(angle) * velocity)

  var translate = 'translate(' + tx + ' ' +  ty + ')'

  // Third random is a shape rotation on top of all of that.
  var secondRot = generator.random()
  var rot = (firstRot * 360) + secondRot * 180
  var rotate = 'rotate(' + rot.toFixed(1) + ' ' + center + ' ' + center + ')'
  var transform = translate + ' ' + rotate
  shape.setAttributeNS(null, 'transform', transform)
  var fill = genColor(remainingColors)
  shape.setAttributeNS(null, 'fill', fill)

  svg.appendChild(shape)
}

function genColor(colors) {
  var rand = generator.random()
  var idx = Math.floor(colors.length * generator.random())
  var color = colors.splice(idx,1)[0]
  return color
}

var wobble = 30
function hueShift(colors, generator) {
  var amount = (generator.random() * 30) - (wobble / 2)
  return colors.map(function(hex) {
    var color = Color(hex)
    color.rotate(amount)
    return color.hexString()
  })
}
