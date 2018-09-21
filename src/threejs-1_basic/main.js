let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#myCanvas'), // selecionando qualquer id que esteja numa tag canvas para renderizar
  antialias: true // deixando a qualidade melhor do 3d
}); // renderiza o Three.js
// document.body.appendChild(renderer.domElement) // Criando um elemento padrão no canvas

renderer.setClearColor(0x000000); // setando cor de fundo
renderer.setPixelRatio(window.devicePixelRatio); // setando o pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight)
//CAMERA
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000); // Criando uma câmera - sobre os argumentos https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

// SCENE
var scene = new THREE.Scene();

// LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(light)

var light1 = new THREE.PointLight(0xffffff, 0.5)
scene.add(light1)


//OBJECT
var geometry =  new THREE.BoxGeometry(100, 100, 100);
// var material = new THREE.MeshBasicMaterial(); // Criando uma malha de cor sólida e básica para o cubo
var material = new THREE.MeshLambertMaterial({color: 0xffff00}); // Criando uma malha de cor sólida mas que será refletida de acordo com a posição do elemento em relação a luz esxterior
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, -1000);
scene.add(mesh)
//RENDER LOOP
requestAnimationFrame(render)
function render() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}



