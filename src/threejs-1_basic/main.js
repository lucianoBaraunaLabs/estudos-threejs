let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#myCanvas'), 
  antialias: true
});

renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight)

//CAMERA
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

// SCENE
var scene = new THREE.Scene();

// LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(light)

var light1 = new THREE.PointLight(0xffffff, 0.5)
scene.add(light1)


//OBJECT
var geometry =  new THREE.BoxGeometry(100, 100, 100);
var material = new THREE.MeshLambertMaterial({color: 0xffff00});
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



