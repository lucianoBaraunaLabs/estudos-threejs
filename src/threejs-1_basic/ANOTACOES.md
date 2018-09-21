

#### THREE.WebGLRenderer
O construtor renderiza o THREE.js
`canvas` - seleciona qualquer id que esteja numa tag canvas para renderizar.
`antialias` - deixando a qualidade melhor do 3d
```
let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#myCanvas'),
  antialias: true
});
```
Criando um elemento padrão no canvas
```
document.body.appendChild(renderer.domElement)
```
Renderizando as configurações
```
renderer.setClearColor(0x000000); // setando cor de fundo

renderer.setPixelRatio(window.devicePixelRatio); // setando o pixel ratio

renderer.setSize(window.innerWidth, window.innerHeight) // deixando o tamanho proprocional a tela
```
#### CAMERA
Criando uma câmera -  [sobre os argumentos](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
```
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000); // 
```

#### SCENE
```
var scene = new THREE.Scene();
```

#### LIGHTS
````
var light = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(light)

var light1 = new THREE.PointLight(0xffffff, 0.5)
scene.add(light1)
````

#### OBJECT`
```
var geometry =  new THREE.BoxGeometry(100, 100, 100); // Criando o cubo

// var material = new THREE.MeshBasicMaterial(); // Criando uma malha de cor sólida e básica para o cubo

var material = new THREE.MeshLambertMaterial({color: 0xffff00}); // Criando uma malha de cor sólida mas que será refletida de acordo com a posição do elemento em relação a luz esxterior

var mesh = new THREE.Mesh(geometry, material); // Setando os valores para a criação do mesh

mesh.position.set(0, 0, -1000); // Posicionando ele na tela

scene.add(mesh) // Adicionando o mesh na cena
```

#### RENDER LOOP
Função que coloca o render para rodar. Essa função fica em 60fps no loop.
```
requestAnimationFrame(render)
function render() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
```



